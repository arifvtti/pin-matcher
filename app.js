function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function getGeneratePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("keypad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    console.log(number);

    const displayNumbers = document.getElementById("typed-numbers");

    if (isNaN(number)) {
        if (number == "C") {
            displayNumbers.value = "";
        }
        else if (number == "<") {
            let numberString = displayNumbers.value + "";
            numberString = numberString.slice(0, -1);
            displayNumbers.value = numberString;
        }
    }
    else {
        displayNumbers.value = displayNumbers.value + number;
    }
})

function submitBtn() {
    const generatedPin = document.getElementById("display-pin").value;
    const typedPin = document.getElementById("typed-numbers").value;
    if (generatedPin == typedPin) {
        document.getElementById("fail-message").style.display = "none";
        document.getElementById("success-message").style.display = "block";

    }
    else {
        document.getElementById("success-message").style.display = "none";
        document.getElementById("fail-message").style.display = "block";
    }
}