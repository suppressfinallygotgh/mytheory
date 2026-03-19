const veckurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/veck.js?1=" + Date.now();
const smashkartsurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/main.js?1=" + Date.now();

const website = window.location.hostname;
let URL;
console.log("Current website:", website);

switch (website) {
  case "veck.io":
    URL = veckurl;
    break;
  case "smashkarts.io":
    URL = smashkartsurl;
    break;
  default:
    console.warn("No URL found for this site");
}

console.log("Fetching URL:", URL);

if (URL) {
  fetch(URL)
    .then(r => r.text())
    .then(code => {
      try {
        Function(code)();
      } catch (e) {
        console.error("Error executing fetched code:", e);
      }
    })
    .catch(console.error);
}
