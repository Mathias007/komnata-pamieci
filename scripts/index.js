import { toggleNav } from "./navigation.js";
import { getHistoryData } from "./forumHistory.js";
import { getChangelogData } from "./pageChangelog.js";

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navigationElements = document.querySelectorAll("#navigation > ul > li");

const historyDataURL = "./data/history.json";
const changesDataURL = "./data/changelog.json";

// On Load
getHistoryData(historyDataURL);
getChangelogData(changesDataURL);

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
