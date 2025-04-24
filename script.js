// Smooth scrolling for navigation links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 70, // Adjust for navbar height
      behavior: "smooth"
    });
  });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Contact form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (event) {
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    event.preventDefault();
    alert("Please fill in all fields before submitting.");
  } else if (!validateEmail(email.value)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
  }
});

// Email validation function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
