const toggle = document.querySelector("[data-lang-toggle]");
const translatable = document.querySelectorAll("[data-en][data-zh]");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

function setLanguage(language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  translatable.forEach((node) => {
    node.textContent = node.dataset[language];
  });
  toggle.textContent = language === "zh" ? "EN" : "中文";
  window.localStorage.setItem("ssa-language", language);
}

const savedLanguage = window.localStorage.getItem("ssa-language");
const defaultLanguage = savedLanguage || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");

setLanguage(defaultLanguage);

toggle.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "zh-CN" ? "en" : "zh";
  setLanguage(nextLanguage);
});
