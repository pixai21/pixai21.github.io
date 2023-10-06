addEventListener('message', m => {
  navigator.serviceWorker.ready.then(sw => {
    sw.showNotification('しゃら');
  });
});
