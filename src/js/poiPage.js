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
        description: "Immerso nel cuore di Marano di Napoli, si nasconde un vero e proprio tesoro storico: l'eremo semirupestre di Santa Maria Pietra Spaccata. Questo sito archeologico e architettonico straordinario incanterà ogni anima avventurosa che vi si avvicina. Immagina essere trasportato in un viaggio attraverso i secoli, mentre esplori le profonde grotte scolpite nella parete di un maestoso solco idrografico. Una meraviglia che risale addirittura al periodo neolitico, come indicato dai reperti di utensili litici che testimoniano l'antica presenza umana. Le grotte, stratificate su più livelli, cattureranno la tua immaginazione mentre scopri il loro significato: un luogo che fu forse un crocevia cruciale per i pastori in transumanza, un punto di riferimento lungo l'antico tratturo osco-sannita. Ma c'è di più, perché l'eremo semirupestre è molto più di un semplice rifugio nel tempo. In epoca romana, queste stesse grotte sono state ingegnosamente integrate in una struttura sovrastante con funzioni di mitreo e ninfeo. Perfino oggi, i resti di questa affascinante fusione sono visibili, e ti sentirai parte della storia che ha plasmato questo luogo magico. Guarda in alto e ammira la maestosità del costone tufaceo, sapientemente scolpito per raccogliere l'acqua piovana e sorgiva nelle cisterne create con maestria. Ogni angolo racconta una storia, ogni passo ti avvicina alle vite dei pastori, dei monaci basiliani, dei frati francescani e dei gesuiti che, nel corso dei secoli, hanno attraversato queste terre. E proprio quando pensi di averne visto abbastanza, scoprirai che nel tardo Cinquecento una torre eremitica è stata aggiunta per preservare e celebrare l'essenza di questo luogo unico. Purtroppo, il tempo non è stato sempre gentile con questo gioiello nascosto. Nel XIX secolo, l'eremo cadde in abbandono, ma la sua bellezza e il suo mistero resistono ancora oggi. Camminare tra queste mura è come camminare attraverso le pagine di un libro antico, ciascuna pietra racconta una storia silenziosa che attende solo di essere ascoltata. Purtroppo, nonostante la sua straordinaria storia e fascino, l'interno dell'eremo semirupestre di Santa Maria Pietra Spaccata non è più accessibile ai visitatori. Preparati a lasciarti incantare dall'atmosfera magica dell'eremo semirupestre di Santa Maria Pietra Spaccata. Questo luogo non è solo un insieme di pietre e caverne, ma un viaggio attraverso la storia e l'anima di Marano di Napoli. Sii pronto a scoprire un mondo di meraviglia e a sentirti parte integrante di una narrazione che ha attraversato i secoli per giungere fino a te.",
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
      {
        title: "Torchio Romano",
        image: "/src/images/poiImages/poiTorchio.jpg",
        description: "Nel cuore del suggestivo Bosco della Salandra a Marano di Napoli, puoi scoprire un antico 'lapis pedicinus' nascosto tra la natura rigogliosa. Questo antico elemento è tutto ciò che rimane di un torchio più grande, una testimonianza affascinante del passato che si intreccia con la bellezza della natura circostante.\n\nIl 'lapis pedicinus' è realizzato in pietra, levigato dal tempo e dalle intemperie. La sua forma e la sua posizione suggeriscono la sua funzione nel processo di produzione del vino o dell'olio, un tempo vitale per la comunità che abitava questa zona. Nonostante sia ormai incompleto e parzialmente nascosto dalla vegetazione, questo 'lapis pedicinus' racconta una storia di lavori agricoli e tradizioni locali. Mentre lo osservi, potresti immaginare come una volta gli abitanti di questo luogo usassero con maestria questa pietra per estrarre i preziosi succhi dalla loro raccolta. Il 'lapis pedicinus' è una finestra sul passato, un frammento di un'epoca in cui la natura e la cultura si univano in armonia in questo affascinante bosco.",
        subtitle: "Resti di ciò che era la vita ai tempi dei Romani",
        link: "https://www.facebook.com/photo/?fbid=170981602929791&set=a.170979979596620&locale=it_IT"
      },      
      {
        title: "Cisterna Romana",
        image: "/src/images/poiImages/poiCisterna.jpg",
        description: "Nel pittoresco Bosco della Salandra a Marano di Napoli, accanto al torchio, troverai una antica cisterna che si nasconde sotto il livello di calpestio. Questo tesoro nascosto, con la sua volta ancora intatta, è una testimonianza tangibile del passato che si fonde armoniosamente con l'ambiente circostante.\n\nLa cisterna è un'opera d'ingegneria semplice ma vitale, un simbolo della capacità degli abitanti di questa zona di sfruttare saggiamente le risorse naturali. La sua struttura sotterranea e la volta ben conservata suggeriscono che una volta fosse utilizzata per raccogliere e conservare preziosa acqua piovana. Questo elemento era di importanza cruciale per la vita quotidiana, soprattutto in un ambiente così ricco di vegetazione e risorse naturali come il Bosco della Salandra.\n\nOggi, mentre esplori questa antica cisterna, puoi immaginare il lavoro di coloro che l'hanno costruita e utilizzata. La sua ubicazione vicino al torchio suggerisce una connessione tra la produzione di vino o olio e la conservazione dell'acqua. Questa cisterna è una finestra aperta sul passato, un'opportunità per connettersi con la storia e la saggezza degli abitanti di questa regione.\n\nLa volta ancora intatta e la sua posizione discreta tra la vegetazione aggiungono un tocco di bellezza a questo luogo. La cisterna nel Bosco della Salandra rappresenta un legame tangibile tra l'umanità e la natura, una testimonianza silenziosa di un passato che continua a ispirare e affascinare.",
        subtitle: "Antica cisterna con volta ancora intatta",
        link: "https://www.facebook.com/photo?fbid=170981602929791&set=a.170979979596620&locale=it_IT"
      }
         
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
  