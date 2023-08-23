document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const bannerContainer = document.querySelector(".banner-container");

    // Recupera i dati dei banner da Firebase usando fetch
    fetch("https://salandra-lovers-default-rtdb.firebaseio.com/events.json")
      .then(response => response.json())
      .then(bannersData => {
        for (const eventId in bannersData) {
          const bannerData = bannersData[eventId];
          createBannerElement(bannerData);
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

    // Funzione per creare elementi banner
    function createBannerElement(bannerData) {
        const bannerElement = document.createElement('div');
        bannerElement.className = 'banner-container'; // <-- Cambiato il nome della classe
        bannerElement.innerHTML = `
            <div class="banner-link open-modal" data-modal="eventModal">
                <div class="banner-overlay"></div>
                <img src="${bannerData.image}" alt="${bannerData.title}">
                <div class="banner-title">${bannerData.title}</div>
                <div class="banner-subtitle">${bannerData.date} - ${bannerData.time}</div>
            </div>
        `;
        bannerContainer.appendChild(bannerElement);

        const bannerLink = bannerElement.querySelector(".banner-link");
        bannerLink.addEventListener("click", function() {
            eventModal.style.display = "block";
        });
    }
});
