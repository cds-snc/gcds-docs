import { jest, expect, describe, it, beforeEach } from '@jest/globals';
import { sendEmail } from '../notify.js';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('sendEmail', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('sends an email (EN)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Alice',
        email: 'alice@example.com',
        message: 'Hello world',
        learnMore: ['mailing_list', 'demo'],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.email_address).toBe('target@example.com');
    expect(payload.template_id).toBe('template-123');
    expect(payload.personalisation.name).toBe('Alice');
    expect(payload.personalisation.email).toBe('alice@example.com');
    expect(payload.personalisation.message).toBe('Hello world');
    expect(payload.personalisation.familiarityGCDS).toBe('yes');
  });

  it('sends an email (FR)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        message: 'Bonjour',
        learnMore: ['usability_research'],
        familiarityGCDS: 'oui',
      },
      'fr',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.personalisation.name).toBe('Bob');
    expect(payload.personalisation.email).toBe('bob@example.com');
    expect(payload.personalisation.message).toBe('Bonjour');
    expect(payload.personalisation.familiarityGCDS).toBe('oui');
  });

  it('converts learnMore array to human-readable strings (EN)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test',
        learnMore: ['mailing_list', 'demo', 'usability_research'],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.personalisation.learnMore).toContain('Sign me up for the mailing list.');
    expect(payload.personalisation.learnMore).toContain('Contact me for a demo.');
    expect(payload.personalisation.learnMore).toContain('Contact me for usability research.');
  });

  it('converts learnMore array to human-readable strings (FR)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test',
        learnMore: ['mailing_list', 'demo', 'usability_research'],
        familiarityGCDS: 'oui',
      },
      'fr',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.personalisation.learnMore).toContain("Ajoutez-moi à votre liste d'envoi.");
    expect(payload.personalisation.learnMore).toContain('Contactez-moi pour une démo.');
    expect(payload.personalisation.learnMore).toContain("Contactez-moi pour les études sur l'utilisabilité.");
  });

  it('handles empty learnMore array', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test',
        learnMore: [],
        familiarityGCDS: 'no',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.personalisation.learnMore).toEqual([]);
  });

  it('handles empty message', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: '',
        learnMore: [],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.personalisation.message).toBe('');
  });

  it('uses correct headers', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'test-api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test',
        learnMore: [],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const call = mockFetch.mock.calls[0];
    expect(call[1].headers['Authorization']).toBe('ApiKey-v1 test-api-key');
    expect(call[1].headers['Content-Type']).toBe('application/json');
  });

  it('logs an error if fetch throws', async () => {
    mockFetch.mockImplementation(() => { throw new Error('Network error'); });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'ErrorUser',
        email: 'error@example.com',
        message: 'Should fail',
        learnMore: [],
        familiarityGCDS: 'no',
      },
      'en',
    );
    expect(consoleSpy).toHaveBeenCalledWith('[ERROR] Failed to send to Notify', expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('logs error details when response is not ok', async () => {
    mockFetch.mockResolvedValue({ 
      ok: false, 
      status: 400,
      text: () => Promise.resolve('Bad request')
    });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await sendEmail(
      {
        EMAIL_TARGET: 'target@example.com',
        NOTIFY_TEMPLATE_ID: 'template-123',
        NOTIFY_API_KEY: 'api-key',
      },
      {
        name: 'Test',
        email: 'test@example.com',
        message: 'Test',
        learnMore: [],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    expect(consoleSpy).toHaveBeenCalledWith('[ERROR] Failed to send to Notify');
    expect(consoleSpy).toHaveBeenCalledWith('[ERROR] Notify error detail: ', 'Bad request');
    consoleSpy.mockRestore();
  });
}); 