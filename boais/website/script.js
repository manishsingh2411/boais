document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

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

  // Contact form submission
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = {
      name: document.getElementById('name').value,
      business: document.getElementById('business').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // For now, show success message (backend integration comes later)
    contactForm.innerHTML =
      '<div class="form-success">' +
      '<svg viewBox="0 0 48 48" fill="none" style="width:48px;height:48px;margin:0 auto 16px;color:#e8852e;">' +
      '<circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5"/>' +
      '<path d="M16 24l5 5 11-11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      '<h3 style="margin-bottom:8px;color:#1a2744;">Message Sent!</h3>' +
      '<p style="color:#64748b;">Thank you, ' + formData.name + '. We\'ll get back to you within 24 hours.</p>' +
      '</div>';

    console.log('Form submitted:', formData);
  });
});
