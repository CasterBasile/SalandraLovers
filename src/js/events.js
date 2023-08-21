document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const openModalButtons = document.querySelectorAll(".banner-link");
    const saveToCalendarButton = document.querySelector(".save-to-calendar-button");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            eventModal.style.display = "block";

            const title = button.getAttribute("data-title");
            const date = button.getAttribute("data-date");
            const time = button.getAttribute("data-time");
            const location = button.getAttribute("data-location");

            // Aggiungi i dettagli dell'evento alla finestra modale
            const eventModalTitle = document.querySelector(".modal-content h2");
            eventModalTitle.textContent = title;

            // Imposta il click sul pulsante "Salva sul Calendario"
            saveToCalendarButton.addEventListener("click", function() {
                const eventDetails = `${title}\nData: ${date}\nOra: ${time}\nLuogo: ${location}`;
                const calendarURL = `data:text/calendar;charset=utf-8,${encodeURIComponent(generateICS(eventDetails))}`;
                window.open(calendarURL);
            });
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

    // Funzione per generare il file ICS (iCalendar)
    function generateICS(eventDetails) {
        // Formato ICS
        return `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails}
DTSTART:${date}T${time}
DTEND:${date}T${time}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
        `;
    }
});
