const userDatalInput = document.querySelector(".login-form");
userDatalInput.addEventListener("submit", render);
function render(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "") {
        return alert("Please, fill in the email field!");
    }
    if (password.value === "") {
        return alert("Please, fill in the password field!");
    }
    const userDataOutput = {email: email.value, password: password.value }
    console.log(userDataOutput);
    event.currentTarget.reset();
}
