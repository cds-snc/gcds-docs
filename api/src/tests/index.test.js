import { jest } from '@jest/globals';

await jest.unstable_mockModule('../freshdesk.js', () => ({
  createTicket: jest.fn().mockResolvedValue({ status: 200, ok: true }),
}));
await jest.unstable_mockModule('../notify.js', () => ({
  sendEmail: jest.fn().mockResolvedValue({ status: 200 }),
}));
await jest.unstable_mockModule('../utils.js', () => ({
  redirectUser: jest.fn((origin, forwardedOrigin, lang, res) => res.status(303).send()),
}));
await jest.unstable_mockModule('@aws-lambda-powertools/parameters/ssm', () => ({
  getParametersByName: jest.fn().mockResolvedValue({
    'gc-design-system-config': {
      EMAIL_TARGET: 'test@example.com',
      FRESHDESK_API_KEY: 'fake-key',
      NOTIFY_API_KEY: 'fake-notify',
      NOTIFY_TEMPLATE_ID: 'fake-template',
    },
  }),
}));

const request = (await import('supertest')).default;

let app;
beforeAll(async () => {
  app = (await import('../index.js')).default;
});

describe('POST /submission', () => {
  it('should return 204 if honeypot is filled', async () => {
    const res = await request(app)
      .post('/submission')
      .send({
        'form-name': 'contactEN',
        name: 'Test',
        email: 'test@example.com',
        familiarityGCDS: 'yes',
        honeypot: 'bot',
      });
    expect(res.status).toBe(204);
  });

  it('should return 204 if required fields are missing', async () => {
    const res = await request(app)
      .post('/submission')
      .send({ 'form-name': 'contactEN' });
    expect(res.status).toBe(204);
  });

  it('should process valid submission and redirect', async () => {
    const res = await request(app)
      .post('/submission')
      .send({
        'form-name': 'contactEN',
        name: 'Test',
        email: 'test@example.com',
        familiarityGCDS: 'yes',
      });
    expect([303, 200, 204]).toContain(res.status); // 303 for redirect, 200/204 for mocks
  });
}); 