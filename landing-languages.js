(() => {
  "use strict";

  // Website languages can launch independently of App Store availability.
  const released = Object.freeze(["zh-Hans", "zh-Hant", "en", "ja", "ko", "id", "th", "ar", "es", "fr", "de", "pt-BR", "it"]);
  window.clipshareReleasedLanguages = released;

})();
