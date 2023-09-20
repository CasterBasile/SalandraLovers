const images = [
    '/src/images/eremo.jpg',
    '/src/images/foragnano.jpg',
    '/src/images/gallery/gallery.jpg',
    '/src/images/gallery/gallery2.jpg',
    '/src/images/gallery/gallery3.jpg',
    '/src/images/gallery/gallery4.jpg',
    '/src/images/gallery/gallery5.jpg',
    '/src/images/gallery/gallery6.jpg',
    '/src/images/gallery/gallery7.jpg',
    '/src/images/gallery/gallery8.jpg',
    '/src/images/gallery/gallery9.jpg',
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

/*Finestra di avvio*/

function apriPaginaWeb() {
    // Reindirizza l'utente alla pagina web desiderata
    window.location.href = "tuapaginaweb.html";
}

function chiudiFinestra() {
    // Chiudi manualmente la finestra e aggiorna lo stato
    document.getElementById("startup-window").style.display = "none";
    localStorage.setItem("finestraAvvioChiusa", "true");
}

// Verifica se la finestra deve essere mostrata
if (!localStorage.getItem("finestraAvvioChiusa")) {
    document.getElementById("startup-window").style.display = "block";
    // Chiudi automaticamente dopo 5 secondi
    setTimeout(chiudiFinestra, 5000);
}