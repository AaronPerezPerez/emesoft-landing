/**
 * Counter Animation Utility
 * Animates numbers from 0 to target value with easing
 *
 * Usage: Add data-count="100" and optionally data-suffix="+" to elements
 */

export function animateCounters(selector: string = '[data-count]') {
  const counters = document.querySelectorAll(selector);

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count') || '0');
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth deceleration (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      counter.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    // Start counter when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(updateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}

/**
 * Initialize counter animations on page load and Astro page transitions
 */
export function setupCounterAnimations() {
  document.addEventListener('DOMContentLoaded', () => animateCounters());
  document.addEventListener('astro:page-load', () => animateCounters());
}
