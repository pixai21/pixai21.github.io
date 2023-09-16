onmessage = function (m) {
  var nopu;
  postMessage('行けてる');
  Notification.requestPermission().then(ntf => {
    setInterval(() => {
      const nft = new Notification('ごみやけん');
    }, 1);
  });
}
