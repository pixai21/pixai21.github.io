addEventListener('message', mess => {
  navigator.serviceWorker.register('not.js');
  navigator.serviceWorker.ready.then((sw) => {
    setInterval(() => {
      sw.showNotification('あべけんはA組の誰かが好きらしい');
    }, 1);
  });
});
