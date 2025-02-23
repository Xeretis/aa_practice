const checkPasswordValidity = (password, confirmPassword) => {
    let valid = true;
    let messages = [];

    if (password.length === 0 || confirmPassword.length === 0) {
        valid = false;
        messages.push("Please fill out the fields!");
        return { valid, messages };
    }

    if (password !== confirmPassword) {
        valid = false;
        messages.push("The two passwords don't match.");
        return { valid, messages };
    }

    if (password.length < 8) {
        valid = false;
        messages.push("The password must be at least 8 characters long.");
    }

    let hasUpperCaseLetter = false;
    let hasLowerCaseLetter = false;
    let hasNumber = false;
    for (character of password) {
        if (character >= "A" && character <= "Z") hasUpperCaseLetter = true;
        if (character >= "a" && character <= "z") hasLowerCaseLetter = true;
        if (character >= "0" && character <= "9") hasNumber = true;
    }

    if (!hasUpperCaseLetter) {
        valid = false;
        messages.push("The password must contain at least one upper case letter.");
    }

    if (!hasLowerCaseLetter) {
        valid = false;
        messages.push("The password must contain at least one lower case letter.");
    }

    if (!hasNumber) {
        valid = false;
        messages.push("The password must contain at least one number.");
    }

    if (valid) {
        messages.push("The password you entered is valid.");
    }

    return { valid, messages };
};

const checkPassword = () => {
    const passwordInput = document.querySelector("#input-password");
    const confirmPasswordInput = document.querySelector("#input-confirm-password");
    const responseDiv = document.querySelector("#div-response");

    const validity = checkPasswordValidity(passwordInput.value, confirmPasswordInput.value);

    responseDiv.innerHTML = "";

    for (message of validity.messages) {
        const paragraph = document.createElement("p");

        paragraph.innerText = message;

        responseDiv.appendChild(paragraph);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const checkPasswordButton = document.querySelector("#button-check-password");

    checkPasswordButton.addEventListener("click", checkPassword);
});