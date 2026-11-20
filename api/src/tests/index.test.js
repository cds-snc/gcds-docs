import { jest } from '@jest/globals';

const BASE_CONFIG = {
  EMAIL_TARGET: 'test@example.com',
  FRESHDESK_API_KEY: 'fake-key',
  NOTIFY_API_KEY: 'fake-notify',
  NOTIFY_TEMPLATE_ID: 'fake-template',
};

const getParametersByName = jest.fn();

await jest.unstable_mockModule('../freshdesk.js', () => ({
  createTicket: jest.fn().mockResolvedValue({ status: 200, ok: true }),
}));
await jest.unstable_mockModule('../notify.js', () => ({
  sendEmail: jest.fn().mockResolvedValue({ status: 200 }),
}));
await jest.unstable_mockModule('@aws-lambda-powertools/parameters/ssm', () => ({
  getParametersByName,
}));

const request = (await import('supertest')).default;

const setConfig = (overrides = {}) =>
  getParametersByName.mockResolvedValue({
    'gc-design-system-config': { ...BASE_CONFIG, ...overrides },
  });

const validContact = {
  'form-name': 'contactEN',
  name: 'Test',
  email: 'test@tbs-sct.gc.ca',
  familiarityGCDS: 'yes',
};

let app;
// Posts like a browser submitting our HTML form (application/x-www-form-urlencoded).
const post = () => request(app).post('/submission').type('form');

beforeAll(async () => {
  app = (await import('../index.js')).default;
});

beforeEach(() => {
  getParametersByName.mockClear();
  setConfig();
});

describe('POST /submission', () => {
  it('should return 204 if honeypot is filled', async () => {
    const res = await post()
      .send({ ...validContact, honeypot: 'bot' });
    expect(res.status).toBe(204);
  });

  it('should return 400 if required fields are missing', async () => {
    const res = await post()
      .send({ 'form-name': 'contactEN' });
    expect(res.status).toBe(400);
    expect(res.body.errors).toMatchObject({
      name: 'required',
      email: 'required',
      familiarityGCDS: 'required',
    });
  });

  it('should return 400 if required fields are missing (unsubscribe)', async () => {
    const res = await post()
      .send({ 'form-name': 'unsubscribeEN', unsubscribe: 'true' });
    expect(res.status).toBe(400);
    expect(res.body.errors).toEqual({ email: 'required' });
  });

  it('should reject a contact submission without a GC email address', async () => {
    const res = await post()
      .send({ ...validContact, email: 'someone@gmail.com' });
    expect(res.status).toBe(400);
    expect(res.body.errors).toEqual({ email: 'gcEmail' });
  });

  it('should reject invalid submissions before fetching the config', async () => {
    await post()
      .send({ ...validContact, email: 'someone@gmail.com' });
    expect(getParametersByName).not.toHaveBeenCalled();
  });

  it('should redirect browsers to the error page when the form is invalid', async () => {
    const res = await post()
      .set('Accept', 'text/html')
      .send({ ...validContact, email: 'someone@gmail.com' });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe('https://design-system.canada.ca/en/contact/error');
  });

  it('should redirect French browsers to the French error page', async () => {
    const res = await post()
      .set('Accept', 'text/html')
      .send({ ...validContact, 'form-name': 'contactFR', email: 'x@gmail.com' });
    expect(res.headers.location).toBe('https://systeme-design.canada.ca/fr/contactez/erreur');
  });

  it('should process a valid submission and return JSON', async () => {
    const res = await post().send(validContact);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true, redirect: '/en/contact/thanks' });
  });

  it('should redirect browsers to the thank you page', async () => {
    const res = await post()
      .set('Accept', 'text/html')
      .set('Origin', 'null')
      .set('X-Forwarded-Host', 'design-system.canada.ca')
      .set('X-Forwarded-Proto', 'https')
      .send(validContact);
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe('https://design-system.canada.ca/en/contact/thanks');
  });

  it('should not redirect to an origin that is not allowlisted', async () => {
    const res = await post()
      .set('Accept', 'text/html')
      .set('Origin', 'https://another-website.com')
      .send(validContact);
    expect(res.headers.location).toBe('https://design-system.canada.ca/en/contact/thanks');
  });

  it('should process unsubscribe request with only the email field given', async () => {
    const res = await post()
      .send({
        'form-name': 'unsubscribeEN',
        email: 'someone@gmail.com',
        unsubscribe: true,
      });
    expect(res.status).toBe(200);
  });

  it('should reject a malformed email on the unsubscribe form', async () => {
    const res = await post().send({
      'form-name': 'unsubscribeEN',
      unsubscribe: 'true',
      email: 'jane.doe@gmail',
    });
    expect(res.status).toBe(400);
    expect(res.body.errors).toEqual({ email: 'invalidEmail' });
  });

  it('should let a random-looking but well-formed address unsubscribe', async () => {
    const res = await post().send({
      'form-name': 'unsubscribeEN',
      unsubscribe: 'true',
      email: '0008_solver_adc90bad56@gmail.com',
    });
    expect(res.status).toBe(200);
  });

  it('should reject a random-looking address on the contact form', async () => {
    const res = await post().send({ ...validContact, email: '0008_solver_adc90bad56@tbs-sct.gc.ca' });
    expect(res.status).toBe(400);
    expect(res.body.errors).toEqual({ email: 'gcEmail' });
  });

  it('should send a malformed unsubscribe email from a browser to the unsubscribe error page', async () => {
    const res = await post()
      .set('Accept', 'text/html')
      .send({ 'form-name': 'unsubscribeFR', unsubscribe: 'true', email: 'asdf' });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe('https://systeme-design.canada.ca/fr/se-desabonner/erreur');
  });

  it('should send unsubscribe requests to the error page when the config fails to load', async () => {
    getParametersByName.mockRejectedValueOnce(new Error('SSM down'));
    const res = await post()
      .set('Accept', 'text/html')
      .send({ 'form-name': 'unsubscribeEN', unsubscribe: 'true', email: 'someone@gmail.com' });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe('https://design-system.canada.ca/en/unsubscribe/error');
  });

  it('should still thank contact submitters when the config fails to load', async () => {
    getParametersByName.mockRejectedValueOnce(new Error('SSM down'));
    const res = await post().send(validContact);
    expect(res.status).toBe(200);
    expect(res.body.redirect).toBe('/en/contact/thanks');
  });

  describe('request source check', () => {
    it('only logs a cross-site request when not enforced', async () => {
      const res = await post()
        .set('Sec-Fetch-Site', 'cross-site')
        .send(validContact);
      expect(res.status).toBe(200);
    });

    it('rejects a cross-site request when enforced', async () => {
      setConfig({ ORIGIN_CHECK: 'enforce' });
      const res = await post()
        .set('Sec-Fetch-Site', 'cross-site')
        .send(validContact);
      expect(res.status).toBe(403);
      expect(res.body.errors).toEqual({ form: 'origin' });
    });

    it('rejects a foreign Origin when enforced', async () => {
      setConfig({ ORIGIN_CHECK: 'enforce' });
      const res = await post()
        .set('Origin', 'https://another-website.com')
        .send(validContact);
      expect(res.status).toBe(403);
    });

    it('allows our own form posts (Origin: null, same-origin) when enforced', async () => {
      setConfig({ ORIGIN_CHECK: 'enforce' });
      const res = await post()
        .set('Origin', 'null')
        .set('Sec-Fetch-Site', 'same-origin')
        .send(validContact);
      expect(res.status).toBe(200);
    });

    it('allows extra origins from the config when enforced', async () => {
      setConfig({
        ORIGIN_CHECK: 'enforce',
        EXTRA_ALLOWED_ORIGINS: 'https://astro-staging.design-system.canada.ca',
      });
      const res = await post()
        .set('Origin', 'https://astro-staging.design-system.canada.ca')
        .send(validContact);
      expect(res.status).toBe(200);
    });
  });


  describe('only our forms are processed', () => {
    it('rejects JSON bodies', async () => {
      const res = await request(app).post('/submission').send(validContact);
      expect(res.status).toBe(415);
      expect(getParametersByName).not.toHaveBeenCalled();
    });

    it('rejects multipart bodies', async () => {
      const res = await request(app)
        .post('/submission')
        .field('form-name', 'contactEN')
        .field('email', 'a@gc.ca');
      expect(res.status).toBe(415);
    });

    it('rejects an unknown form name', async () => {
      const res = await post().send({ ...validContact, 'form-name': 'contactXX' });
      expect(res.status).toBe(400);
      expect(res.text).toBe('');
    });

    it('rejects a missing form name', async () => {
      const { 'form-name': _, ...noFormName } = validContact;
      const res = await post().send(noFormName);
      expect(res.status).toBe(400);
    });

    it('rejects fields our forms do not have', async () => {
      const res = await post().send({ ...validContact, isAdmin: 'true' });
      expect(res.status).toBe(400);
    });

    it('rejects a contact submission that tries to use the unsubscribe flag', async () => {
      const res = await post().send({
        'form-name': 'contactEN',
        email: 'someone@gmail.com',
        unsubscribe: 'true',
      });
      expect(res.status).toBe(400);
      expect(getParametersByName).not.toHaveBeenCalled();
    });

    it('rejects repeated fields', async () => {
      const res = await request(app)
        .post('/submission')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('form-name=contactEN&name=a&familiarityGCDS=yes&email=a@gc.ca&email=b@gc.ca');
      expect(res.status).toBe(400);
    });

    it('rejects nested fields', async () => {
      const res = await request(app)
        .post('/submission')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('form-name=contactEN&name[first]=a&familiarityGCDS=yes&email=a@gc.ca');
      expect(res.status).toBe(400);
    });

    it('rejects bodies over 20 KB', async () => {
      const res = await post().send({ ...validContact, message: 'a'.repeat(21 * 1024) });
      expect(res.status).toBe(413);
      expect(res.text).toBe('');
    });

    it('accepts the full contact form, including optional fields', async () => {
      const res = await post().send({
        ...validContact,
        honeypot: '',
        'bot-field': '',
        message: 'Hello',
        'learn-more-mailing-list': 'learn-more-mailing-list',
        'learn-more-research': 'learn-more-mailing-list',
        'learn-more-gcds-forum': 'learn-more-gcds-forum',
      });
      expect(res.status).toBe(200);
    });

    it('accepts the French unsubscribe form', async () => {
      const res = await post().send({
        'form-name': 'unsubscribeFR',
        honeypot: '',
        unsubscribe: 'true',
        email: 'someone@gmail.com',
      });
      expect(res.status).toBe(200);
      expect(res.body.redirect).toBe('/fr/se-desabonner/succes');
    });

    it('rejects other methods on /submission', async () => {
      const res = await request(app).get('/submission');
      expect(res.status).toBe(405);
      expect(res.headers.allow).toBe('POST');
    });

    it('rejects other paths', async () => {
      const res = await request(app).post('/anything').type('form').send(validContact);
      expect(res.status).toBe(404);
    });
  });
});
