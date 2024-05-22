import data from "./data.js";
import Cardlist from "./components/Cardlist.js";

const license = {
  license: "Unsplash License",
  licenseURL: "https://unsplash.com/license",
};
const newData = data.map((imgData) => {
  const newImgData = { ...imgData, ...license };
  return newImgData;
});
const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = Cardlist(newData);

/**
 * Light/dark mode feature
 */
const toggle = document.querySelector(".toggle");
const docElem = document.documentElement;

const displayModeOnLoad = () => {
  if (
    window.window.matchMedia &&
    matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    docElem.classList.add("dark");
    toggle.setAttribute("aria-pressed", true);
  } else {
    docElem.classList.add("light");
    toggle.setAttribute("aria-pressed", false);
  }
};
displayModeOnLoad();

const toggleDisplayMode = () => {
  if (toggle.getAttribute("aria-pressed") === "true") {
    toggle.removeAttribute("aria-pressed");
  } else {
    toggle.setAttribute("aria-pressed", true);
  }
  docElem.classList.toggle("dark");
  docElem.classList.toggle("light");
};

toggle.addEventListener("click", () => toggleDisplayMode());
