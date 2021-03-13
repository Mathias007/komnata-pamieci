import { toggleNav } from "./navigation.js";
import { getHistoryData } from "./forumHistory.js";

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navigationElements = document.querySelectorAll("#navigation > ul > li");

const historyDataURL = "./data/history.json";

// On Load
getHistoryData(historyDataURL);

// Event Listeners
menuBars.addEventListener("click", () => toggleNav(menuBars, overlay));
navigationElements.forEach((navEl) => {
    navEl.addEventListener("click", () => toggleNav(menuBars, overlay));
});
