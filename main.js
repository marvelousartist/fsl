// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}

// ── Service accordion (services page) ──
document.querySelectorAll('.service-full-header').forEach(header => {
  header.addEventListener('click', () => {
    const body   = header.nextElementSibling;
    const toggle = header.querySelector('.service-toggle');
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.service-full-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.service-toggle').forEach(t => t.textContent = '+');
    if (!isOpen) {
      body.classList.add('open');
      if (toggle) toggle.textContent = '−';
    }
  });
});

// ── Management "View Details" toggle ──
document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.mgmt-card');
    const isExpanded = card.classList.contains('expanded');
    document.querySelectorAll('.mgmt-card').forEach(c => {
      c.classList.remove('expanded');
      const b = c.querySelector('.btn-details');
      if (b) b.textContent = 'View Details';
    });
    if (!isExpanded) {
      card.classList.add('expanded');
      btn.textContent = 'Close';
    }
  });
});

// ── Scroll-reveal animations ──
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .service-card, .mgmt-card, .partner-card, .value-card, .service-full-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ── Contact form submit ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2a7a4b';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.style.color = '';
      form.reset();
    }, 4000);
  });
}
