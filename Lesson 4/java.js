// Toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    // Close the navbar if opened
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});



function updateText() {
  textAnimation.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(updateText, 2000); // Change word every 2 seconds

// Form submission handler (optional)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});
