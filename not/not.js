addEventListener("fetch", (e) => {
  var c = clients.get('');
  c.postMessage('m');
});
