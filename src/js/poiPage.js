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
        description: "Nel cuore di Marano di Napoli, si estende il Bosco della Salandra, un regno antico che racchiude segreti millenari tra gli alberi e gli anfratti delle sue profonde radure. Questo bosco, popolato principalmente da maestosi castagni, si snoda come un labirinto di narrazioni silenziose e avventure dimenticate. I sentieri che solcano il Bosco della Salandra sono come fili del tempo, intrecciati con le storie dei passati lontani. Mentre cammini lungo questi sentieri, immergiti nell'atmosfera che avvolge il luogo. I castagni secolari fungono da guardiani mutevoli di eventi passati, i loro tronchi testimoniano i giorni che sono trascorsi sotto le loro fronde. Le radici, profonde come i ricordi, si intrecciano con i segreti custoditi dal terreno stesso. Ecco, tra gli alberi che si sfiorano l'un l'altro, che si svelano i tesori nascosti del passato. Tracce di antiche civiltà si fanno strada attraverso la terra, rivelando reperti archeologici che raccontano storie di vite lontane. Chi sa quante generazioni hanno attraversato queste radure, portando con sé le loro speranze, le loro battaglie e le loro ambizioni? Gli uccelli che solcano il cielo e gli animali che si nascondono tra gli arbusti sono testimoni silenziosi dei cambiamenti che il bosco ha attraversato nel corso dei secoli. Le loro voci si fondono con il fruscio delle foglie e il canto delle acque, creando un coro naturale che accompagna ogni passo del tuo viaggio. Il Bosco della Salandra è più di una semplice area naturale; è una cronaca vivente di una terra che ha visto il susseguirsi di generazioni, di avventure, di lotte e di momenti di pace. Mentre ti perdi tra i sentieri e gli alberi, tuffati nelle storie che il bosco sussurra al vento e lascia che le sue radici ti connettano alle radici di un tempo passato, un tempo che continua a vivere in ogni foglia, in ogni ramo e in ogni respiro del Bosco della Salandra.",
        subtitle: "dagli albori ad oggi",
        link: "https://www.youtube.com/watch?v=v-uiJkRCmSw"
      },
      {
        title: "Eremo di Pietraspaccata",
        image: "/src/images/poiImages/poiEremo.jpg",
        description: "L'eremo semirupestre di Santa Maria Pietra Spaccata è un sito archeologico e architettonico unico situato a Marano di Napoli, in Campania. Questo complesso è parzialmente scavato nella parete di un profondo solco idrografico che si estende dalla collina di Camaldoli al fondo del cratere di Quarto, con dislivelli di oltre cento metri. Le grotte dell'eremo si sviluppano su più livelli e sembrano risalire al periodo neolitico, come indicato da reperti di utensili litici rinvenuti sul posto. L'eremo era probabilmente una tappa essenziale per i pastori durante la transumanza, grazie alla sua posizione lungo un antico tratturo osco-sannita. In epoca romana, le grotte furono integrate in una struttura sovrastante che aveva funzioni di mitreo e ninfeo, di cui sono ancora visibili resti significativi. Il costone tufaceo è stato abilmente scolpito per raccogliere l'acqua piovana e sorgiva in cisterne. Nel corso dei secoli, l'eremo è stato oggetto di diverse trasformazioni. Nel tardo Cinquecento, una torre eremitica fu aggiunta per inglobare le grotte. Nel corso del tempo, ha ospitato vari eremiti, monaci basiliani, frati francescani, gesuiti e altri. Nel XIX secolo, cadde in uno stato di abbandono. L'eremo semirupestre di Santa Maria Pietra Spaccata si rivela come un luogo intriso di magia e mistero, un gioiello nascosto nel cuore di Marano.",
        subtitle: "Un luogo di pace e tranquillità",
        link: "https://fondoambiente.it/luoghi/eremo-di-santa-maria-di-pietraspaccata?ldc"
      },
      {
        title: "Grotta del brigante Cerulo",
        image: "/src/images/poiImages/poiBrigante.jpg",
        description: "Nel cuore dell'incantevole Bosco della Salandra a Marano di Napoli, si cela un luogo avvolto da storie di audacia e mistero: la Grotta del Brigante. Questo luogo suggestivo e affascinante non è soltanto una spaccatura nella roccia, ma un portale che ci collega a un passato di intrighi e avventure. Scavata con maestria nella roccia, la Grotta del Brigante è diventata il nascondiglio del leggendario fuorilegge Alfonso Cerulo e della sua banda. Mentre ti inoltri attraverso l'entrata angusta, fai un passo indietro nel tempo e immagina il suono dei passi dei briganti, il loro respiro ansimante mentre si nascondevano dalla giustizia, e le voci sussurrate che riempivano l'aria densa di segreti. La grotta non è solo un rifugio, ma un testimone silenzioso delle gesta che vi si sono svolte. Qui, tra queste pareti di pietra levigata dalla storia, i briganti pianificarono incursioni audaci e si rifugiarono dopo le loro imprese. La Grotta del Brigante è intrisa delle loro voci, delle loro speranze e dei loro timori. Quando entri nell'interno della grotta, potresti sentire l'eco delle storie che vi sono state narrate. La luce che filtra attraverso le fenditure nella roccia illumina il passato, mentre immagini i briganti riuniti intorno a un fuoco, condividendo piani e sogni di libertà. Le pareti scolpite raccontano di giorni di avventura e notti di segretezza. Oggi, la Grotta del Brigante è più di un semplice punto di interesse storico. È un portale che ci connette a un'epoca di coraggio e ribellione. Mentre esplori l'interno, tocca le pareti lisce e ascolta l'eco dei passi di coloro che sono venuti prima di te. Unisciti a noi nell'esplorare questa tappa fondamentale della storia, nella speranza che le avventure e i segreti dei briganti possano vivere per sempre attraverso il racconto di questo luogo affascinante.",
        subtitle: "Il rifugio del brigante",
        link: "http://piscinola.blogspot.com/2014/09/il-brigante-partigiano-alfonso-cerullo.html"
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
  