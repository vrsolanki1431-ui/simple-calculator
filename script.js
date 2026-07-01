const screen = document.getElementById("screen");

function appendValue(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}


function calculate() {

    if (screen.value === "") {
        return;
    }

    try {

        let expression = screen.value;

        // × aur ÷ ko JavaScript Operators me Convert Karega
        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");

        screen.value = eval(expression);

    }

    catch {

        screen.value = "Error";

    }
}



function toggleTheme(){

    document.body.classList.toggle("light");

    let btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("light"))
    {
        btn.innerHTML="🌞";
    }
    else
    {
        btn.innerHTML="🌙";
    }

}