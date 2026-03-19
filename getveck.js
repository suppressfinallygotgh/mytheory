const veckurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/veck.js?1=" + Date.now();
const smashkartsurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/main.js?1=" + Date.now();

const website = document.location.host
let URL
console.log(website)
switch (website) {
  case "https://veck.io":
    URL = veckurl
    break;
  case "https://smashkarts.io":
    URL = smashkartsurl
    break;
}
console.log(URL)
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
