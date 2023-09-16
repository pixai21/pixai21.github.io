onload = () => {
  const ww = new Worker('noti.js');
  Notification.requestPermission().then( n => {
  });
  document.onclick = () => {
    alert('');
    ww.postMessage('ごみまじ');
  }
}
