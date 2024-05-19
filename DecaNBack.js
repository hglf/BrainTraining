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
            this.checkWordrotationButton = document.getElementById('checkWordrotationButton');
            this.nValueInput = document.getElementById('nValueInput');
            this.SizeEnable = document.getElementById('SizeCheck');
            this.WordsizeEnable = document.getElementById('WordsizeCheck');
            this.CellEnable = document.getElementById('CellCheck');
            this.WordEnable = document.getElementById('WordCheck');
            this.RandomEnable = document.getElementById('RandomCheck');
            this.WordrotationEnable = document.getElementById('WordrotationCheck');
            

            this.history = new Array(9).fill(null);
            this.currentPosition = null;
            this.currentN = 0;
            this.stimuliCount = 0;
            this.iterationCount = 0;
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
            this.wordrotationHistory = [];
            this.currentWordrotation = null;
            this.NBack = 4;
            this.correct = 0;
            this.mistakes = 0;
            this.NBackCT = [];
            this.NSet = 0;
            this.startButton.addEventListener('click', () => this.startStimuliGeneration());
            this.stopButton.addEventListener('click', () => this.stopStimuliGeneration());
            this.SizeEnable.addEventListener('click', () => this.SizeEnabled = true);         
            this.CellEnable.addEventListener('click', () => this.CellEnabled = true);     
            this.WordEnable.addEventListener('click', () => this.WordEnabled = true);
   this.WordsizeEnable.addEventListener('click', () => this.WordsizeEnabled = true);
   this.WordrotationEnable.addEventListener('click', () => this.WordrotationEnabled = true);
            this.RandomEnable.addEventListener('click', () => this.RandomEnabled = true);
            
            this.checkWordButton.disabled = true;
            this.checkWordsizeButton.disabled = true;
            this.checkSizeButton.disabled = true;
            this.checkCellButton.disabled = true;
            this.checkPositiontwoButton.disabled = true;
            this.checkWordrotationButton.disabled = true;
            this.PositionButtonnp = true;
            this.ColorButtonnp = true;
            this.DigitButtonnp = true;
            this.PositiontwoButtonnp = true;
            this.CellButtonnp = true;
            this.WordButtonnp = true;
            this.RotationButtonnp = true;
            this.SizeButtonnp = true;
            this.WordsizeButtonnp = true;
            this.WordrotationButtonnp = true;
            this.WordsizeEnable.addEventListener('click', () => this.WordsizeEnabled = true);
            
            
            
this.checkPositionButton.addEventListener('click', () => {
this.PositionButtonnp = false;
this.checkPosition()
});
          this.checkColorButton.addEventListener('click', () => {
this.ColorButtonnp = false;
this.checkColor()
});

this.checkDigitButton.addEventListener('click', () => {
this.DigitButtonnp = false;
this.checkDigit()
});


this.checkRotationButton.addEventListener('click', () => {
this.RotationButtonnp = false;
this.checkRotation()
});


this.checkSizeButton.addEventListener('click', () => {
this.SizeButtonnp = false;
this.checkSize()
});


this.checkCellButton.addEventListener('click', () => {
this.CellButtonnp = false;
this.checkCellc()
});


this.checkWordButton.addEventListener('click', () => {
this.WordButtonnp = false;
this.checkWord()
});


this.checkWordsizeButton.addEventListener('click', () => {
this.WordsizeButtonnp = false;
this.checkWordsize()
});


this.checkPositiontwoButton.addEventListener('click', () => {
this.PositiontwoButtonnp = false;
this.checkPositiontwo()
});

this.checkWordrotationButton.addEventListener('click', () => {
    this.WordrotationButtonnp = false;
    this.checkWordrotation()
})

            this.nValueInput.addEventListener('change', () => {
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
            const colors = ['#0011df', '#d7ee00', 'Crimson', '#109a00', '#fff', '#b522ee', '#aaaaee'];
            return colors[this.getRandomInt(0, colors.length - 1)];
        }
        
        getRandomNSet() {
            return [this.getRandomInt(0, 2)];
        }
        
        getRandomDigit() {
        const digit = ['∰', 'փ', 'Պ', 'Փ', 'ߐ', 'ᛘ', 'ᗐ', 'ᛥ', 'ᛪ']
    return digit[this.getRandomInt(0, digit.length - 1)];
}

getRandomDigitA() {
    const digitA = ['ᚻ', 'ᛗ', 'ᤖ', '⇶', '∆', 'ꕑ', '𐌞', '𐌣', '𐒽']
    return digitA[this.getRandomInt(0, digitA.length - 1)];
}

getRandomDigitB() {
    const digitB = ['𐔁', '𐘃', '𐚕', '𐚳', '𑀅', '𑁈', '𐆖', '𐅣', '𐐴']
    return digitB[this.getRandomInt(0, digitB.length - 1)];
}
   
    displayDigit(row, col, color, digit) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.textContent = digit;
        cell.style.color = color;
        cell.style.backgroundColor = ''; 
    }
}

NumberToLetter(number) {
    if (number == 1) {
        return "X";
    }
    if (number == 2) {
        return "H";
    }
    if (number == 3) {
        return "L";
    }
    if (number == 4) {
        return "G";
    }
    if (number == 5) {
        return "D";
    }
    if (number == 6) {
        return "P";
    }
    if (number == 7) {
        return "$";
    }
    if (number == 8) {
        return "@";
    }
    if (number == 9) {
        return "#";
    }
    if (number == 10) {
        return "Z";
    }
    if (number == 11) {
        return "F";
    }
    if (number == 12) {
        return "N";
    }
    if (number == 13) {
        return "C";
    }
    if (number == 14) {
        return "W";
    }
    if (number == 15) {
        return "S";
    }
    if (number == 16) {
        return "Y";
    }
    if (number == 17) {
        return "R";
    }
    if (number == 18) {
        return "?";
    }
}
        getRandomWurd() {
            this.letters = this.getRandomInt(3, 5);
            this.letterAN = this.getRandomInt(1, 18);
            this.letterBN = this.getRandomInt(1, 18);
            this.letterCN = this.getRandomInt(1, 18);
            this.letterDN = this.getRandomInt(1, 18);
            this.letterEN = this.getRandomInt(1, 18);
            this.letterA = this.NumberToLetter(this.letterAN);
            this.letterB = this.NumberToLetter(this.letterBN);
            this.letterC = this.NumberToLetter(this.letterCN);
            this.letterD = this.NumberToLetter(this.letterDN);
            this.letterE = this.NumberToLetter(this.letterEN);
            if (this.letters == 3) {
                return this.letterA + this.letterB + this.letterC;
            }
            if (this.letters == 4) {
                return this.letterA + this.letterB + this.letterC + this.letterD;
            }
            if (this.letters == 5) {
                return this.letterA + this.letterB + this.letterC + this.letterD + this.letterE;
            }
        }
        
        
        getRandomRotation() {
    const rotations = [0, 50, 100, 150, 200, 250, 300];
    return rotations[this.getRandomInt(0, rotations.length - 1)];
}

getRandomSize() {
        const sizes = [40, 73, 106, 139];
        return sizes[this.getRandomInt(0, sizes.length - 1)];
    }
    
    getRandomCell() {
        const cellsc = ['ForestGreen', 'DodgerBlue', 'MediumSpringGreen', 'BlueViolet', 'FireBrick', 'GoldenRod'];
        return cellsc[this.getRandomInt(0, cellsc.length - 1)];
    }
    
    getRandomWord() {
        const words = ['bridge', 'walls', 'house', 'truck', 'city', 'door', 'road', 'NBack']
        return words[this.getRandomInt(0, words.length - 1)];
    }
    getRandomWordA() {
        const wordsA = ['park', 'rain', 'track', 'pet', 'floor', 'window', 'view', 'hglf']
        return wordsA[this.getRandomInt(0, wordsA.length - 1)];
    }
    getRandomWordB() {
        const wordsB = []
        wordsB.push(this.wordA);
        wordsB.push(this.wordB);
        wordsB.push(this.wordC);
        wordsB.push(this.wordD);
        wordsB.push(this.wordE);
        wordsB.push(this.wordF);
        wordsB.push(this.wordG);
        wordsB.push(this.wordH);
        return wordsB[this.getRandomInt(0, wordsB.length - 1)];
    }
    
    
    
    getRandomWordsize() {
        const wordsizes = [9, 21, 33, 45]
        return wordsizes[this.getRandomInt(0, wordsizes.length - 1)];
    }
    
    getRandomPositiontwo() {
        return [this.getRandomInt(0, 2), this.getRandomInt(0, 2)];
    }
    
    getRandomBoolean() {
            this.booleanvalue = this.getRandomInt(0, 1);
            if (this.booleanvalue === 0) {
                return false;
            } else {
                return true;
            }
        }

    startStimuliGeneration() {
    if (!this.isRunning) {
        this.isRunning = true;
        
        
this.NBackCT.push('   Pos');
this.NBackCT.push('   Col');
this.NBackCT.push('   Char');
this.NBackCT.push('   Rot');
if (this.RandomEnabled) {
this.SizeEnabled = this.getRandomBoolean()
this.CellEnabled = this.getRandomBoolean()
this.WordEnabled = this.getRandomBoolean()
this.WordsizeEnabled = this.getRandomBoolean()
this.WordrotationEnabled = this.getRandomBoolean()
}
if (this.SizeEnabled) {
        this.NBack++;
        this.NBackCT.push('   Size');
    }
    if (this.CellEnabled) {
        this.NBack += 2;
        this.NBackCT.push('   C-Pos');
        this.NBackCT.push('   C-Col');
    }
    if (this.WordEnabled && this.CellEnabled) {
        this.NBack++;
        this.NBackCT.push('   Word');
    }
    if (this.WordsizeEnabled && this.WordEnabled && this.CellEnabled) {
        this.NBack++;
        this.NBackCT.push('   W-Siz');
    }
    if (this.WordrotationEnabled && this.WordEnabled && this.CellEnabled) {
        this.NBack++;
        this.NBackCT.push('   W-Rot');
    }
    if (this.NBack === 4) {
                this.NBackt = "Quad "
            } else {
            if (this.NBack === 5) {
                this.NBackt = "Penta "
            } else {
            if (this.NBack === 6) {
                this.NBackt = "Hexa "
            } else {
            if (this.NBack === 7) {
                this.NBackt = "Septa "
            } else {
            if (this.NBack === 8) {
                this.NBackt = "Octa "
            } else {
            if (this.NBack === 9) {
                this.NBackt = "Nona "
            } else {
                if (this.NBack === 10) {
                    this.NBackt = "Deca "
            }
            }
            }
            }
            }
            }
            }
           
        const TypeNBack = document.getElementById('TypeNBack');
        TypeNBack.textContent = this.NBackt + '' + this.currentN + ' Back';
        const NBackComb = document.getElementById('NBackComb');
        NBackComb.textContent = this.NBackCT;
        
        this.wordA = this.getRandomWurd();
        this.wordB = this.getRandomWurd();
        this.wordC = this.getRandomWurd();
        this.wordD = this.getRandomWurd();
        this.wordE = this.getRandomWurd();
        this.wordF = this.getRandomWurd();
        this.wordG = this.getRandomWurd();
        this.wordH = this.getRandomWurd();
        this.NSet = this.getRandomNSet();
        this.NSetA = this.getRandomNSet();
        if (!this.delayInterval) {
            this.delayInterval = this.getDelayInterval();
        }

        this.intervalId = setInterval(() => {
     
            this.currentPosition = this.getRandomPosition();
            console.log('Current Position:', this.currentPosition);
            this.history.push(this.currentPosition);

            this.currentColor = this.getRandomColor();
            console.log('Current Color:', this.currentColor); this.colorHistory.push(this.currentColor);

if (this.NSet == 0) {
            this.currentDigit = this.getRandomDigit();
            console.log('Random Digit:', this.currentDigit);          this.digitHistory.push(this.currentDigit);
            }
if (this.NSet == 1) {
            this.currentDigit = this.getRandomDigitA();
            console.log('Random Digit:', this.currentDigit);          this.digitHistory.push(this.currentDigit);
            }
if (this.NSet == 2) {
            this.currentDigit = this.getRandomDigitB();
            console.log('Random Digit:', this.currentDigit);          this.digitHistory.push(this.currentDigit);
            }
if (this.NSetA == 0) {
            this.currentWord = this.getRandomWord();
            console.log('Random Word:', this.currentWord);          this.wordHistory.push(this.currentWord);
            }
if (this.NSetA == 1) {
            this.currentWord = this.getRandomWordA();
            console.log('Random Word:', this.currentWord);          this.wordHistory.push(this.currentWord);
            }
if (this.NSetA == 2) {
            this.currentWord = this.getRandomWordB();
            console.log('Random Word:', this.currentWord);          this.wordHistory.push(this.currentWord);
            }

            this.currentRotation = this.getRandomRotation();
            console.log('Rotation:', this.currentRotation); this.rotationHistory.push(this.currentRotation);

            this.currentSize = this.getRandomSize();
            console.log('Size:', this.currentSize);
            this.sizeHistory.push(this.currentSize); 
            
            this.currentCellc = this.getRandomCell();
            console.log('Cell:', this.currentCellc);
           this.cellcHistory.push(this.currentCellc);
           
           
           
           this.currentWordrotation = this.getRandomRotation();
           console.log('Word Rotation:', this.currentWordrotation);
           this.wordrotationHistory.push(this.currentWordrotation);
           
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
            this.displayDigit(this.currentPosition[0], this.currentPosition[1], this.currentColor, this.currentDigit, this.currentRotation, this.currentSize, this.currentCellc, this.currentWord, this.currentWordsize, this.currentPositiontwo[0], this.currentPositiontwo[1], this.currentWordrotation);

            // Increment the stimuli count
            this.stimuliCount++;
            this.accuracystim = this.mistakes + this.correct
            this.accuracy = 100 * (this.correct / this.accuracystim)
            const accuracyElement = document.getElementById('accuracy');
            accuracyElement.textContent = 'Accuracy: ' + this.accuracy + '%';
            

            const stimuliCountElement = document.getElementById('stimuliCount');
            stimuliCountElement.textContent = 'Stimuli Count: ' + this.stimuliCount;
            const iterationCountElement = document.getElementById('iterationCount');
            iterationCountElement.textContent = 'Iteration Count: ' + this.stimuliCount / this.currentN

            setTimeout(() => {
                this.clearDigitSquare();
            }, this.delayInterval / 1.5);
        }, this.delayInterval);

        this.stopButton.disabled = false;
        this.startButton.disabled = true;
    }
}
    
    displayDigit(row, col, color, digit, rotation, size, cellc, word, wordsize, rowtwo, coltwo, wordrotation) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const celltwo = document.querySelector(`.cell[data-row="${rowtwo}"][data-col="${coltwo}"]`);
    if (cell) {
        // Create a span element to contain the digit
        const digitSpan = document.createElement('span');
        digitSpan.textContent = digit;

        // Apply rotation to the digit span
        digitSpan.style.transform = `rotate(${rotation}deg)`;

        // Apply size to the digit span
        if (this.SizeEnabled) {
        this.checkSizeButton.disabled = false;
        digitSpan.style.fontSize = `${size}px`;
        }

        // Apply color to the digit span
        digitSpan.style.color = color;
        
        // Add the digit span to the cell
        cell.innerHTML = '';
        cell.appendChild(digitSpan);

    }
    if (celltwo && this.CellEnabled) {
    this.checkCellButton.disabled = false;
    this.checkPositiontwoButton.disabled = false;
        celltwo.style.backgroundColor = cellc;
        const Word = document.createElement('span');
        if (this.WordEnabled) {
        this.checkWordButton.disabled = false;
        Word.textContent = word;
        }
        Word.style.fontSize = `${30}px`;
        if (this.WordsizeEnabled && this.WordEnabled) {
        this.checkWordsizeButton.disabled = false;
        Word.style.fontSize = `${wordsize}px`;
        }
        if (this.WordrotationEnabled && this.WordEnabled) {
            this.checkWordrotationButton.disabled = false;
            Word.style.transform = `rotate(${wordrotation}deg)`;
        }
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
    if (this.PositionButtonnp) {
            this.checkPositionnp();
        }
        if (this.ColorButtonnp) {
            this.checkColornp();
        }
        if (this.DigitButtonnp) {
            this.checkDigitnp();
        }
        if (this.SizeButtonnp && this.SizeEnabled) {
            this.checkSizenp();
        }
        if (this.CellButtonnp && this.CellEnabled) {
            this.checkCellcnp();
        }
        if (this.WordsizeButtonnp && this.WordsizeEnabled && this.WordEnabled) {
            this.checkWordsizenp();
        }
        if (this.WordButtonnp && this.WordEnabled) {
            this.checkWordnp();
        }
        if (this.PositiontwoButtonnp && this.CellEnabled) {
            this.checkPositiontwonp();
        }
        if (this.RotationButtonnp) {
            this.checkRotationnp();
        }
        if (this.WordrotationButtonnp && this.WordrotationEnabled && this.WordEnabled) {
            this.checkWordrotationnp();
        }
        this.PositionButtonnp = true;
            this.PositiontwoButtonnp = true;
            this.ColorButtonnp = true;
            this.CellButtonnp = true;
            this.DigitButtonnp = true;
            this.WordButtonnp = true;
            this.SizeButtonnp = true;
            this.WordsizeButtonnp = true;
            this.RotationButtonnp = true;
            this.WordrotationButtonnp = true;
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
                    this.checkPositionButton.style.backgroundColor = '#006600';
                    this.correct++;
                } else {
                    this.checkPositionButton.style.backgroundColor = '#aa0000'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkPositionButton.style.backgroundColor = '';
                }, 750);
            }
        }
        checkPositionnp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] === this.currentPosition[0] &&
                    nStepsAgoPosition[1] === this.currentPosition[1]
                ) {
                    this.checkPositionButton.style.backgroundColor = '#56018b';
                    this.mistakes++;
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
            this.checkColorButton.style.backgroundColor = '#006600';
            this.correct++;
        } else {
            this.checkColorButton.style.backgroundColor = '#aa0000';
            this.mistakes++;
        }

        setTimeout(() => {
            this.checkColorButton.style.backgroundColor = '';
        }, 750);
    }
}
checkColornp() {
    if (this.currentColor !== null && this.currentN > 0 && this.colorHistory.length >= this.currentN) {
        const nStepsAgoColor = this.colorHistory[this.colorHistory.length - this.currentN - 1];
        console.log('N steps ago color:', nStepsAgoColor);
        
        if (nStepsAgoColor && nStepsAgoColor === this.currentColor) {
            this.checkColorButton.style.backgroundColor = '#56018b';
            this.mistakes++;
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
            this.checkDigitButton.style.backgroundColor = '#006600';
            this.correct++; 
        } else {
            this.checkDigitButton.style.backgroundColor = '#aa0000'; 
            this.mistakes++;
        }

        setTimeout(() => {
            this.checkDigitButton.style.backgroundColor = ''; 
        }, 750); 
    }
}
checkDigitnp() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit === this.currentDigit) {
            this.checkDigitButton.style.backgroundColor = '#56018b'; 
            this.mistakes++;
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
                this.checkRotationButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkRotationButton.style.backgroundColor = '#aa0000'; 
                this.mistakes++;
            }

            setTimeout(() => {
                this.checkRotationButton.style.backgroundColor = ''; 
            }, 750); 
        }
    }
    checkRotationnp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoRotation = this.rotationHistory[this.rotationHistory.length - this.currentN - 1]; 
            console.log('N steps ago rotation:', nStepsAgoRotation);
            
            if (nStepsAgoRotation !== undefined && nStepsAgoRotation === this.currentRotation) {
                this.checkRotationButton.style.backgroundColor = '#56018b';
                this.mistakes++;
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
                this.checkSizeButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkSizeButton.style.backgroundColor = '#aa0000';
                this.mistakes++;
            }
            
            setTimeout(() => {
                this.checkSizeButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    checkSizenp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoSize = this.sizeHistory[this.sizeHistory.length - this.currentN - 1];
            console.log('N steps ago size:', nStepsAgoSize);
            
            if (nStepsAgoSize !== undefined && nStepsAgoSize === this.currentSize) {
                this.checkSizeButton.style.backgroundColor = '#56018b';
                this.mistakes++;
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
                this.checkCellButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkCellButton.style.backgroundColor = '#aa0000';
                this.mistakes++;
            }
            
            setTimeout(() => {
                this.checkCellButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    checkCellcnp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoCellc = this.cellcHistory[this.cellcHistory.length - this.currentN - 1];
            console.log('N steps ago cell:', nStepsAgoCellc);
            
            if (nStepsAgoCellc !== undefined && nStepsAgoCellc === this.currentCellc) {
                this.checkCellButton.style.backgroundColor = '#56018b';
                this.mistakes++;
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
                this.checkWordButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkWordButton.style.backgroundColor = '#aa0000';
                this.mistakes++;
            }
            
            setTimeout(() => {
                this.checkWordButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    checkWordnp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWord = this.wordHistory[this.wordHistory.length - this.currentN - 1];
            console.log('N steps ago word:', nStepsAgoWord);
            
            if (nStepsAgoWord !== undefined && nStepsAgoWord === this.currentWord) {
                this.checkWordButton.style.backgroundColor = '#56018b';
                this.mistakes++;
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
                this.checkWordsizeButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkWordsizeButton.style.backgroundColor = '#aa0000';
                this.mistakes++;
            }
            
            setTimeout(() => {
                this.checkWordsizeButton.style.backgroundColor = '';
            }, 750); 
        }
    }
    checkWordsizenp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWordsize = this.wordsizeHistory[this.wordsizeHistory.length - this.currentN - 1];
            console.log('N steps ago word size:', nStepsAgoWordsize);
            
            if (nStepsAgoWordsize !== undefined && nStepsAgoWordsize === this.currentWordsize) {
                this.checkWordsizeButton.style.backgroundColor = '#56018b';
                this.mistakes++;
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
                    this.checkPositiontwoButton.style.backgroundColor = '#006600';
                    this.correct++;
                } else {
                    this.checkPositiontwoButton.style.backgroundColor = '#aa0000'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkPositiontwoButton.style.backgroundColor = '';
                }, 750);
            }
        }
        checkPositiontwonp() {
            if (this.currentPositiontwo !== null && this.currentN > 0 && this.positiontwoHistory.length >= this.currentN) {
                const nStepsAgoPositiontwo = this.positiontwoHistory[this.positiontwoHistory.length - this.currentN - 1]; 
                console.log('N steps ago position 2:', nStepsAgoPositiontwo);
                
                if (
                    nStepsAgoPositiontwo &&
                    nStepsAgoPositiontwo[0] === this.currentPositiontwo[0] &&
                    nStepsAgoPositiontwo[1] === this.currentPositiontwo[1]
                ) {
                    this.checkPositiontwoButton.style.backgroundColor = '#56018b';
                    this.mistakes++;
                } 

                setTimeout(() => {
                    this.checkPositiontwoButton.style.backgroundColor = '';
                }, 750);
            }
        }
        checkWordrotation() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWordrotation = this.wordrotationHistory[this.wordrotationHistory.length - this.currentN - 1]; 
            console.log('N steps ago word rotation:', nStepsAgoWordrotation);
            
            if (nStepsAgoWordrotation !== undefined && nStepsAgoWordrotation === this.currentWordrotation) {
                this.checkWordrotationButton.style.backgroundColor = '#006600';
                this.correct++;
            } else {
                this.checkWordrotationButton.style.backgroundColor = '#aa0000'; 
                this.mistakes++;
            }

            setTimeout(() => {
                this.checkWordrotationButton.style.backgroundColor = ''; 
            }, 750); 
        }
    }
    checkWordrotationnp() {
        if (this.currentN > 0 && this.history.length >= this.currentN) {
            const nStepsAgoWordrotation = this.wordrotationHistory[this.wordrotationHistory.length - this.currentN - 1]; 
            console.log('N steps ago word rotation:', nStepsAgoWordrotation);
            
            if (nStepsAgoWordrotation !== undefined && nStepsAgoWordrotation === this.currentWordrotation) {
               if (this.WordrotationEnabled) { this.checkWordrotationButton.style.backgroundColor = '#56018b';
                this.mistakes++;
                }
            } 
            

            setTimeout(() => {
                this.checkWordrotationButton.style.backgroundColor = ''; 
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
