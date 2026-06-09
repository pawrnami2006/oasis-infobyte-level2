async function registerUser() {

    const username =
        document.getElementById("regUsername").value;

    const email =
        document.getElementById("regEmail").value;

    const password =
        document.getElementById("regPassword").value;

    if (!username || !email || !password) {

        alert("Please fill all fields");
        return;

    }

    try {

        const response = await fetch(
            "https://oasis-infobyte-auth-backend.onrender.com/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            window.location.href = "login.html";

        }

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }
}



async function loginUser() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    try {

        const response = await fetch(
            "https://oasis-infobyte-auth-backend.onrender.com/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem(
                "token",
                data.token
            );

            window.location.href =
                "dashboard.html";

        }

        else {

            alert(data.message);

        }

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }
}



function logoutUser() {

    localStorage.removeItem("token");

    window.location.href =
        "login.html";

}