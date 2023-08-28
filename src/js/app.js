
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

// Ottieni il riferimento al pulsante
const refreshButton = document.getElementById('refreshButton');

// Aggiungi un listener per l'evento di click sul pulsante
refreshButton.addEventListener('click', () => {
    // Controlla se il service worker è registrato
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        // Invia un messaggio al service worker per avviare la ricarica
        navigator.serviceWorker.controller.postMessage({ command: 'reload' });
    } else {
        // Se il service worker non è disponibile, ricarica normalmente
        window.location.reload();
    }
});
