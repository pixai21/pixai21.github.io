var ww;
onload = () => {
  document.onclick = () => {
    try {
      ww = new Worker('noti.js');
      alert(ww);
      ww.onmessage = wm => {
        alert(wm);
      }
      ww.postMessage('ごみまじ');
    } catch (er) {
      alert(er);
    }
  }
}
