document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const eventTitle = document.getElementById("eventTitle");
    const eventDescription = document.getElementById("eventDescription");
    const eventLinkButton = document.getElementById("eventLinkButton");
    const bannerContainer = document.querySelector(".banner-container"); // Aggiunto qui

    const eventsData = [
        {
            title: "Salandra o Foragnano, perché?",
            image: "/src/images/main-image.jpg",
            place: "Luogo Evento 1",
            date: "Data Evento 1",
            time: "Ora Evento 1",
            description: "Bosco della Salandra: È probabile che il nome Bosco della Salandra sia associato ai proprietari storici o a figure rilevanti legate a questo bosco. Spesso i toponimi derivano da proprietà terriere o da nomi di famiglie che hanno avuto una connessione con l'area. Origine del Nome Bosco di Foragnano: L'origine del toponimo Foragnano è avvolta in un mistero affascinante che si estende nel corso dei secoli. Le interpretazioni variano, ma una teoria suggerisce che potrebbe derivare dal termine latino forum o foris, indicando un'area legata a strade o punti di incontro. Un'altra ipotesi lo collega all'avverbio e preposizione latina \"fora\" o \"foris,\" unito a \"Anianum,\" indicando una posizione fuori dal territorio di Agnano. La storia del nome è documentata attraverso varie forme nel tempo. La prima menzione risale al 977 d.C. come Faragnanum. La variante Fuoriagnano potrebbe essere stata influenzata da correzioni errate nei documenti ufficiali redatti dagli impiegati regi.",
            link: "https://link_evento_1.com"
        },
        {
            title: "Titolo Evento 2",
            image: "immagine_evento_2.jpg",
            place: "Luogo Evento 2",
            date: "Data Evento 2",
            time: "Ora Evento 2",
            description: "Descrizione Evento 2",
            link: "https://link_evento_2.com"
        },
        // Aggiungi altri eventi secondo lo stesso formato
    ];

    eventsData.forEach(eventData => {
        createBannerElement(eventData);
    });

    closeModal.addEventListener("click", function() {
        eventModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === eventModal) {
            eventModal.style.display = "none";
        }
    });

    function createBannerElement(eventData) {
        const bannerElement = document.createElement('div');
        bannerElement.className = 'banner-container';
        bannerElement.innerHTML = `
          <div class="banner-link open-modal" data-modal="eventModal">
            <div class="banner-overlay"></div>
            <img src="${eventData.image}" alt="${eventData.title}">
            <div class="banner-title">${eventData.title}</div>
            <div class="banner-place">Luogo: ${eventData.place}</div> <!-- Mostra il luogo sotto al titolo -->
            <div class="banner-subtitle">${eventData.date} - ${eventData.time}</div>
          </div>
        `;
        const bannerLink = bannerElement.querySelector(".banner-link");
        bannerLink.addEventListener("click", function() {
            eventTitle.textContent = eventData.title;
            eventDescription.textContent = eventData.description;
            eventLinkButton.setAttribute("data-link", eventData.link);
            eventModal.style.display = "block";
        });

        bannerContainer.appendChild(bannerElement);
    }

    eventLinkButton.addEventListener("click", function() {
        const link = eventLinkButton.getAttribute("data-link");
        window.open(link, "_blank");
    });
});
