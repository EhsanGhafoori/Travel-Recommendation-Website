(function () {
  'use strict';

  // Mobile navigation toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Contact form submission (prevent default, show feedback)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      if (email && message) {
        alert('Thank you! Your message has been received. We will reply to ' + email + ' soon.');
        contactForm.reset();
      }
    });
  }

  // Smooth scroll for in-page links (e.g. #beach, #temple)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href && href.length > 1) {
      var target = document.querySelector(href);
      if (target) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  });
})();
