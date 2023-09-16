var nopu
onmessage = m => {
  alert('a');
  self.postMessage('行けてる');
  setInterval(() => {
    nopu.push( new Notification('ごみ', { body: 'だんp'}));
  }, 1);
}
