const changelogContainer = document.getElementById("changelog");

// Get Changelog Data
export async function getChangelogData(dataURL) {
    await fetch(dataURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            generateChangelog(data);
        });
}

function generateChangelog(changes) {
    Object.entries(changes).forEach(([version, info]) => {
        // Create DOM elements (and separator string)
        const changeElement = document.createElement("div");
        const changeHeader = document.createElement("h3");
        const changeDateSpan = document.createElement("span");
        const changeVersionSpan = document.createElement("span");
        const changeList = document.createElement("ul");
        const separator = " - ";

        // Add classes for created elements
        changeElement.classList.add("changelog__change-element");
        changeHeader.classList.add("change-element__header");
        changeDateSpan.classList.add("change-element__date");
        changeVersionSpan.classList.add("change-element__version");
        changeList.classList.add("change-element__list");

        // Fill span elements and place them to the header
        changeDateSpan.textContent = info["date"];
        changeVersionSpan.textContent = `Wersja nr ${version}`;
        changeHeader.append(changeVersionSpan, separator, changeDateSpan);

        // Iterating changes array, create list elements and append them to the list as children
        info["changes"].forEach((change, index) => {
            const singleChangeElement = document.createElement("li");
            singleChangeElement.classList.add("change-element__item");
            singleChangeElement.textContent = change;
            changeList.appendChild(singleChangeElement);
        });

        // Append header and list to the main element and next append main element to the changelog container
        changeElement.append(changeHeader, changeList);
        changelogContainer.appendChild(changeElement);
    });
}
