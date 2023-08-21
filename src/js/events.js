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

    const saveToCalendarButton = document.querySelector(".save-to-calendar-button");
    saveToCalendarButton.addEventListener("click", function() {
        const eventDetails = {
            title: "Visita all'eremo di Pietraspaccata",
            description: "Visita all'eremo",
            location: "Bosco della Salandra",
            start: [2023, 9, 20, 9, 30], // [anno, mese (da 0 a 11), giorno, ora, minuti]
            end: [2023, 9, 20, 12, 0] // [anno, mese (da 0 a 11), giorno, ora, minuti]
        };

        const cal = ics();
        cal.addEvent(
            eventDetails.title,
            eventDetails.description,
            eventDetails.location,
            eventDetails.start,
            eventDetails.end
        );

        cal.download();
    });
});
