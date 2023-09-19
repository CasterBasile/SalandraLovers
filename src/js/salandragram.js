// Includi Firebase e configura l'app Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBIQuGgnvuI9p5TDH6j19l8A3BUmjZOjv0",
    authDomain: "salandra-lovers.firebaseapp.com",
    databaseURL: "https://salandra-lovers-default-rtdb.firebaseio.com",
    projectId: "salandra-lovers",
    storageBucket: "salandra-lovers.appspot.com",
    messagingSenderId: "851379002062",
    appId: "1:851379002062:web:89be0c914575b8c1840e9f",
    measurementId: "G-K6H6SHKN05"
};

firebase.initializeApp(firebaseConfig);

// Riferimenti agli elementi HTML
const addButton = document.getElementById('add-button');
const addForm = document.getElementById('add-form');
const photoInput = document.getElementById('photo-input');
const usernameInput = document.getElementById('username-input');
const descriptionInput = document.getElementById('description-input');
const uploadButton = document.getElementById('upload-button');
const photoGrid = document.getElementById('photo-grid');

// Mostra/nascondi il form quando si clicca sul tasto +
addButton.addEventListener('click', () => {
    addForm.style.display = 'block';
});

// Nascondi il form quando si preme il pulsante "Carica" senza selezionare un file
uploadButton.addEventListener('click', () => {
    const file = photoInput.files[0];
    const username = usernameInput.value;
    const description = descriptionInput.value;

    if (file && username && description) {
        const storageRef = firebase.storage().ref(`photos/${file.name}`);
        storageRef.put(file).then(() => {
            // Ottieni l'URL dell'immagine caricata
            storageRef.getDownloadURL().then((downloadURL) => {
                // Crea un elemento immagine e aggiungilo al grid
                const img = document.createElement('img');
                img.src = "https://salandra-lovers-default-rtdb.firebaseio.com/salandragram";
                const usernameDiv = document.createElement('div');
                usernameDiv.innerText = `Utente: ${username}`;
                const descriptionDiv = document.createElement('div');
                descriptionDiv.innerText = `Descrizione: ${description}`;

                const photoDiv = document.createElement('div');
                photoDiv.appendChild(img);
                photoDiv.appendChild(usernameDiv);
                photoDiv.appendChild(descriptionDiv);

                photoGrid.appendChild(photoDiv);

                // Nascondi il form e resetta i campi
                addForm.style.display = 'none';
                photoInput.value = '';
                usernameInput.value = '';
                descriptionInput.value = '';
            });
        });
    } else {
        alert('Compila tutti i campi prima di caricare l\'immagine.');
    }
});

// Funzione per caricare tutte le immagini esistenti
function loadPhotos() {
    // TODO: Qui dovresti recuperare le immagini da Firebase Storage e aggiungerle al photoGrid.
    // Puoi utilizzare Firebase Storage per archiviare e recuperare le immagini.
}

// Chiamata per caricare le immagini all'avvio dell'app
loadPhotos();
