// =========================
// SIGN UP
// =========================

let signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("signupName").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("playbookUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });
}


// =========================
// LOGIN
// =========================

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let savedUser =
            JSON.parse(localStorage.getItem("playbookUser"));

        if (savedUser &&
            email === savedUser.email &&
            password === savedUser.password) {

            localStorage.setItem("loggedIn", "true");

            alert("Login successful!");

            window.location.href = "index.html";

        } else {

            document.getElementById("loginMessage").innerText =
                "Invalid email or password.";

        }

    });
}


// =========================
// SHOW USER NAME IN HEADER
// =========================

let user = JSON.parse(localStorage.getItem("playbookUser"));
let loggedIn = localStorage.getItem("loggedIn");

let userArea = document.getElementById("userArea");

if (user && loggedIn === "true" && userArea) {

    userArea.innerHTML = `
        <span class="user-name">
            Hi, ${user.name} 👋
        </span>

        <button class="logout-btn" onclick="logout()">
            Logout
        </button>
    `;
}


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.reload();

}
// booking 
localStorage.setItem("bookings", JSON.stringify(bookings));