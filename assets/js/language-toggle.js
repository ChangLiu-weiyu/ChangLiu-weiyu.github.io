(function () {
  var defaultLanguage = "en";
  var currentLanguage = defaultLanguage;

  function applyLanguage(language) {
    document.documentElement.setAttribute("data-language", language);
    document.documentElement.setAttribute("lang", language === "zh" ? "zh-CN" : "en");

    var translatableItems = document.querySelectorAll("[data-i18n-en][data-i18n-zh]");
    for (var i = 0; i < translatableItems.length; i += 1) {
      var item = translatableItems[i];
      item.textContent = item.getAttribute("data-i18n-" + language);
    }

    var toggle = document.querySelector("[data-language-toggle]");
    if (toggle) {
      toggle.textContent = language === "zh" ? "EN" : "中文";
      toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLanguage);

    var toggle = document.querySelector("[data-language-toggle]");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      currentLanguage = document.documentElement.getAttribute("data-language") === "zh" ? "en" : "zh";
      applyLanguage(currentLanguage);
    });
  });
}());
