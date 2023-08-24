document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const eventTitle = document.getElementById("eventTitle");
    const eventDescription = document.getElementById("eventDescription");
    const eventLinkButton = document.getElementById("eventLinkButton");
    const bannerContainer = document.querySelector(".banner-container");
  
    const eventDataArray = [
      {
        title: "Storia del Bosco della Salandra",
        image: "/src/images/poiImages/poiBosco.jpg",
        description: "Descrizione dell'evento 1",
        subtitle: "dagli albori ad oggi",
        link: "link-evento-1"
      },
      {
        title: "Storia dell'eremo di Pietraspaccata",
        image: "/src/images/poiImages/poiEremo.jpg",
        description: "Descrizione dell'evento 1",
        subtitle: "Un luogo di pace e tranquillità",
        link: "link-evento-1"
      },
      {
        title: "Grotta del brigante Cerulo",
        image: "/src/images/poiImages/poiBrigante.jpg",
        description: "Descrizione dell'evento 1",
        subtitle: "Il rifugio del brigante",
        link: "link-evento-1"
      },
      // Aggiungi altri eventi allo stesso modo
    ];
  
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
          <div class="banner-subtitle">${eventData.subtitle}</div>
        </div>
      `;
  
      bannerElement.addEventListener("click", function() {
        eventTitle.textContent = eventData.title;
        eventDescription.textContent = eventData.description;
        eventLinkButton.setAttribute("data-link", eventData.link);
        eventModal.style.display = "block";
      });
  
      bannerContainer.appendChild(bannerElement);
    }
  
    eventDataArray.forEach(eventData => {
      createBannerElement(eventData);
    });
  
    eventLinkButton.addEventListener("click", function() {
      const link = eventLinkButton.getAttribute("data-link");
      window.open(link, "_blank");
    });
  });
  