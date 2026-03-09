// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Run after page loads
window.onload = function() {

  // Dropdown hover animation
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    dropdown.addEventListener('mouseenter', () => {
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.3, pointerEvents: "auto" });
    });
    dropdown.addEventListener('mouseleave', () => {
      gsap.to(menu, { opacity: 0, y: 10, duration: 0.25, pointerEvents: "none" });
    });
  });

  // Video hover previews
  document.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // Scroll-triggered animations
  gsap.utils.toArray(".section, .hero-text, .hero-image").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });
  });

};