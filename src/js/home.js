const images = [
    '/src/images/eremo.jpg',
    '/src/images/foragnano.jpg',
    '/src/images/gallery/gallery.jpg',
    '/src/images/gallery/gallery2.jpg',
    '/src/images/gallery/gallery3.jpg',
    '/src/images/gallery/gallery4.jpg',
    '/src/images/gallery/gallery5.jpg',
];

let currentIndex = 0;
const linkTiles = document.querySelectorAll('.link-tile');

function changeBackgroundImage() {
    linkTiles.forEach((tile, index) => {
        tile.style.backgroundImage = `url('${images[(currentIndex + index) % images.length]}')`;
    });

    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeBackgroundImage, 2800); // Cambia immagine ogni 1.5 secondi
}

changeBackgroundImage();

const modalOverlay = document.getElementById('modalOverlay');
const closeButton = document.getElementById('closeButton');
const modalContent = document.getElementById('modalContent');

// URL del nodo in Firebase
const firebaseUrl = 'https://salandra-lovers-default-rtdb.firebaseio.com/banner.json';

// Recupera i dati da Firebase
fetch(firebaseUrl)
  .then(response => response.json())
  .then(data => {
    // Verifica se ci sono dati nel nodo
    if (data) {
      // Mostra la finestra modale con il contenuto recuperato da Firebase
      modalContent.textContent = data.message;
      modalOverlay.style.display = 'block';
    }
  })
  .catch(error => {
    console.error('Errore durante il recupero dei dati da Firebase:', error);
  });

// Chiudi la finestra modale cliccando sulla "X"
closeButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Chiudi la finestra modale cliccando all'esterno della finestra
window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
