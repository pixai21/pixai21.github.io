onload = () => {
  try {
    const ww = new Worker('https://pixai21.github.io/not/noti.js');
  } catch (er) {
    alert(er);
  }
  document.onclick = () => {
    alert('');
    ww.postMessage('ごみまじ');
  }
}
