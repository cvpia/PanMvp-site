(() => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open') ?? false;
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('pre').forEach((block) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = '复制';
    button.addEventListener('click', async () => {
      const text = block.querySelector('code')?.textContent || block.textContent || '';
      try {
        await navigator.clipboard.writeText(text.trim());
        button.textContent = '已复制';
      } catch {
        button.textContent = '复制失败';
      }
      window.setTimeout(() => { button.textContent = '复制'; }, 1400);
    });
    block.appendChild(button);
  });

  const revealItems = document.querySelectorAll('.feature-card, .flow-step, .release, .doc-section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate(
          [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' },
        );
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
