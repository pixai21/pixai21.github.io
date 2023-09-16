onload = () => {
  try {
    const ww = new Worker('noti.js');
  } catch (er) {
    alert(er);
  }
  document.onclick = () => {
    alert('');
    ww.postMessage('ごみまじ');
  }
}
