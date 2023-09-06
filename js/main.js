/**
 * Modifies main-css theme to link to css stored in localStorage item "CSShref"
 * If CSShref doesn't exist, defaults to "./css/sunshine.css"
 */
const updateTheme = () => {
    const theme = document.getElementById("theme")
    const href = localStorage.getItem("CSShref");
    if (href) {
        theme.setAttribute('href', href);
    }
    else {
        localStorage.setItem("CSShref", "./css/sunshine.css");
        theme.setAttribute('href', "./css/sunshine.css");
    }
};

/**
 * Toggles theme stored in localStorage item "CSShref" and updates document to have said theme
 */
const toggleTheme = () => {
    const href = localStorage.getItem("CSShref");
    switch (href) {
        case "./css/sunshine.css":
            localStorage.setItem("CSShref", "./css/moonlight.css");
            break;
        case "./css/moonlight.css":
            localStorage.setItem("CSShref", "./css/sunshine.css");
            break;
        default:
            localStorage.setItem("CSShref", "./css/sunshine.css")
    }
    updateTheme();
}

window.addEventListener("load", () => {
    updateTheme();
});
