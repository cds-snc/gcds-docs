// Observe size of <body> in iframe and send height to parent to allow proper frame size when showcasing component.
document.addEventListener('DOMContentLoaded', () => {
  // Resize observer to send window width to parent
  const resize = new ResizeObserver(element => {
    const cr = element[0].contentRect;

    window.parent.postMessage({ height: `${cr.height + 48}` }, '*');
  });

  resize.observe(document.body);

  // Extra logic for elements that use position: absolute; styling
  // Use MutationObservers to change body height to send proper height to documentation page

  // MutationObserver to handle displaying elements that don't increase the window size
  // For: gcds-topic-menu, gcds-top-nav and gcds-side-nav
  const handleMutations = mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.target.nodeName == 'BUTTON') {
        if (mutation.target.ariaExpanded === 'true') {
          document.body.classList.add('component-preview__expanded-topic-menu');
        } else {
          document.body.classList.remove(
            'component-preview__expanded-topic-menu',
          );
        }
      } else if (mutation.target.nodeName == 'GCDS-NAV-GROUP') {
        if (
          mutation.target.getAttribute(mutation.attributeName) != null &&
          window.innerWidth >= 1024
        ) {
          document.body.classList.add(
            'component-preview__expanded-dropdown-menu',
          );
        } else {
          document.body.classList.remove(
            'component-preview__expanded-dropdown-menu',
          );
        }
      }
    }
  };

  const observer = new MutationObserver(handleMutations);

  // Theme and topic menu

  const topicMenu = document.querySelector('gcds-topic-menu');

  if (topicMenu) {
    // Confirm topic-menu has been hydrated
    let hydratedTopicInterval = setInterval(() => {
      if (topicMenu.classList.contains('hydrated')) {
        clearInterval(hydratedTopicInterval);
        observer.observe(topicMenu.shadowRoot.querySelector('button'), {
          attributes: true,
          attributeFilter: ['aria-expanded'],
        });
      }
    }, 100);
  }

  // Top nav dropdown

  const navGroup = document.querySelector('gcds-top-nav > gcds-nav-group');

  if (navGroup) {
    observer.observe(navGroup, {
      attributes: true,
      attributeFilter: ['open'],
    });
  }

  // Mobile top-nav and side-nav

  const nav =
    document.querySelector('gcds-top-nav') ||
    document.querySelector('gcds-side-nav');

  if (nav) {
    // ResizeObserver to keep track of mobile <ul>
    const navResize = new ResizeObserver(element => {
      const cr = element[0].contentRect;

      if (window.innerWidth < 1024 && cr.height != 0) {
        window.parent.postMessage({ height: `${cr.height + 90}` }, '*');
      }
    });

    // Confirm menus have hydrated
    let hydratedNavTimer = setInterval(() => {
      if (nav.classList.contains('hydrated')) {
        navResize.observe(
          nav.shadowRoot
            .querySelector('.gcds-mobile-nav')
            .shadowRoot.querySelector('ul'),
        );
        clearInterval(hydratedNavTimer);
      }
    }, 100);
  }
  
  // Logic to prevent only the iframe navigating with components that provide external links
  const url = new URLSearchParams(window.location.search);

  if (url.get('externalLinks')) {
    document.addEventListener('gcdsClick', (ev) => {
      if (ev.detail && ev.detail.includes('https://')) {
        ev.preventDefault();
        top.window.location.href = ev.detail;
      }
    });
  }
});
