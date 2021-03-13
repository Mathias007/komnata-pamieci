const sectionElements = document.querySelectorAll("section");

let topicUrlPath = "";
let poolUrlPath = "";

// Get History Data
export async function getHistoryData(dataURL) {
    await fetch(dataURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            topicUrlPath = data["topicUrlPath"];
            poolUrlPath = data["poolUrlPath"];
            generateHistoryYearSections(data);
        });
}

function buildHistoryListItem(forumHistoryYear, list) {
    forumHistoryYear.map((event, index) => {
        const { date, id, title, addition } = event;
        const listItem = document.createElement("li");
        listItem.classList.add("history__event");
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("history__event-date");
        dateSpan.textContent = date;
        const topicLink = document.createElement("a");
        topicLink.classList.add("history__event-link");
        const separator = " - ";
        if (event.hasOwnProperty("type")) {
            topicLink.href = `${poolUrlPath}${id}`;
        } else {
            topicLink.href = `${topicUrlPath}${id}`;
        }
        topicLink.textContent = title;
        listItem.append(dateSpan, separator, topicLink);
        if (event.hasOwnProperty("addition")) {
            const additionSpan = document.createElement("span");
            additionSpan.classList.add("history__event-addition");
            additionSpan.textContent = addition;
            listItem.appendChild(additionSpan);
        }

        list.appendChild(listItem);
    });
}

function generateHistoryYearSections(forumHistory) {
    if (forumHistory) {
        sectionElements.forEach((section, index) => {
            const list = section.querySelector(".history__text-list");
            if (Object.keys(forumHistory).includes(section.id)) {
                buildHistoryListItem(forumHistory[section.id], list);
            } else {
                console.log("Nie znaleziono danych pod pobranym kluczem");
            }
        });
    }
}
