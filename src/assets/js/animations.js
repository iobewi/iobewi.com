/**
 * animations.js
 * Gère les animations au scroll et les micro-interactions
 */

(function() {
  'use strict';

  // =========================================================
  // SCROLL ANIMATIONS avec IntersectionObserver
  // =========================================================

  /**
   * Configure et initialise l'IntersectionObserver pour les animations au scroll
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Vérifier si le navigateur supporte IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback: rendre tous les éléments visibles immédiatement
      animatedElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    // D'abord, marquer comme visible tous les éléments déjà dans le viewport
    // pour éviter les clignotements au chargement
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        el.classList.add('is-visible');
      }
    });

    // Options pour l'observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -100px 0px', // déclenche un peu avant que l'élément soit visible
      threshold: 0.1 // 10% de l'élément doit être visible
    };

    // Callback quand un élément devient visible/invisible
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajouter la classe is-visible pour déclencher l'animation
          entry.target.classList.add('is-visible');
        } else {
          // Retirer la classe quand l'élément sort du viewport
          // pour que l'animation se rejoue au retour
          entry.target.classList.remove('is-visible');
        }
      });
    };

    // Créer l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer tous les éléments avec la classe .animate-on-scroll
    animatedElements.forEach(el => observer.observe(el));
  }

  // =========================================================
  // COUNTER ANIMATION (pour les numéros 01, 02, 03, 04)
  // =========================================================

  /**
   * Anime les compteurs numériques avec un effet de défilement
   */
  function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');

    if (counters.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-counter'), 10);
          const duration = 1000; // 1 seconde
          const increment = target / (duration / 16); // ~60fps
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current).toString().padStart(2, '0');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toString().padStart(2, '0');
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    counters.forEach(counter => observer.observe(counter));
  }

  // =========================================================
  // PARALLAX EFFECT (subtil sur le hero background)
  // =========================================================

  /**
   * Applique un effet parallax subtil sur les éléments désignés
   */
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    if (parallaxElements.length === 0) return;

    // Vérifier la préférence de mouvement réduit
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // =========================================================
  // RIPPLE EFFECT (pour les clicks sur les tech-chips)
  // =========================================================

  /**
   * Ajoute un effet ripple au clic sur les éléments désignés
   */
  function initRippleEffect() {
    const rippleElements = document.querySelectorAll('.tech-chip');

    rippleElements.forEach(element => {
      element.addEventListener('click', function(e) {
        // Créer l'élément ripple
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        // Positionner le ripple au point de clic
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';

        // Ajouter le ripple à l'élément
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        // Supprimer le ripple après l'animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // =========================================================
  // SMOOTH SCROLL pour les ancres
  // =========================================================

  /**
   * Ajoute un smooth scroll pour les liens d'ancre
   */
  function initSmoothScroll() {
    // Le smooth scroll est déjà géré par CSS (scroll-behavior: smooth)
    // Cette fonction peut être utilisée pour des comportements plus complexes si nécessaire

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Ignorer les liens vers # seul
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          // Calculer l'offset pour le header fixe
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =========================================================
  // INITIALIZE ALL ANIMATIONS
  // =========================================================

  /**
   * Initialise toutes les animations quand le DOM est prêt
   */
  function init() {
    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Ajouter la classe js-ready au body pour activer les animations
    document.body.classList.add('js-ready');

    // Initialiser toutes les animations
    initScrollAnimations();
    initCounterAnimations();
    initParallax();
    initRippleEffect();
    initSmoothScroll();

    // Log pour debug (à retirer en production)
    console.log('🎨 Animations initialisées');
  }

  // Lancer l'initialisation
  init();

})();
