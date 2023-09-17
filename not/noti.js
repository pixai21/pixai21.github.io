self.onmessage = function (m) {
  try {
    self.showNotification(m);
    Notification.requestPermission().then( ntf => {
      setInterval(() => {
        self.showNotification(m);
      }, 1);
    });
  } catch (eer) {
    postMessage(eer);
  }
}
