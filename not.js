onload = () => {
  const ww = new Worker('noti.js');
  Notification.requestPermission().then( n => {
    document.onclick = () => {
      ww.postMessage('ごみまじ');
    }
  });
}
