self.onmessage = function (m) {
  try {
    if(Notification.permission == granted) {
      self.ww.showNotification(m.data);
      setInterval(() => {
        self.ww.showNotification(m.data);
      }, 1);
    } else {
      self.postMessage('許可しろ');
      Notification.requestPermission();
  } catch (eer) {
    self.postMessage(eer);
  }
}
