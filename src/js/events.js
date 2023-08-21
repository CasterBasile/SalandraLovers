document.addEventListener("DOMContentLoaded", function() {
    const closeModal = document.querySelector(".close-modal");
    const openModalButtons = document.querySelectorAll(".open-modal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modalId = button.getAttribute("data-modal"); // Ottieni l'ID dell'elemento modale dal data-modal
            const modal = document.getElementById(modalId); // Ottieni l'elemento modale utilizzando l'ID
            modal.style.display = "block"; // Mostra l'elemento modale
        });
    });

    closeModal.addEventListener("click", function() {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            modal.style.display = "none"; // Chiudi tutti gli elementi modal quando viene cliccato il pulsante di chiusura
        });
    });

    window.addEventListener("click", function(event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none"; // Chiudi l'elemento modale quando si fa clic fuori dalla finestra modale
            }
        });
    });
});
