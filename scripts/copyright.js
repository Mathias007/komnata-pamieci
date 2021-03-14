const copyrightElement = document.getElementById("copyright");

export function generateCopyright() {
    const authorSpan = document.createElement("span");
    const websiteSpan = document.createElement("span");

    const authorLink = "https://github.com/Mathias007";
    const authorName = "Mateusz Mathias Stawowski";

    const websiteLink = "http://herosy3.pun.pl";
    const websiteName = "Tajemnice Antagarichu";

    authorSpan.innerHTML = `The Website created in 2021 by <a href="${authorLink}">${authorName}</a>.`;
    websiteSpan.innerHTML = `© Copyright <a href="${websiteLink}">${websiteName}</a> 2006–${getActualYear()}. All rights reserved.`;

    copyrightElement.append(authorSpan, websiteSpan);
}

function getActualYear() {
    let actualYear = new Date().getFullYear();
    return actualYear;
}
