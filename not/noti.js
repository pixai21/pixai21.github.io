self.onmessage = function (m) {
  try {
    Notification.requestPermission().then( ntf => {
      setInterval(() => {
        self.ww.showNotification(m.data);
      }, 1);
    });
  } catch (eer) {
    postMessage(eer);
  }
}
