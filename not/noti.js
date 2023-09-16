onmessage = function (m) {
  var nopu;
  alert('a');
  postMessage('行けてる');
  setInterval(() => {
    nopu.push( new Notification('ごみ', { body: 'だんp'}));
  }, 1);
}
