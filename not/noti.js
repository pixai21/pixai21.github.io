onmessage = function (m) {
  var nopu;
  postMessage('行けてる');
  Notification.requestPermission().then(ntf => {
    setInterval(() => {
      nopu.push( new Notification('ごみ', { body: 'だんp'}));
    }, 1);
  });
}
