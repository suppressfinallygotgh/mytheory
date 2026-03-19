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

  async function loadScript(url) {
    try {
      const res = await fetch(url);
      const code = await res.text();
      const script = document.createElement("script");
      script.textContent = code;
      document.documentElement.appendChild(script);
      console.log("Loaded script:", url);
    } catch (err) {
      console.error("Failed to load script:", url, err);
    }
  }

  (async () => {
    await loadScript(versionUrl);

    await new Promise(resolve => {
      const interval = setInterval(() => {
        if (window.UnityWebModkit && UnityWebModkit.Runtime) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });

    await loadScript(mainUrl);
  })();
}
