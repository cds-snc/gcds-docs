import { jest, expect, describe, it, beforeEach } from '@jest/globals';
import { createTicket } from '../freshdesk.js';

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('createTicket', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('creates a contact us form ticket (EN)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'Alice',
        email: 'alice@example.com',
        message: 'Hello',
        learnMore: [],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.subject).toBe('GC Design System Contact Form');
    expect(payload.description).toContain('Name: Alice');
    expect(payload.description).toContain('Hello');
    expect(payload.description).toContain('Familiarity with GC Design System: yes');
    expect(payload.custom_fields.cf_language).toBe('English');
    expect(payload.description).not.toContain('Unsubscribe request');
  });

  it('creates a contact us form ticket (FR)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'Bob',
        email: 'bob@example.com',
        message: 'Bonjour',
        learnMore: [],
        familiarityGCDS: 'oui',
      },
      'fr',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.subject).toBe('Formulaire de contact Système de design GC');
    expect(payload.description).toContain('Nom: Bob');
    expect(payload.description).toContain('Bonjour');
    expect(payload.description).toContain('Familiarité avec le Système de design GC: oui');
    expect(payload.custom_fields.cf_language).toBe('Français');
    expect(payload.description).not.toContain('Demande de désabonnement');
  });

  it('returns 400 if API key is missing', async () => {
    const res = await createTicket(
      { FRESHDESK_API_KEY: '' },
      {
        name: 'NoKey',
        email: 'no-key@example.com',
        message: 'No key',
        learnMore: [],
        familiarityGCDS: 'no',
      },
      'en',
    );
    expect(res.status).toBe(400);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('logs an error if fetch throws', async () => {
    mockFetch.mockImplementation(() => { throw new Error('Network error'); });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'ErrorUser',
        email: 'error@example.com',
        message: 'Should fail',
        learnMore: [],
        familiarityGCDS: 'no',
      },
      'en',
    );
    expect(consoleSpy).toHaveBeenCalledWith('[ERROR] Failed to send to Freshdesk', expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('adds correct tags for learnMore options', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'TagUser',
        email: 'tag@example.com',
        message: 'Test tags',
        learnMore: ['mailing_list', 'demo', 'usability_research'],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.tags).toContain('Design_Request_MailingList');
    expect(payload.tags).toContain('Design_Request_Demo');
    expect(payload.tags).toContain('Design_Request_Research');
    expect(payload.description).not.toContain('Unsubscribe request');
  });

  it('uses correct headers and authorization', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'test-key' },
      {
        name: 'HeaderUser',
        email: 'header@example.com',
        message: 'Test headers',
        learnMore: [],
        familiarityGCDS: 'yes',
      },
      'en',
    );
    const call = mockFetch.mock.calls[0];
    const payload = JSON.parse(call[1].body);
    expect(call[1].headers['Content-Type']).toBe('application/json');
    expect(call[1].headers['Authorization']).toBe('Basic dGVzdC1rZXk6eA=='); // btoa('test-key:x')
    expect(payload.description).not.toContain('Unsubscribe request');
  });

  it('creates an unsubscribe ticket (EN)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'UnsubUser',
        email: 'unsub@example.com',
        gcds_unsubscribe: true,
      },
      'en',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.subject).toBe('GC Design System Unsubscribe Request');
    expect(payload.description).toContain('Unsubscribe request');
    expect(payload.description).toContain('Email: unsub@example.com');
    expect(payload.custom_fields.cf_language).toBe('English');
    expect(payload.description).not.toContain('Name:');
    expect(payload.description).not.toContain('Learn More:');
    expect(payload.description).not.toContain('Familiarity with GC Design System:');
  });

  it('creates an unsubscribe ticket (FR)', async () => {
    mockFetch.mockResolvedValue({ ok: true, status: 200 });
    await createTicket(
      { FRESHDESK_API_KEY: 'key' },
      {
        name: 'UnsubUser',
        email: 'unsub@example.com',
        gcds_unsubscribe: true,
      },
      'fr',
    );
    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.subject).toBe('Demande de désabonnement GCSD');
    expect(payload.description).toContain('Demande de désabonnement');
    expect(payload.description).toContain('Courriel: unsub@example.com');
    expect(payload.custom_fields.cf_language).toBe('Français');
    expect(payload.description).not.toContain('Nom:');
    expect(payload.description).not.toContain('En savoir plus:');
    expect(payload.description).not.toContain('Familiarité avec le Système de design GC:');
  });
}); 