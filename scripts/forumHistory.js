const sectionElements = document.querySelectorAll("section");

let forumUrl = "";
let topicPath = "";
let poolPath = "";
let topicPidPath = "";

// Get History Data
export async function getHistoryData(dataURL) {
    await fetch(dataURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // save path data to variables
            forumUrl = data["forumUrl"];
            topicPath = data["topicPath"];
            poolPath = data["poolPath"];
            topicPidPath = data["topicPidPath"];

            // call functions to generate history using received data
            generateHistoryYearSections(data);
        });
}

function buildHistoryListItem(forumHistoryYear, list) {
    forumHistoryYear.map((event, index) => {
        // destructurize single events properties
        const { date, id, title, type, addition } = event;
        // create li and anchor elements)
        const listItem = document.createElement("li");
        listItem.classList.add("history__event");
        const topicLink = document.createElement("a");
        topicLink.classList.add("history__event-link");

        // fill href attribute of the anchor element, depending on event type (custom topic, topicPID, poll)
        if (!event.hasOwnProperty("specialField")) {
            if (event.hasOwnProperty("type")) {
                type === "poll"
                    ? (topicLink.href = `${forumUrl}${poolPath}${id}`)
                    : (topicLink.href = `${forumUrl}${topicPidPath}${id}`);
            } else {
                topicLink.href = `${forumUrl}${topicPath}${id}`;
            }
        } else {
            topicLink.classList.replace(
                "history__event-link",
                "history__event-special-field"
            );
        }

        // create and append obligatory elements inside anchor - date, separator, title
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("history__event-date");
        dateSpan.textContent = date;

        const separator = " - ";

        const titleSpan = document.createElement("span");
        titleSpan.classList.add("history__event-title");
        titleSpan.textContent = title;

        topicLink.append(dateSpan, separator, titleSpan);

        // create and append an optional span element inside anchor - additional info
        if (event.hasOwnProperty("addition")) {
            const additionSpan = document.createElement("span");
            additionSpan.classList.add("history__event-addition");
            additionSpan.textContent = addition;
            topicLink.appendChild(additionSpan);
        }

        // append anchor as li child, next append li as ul child
        listItem.appendChild(topicLink);
        list.appendChild(listItem);
    });
}

function generateHistoryYearSections(forumHistory) {
    if (forumHistory) {
        sectionElements.forEach((section, index) => {
            const list = section.querySelector(".history__text-list");
            if (Object.keys(forumHistory).includes(section.id)) {
                // call function to build DOM using data of each section
                buildHistoryListItem(forumHistory[section.id], list);
            }
        });
    }
}
