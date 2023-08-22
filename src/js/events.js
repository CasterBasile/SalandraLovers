document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const openModalButtons = document.querySelectorAll(".banner-link");
    const setNotificationButtons = document.querySelectorAll(".set-notification");

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

    setNotificationButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Invia una notifica 2 ore prima dell'evento
            const eventTitle = "Visita all'eremo di Pietraspaccata"; // Titolo dell'evento
            const eventDate = new Date("2023-09-20T09:30:00"); // Imposta la data e l'ora dell'evento
            const notificationTime = new Date(eventDate.getTime() - 2 * 60 * 60 * 1000); // Sottrai 2 ore dalla data dell'evento
            const options = {
                body: `L'evento "${eventTitle}" inizia tra 2 ore!`,
                icon: "/src/images/notification-icon.png" // Imposta l'icona della notifica
            };

            // Richiede l'autorizzazione alle notifiche
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    // Crea e mostra la notifica
                    const notification = new Notification("Avviso Evento", options);
                }
            });
        });
    });


