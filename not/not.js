var ww;
onload = () => {
  try {
    ww = new Worker('noti.js');
  } catch (er) {
    alert(er);
  }
  document.onclick = () => {
    ww.postMessage('ごみまじ');
  }
}
