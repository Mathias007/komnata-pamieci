const tableBody = document.getElementById("tableBody");

const bannedDataURL = "../data/banned.json";

let userProfilePath = "";

// Get History Data
async function getTableData(dataURL) {
    await fetch(dataURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // save path data to variable
            userProfilePath = data["userProfilePath"];

            // call function to generate table body using received data
            generateBannedTable(data["bannedUsersArray"]);
        });
}

function generateBannedTable(bannedUsersData) {
    bannedUsersData.map((bannedUser, index) => {
        // destructurize single events properties
        const {
            number,
            userID,
            userName,
            banDate,
            reason,
            issuerName,
            issuerID,
            banStatus,
            comment,
        } = bannedUser;

        // Create row
        const rowElement = document.createElement("tr");
        rowElement.textContent = number;

        const userDrawer = document.createElement("td");
        if (typeof userID === "number") {
            const userLink = document.createElement("a");
            userLink.href = `${userProfilePath}${userID}`;
            userLink.textContent = userName;
            userDrawer.appendChild(userLink);
        } else if (Array.isArray(userID)) {
            userID.forEach((id, index) => {
                const userLink = document.createElement("a");
                userLink.href = `${userProfilePath}${id}`;
                userLink.textContent = userName[index];
                userDrawer.appendChild(userLink);
            });
        }

        const dateDrawer = document.createElement("td");
        dateDrawer.textContent = banDate;

        const reasonDrawer = document.createElement("td");
        reasonDrawer.textContent = reason;

        const issuerDrawer = document.createElement("td");
        const issuerLink = document.createElement("a");
        issuerLink.href = `${userProfilePath}${issuerID}`;
        issuerLink.textContent = issuerName;
        issuerDrawer.appendChild(issuerLink);

        const statusDrawer = document.createElement("td");
        statusDrawer.textContent = banStatus;

        const commentDrawer = document.createElement("td");
        commentDrawer.textContent = comment;

        rowElement.append(
            userDrawer,
            dateDrawer,
            reasonDrawer,
            issuerDrawer,
            statusDrawer,
            commentDrawer
        );

        tableBody.appendChild(rowElement);
    });
}

getTableData(bannedDataURL);
