async function loadAndRun() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/suppressfinallygotgh/smashkarts/refs/heads/main/veck.js?1=" + Date.now());

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const code = await response.text();

    const script = document.createElement("script");
    script.textContent = code;
    document.body.appendChild(script);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

loadAndRun();
