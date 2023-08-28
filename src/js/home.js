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

// Aggiungi l'event listener per aprire la finestra modale
document.getElementById('openModalButton').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'block';
  });
  
  // Prima di tutto, devi ottenere il riferimento al nodo "banner" su Firebase
var bannerRef = firebase.database().ref("banner");

// Ora puoi controllare se il nodo esiste
bannerRef.once("value")
  .then(function(snapshot) {
    var bannerData = snapshot.val();
    if (bannerData) {
      // Il nodo "banner" esiste, quindi mostra il banner
      document.getElementById("modalOverlay").style.display = "block";
    } else {
      // Il nodo "banner" non esiste, quindi nascondi il banner
      document.getElementById("modalOverlay").style.display = "none";
    }
  })
  .catch(function(error) {
    console.error("Errore nel recupero dei dati del banner da Firebase:", error);
  });


// Aggiungi l'evento di chiusura per il banner
document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("modalOverlay").style.display = "none";
});
