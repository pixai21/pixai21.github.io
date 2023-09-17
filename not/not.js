//var ww;
onload = () => {
  document.onclick = () => {
    try {
      //ww = new Worker('noti.js');
      navigator.serviceWorker.register('noti.js', ww => {
        alert(ww);
        ww.onmessage = wm => {
          alert(wm.data);
        }
        ww.postMessage('ごみまじ');
      });
    } catch (er) {
      alert(er);
    }
  }
}
