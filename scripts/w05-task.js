/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((element) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = element.templeName;
        const imageElement = document.createElement("img");
        imageElement.src = element.imageUrl;
        imageElement.alt = element.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.push(...data);
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = () => {
    while (templeList.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

        case "nonutah":
            const nonUtahTemples = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break;

        case "older":
            const olderTemples = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        
        case "all":
            default:
                displayTemples(temples);
                break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});