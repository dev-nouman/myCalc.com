let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "C") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "00" || e.target.innerHTML == "000") {
            string += e.target.innerHTML;
            input.value = string;
        } else if (e.target.innerHTML == "%") {
            try {
                string = (eval(string) / 100).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }
    });
});
