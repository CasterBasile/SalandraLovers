let currentIndex = 0;
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

function moveCarousel() {
  currentIndex = (currentIndex + 1) % slides.length;
  const moveAmount = -100 * currentIndex;
  track.style.transform = `translateX(${moveAmount}%)`;
}

// Scorrimento automatico ogni 3 secondi
setInterval(moveCarousel, 3000);

const banner = document.querySelector('.testimonial-banner');
banner.addEventListener('mouseenter', () => {
  document.querySelector('.testimonial-content').style.animationPlayState = 'paused';
});
banner.addEventListener('mouseleave', () => {
  document.querySelector('.testimonial-content').style.animationPlayState = 'running';
});
