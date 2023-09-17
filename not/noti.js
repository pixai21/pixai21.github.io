onmessage = function (m) {
  var nopu;
  try {
    postMessage('行けてる');
    Notification.requestPermission().then( ntf => {
      setInterval(() => {
        //const nft = new Notification('ごみやけん');
        navigator.serviceWorker.ready.then( regist => {
          nopu = new Notification('ヨシ');
          regist.showNotification(nopu);
        });
      }, 1);
    });
  } catch (eer) {
    postMessage(eer);
  }
}
