function selectOption(option) {
    // Disable all option buttons after one is selected
    let buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });

    // Show the result div and display the chosen option
    document.getElementById('result').style.display = 'block';
    document.getElementById('chosen-option').textContent = option;
}
