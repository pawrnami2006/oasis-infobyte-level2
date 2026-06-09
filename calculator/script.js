const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let ans = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "ENTER") {

            try {
                const result = eval(display.value);

                display.value = result;
                ans = result;
            }

            catch {
                display.value = "Error";
            }

        }

        else if (value === "ans") {
            display.value += ans;
        }

        else if (value === "√") {

            try {
                const result = Math.sqrt(eval(display.value));

                display.value = result;
                ans = result;
            }

            catch {
                display.value = "Error";
            }

        }

        else if (value === "%") {

            try {
                const result = eval(display.value) / 100;

                display.value = result;
                ans = result;
            }

            catch {
                display.value = "Error";
            }

        }

        else if (value === "±") {

            if (display.value !== "") {
                display.value = Number(display.value) * -1;
            }

        }

        else {

            display.value += value;

        }

    });

});
