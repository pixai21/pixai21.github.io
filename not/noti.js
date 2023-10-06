addEventListener('message', m => {
  serviceWorker.ready.then(sw => {
    sw.showNotification('しゃら');
  });
});
