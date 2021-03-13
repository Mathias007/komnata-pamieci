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

// Handle scrolling page

let opacity;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    document.querySelectorAll("section").forEach((section, index) => {
        let scrolledOpacity =
            currentScroll / section.offsetTop !== 0
                ? currentScroll / section.offsetTop
                : 1;
        if (section.offsetTop - currentScroll <= 0) {
            opacity = 1;
            section.style.opacity = opacity;
        } else {
            opacity = scrolledOpacity <= 1 ? scrolledOpacity : 1;
            section.style.opacity = opacity;
        }
    });
});
