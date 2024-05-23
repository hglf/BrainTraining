document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const delayInput = document.getElementById('delayInput');
    const digitsInput = document.getElementById('digitsInput');
    const userInput = document.getElementById('userInput');
    const reverseInput = document.getElementById('reverseInput');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const checkButton = document.getElementById('checkButton');
    const checkReverseButton = document.getElementById('checkReverseButton');
    let intervalId;
    let digitsCount = 0;
    let lastDigit = null;
    let generatedDigits = '';

    function generateRandomDigit() {
        if (digitsCount < parseInt(digitsInput.value)) {
            let randomDigit = Math.floor(Math.random() * 10);
            // Ensure the random digit is different from the last one
            while (randomDigit === lastDigit) {
                randomDigit = Math.floor(Math.random() * 10);
            }
            display.textContent = randomDigit;
            lastDigit = randomDigit;
            generatedDigits += randomDigit;
            digitsCount++;
        } else {
            clearInterval(intervalId);
        }
    }

    function startGame() {
        const delay = parseInt(delayInput.value);
        if (isNaN(delay)) {
            alert('Please enter a valid time delay!');
            return;
        }
        digitsCount = 0;
        generatedDigits = '';
        display.textContent = ''; // Clear previous content
        lastDigit = null; // Reset last digit
        intervalId = setInterval(generateRandomDigit, delay);
    }

    function stopGame() {
        clearInterval(intervalId);
    }

    function checkOrder() {
        const userInputValue = userInput.value;
        if (userInputValue === generatedDigits) {
            alert('Congratulations! You entered the correct sequence.');
        } else {
            alert('Oops! Your sequence does not match the generated sequence. Try again.');
        }
    }

    function checkReverseOrder() {
        const reverseInputValue = reverseInput.value;
        const reversedGeneratedDigits = generatedDigits.split('').reverse().join('');
        if (reverseInputValue === reversedGeneratedDigits) {
            alert('Congratulations! You entered the correct sequence in reverse order.');
        } else {
            alert('Oops! Your sequence does not match thegenerated sequence in reverse order. Try again.'); } 
            }startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
checkButton.addEventListener('click', checkOrder);
checkReverseButton.addEventListener('click', checkReverseOrder);});
