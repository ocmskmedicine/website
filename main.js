// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function closeMenu() {
  navLinks.classList.remove('open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// Accordion
function toggleAccordion(btn) {
  const body = btn.nextElementSibling;
  const isOpen = body.classList.contains('open');

  // Close all open accordion bodies
  document.querySelectorAll('.accordion-body.open').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.accordion-btn.active').forEach(b => b.classList.remove('active'));

  if (!isOpen) {
    body.classList.add('open');
    btn.classList.add('active');
  }
}

// Contact form handler (placeholder — wire to backend/form service as needed)
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Request Sent — We\'ll Be in Touch';
  btn.disabled = true;
  btn.style.background = '#2C5282';
}
