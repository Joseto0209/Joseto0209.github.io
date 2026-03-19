function updateDisplay() {
    var input = document.getElementById('userInput');
    var display = document.getElementById('displayArea');
    var value = input.value.trim();

    if (value) {
        display.textContent = value;
        display.classList.add('active');
        input.value = '';
    } else {
        display.textContent = 'Please type something first!';
        display.classList.remove('active');
    }
}

// Enter key to submit
document.getElementById('userInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        updateDisplay();
    }
});
