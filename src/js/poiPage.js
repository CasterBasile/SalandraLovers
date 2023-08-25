document.addEventListener("DOMContentLoaded", function() {
    const eventModal = document.getElementById("eventModal");
    const closeModal = document.querySelector(".close-modal");
    const eventTitle = document.getElementById("eventTitle");
    const eventDescription = document.getElementById("eventDescription");
    const eventLinkButton = document.getElementById("eventLinkButton");
    const bannerContainer = document.querySelector(".banner-container");
  
    const eventDataArray = [
      {
        title: "Bosco della Salandra",
        image: "/src/images/poiImages/poiBosco.jpg",
        description: "Descrizione dell'evento 1",
        subtitle: "dagli albori ad oggi",
        link: "link-evento-1"
      },
      {
        title: "Eremo di Pietraspaccata",
        image: "/src/images/poiImages/poiEremo.jpg",
        description: "L'eremo semirupestre di Santa Maria Pietra Spaccata è un sito archeologico e architettonico unico situato a Marano di Napoli, in Campania. Questo complesso è parzialmente scavato nella parete di un profondo solco idrografico che si estende dalla collina di Camaldoli al fondo del cratere di Quarto, con dislivelli di oltre cento metri. Le grotte dell'eremo si sviluppano su più livelli e sembrano risalire al periodo neolitico, come indicato da reperti di utensili litici rinvenuti sul posto. L'eremo era probabilmente una tappa essenziale per i pastori durante la transumanza, grazie alla sua posizione lungo un antico tratturo osco-sannita. In epoca romana, le grotte furono integrate in una struttura sovrastante che aveva funzioni di mitreo e ninfeo, di cui sono ancora visibili resti significativi. Il costone tufaceo è stato abilmente scolpito per raccogliere l'acqua piovana e sorgiva in cisterne. Nel corso dei secoli, l'eremo è stato oggetto di diverse trasformazioni. Nel tardo Cinquecento, una torre eremitica fu aggiunta per inglobare le grotte. Nel corso del tempo, ha ospitato vari eremiti, monaci basiliani, frati francescani, gesuiti e altri. Nel XIX secolo, cadde in uno stato di abbandono. L'eremo semirupestre di Santa Maria Pietra Spaccata si rivela come un luogo intriso di magia e mistero, un gioiello nascosto nel cuore di Marano.",
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
        eventImage.src = eventData.image; // Imposta l'URL dell'immagine
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
  