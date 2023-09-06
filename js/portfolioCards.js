const projectInfo = {
    "frame-ripper": {
        title: "YouTube Frame Ripper",
        description: "Originally, I had created 'YouTube Frame Ripper' because I wanted my discord bot to display some video frames on it's status in text-form. However, when I started developing it further, I realized that this was my chance to actually start learning JavaScript and improve my skills as a developer. The project's scope quickly turned from 'display some frames in text-form' to 'extract all the frames from a YouTube video and convert each of them in to an easily parsable text-based format'.",
        githubURL: "https://github.com/LucientZ/YouTube-Frame-Ripper",
        showcaseURL: "https://www.youtube.com/watch?v=HWIbUDLiNBs",
        image1: "./assets/frame-ripper-1.gif",
        image2: "./assets/frame-ripper-2.png",
        image3: "./assets/frame-ripper-3.png",
    },
    "pybot": {
        title: "Discord PyBot",
        description: "'Discord PyBot' is my pride and joy. I consider it to be my first ever independent coding project and my first proper experience to Git and GitHub. The bot was originally coded in javascript but now runs on python since discord.py seemed a lot friendlier to my skillset at the time (and to be fair, it still is).",
        githubURL: "https://github.com/LucientZ/DiscordPyBot",
        showcaseURL: "https://lucientz.github.io/DiscordPyBot/",
        image1: "./assets/pybot-1.png",
        image2: "./assets/pybot-2.png",
        image3: "./assets/pybot-3.png",
    },
    "shpe-app": {
        title: "TAMU SHPE App",
        description: "The TAMU SHPE App is a project in the making. This is the main project I'm currently working right now and has been in development since Spring of 2023. Since working on it, I have gained experience working with React, React-Native, Typescript, and Firebase. Unfortunately, because of the nature of the project, I cannot link the GitHub repo. However, here are some screenshots of what I've worked on:",
        githubURL: "",
        showcaseURL: "",
        image1: "./assets/shpe-app-1.png",
        image2: "./assets/shpe-app-2.png",
        image3: "./assets/shpe-app-3.png",
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
 * @param {string} title - Title of the project
 * @param {string} description - Description of the project
 * @param {string} githubURL - URL of github repo
 * @param {string} showcaseURL - URL of project showcase
 * @param {string} image1 - URI/URL of first screenshot
 * @param {string} image2 - URI/URL of second screenshot
 * @param {string} image3 - URI/URL of third screenshot
 */
const setProjectInformation = ({ title, description, githubURL, showcaseURL, image1, image2, image3 }) => {
    var titleElement = document.getElementById("project-title");
    var descriptionElement = document.getElementById("project-description");
    var githubURLElement = document.getElementById("project-github-link");
    var showcaseURLElement = document.getElementById("project-showcase-link");

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    if (githubURL) {
        githubURLElement.setAttribute("href", githubURL);
        githubURLElement.textContent = githubURL;
    }
    else {
        githubURLElement.setAttribute("href", "");
        githubURLElement.textContent = "No URL Specified";
    }

    if (showcaseURL) {
        showcaseURLElement.setAttribute("href", showcaseURL);
        showcaseURLElement.textContent = showcaseURL;
    }
    else {
        showcaseURLElement.setAttribute("href", "");
        showcaseURLElement.textContent = "No URL Specified";
    }

    document.getElementById("image1").setAttribute("src", image1);
    document.getElementById("image2").setAttribute("src", image2);
    document.getElementById("image3").setAttribute("src", image3);
}

window.addEventListener("load", () => {
    chooseProject("pybot");
});
