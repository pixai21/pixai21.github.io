var ww;
onload = () => {
  document.onclick = () => {
    try {
      ww = new Worker('noti.js');
      ww.onmessage = wm => {
        alert(wm);
      }
      ww.postMessage('ごみまじ');
    } catch (er) {
      alert(er);
    }
  }
}
