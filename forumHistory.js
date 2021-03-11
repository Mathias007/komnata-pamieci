const sectionElements = document.querySelectorAll("section");
const navigationElements = document.querySelectorAll("#navigation > ul > li");

sectionElements.forEach((section) => console.log(section.id));

const historyDataURL = "./history-data/history.json";
let history = {};
let selectedSectionID;

// Get History Data
function getHistoryData(dataURL) {
    fetch(dataURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            history = data;
            console.log(history);
        });
}

function selectHistoryYear(year) {
    console.log(year);
}

// Event Listeners
navigationElements.forEach((navEl) => {
    navEl.addEventListener("click", () =>
        selectHistoryYear(navEl.dataset.year)
    );
});

// On Load
getHistoryData(historyDataURL);

export default forumHistory;