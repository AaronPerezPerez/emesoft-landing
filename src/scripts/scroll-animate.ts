/**
 * Scroll Animation Utility
 * Adds 'animate-in' class to elements with [data-animate] when they enter viewport
 */

export function initScrollAnimations(selector: string = '[data-animate]') {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Initialize scroll animations on page load and Astro page transitions
 */
export function setupScrollAnimations() {
  document.addEventListener('DOMContentLoaded', () => initScrollAnimations());
  document.addEventListener('astro:page-load', () => initScrollAnimations());
}
