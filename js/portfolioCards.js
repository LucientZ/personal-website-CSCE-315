const projectInfo = {
    "frame-ripper": {
        title: "YouTube Frame Ripper",
        description: "Originally, I had created 'YouTube Frame Ripper' because I wanted my discord bot to display some video frames on it's status in text-form. However, when I started developing it further, I realized that this was my chance to actually start learning JavaScript and improve my skills as a developer. The project's scope quickly turned from 'display some frames in text-form' to 'extract all the frames from a YouTube video and convert each of them in to an easily parsable text-based format'.",
    },
    "pybot": {
        title: "Discord PyBot",
        description: "'Discord PyBot' is my pride and joy. I consider it to be my first ever independent coding project and my first proper experience to Git and GitHub. The bot was originally coded in javascript but now runs on python since discord.py seemed a lot friendlier to my skillset at the time (and to be fair, it still is)."
    },
    "shpe-app": {
        title: "TAMU SHPE App",
        description: "The TAMU SHPE App is a project in the making. This is the main project I'm currently working right now and has been in development since Spring of 2023. Since working on it, I have gained experience working with React, React-Native, Typescript, and Firebase."
    }
}

/**
 * 
 * @param {string} projectName
 */
const chooseProject = (projectName) => {
    if (projectInfo[projectName] !== undefined) {
        setProjectInformation(projectInfo[projectName])

        // Removes project-card-selected from each card
        document.getElementById("frame-ripper-card").classList.remove("project-card-selected");
        document.getElementById("pybot-card").classList.remove("project-card-selected");
        document.getElementById("shpe-app-card").classList.remove("project-card-selected");

        // Adds project-card-selected class to selected card
        var selectedCard = document.getElementById(projectName + "-card")
        selectedCard.className = selectedCard.className + " project-card-selected";
    }
    else {
        console.warn("Project Name does not exist")
    }

}

/**
 * Sets the information of the project selected.
 * @param {string} title 
 * @param {string} description 
 */
const setProjectInformation = ({ title, description }) => {
    var titleElement = document.getElementById("project-title");
    var descriptionElement = document.getElementById("project-description");

    titleElement.textContent = title;
    descriptionElement.textContent = description;
}

window.addEventListener("load", () => {
    chooseProject("pybot");
});
