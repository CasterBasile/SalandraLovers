const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per il parsing dei dati JSON
app.use(express.json());

// Array per memorizzare la classifica
const classifica = [];

// Aggiungi giocatore e punteggio alla classifica
app.post("/aggiungi-punteggio", (req, res) => {
  const { nome, punteggio } = req.body;
  classifica.push({ nome, punteggio });
  res.status(200).json({ success: true });
});

// Ottieni la classifica
app.get("/classifica", (req, res) => {
  // Ordina la classifica in base al punteggio decrescente
  const classificaOrdinata = classifica.sort((a, b) => b.punteggio - a.punteggio);
  res.status(200).json(classificaOrdinata);
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
