addEventListener('message', m => {
  fetch('');
  addEventLister('message', m => {
    m.source.showNotification('しゃら');
  });
});
