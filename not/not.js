//var ww;
onload = () => {
  document.onclick = () => {
    try {
      //ww = new Worker('noti.js');
      navigator.serviceWorker.register('noti.js').then();
      navigator.serviceWorker.ready.then( ww => {
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
