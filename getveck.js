const veckurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/veck.js?1=" + Date.now();
const smashkartsurl = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/main.js?1=" + Date.now();

const metadata31url = "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata31fixed5";
const metadata39url = "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata39fixed67hehe";

const website = window.location.hostname;
let URL;
let version;

console.log("Current website:", website);

switch (website) {
  case "veck.io":
    URL = veckurl;
    version = metadata39url;
    break;
  case "smashkarts.io":
    URL = smashkartsurl;
    version = metadata31url;
    break;
  default:
    console.warn("No URL found for this site");
}

console.log(version)

async function fetchAndRun(scriptUrl) {
  if (!scriptUrl) return;
  try {
    const res = await fetch(scriptUrl);
    const code = await res.text();
    Function(code)();
    console.log(`Executed script: ${scriptUrl}`);
  } catch (e) {
    console.error(`Error fetching/executing ${scriptUrl}:`, e);
  }
}

(async () => {
  await fetchAndRun(version);
  await fetchAndRun(URL);
})();
