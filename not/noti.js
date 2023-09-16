onmessage = function (m) {
  var nopu;
  postMessage('行けてる');
  setInterval(() => {
    nopu.push( new Notification('ごみ', { body: 'だんp'}));
  }, 1);
}
