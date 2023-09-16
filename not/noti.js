onmessage = function (m) {
  var nopu;
  postMessage('行けてる');
  Notification.requestPermission().then(ntf => {
    setInterval(() => {
      nopu.push( new Notification('ごみ', { body: 'だんp', icon: 'https://abekenman.github.io;p/Abekenman.webp'}));
    }, 1);
  });
}
