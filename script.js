// Reveal sections on scroll
window.addEventListener('scroll', reveal);

function reveal() {
  const sections = document.querySelectorAll('.reveal');

  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

// Trigger reveal on load
document.addEventListener("DOMContentLoaded", reveal);
// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
});
