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


fetch("https://salandra-lovers-default-rtdb.firebaseio.com/banner.json")
  .then(response => response.json())
  .then(data => {
    if (data && data.image) {
      // Il nodo "banner" esiste e contiene un'immagine, quindi mostra il banner
      document.getElementById("modalOverlay").style.display = "block";
      const modalContent = document.getElementById("modalContent");
      modalContent.innerHTML = `<img src="${data.image}" alt="Banner Image">`;
    } else {
      // Il nodo "banner" non esiste o non contiene un'immagine, quindi nascondi il banner
      document.getElementById("modalOverlay").style.display = "none";
    }
  })
  .catch(error => {
    console.error("Errore nel recupero dei dati del banner da Firebase:", error);
  });

  document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modalOverlay").style.display = "none";
  });