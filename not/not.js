addEventListener("fetch", (e) => {
  const c = clients.get('');
  c.postMessage('m');
});
