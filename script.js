let currentIndex = 0;

// Seleziona le slide del carosello
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

// Funzione per far scorrere le testimonianze
function moveCarousel() {
  currentIndex = (currentIndex + 1) % slides.length; // Incrementa ciclicamente l'indice
  const moveAmount = -100 * currentIndex; // Calcola la traduzione del carosello
  track.style.transform = `translateX(${moveAmount}%)`;
}

// Avvia lo scorrimento automatico ogni 3 secondi
let autoScroll = setInterval(moveCarousel, 3000);

// Pausa e ripresa del carosello al passaggio del mouse
const banner = document.querySelector('.testimonial-banner');
banner.addEventListener('mouseenter', () => {
  clearInterval(autoScroll); // Ferma l'animazione
});
banner.addEventListener('mouseleave', () => {
  autoScroll = setInterval(moveCarousel, 3000); // Riavvia l'animazione
});


// Animazione del contatore
document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("counter");
  const target = 512; // Valore finale del contatore
  let count = 0;
  const speed = 10; // Velocità dell'animazione in millisecondi

  function updateCounter() {
    if (count < target) {
      count++;
      counterElement.textContent = count; // Aggiorna il testo
      setTimeout(updateCounter, speed);
    }
  }

  updateCounter();
});
