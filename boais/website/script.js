document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var mobileToggle = document.getElementById('mobileToggle');
  var navLinks = document.getElementById('navLinks');
  var auditForm = document.getElementById('auditForm');

  // Navbar scroll shadow
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile menu toggle
  mobileToggle.addEventListener('click', function () {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Audit form submission
  auditForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = {
      name: document.getElementById('name').value,
      business: document.getElementById('business').value,
      phone: document.getElementById('phone').value,
      employees: document.getElementById('employees').value,
      challenge: document.getElementById('challenge').value
    };

    // TODO: Replace with real backend endpoint
    // Example: fetch('/api/audit-request', { method: 'POST', body: JSON.stringify(formData) })
    console.log('Audit request submitted:', formData);

    auditForm.innerHTML =
      '<div class="form-success">' +
      '<svg viewBox="0 0 48 48" fill="none" style="width:56px;height:56px;margin:0 auto 16px;color:#e8852e;">' +
      '<circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5"/>' +
      '<path d="M16 24l5 5 11-11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      '<h3>Audit Request Received!</h3>' +
      '<p>Thank you, ' + formData.name + '. We\'ll call you within 24 hours to schedule your free back-office audit at a time that works for you.</p>' +
      '<p style="margin-top:16px;font-size:0.88rem;color:#8896a7;">Want it faster? ' +
      '<a href="https://wa.me/918483952797?text=Hi%2C%20I%20just%20submitted%20an%20audit%20request.%20My%20name%20is%20' + encodeURIComponent(formData.name) + '" style="color:#25D366;font-weight:600;">WhatsApp us now</a></p>' +
      '</div>';
  });

  // Smooth scroll for all anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple scroll-triggered fade-in for cards
  var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe result cards, service cards, step cards, and testimonials
  var animElements = document.querySelectorAll('.result-card, .service-card, .step-card, .testimonial, .why-item, .pricing-card');
  animElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add visible class styles
  var style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});
