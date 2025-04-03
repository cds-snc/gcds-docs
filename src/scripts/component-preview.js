// Listen for messages from component preview iframes
window.addEventListener("message", ev => {
  const iframe = document.getElementById('component-preview');

  if (iframe && iframe.height !== ev.data.height && ev.data.height > 60) {
    iframe.height = ev.data.height;
  }
});