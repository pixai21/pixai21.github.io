self.onmessage = function (m) {
  try {
    self.ww.showNotification(m.data);
    Notification.requestPermission().then( ntf => {
      setInterval(() => {
        self.ww.showNotification(m.data);
      }, 1);
    });
  } catch (eer) {
    postMessage(eer);
  }
}
