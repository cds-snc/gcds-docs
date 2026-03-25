/**
 * Escapes a raw HTML string so it can be safely displayed as plain text.
 * @param {string} unsafe
 * @returns {string}
 */
export const escapeHtml = (unsafe) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

