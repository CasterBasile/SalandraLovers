var newsContainer = document.getElementById('news-container');

fetch('https://salandra-lovers-default-rtdb.firebaseio.com/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var key in data) {
      var newsItem = data[key];
      createNewsCard(newsItem);
    }
  });

  function createNewsCard(newsItem) {
    var cardDiv = document.createElement('div');
    cardDiv.className = 'mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col';
  
    var cardTitle = document.createElement('div');
    cardTitle.className = 'mdl-card__title';
    cardTitle.style.backgroundImage = 'url(' + newsItem.image + ')';
    cardTitle.style.backgroundSize = 'cover';
    cardTitle.style.height = '200px';
    cardTitle.style.cursor = 'pointer'; // Rendi il cursore un puntatore su hover
    cardDiv.appendChild(cardTitle);
  
    var cardTitleText = document.createElement('h2');
    cardTitleText.className = 'mdl-card__title-text';
    cardTitleText.textContent = 'Leggi la notizia';
    cardTitle.appendChild(cardTitleText);
  
    var cardContent = document.createElement('div');
    cardContent.className = 'mdl-card__supporting-text';
    cardContent.textContent = newsItem.title;
    cardDiv.appendChild(cardContent);
  
    // Aggiungi l'evento di click sulla postcard
    cardDiv.addEventListener('click', function () {
      // Apri il link contenuto nel campo "link" da newsItem
      window.open(newsItem.link, '_blank');
    });
  
    newsContainer.appendChild(cardDiv);
  }
  
  window.addEventListener("load", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto"; // Riabilita lo scorrimento
  });