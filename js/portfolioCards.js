/**
 * 
 * @param {string} projectName
 */
const chooseProject = (projectName) => {
    let title, description;
    switch (projectName) {
        case "frame-ripper":
            title = "YouTube Frame Ripper";
            description = "a";
            setProjectInformation(title, description);
            break;
        case "pybot":
            title = "Discord PyBot";
            description = "b";
            setProjectInformation(title, description);
            break;
        case "shpe-app":
            title = "TAMU SHPE App";
            description = "c";
            setProjectInformation(title, description);
            break;
    }

    // Removes project-card-selected from each card
    document.getElementById("frame-ripper-card").classList.remove("project-card-selected");
    document.getElementById("pybot-card").classList.remove("project-card-selected");
    document.getElementById("shpe-app-card").classList.remove("project-card-selected");

    var selectedCard = document.getElementById(projectName + "-card")
    selectedCard.className = selectedCard.className + " project-card-selected";
}

/**
 * Sets the information of the project selected.
 * @param {string} title 
 * @param {string} description 
 */
const setProjectInformation = (title, description) => {
    var titleElement = document.getElementById("project-title");
    var descriptionElement = document.getElementById("project-description");

    titleElement.textContent = title;
    descriptionElement.textContent = description;
}
