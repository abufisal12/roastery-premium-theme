(function () {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const scrollTop = document.querySelector('[data-scroll-top]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      const isOpen = nav.classList.contains('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (scrollTop) {
    window.addEventListener('scroll', function () {
      scrollTop.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });

    scrollTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.rp-newsletter').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        form.classList.add('is-submitted');
        form.innerHTML = '<span class="rp-newsletter-success">تم تسجيل بريدك بنجاح</span>';
      }
    });
  });
})();
