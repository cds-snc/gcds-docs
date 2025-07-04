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
