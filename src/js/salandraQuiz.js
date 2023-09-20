// Dichiara una variabile per memorizzare il punteggio del giocatore
let punteggio = 0;

// Dichiara una variabile per memorizzare il nome del giocatore
let nomeGiocatore = "";

// Riferimento agli elementi HTML
const nomeInput = document.getElementById("nomeGiocatore");
const avviaGiocoButton = document.getElementById("avviaGioco");
const domandeDiv = document.getElementById("domande");
const fineGiocoButton = document.getElementById("fineGioco");
const classificaOl = document.getElementById("classifica");

// Event listener per avviare il gioco
avviaGiocoButton.addEventListener("click", () => {
  nomeGiocatore = nomeInput.value;
  domandeDiv.style.display = "block";
  avviaGiocoButton.style.display = "none";
});

// Event listener per fine gioco
fineGiocoButton.addEventListener("click", () => {
  // Calcola il punteggio totale del giocatore (sostituisci con la logica delle domande)
  punteggio = 0;
  const risposte = document.querySelectorAll('input[type="radio"]:checked');
  risposte.forEach((risposta) => {
    if (risposta.value === "corretta") {
      punteggio += 1;
    }
  });

  // Invia il punteggio al server (sostituisci con la chiamata API al server)

  // Aggiungi il giocatore alla classifica
  const listItem = document.createElement("li");
  listItem.textContent = `${nomeGiocatore} - Punteggio: ${punteggio}`;
  classificaOl.appendChild(listItem);

  // Nascondi la sezione delle domande
  domandeDiv.style.display = "none";
});
