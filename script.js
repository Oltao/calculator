const display = document.getElementById('display');

function calculatoOperation(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function equalTo() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR!";
    }
}

function deleteOperand() {
    let currentResult = display.value;
    let deletedResult = currentResult.slice(0, -1);
    display.value = deletedResult;
}