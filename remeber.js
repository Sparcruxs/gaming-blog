document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    // Load saved username if "Remember Me" was checked
    if (localStorage.getItem("rememberMe") === "true") {
        usernameInput.value = localStorage.getItem("username") || "";
        rememberMeCheckbox.checked = true;
    }

    // Save username and "Remember Me" state on form submission
    document.querySelector("form").addEventListener("submit", () => {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", usernameInput.value);
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("username");
            localStorage.setItem("rememberMe", "false");
        }
    });
});
