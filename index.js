const display = document.getElementById("result");
document.getElementsByTagName("button");
document.getElementById("buttons-container").addEventListener("click", (event) => {
    if (!(event.target.tagName === "BUTTON")) return; //this will pass only button.
    const input = event.target.textContent;
    switch (input) {
        case "⇐":
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent == "") {
                display.textContent = 0;
            }
            return;
        case "C":
            display.textContent = 0;
            return;
        case "C":
            display.textContent = 0;
            return;
        case "=":
            //validity
            if (!new RegExp("^([a-z]{0,})$").test(display.textContent)) {
                // ^^^ because we will have eval function we must make sure input is not containing alphabetic characters.
                const willBeCalculated = display.textContent.replace("−", "-").replace("÷", "/").replace("×", "*");
                const result = eval(willBeCalculated);
                display.textContent = result;
            }
            return;
        default:
            break;
    }

    if (display.innerText === "0") {
        display.textContent = input;
    } else {
        display.textContent += input;
    }
});
