document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const eventTitle = document.getElementById("eventTitle");
    const eventDescription = document.getElementById("eventDescription");
    const eventLinkButton = document.getElementById("eventLinkButton");
    const bannerContainer = document.querySelector(".banner-container"); // Aggiunto qui

    fetch("https://salandra-lovers-default-rtdb.firebaseio.com/events.json?timestamp=" + Date.now())
    .then(response => response.json())
    .then(eventsData => {
      for (const eventId in eventsData) {
        const eventData = eventsData[eventId];
        createBannerElement(eventData);
      }
    })
    .catch(error => {
      console.error('Errore durante il recupero dei dati da Firebase:', error);
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
      window.location.href = link;
  });  
});

