function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        var result = eval(display.value);
        alert("Resultado: " + result);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
