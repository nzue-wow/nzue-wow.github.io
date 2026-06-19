// Smooth Scroll für interne Links
function scrollToSection(id) {
  const element = document.getElementById(id);
  if(element) {
    // Da die Navbar fixed ist, passen wir den Scroll an, damit die Überschrift nicht verdeckt wird
    const y = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// Fade in Animation
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Cursor Glow Effekt
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  // RequestAnimationFrame sorgt für eine flüssigere Bewegung ohne Ruckeln
  requestAnimationFrame(() => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
});