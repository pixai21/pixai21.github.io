onload = () => {
  try {
    const ww = new Worker('noti.js');
    Notification.requestPermission();
  } catch (er) {
    alert(er);
  }
  document.onclick = () => {
    alert('');
    ww.postMessage('ごみまじ');
  }
}
