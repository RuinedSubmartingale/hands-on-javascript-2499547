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
