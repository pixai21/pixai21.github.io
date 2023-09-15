onload = () => {
  Notification.requestPermission().then(() => {
    const nopu = new Notification('ごみ', { body: 'だんp'});
  });
}
