const switchLanguages = document.querySelector(".switch-languages");
const language = document.querySelector(".language");

switchLanguages.addEventListener("click", SwitchLanguagesFunction);

function SwitchLanguagesFunction() {
   if (language.textContent == "EN") {
      language.textContent = "VN";
   } else {
      language.textContent = "EN";
   }
}
