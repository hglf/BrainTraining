document.addEventListener('DOMContentLoaded', () => {
    class DeltaNBack {
        constructor() {
            this.isRunning = false;
            this.intervalId = null;
            this.gameBoard = document.getElementById('game-board');
            this.startButton = document.getElementById('startButton');
            this.stopButton = document.getElementById('stopButton');
            this.checkPositionButton = document.getElementById('checkPositionButton');
            this.checkColorButton = document.getElementById('checkColorButton'); 
            this.checkDigitButton = document.getElementById('checkDigitButton')
            this.checkRotationButton = document.getElementById('checkRotationButton');
            this.checkSizeButton = document.getElementById('checkSizeButton');
            this.checkCellButton = document.getElementById('checkCellButton');
            this.checkWordButton = document.getElementById('checkWordButton');
            this.checkWordsizeButton = document.getElementById('checkWordsizeButton');
            this.checkPositiontwoButton = document.getElementById('checkPositiontwoButton');
            this.nValueInput = document.getElementById('nValueInput');
            this.history = new Array(9).fill(null);
            this.currentPosition = null;
            this.currentN = 0;
            this.stimuliCount = 0;
            this.currentColor = null;
            this.colorHistory = [];
            this.currentDigit = null;
            this.digitHistory = [];
            this.currentRotation = null;
            this.rotationHistory = [];
            this.currentSize = null;
            this.sizeHistory = [];
            this.currentCellc = null;
            this.cellcHistory = [];
            this.currentWord = null;
            this.wordHistory = [];
            this.currentWordsize = null;
            this.wordsizeHistory = [];
            this.currentPositiontwo = null;
            this.positiontwoHistory = [];
            this.startButton.addEventListener('click', () => this.startStimuliGeneration());
            this.stopButton.addEventListener('click', () => this.stopStimuliGeneration());
            this.checkPositionButton.addEventListener('click', () => this.checkPosition());
            this.checkColorButton.addEventListener('click', () => this.checkColor());

this.checkDigitButton.addEventListener('click', () => this.checkDigit());

this.checkRotationButton.addEventListener('click', () => this.checkRotation());

this.checkSizeButton.addEventListener('click', () => this.checkSize());

this.checkCellButton.addEventListener('click', () => this.checkCellc());

this.checkWordButton.addEventListener('click', () => this.checkWord());

this.checkWordsizeButton.addEventListener('click', () => this.checkWordsize());

this.checkPositiontwoButton.addEventListener('click', () => this.checkPositiontwo());
            this.nValueInput.addEventListener('change', () => {
                console.log('N value changed:', this.nValueInput.value);
                this.currentN = parseInt(this.nValueInput.value);
                console.log('Current N:', this.currentN);
            });

            this.initGameBoard(); // Initialize game board cells
        }

        initGameBoard() {
            // Create 3x3 grid of cells
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.row = i; // Add row index as dataset attribute
                    cell.dataset.col = j; // Add column index as dataset attribute
                    this.gameBoard.appendChild(cell);
                    const celltwo = document.createElement('div');
                    celltwo.classList.add('celltwo');
                }
            }
        }

        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        getRandomPosition() {
            return [this.getRandomInt(0, 2), this.getRandomInt(0, 2)];
        }

        getRandomColor() {
            const colors = ['blue', 'gold', 'red', 'green', 'orange', 'mediumpurple', 'gray', 'pink', 'black'];
            return colors[this.getRandomInt(0, colors.length - 1)];
        }

        getRandomDigit() {
    return this.getRandomInt(0, 9);
}
   
    displayDigit(row, col, color, digit) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.textContent = digit;
        cell.style.color = color;
        cell.style.backgroundColor = ''; 
    }
}
        
        getRandomRotation() {
    const rotations = [0, 40, 80, 120, 160, 200, 240, 280, 320];
    return rotations[this.getRandomInt(0, rotations.length - 1)];
}

getRandomSize() {
        const sizes = [40, 70, 100, 130];
        return sizes[this.getRandomInt(0, sizes.length - 1)];
    }
    
    getRandomCell() {
        const cellsc = ['ForestGreen', 'DodgerBlue', 'DeepPink', 'DarkOrchid', 'DarkGoldenRod'];
        return cellsc[this.getRandomInt(0, cellsc.length - 1)];
    }
    
    getRandomWord() {
        const words = ['bridge', 'walls', 'house', 'truck', 'city', 'door', 'road', 'NBack']
        return words[this.getRandomInt(0, words.length - 1)];
    }
    
    getRandomWordsize() {
        const wordsizes = [9, 21, 33, 45]
        return wordsizes[this.getRandomInt(0, wordsizes.length - 1)];
    }
    
    getRandomPositiontwo() {
        return [this.getRandomInt(0, 2), this.getRandomInt(0, 2)];
    }

    startStimuliGeneration() {
    if (!this.isRunning) {
        this.isRunning = true;

        const TypeNBack = document.getElementById('TypeNBack');
        TypeNBack.textContent = 'Nona ' + this.currentN + ' Back';

        // Retrieve time delay from user input only once
        if (!this.delayInterval) {
            this.delayInterval = this.getDelayInterval();
        }

        this.intervalId = setInterval(() => {
     
            this.currentPosition = this.getRandomPosition();
            console.log('Current Position:', this.currentPosition);
            this.history.push(this.currentPosition);

            this.currentColor = this.getRandomColor();
            console.log('Current Color:', this.currentColor); this.colorHistory.push(this.currentColor);

            this.currentDigit = this.getRandomDigit();
            console.log('Random Digit:', this.currentDigit);          this.digitHistory.push(this.currentDigit);
            if (this.currentDigit == 6) {
                this.currentDigit = 9
            }

            this.currentRotation = this.getRandomRotation();
            console.log('Rotation:', this.currentRotation); this.rotationHistory.push(this.currentRotation);

            this.currentSize = this.getRandomSize();
            console.log('Size:', this.currentSize);
            this.sizeHistory.push(this.currentSize); 
            
            this.currentCellc = this.getRandomCell();
            console.log('Cell:', this.currentCellc);
           this.cellcHistory.push(this.currentCellc);
           
           this.currentWord = this.getRandomWord();
           console.log('Word:', this.currentWord);
           this.wordHistory.push(this.currentWord);
           
           this.currentWordsize = this.getRandomWordsize();
           console.log('Word size:', this.currentWordsize);
this.wordsizeHistory.push(this.currentWordsize);

this.currentPositiontwo = this.getRandomPositiontwo();
console.log('Position 2:', this.currentPositiontwo);
this.positiontwoHistory.push(this.currentPositiontwo);
if (this.currentPositiontwo[0] == this.currentPosition[0] && this.currentPositiontwo[1] == this.currentPosition[1]) {
    this.currentPositiontwo = this.getRandomPositiontwo();
}
if (this.currentPositiontwo[0] == this.currentPosition[0] && this.currentPositiontwo[1] == this.currentPosition[1]) {
    this.currentPositiontwo = this.getRandomPositiontwo();
}
            this.displayDigit(this.currentPosition[0], this.currentPosition[1], this.currentColor, this.currentDigit, this.currentRotation, this.currentSize, this.currentCellc, this.currentWord, this.currentWordsize, this.currentPositiontwo[0], this.currentPositiontwo[1]);

            // Increment the stimuli count
            this.stimuliCount++;

            const stimuliCountElement = document.getElementById('stimuliCount');
            stimuliCountElement.textContent = 'Stimuli Count: ' + this.stimuliCount;

            setTimeout(() => {
                this.clearDigitSquare();
            }, this.delayInterval / 1.5);
        }, this.delayInterval);

        this.stopButton.disabled = false;
        this.startButton.disabled = true;
    }
}
    
    displayDigit(row, col, color, digit, rotation, size, cellc, word, wordsize, rowtwo, coltwo) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const celltwo = document.querySelector(`.cell[data-row="${rowtwo}"][data-col="${coltwo}"]`);
    if (cell) {
        // Create a span element to contain the digit
        const digitSpan = document.createElement('span');
        digitSpan.textContent = digit;

        // Apply rotation to the digit span
        digitSpan.style.transform = `rotate(${rotation}deg)`;

        // Apply size to the digit span
        digitSpan.style.fontSize = `${size}px`;

        // Apply color to the digit span
        digitSpan.style.color = color;
        
        // Add the digit span to the cell
        cell.innerHTML = '';
        cell.appendChild(digitSpan);

    }
    if (celltwo) {
        celltwo.style.backgroundColor = cellc;
        const Word = document.createElement('span');
        Word.textContent = word;
        Word.style.fontSize = `${wordsize}px`;
        Word.style.color = `white`;
        celltwo.appendChild(Word)
    }
}
clearDigitSquare() {
    const cell = document.querySelector(`.cell[data-row="${this.currentPosition[0]}"][data-col="${this.currentPosition[1]}"]`);
    const celltwo = document.querySelector(`.cell[data-row="${this.currentPositiontwo[0]}"][data-col="${this.currentPositiontwo[1]}"]`);
    if (cell) {
        cell.textContent = ''; // Clear the digit from the cell
    }
    if (celltwo) {
        celltwo.textContent = '';
    }
    cell.style.backgroundColor = '';
    celltwo.style.backgroundColor = '';
}

        stopStimuliGeneration() {
            if (this.isRunning) {
                clearInterval(this.intervalId);
                this.isRunning = false;
                this.stopButton.disabled = true;
                this.startButton.disabled = false;
            }
        }
        
        checkPosition() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] === this.currentPosition[0] &&
                    nStepsAgoPosition[1] === this.currentPosition[1]
                ) {
                    this.checkPositionButton.style.backgroundColor = 'green';
                } else {
                    this.checkPositionButton.style.backgroundColor = 'red'; 
                }

                setTimeout(() => {
                    this.checkPositionButton.style.backgroundColor = '';
                }, 750);
            }
        }
        
        checkColor() {
    if (this.currentColor !== null && this.currentN > 0 && this.colorHistory.length >= this.currentN) {
        const nStepsAgoColor = this.colorHistory[this.colorHistory.length - this.currentN - 1];
        console.log('N steps ago color:', nStepsAgoColor);
        
        if (nStepsAgoColor && nStepsAgoColor === this.currentColor) {
            this.checkColorButton.style.backgroundColor = 'green';
        } else {
            this.checkColorButton.style.backgroundColor = 'red';
        }

        setTimeout(() => {
            this.checkColorButton.style.backgroundColor = '';
        }, 750);
    }
}

        checkDigit() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit === this.currentDigit) {
            this.checkDigitButton.style.backgroundColor = 'green'; 
        } else {
            this.checkDigitButton.style.backgroundColor = 'red'; 
        }

        setTimeout(() => {
            this.checkDigitButton.style.backgroundColor = ''; 
        }, 750); 
    }
}

        checkRotation() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoRotation = this.rotationHistory[this.rotationHistory.length - this.currentN - 1]; 
            console.log('N steps ago rotation:', nStepsAgoRotation);
            
            if (nStepsAgoRotation !== undefined && nStepsAgoRotation === this.currentRotation) {
                this.checkRotationButton.style.backgroundColor = 'green';
            } else {
                this.checkRotationButton.style.backgroundColor = 'red'; 
            }

            setTimeout(() => {
                this.checkRotationButton.style.backgroundColor = ''; 
            }, 750); 
        }
    }
        checkSize() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoSize = this.sizeHistory[this.sizeHistory.length - this.currentN - 1];
            console.log('N steps ago size:', nStepsAgoSize);
            
            if (nStepsAgoSize !== undefined && nStepsAgoSize === this.currentSize) {
                this.checkSizeButton.style.backgroundColor = 'green';
            } else {
                this.checkSizeButton.style.backgroundColor = 'red';
            }
            
            setTimeout(() => {
                this.checkSizeButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    
    checkCellc() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoCellc = this.cellcHistory[this.cellcHistory.length - this.currentN - 1];
            console.log('N steps ago cell:', nStepsAgoCellc);
            
            if (nStepsAgoCellc !== undefined && nStepsAgoCellc === this.currentCellc) {
                this.checkCellButton.style.backgroundColor = 'green';
            } else {
                this.checkCellButton.style.backgroundColor = 'red';
            }
            
            setTimeout(() => {
                this.checkCellButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    
    checkWord() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWord = this.wordHistory[this.wordHistory.length - this.currentN - 1];
            console.log('N steps ago word:', nStepsAgoWord);
            
            if (nStepsAgoWord !== undefined && nStepsAgoWord === this.currentWord) {
                this.checkWordButton.style.backgroundColor = 'green';
            } else {
                this.checkWordButton.style.backgroundColor = 'red';
            }
            
            setTimeout(() => {
                this.checkWordButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    
    checkWordsize() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWordsize = this.wordsizeHistory[this.wordsizeHistory.length - this.currentN - 1];
            console.log('N steps ago word size:', nStepsAgoWordsize);
            
            if (nStepsAgoWordsize !== undefined && nStepsAgoWordsize === this.currentWordsize) {
                this.checkWordsizeButton.style.backgroundColor = 'green';
            } else {
                this.checkWordsizeButton.style.backgroundColor = 'red';
            }
            
            setTimeout(() => {
                this.checkWordsizeButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    
    checkPositiontwo() {
            if (this.currentPositiontwo !== null && this.currentN > 0 && this.positiontwoHistory.length >= this.currentN) {
                const nStepsAgoPositiontwo = this.positiontwoHistory[this.positiontwoHistory.length - this.currentN - 1]; 
                console.log('N steps ago position 2:', nStepsAgoPositiontwo);
                
                if (
                    nStepsAgoPositiontwo &&
                    nStepsAgoPositiontwo[0] === this.currentPositiontwo[0] &&
                    nStepsAgoPositiontwo[1] === this.currentPositiontwo[1]
                ) {
                    this.checkPositiontwoButton.style.backgroundColor = 'green';
                } else {
                    this.checkPositiontwoButton.style.backgroundColor = 'red'; 
                }

                setTimeout(() => {
                    this.checkPositiontwoButton.style.backgroundColor = '';
                }, 750);
            }
        }
        
        getDelayInterval() {
            return parseInt(prompt('Enter time delay (in milliseconds):'), 10) || 1000; // Default delay is 1000ms
        }
    }

    // Initialize DeltaNBack instance
    const deltaNBack = new DeltaNBack();
});
