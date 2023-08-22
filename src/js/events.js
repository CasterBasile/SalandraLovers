document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const openModalButtons = document.querySelectorAll(".banner-link.open-modal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            eventModal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        eventModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === eventModal) {
            eventModal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openLinkButton = document.querySelector(".open-link-button");
    
    openLinkButton.addEventListener("click", function() {
        // Inserisci qui l'URL del link a cui vuoi indirizzare
        const linkUrl = "https://www.facebook.com/groups/950471052240086/events";
        
        // Apri il link nella stessa finestra/ scheda
        window.location.href = linkUrl;
        
        // Se preferisci aprire il link in una nuova finestra/ scheda, usa la seguente riga:
        // window.open(linkUrl, "_blank");
    });
});
