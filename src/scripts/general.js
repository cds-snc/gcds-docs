// Scrolls smoothly to the element specified in a URL hash after the page has fully loaded.
// The delay allows time for the layout and content to finish loading before scrolling.
window.addEventListener('load', function () {
  const hash = window.location.hash; // Get the hash from the URL

  if (hash) {
    // Ensure the element exists for the given hash
    const target = document.querySelector(hash);

    if (target) {
      // Wait a bit for layout shifts or content loading before scrolling
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      console.warn('Element not found for hash:', hash);
    }
  }
});

// Attach analytics event to all buttons and links (native and custom) using event delegation
// Sends element text as event_label and URL as event_url

document.addEventListener('click', function (e) {
  // Find the closest clickable element (button, a, gcds-button, gcds-link)
  let el = e.target.closest('button, a, gcds-button, gcds-link');
  if (!el) return;

  // Only track left-clicks or keyboard activations
  if (e.type === 'click' && e.button !== 0) return;

  // Get label and url
  const label = el.textContent ? el.textContent.trim() : '';
  const url =
    el.getAttribute('href') ||
    el.getAttribute('data-href') ||
    window.location.href;

  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'gcds_click',
      event_label: label,
      event_url: url,
    });
  }
});
