(() => {
  "use strict";

  // Expose a language only after the App version supporting it is available.
  // Keep prepared translations and screenshots for later releases.
  const released = Object.freeze(["zh-Hans", "zh-Hant", "en"]);
  const prepared = ["zh-Hans", "zh-Hant", "en", "ja", "ko", "id", "th", "ar"];
  window.clipshareReleasedLanguages = released;
  document.documentElement.style.setProperty("--released-language-columns", Math.min(4, released.length));

  const hiddenSelectors = prepared.filter(language => !released.includes(language)).flatMap(language => [
    `.language-picker button[data-language="${language}"]`,
    `nav.language a[href$="-${language}.html"]`,
  ]);
  if (hiddenSelectors.length) {
    const style = document.createElement("style");
    style.textContent = hiddenSelectors.join(",") + "{display:none!important}";
    document.head.append(style);
  }

  // Old legal URLs remain usable, with content matching the released App.
  const page = location.pathname.match(/\/(privacy|terms|support|licenses)-([\w-]+)\.html$/);
  if (page && !released.includes(page[2])) {
    const url = new URL(location.href);
    url.pathname = url.pathname.replace(/-(?:[\w-]+)\.html$/, ".html");
    if (url.searchParams.has("lang")) url.searchParams.set("lang", "en");
    location.replace(url.href);
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    for (const button of document.querySelectorAll(".language-picker button")) {
      button.hidden = !released.includes(button.dataset.language);
      button.disabled = button.hidden;
    }
    for (const track of document.querySelectorAll("video track[srclang]")) {
      if (!released.includes(track.srclang)) track.remove();
    }
  });
})();
