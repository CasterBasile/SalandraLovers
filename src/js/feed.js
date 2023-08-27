var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var sharedMomentsArea = document.querySelector('#shared-moments');
var imageModal = document.getElementById('image-modal');
var imageModalImage = document.getElementById('image-modal-image');


var shareImageButton = document.querySelector('#share-image-button');
var createPostModal = document.querySelector('#create-post-modal');
var closeCreatePostModalBtn = document.querySelector('.close'); // Seleziona il bottone di chiusura all'interno della finestra modale

function openCreatePostModal() {
  createPostModal.style.display = 'flex'; // Usa 'flex' per centrare la finestra modale
}

function closeCreatePostModal() {
  createPostModal.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);
closeCreatePostModalBtn.addEventListener('click', closeCreatePostModal);

shareImageButton.addEventListener('click', openCreatePostModal);
closeCreatePostModalBtn.addEventListener('click', closeCreatePostModal);

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

function openImageModal(imageUrl) {
  imageModalImage.src = imageUrl;
  imageModal.style.display = 'flex'; // Change to 'flex' for centering
  imageModalCloseBtn.addEventListener('click', closeImageModal);
  imageModal.addEventListener('click', closeImageModalBackground);
}

function closeImageModal() {
  imageModal.style.display = 'none';
  imageModalImage.src = ''; // Clear the image source
  imageModalCloseBtn.removeEventListener('click', closeImageModal);
  imageModal.removeEventListener('click', closeImageModalBackground);
}

function closeImageModalBackground(event) {
  if (event.target === imageModal) {
    closeImageModal();
  }
}


function clearCards() {
  while (sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
  }
}

function createCard(data) {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';

  var cardTitle = document.createElement('div');
  cardTitle.className = 'mdl-card__title';
  cardTitle.style.backgroundImage = 'url(' + data.image + ')';
  cardTitle.style.backgroundSize = 'cover';
  cardTitle.style.height = '180px';

  cardWrapper.appendChild(cardTitle);

  var cardSupportingText = document.createElement('div');
  cardSupportingText.className = 'mdl-card__supporting-text';
  cardSupportingText.textContent = data.post;
  cardSupportingText.style.textAlign = 'left';
  cardSupportingText.style.paddingBottom = '10px'; // Aggiungi padding inferiore
  cardWrapper.appendChild(cardSupportingText);

  cardWrapper.addEventListener('click', function () {
    window.open(data.link, '_blank');
  });

  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}


function updateUI(data) {
  clearCards();
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

var url = 'https://salandra-lovers-default-rtdb.firebaseio.com/posts.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
  });

  if ('indexedDB' in window) {
    readAllData('posts')
      .then(function(data) {
        if (!networkDataReceived) {
          console.log('From cache', data);
          updateUI(data);
        }
      });
  }

  // Aggiungi un event listener per chiudere l'elemento modale quando viene cliccato
imageModal.addEventListener('click', closeImageModal);

const images = [
  '/src/images/eremo.jpg',
  '/src/images/foragnano.jpg',
  '/src/images/gallery/gallery.jpg',
  '/src/images/gallery/gallery2.jpg',
  '/src/images/gallery/gallery3.jpg',
  '/src/images/gallery/gallery4.jpg',
  '/src/images/gallery/gallery5.jpg',
];

let currentIndex = 0;
const linkTiles = document.querySelectorAll('.link-tile');

function changeBackgroundImage() {
  linkTiles.forEach((tile, index) => {
      tile.style.backgroundImage = `url('${images[(currentIndex + index) % images.length]}')`;
  });

  currentIndex = (currentIndex + 1) % images.length;
  setTimeout(changeBackgroundImage, 2800); // Cambia immagine ogni 1.5 secondi
}

changeBackgroundImage();

var closeCreatePostModalBtn = document.getElementById('close-create-post-modal-btn');

closeCreatePostModalBtn.addEventListener('click', closeCreatePostModal);

function closeCreatePostModal() {
  createPostModal.style.display = 'none';
}

var createPostModalOverlay = document.getElementById('create-post-modal-overlay');

createPostModalOverlay.addEventListener('click', function(event) {
  if (event.target === createPostModalOverlay) {
    closeCreatePostModal();
  }
});

function openWebPage() {
  window.open("https://www.instagram.com/", "_blank"); // Cambia l'URL con quello desiderato
}

window.addEventListener("load", function () {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
  document.body.style.overflow = "auto"; // Riabilita lo scorrimento
});