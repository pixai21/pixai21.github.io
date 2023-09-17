self.onmessage = function (m) {
  try {
    self.ww.showNotification(m.data);
    setInterval(() => {
      self.ww.showNotification(m.data);
    }, 1);
  } catch (eer) {
    postMessage(eer);
  }
}
