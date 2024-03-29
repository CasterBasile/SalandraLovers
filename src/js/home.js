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
    window.location.href = "https://www.facebook.com/events/926250799501127?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22your_upcoming_events_unit%22%2C%22surface%22%3A%22bookmark%22%7D]%2C%22ref_notif_type%22%3Anull%7D";
}

    // Mostra la finestra pop-up solo se non è stata chiusa in precedenza
    window.onload = function () {
    const finestraPopupChiusa = sessionStorage.getItem("finestraPopupChiusa");
    if (!finestraPopupChiusa) {
        mostraPopup();
    }
};