// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
    apiKey: "AIzaSyBIQuGgnvuI9p5TDH6j19l8A3BUmjZOjv0",
    authDomain: "salandra-lovers.firebaseapp.com",
    databaseURL: "https://salandra-lovers-default-rtdb.firebaseio.com",
    projectId: "salandra-lovers",
    storageBucket: "salandra-lovers.appspot.com",
    messagingSenderId: "851379002062",
    appId: "1:851379002062:web:89be0c914575b8c1840e9f"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Riferimento al tuo database
  const database = firebase.database();
  
  // Gestisci il caricamento di una foto e una descrizione
  function caricaFotoENomeUtente(fotoURL, descrizione, nomeUtente) {
    const nuovaFotoRef = database.ref("salandragram").push();
    nuovaFotoRef.set({
      fotoURL: fotoURL,
      descrizione: descrizione,
      nomeUtente: nomeUtente
    });
  }
  
  // Aggiungi un gestore di eventi al pulsante "+"
  const pulsanteCarica = document.getElementById("pulsanteCarica");
  pulsanteCarica.addEventListener("click", () => {
    const fotoURL = document.getElementById("inputFoto").value;
    const descrizione = document.getElementById("inputDescrizione").value;
    const nomeUtente = document.getElementById("inputNomeUtente").value;
  
    // Chiama la funzione per caricare la foto e la descrizione
    caricaFotoENomeUtente(fotoURL, descrizione, nomeUtente);
  });
  