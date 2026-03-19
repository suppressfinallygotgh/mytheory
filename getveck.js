const siteConfig = {
  "veck.io": {
    mainScript: "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/mytheory@main/veck.js",
    metadata: "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata39fixed67hehe"
  },
  "smashkarts.io": {
    mainScript: "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/mytheory@main/sk.js",
    metadata: "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata31fixed5"
  }
};
const website = window.location.hostname;
const config = siteConfig[website];

if (!config) {
  console.warn("No cheat found for this site:", website);
} else {
  const versionUrl = `${config.metadata}?t=${Date.now()}`;
  const mainUrl = `${config.mainScript}?t=${Date.now()}`;

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
    console.log("rawr1")
    await fetchAndRun(versionUrl);
    console.log("rawr2")
    await fetchAndRun(mainUrl);
  })();
}
