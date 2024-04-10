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

// Funzione per mostrare la finestra pop-up
let countdown = 7; // Imposta il valore iniziale del conto alla rovescia

function mostraPopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "block";

    // Chiudi la finestra pop-up automaticamente dopo 7 secondi
    const countdownInterval = setInterval(function () {
        countdown--;
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "Chiusura in " + countdown + " secondi";

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            chiudiPopup();
        }
    }, 1000); // Esegui il conto alla rovescia ogni 1 secondo
}

function chiudiPopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";

    // Salva nello sessionStorage che la finestra è stata chiusa
    sessionStorage.setItem("finestraPopupChiusa", "true");
}

function apriPaginaWeb() {
    // Reindirizza l'utente alla pagina web desiderata
    window.location.href = "https://wa.me/393281448269";
}

    // Mostra la finestra pop-up solo se non è stata chiusa in precedenza
    window.onload = function () {
    const finestraPopupChiusa = sessionStorage.getItem("finestraPopupChiusa");
    if (!finestraPopupChiusa) {
        mostraPopup();
    }
};