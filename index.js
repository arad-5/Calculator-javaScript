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
            document.querySelector(".parenthesis").textContent = "(";
            return;
        case "=":
            //validity
            if (!new RegExp("^([a-z]{0,})$").test(display.textContent)) {
                // ^^^ because we will have eval function we must make sure input is not containing alphabetic characters.
                const willBeCalculated = display.textContent.replace("−", "-").replace("÷", "/").replace("×", "*"); // this will replace math sign operators to computer math signs.
                try {
                    const result = eval(willBeCalculated);
                    display.textContent = result;
                } catch{
                    display.textContent = "Error!";
                    setTimeout(() => {
                        display.textContent = 0;
                    }, 600);
                }
            }
            return;
        case "(":
        case ")":
            event.target.textContent = event.target.textContent == "(" ? ")" : "("; // this is for switching (open , close) paranthesis in button
        default:
            break;
    }
    if(event.target.className.includes("operator")) { // this statements are for not allowing two operator signs stand next to each other
        if(display.textContent.charAt(display.textContent.length - 1) === event.target.textContent) return;
    }
    if (display.innerText === "0") { // this statement is for deleting 0 when user starts
        event.target.textContent === "." ? display.textContent += input : display.textContent = input;
    } else {
        display.textContent += input;
    }
});
document.getElementById("theme").addEventListener("click", (event) => {
    if (event.target.textContent === "☀️") {
        document.body.style.backgroundColor = "#aeaeae";
        event.target.textContent = "🌙";
    } else {
        document.body.style.backgroundColor = "#000";
        event.target.textContent = "☀️";
    }
});
