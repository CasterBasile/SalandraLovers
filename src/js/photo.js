import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Configurazione Firebase
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

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage, "photos");

// Seleziona gli elementi dalla pagina
const photoInput = document.getElementById("photoInput");
const uploadButton = document.getElementById("uploadButton");
const photoList = document.getElementById("photoList");

// Aggiungi l'evento di caricamento al pulsante
uploadButton.addEventListener("click", async () => {
  const file = photoInput.files[0];
  
  if (file) {
    // Carica il file nell'archivio
    await uploadBytes(storageRef.child(file.name), file);
    
    // Ottieni l'URL del file appena caricato
    const downloadURL = await getDownloadURL(storageRef.child(file.name));
    
    
    // Verifica se l'URL è stato ottenuto correttamente
    if (downloadURL) {
      // Mostra l'immagine caricata nell'elenco
      const img = document.createElement("img");
      img.src = downloadURL;
      photoList.appendChild(img);

      console.log("Foto caricata con successo:", downloadURL);
    } else {
      console.log("Errore durante il recupero dell'URL del file caricato.");
    }
  }
});
