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
            this.checkDigitButton = document.getElementById('checkDigitButton');
            this.checkStimuliButton = document.getElementById('checkStimuliButton');
            this.checkDownButton = document.getElementById('checkDownButton');
            this.checkUpButton = document.getElementById('checkUpButton');
            this.checkRightButton = document.getElementById('checkRightButton');
            this.checkLeftButton = document.getElementById('checkLeftButton');
            this.checkLargernButton = document.getElementById('checkLargernButton');
            this.checkSmallernButton = document.getElementById('checkSmallernButton');
            this.nValueInput = document.getElementById('nValueInput');
            this.history = new Array(9).fill(null);
            this.currentPosition = null;
            this.currentN = 0;
            this.stimuliCount = 0;
            this.currentDigit = null;
            this.digitHistory = [];
            this.currentStimuli = null;
            this.stimuliHistory = [];
            this.currentColor = null;
            this.colorHistory = [];
            this.PositionButtonnp = true;
            this.DigitButtonnp = true;
            this.StimuliButtonnp = true;
            this.ColorButtonnp = true;
            this.DownButtonnp = true;
            this.LeftButtonnp = true;
            this.UpButtonnp = true;
            this.RightButtonnp = true;
            this.LargernButtonnp = true;
            this.SmallernButtonnp = true;
            this.mistakes = 0;
            this.correct = 0;
                       this.startButton.addEventListener('click', () => this.startStimuliGeneration());
            this.stopButton.addEventListener('click', () => this.stopStimuliGeneration());
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


this.checkUpButton.addEventListener('click', () => {
this.UpButtonnp = false;
this.checkUp()
});


this.checkDownButton.addEventListener('click', () => {
this.DownButtonnp = false;
this.checkDown()
});


this.checkLeftButton.addEventListener('click', () => {
this.LeftButtonnp = false;
this.checkLeft()
});


this.checkRightButton.addEventListener('click', () => {
this.RightButtonnp = false;
this.checkRight()
});


this.checkSmallernButton.addEventListener('click', () => {
this.SmallernButtonnp = false;
this.checkSmallern()
});


this.checkLargernButton.addEventListener('click', () => {
this.LargernButtonnp = false;
this.checkLargern()
});

this.checkStimuliButton.addEventListener('click', () => {
this.StimuliButtonnp = false;
this.checkStimuli()
});
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
            const colors = ['Crimson', 'ForestGreen', 'Blue', 'MediumSpringGreen', 'HotPink', 'DarkGoldenRod', 'SlateBlue', 'white', 'gold']
            return colors[this.getRandomInt(0, colors.length - 1)]; 
        }

        getRandomDigit() {
    return this.getRandomInt(0, 9);
}

getRandomStimuli() {
    return this.getRandomInt(0, 1);
}
   
    displayDigit(row, col, digit, stimuli) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.textContent = digit;
        cell.style.backgroundColor = ''; 
    }
}
        
    
     startStimuliGeneration() {
    if (!this.isRunning) {
        this.isRunning = true;

        const TypeNBack = document.getElementById('TypeNBack');
        TypeNBack.textContent = 'Tri ' + this.currentN + ' Back';
        

        // Retrieve time delay from user input only once
        if (!this.delayInterval) {
            this.delayInterval = this.getDelayInterval();
        }

        this.intervalId = setInterval(() => {
     
            this.currentPosition = this.getRandomPosition();
            console.log('Current Position:', this.currentPosition);
            this.history.push(this.currentPosition);

            

            this.currentStimuli = this.getRandomStimuli();
            console.log('Stimuli:', this.currentStimuli); this.stimuliHistory.push(this.currentStimuli);
            
          

this.currentColor = this.getRandomColor();
console.log('Color:', this.currentColor);
this.colorHistory.push(this.currentColor);

 if (this.currentStimuli == 0) {
            this.currentDigit = this.getRandomDigit();
            console.log('Random Digit:', this.currentDigit);          this.digitHistory.push(this.currentDigit);
            if (this.currentDigit == 6) {
                this.currentDigit = 9
            }
            }
             this.displayDigit(this.currentPosition[0], this.currentPosition[1], this.currentDigit, this.currentStimuli, this.currentColor);

            // Increment the stimuli count
            this.stimuliCount++;

this.accuracycalc = this.mistakes + this.correct;
this.accuracy = this.correct / this.accuracycalc 
this.accuracy = this.accuracy * 100
const Accuracyt = document.getElementById('Accuracy');
        Accuracyt.textContent = 'Accuracy: ' + this.accuracy + '%';
        const Iterationst = document.getElementById('Iterations');
        Iterationst.textContent = 'Iterations: ' + this.stimuliCount / this.currentN
            const stimuliCountElement = document.getElementById('stimuliCount');
            stimuliCountElement.textContent = 'Stimuli Count: ' + this.stimuliCount;

            setTimeout(() => {
                this.clearDigitSquare();
            }, this.delayInterval / 2);
        }, this.delayInterval);

        this.stopButton.disabled = false;
        this.startButton.disabled = true;
    }
}
    
    displayDigit(row, col, digit, stimuli, color) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        // Create a span element to contain the digit
        const digitSpan = document.createElement('span');
        if (stimuli == 0) {
        digitSpan.textContent = digit;
        digitSpan.style.color = '#fff';
}
        if (stimuli == 1) {
            cell.style.backgroundColor = color;
        }
        // Add the digit span to the cell
        cell.innerHTML = '';
        cell.appendChild(digitSpan);

    }
    
}
clearDigitSquare() {
    const cell = document.querySelector(`.cell[data-row="${this.currentPosition[0]}"][data-col="${this.currentPosition[1]}"]`);
    if (cell) {
        cell.textContent = ''; // Clear the digit from the cell
    }
    cell.style.backgroundColor = '';
    if (this.PositionButtonnp) {
        this.checkPositionnp();
    }
    if (this.UpButtonnp) {
        this.checkUpnp();
    }
    if (this.DownButtonnp) {
        this.checkDownnp();
    }
    if (this.LeftButtonnp) {
        this.checkLeftnp();
    }
    if (this.RightButtonnp) {
        this.checkRightnp();
    }
    if (this.DigitButtonnp) {
        this.checkDigitnp();
    }
    if (this.ColorButtonnp) {
        this.checkColornp();
    }
    if (this.SmallernButtonnp) {
        this.checkSmallernnp();
    }
    if (this.LargernButtonnp) {
        this.checkLargernnp();
    }
    if (this.StimuliButtonnp) {
        this.checkStimulinp();
    }
    this.PositionButtonnp = true;
                this.ColorButtonnp = true;
                this.DigitButtonnp = true;
                this.LeftButtonnp = true;
                this.UpButtonnp = true;
                this.DownButtonnp = true;
                this.RightButtonnp = true;
                this.LargernButtonnp = true;
                this.SmallernButtonnp = true;
                this.StimuliButtonnp = true;
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
                    this.correct++;
                } else {
                    this.checkPositionButton.style.backgroundColor = 'red'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkPositionButton.style.backgroundColor = '';
                }, 500);
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
                    this.checkPositionButton.style.backgroundColor = 'purple';
                    this.mistakes++;
                } 
                }

                setTimeout(() => {
                    this.checkPositionButton.style.backgroundColor = '';
                }, 500);
            }
      
        
        checkDown() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] < this.currentPosition[0]
                ) {
                    this.checkDownButton.style.backgroundColor = 'green';
                    this.correct++;
                } else {
                    this.checkDownButton.style.backgroundColor = 'red'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkDownButton.style.backgroundColor = '';
                }, 500);
            }
        }
        checkDownnp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] < this.currentPosition[0]
                ) {
                    this.checkDownButton.style.backgroundColor = 'purple';
                    this.mistakes++;
                } 

                setTimeout(() => {
                    this.checkDownButton.style.backgroundColor = '';
                }, 500);
            }
        }
        
        checkUp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] > this.currentPosition[0]
                ) {
                    this.checkUpButton.style.backgroundColor = 'green';
                    this.correct++;
                } else {
                    this.checkUpButton.style.backgroundColor = 'red'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkUpButton.style.backgroundColor = '';
                }, 500);
            }
        }
        checkUpnp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[0] > this.currentPosition[0]
                ) {
                    this.checkUpButton.style.backgroundColor = 'purple';
                    this.mistakes++;
                } 

                setTimeout(() => {
                    this.checkUpButton.style.backgroundColor = '';
                }, 500);
            }
        }
        
        checkRight() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[1] < this.currentPosition[1]
                ) {
                    this.checkRightButton.style.backgroundColor = 'green';
                    this.correct++;
                } else {
                    this.checkRightButton.style.backgroundColor = 'red'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkRightButton.style.backgroundColor = '';
                }, 500);
            }
        }
        checkRightnp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[1] < this.currentPosition[1]
                ) {
                    this.checkRightButton.style.backgroundColor = 'purple';
                    this.mistakes++;
                } 

                setTimeout(() => {
                    this.checkRightButton.style.backgroundColor = '';
                }, 500);
            }
        }
        
        checkLeft() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[1] > this.currentPosition[1]
                ) {
                    this.checkLeftButton.style.backgroundColor = 'green';
                    this.correct++;
                } else {
                    this.checkLeftButton.style.backgroundColor = 'red'; 
                    this.mistakes++;
                }

                setTimeout(() => {
                    this.checkLeftButton.style.backgroundColor = '';
                }, 500);
            }
        }
        checkLeftnp() {
            if (this.currentPosition !== null && this.currentN > 0 && this.history.length >= this.currentN) {
                const nStepsAgoPosition = this.history[this.history.length - this.currentN - 1]; 
                console.log('N steps ago position:', nStepsAgoPosition);
                
                if (
                    nStepsAgoPosition &&
                    nStepsAgoPosition[1] > this.currentPosition[1]
                ) {
                    this.checkLeftButton.style.backgroundColor = 'purple';
                    this.mistakes++;
                } 

                setTimeout(() => {
                    this.checkLeftButton.style.backgroundColor = '';
                }, 500);
            }
        }
        
        checkDigit() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit === this.currentDigit) {
            this.checkDigitButton.style.backgroundColor = 'green';
            this.correct++; 
        } else {
            this.checkDigitButton.style.backgroundColor = 'red';
            this.mistakes++; 
        }

        setTimeout(() => {
            this.checkDigitButton.style.backgroundColor = ''; 
        }, 500); 
    }
}
checkDigitnp() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit === this.currentDigit) {
            this.checkDigitButton.style.backgroundColor = 'purple'; 
            this.mistakes++;
        } 
        setTimeout(() => {
            this.checkDigitButton.style.backgroundColor = ''; 
        }, 500); 
    }
}

checkLargern() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit < this.currentDigit) {
            this.checkLargernButton.style.backgroundColor = 'green'; 
            this.correct++;
        } else {
            this.checkLargernButton.style.backgroundColor = 'red';
            this.mistakes++; 
        }

        setTimeout(() => {
            this.checkLargernButton.style.backgroundColor = ''; 
        }, 500); 
    }
}
checkLargernnp() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit < this.currentDigit) {
            this.checkLargernButton.style.backgroundColor = 'purple'; 
            this.mistakes++;
        } 

        setTimeout(() => {
            this.checkLargernButton.style.backgroundColor = ''; 
        }, 500); 
    }
}

checkSmallern() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit > this.currentDigit) {
            this.checkSmallernButton.style.backgroundColor = 'green'; 
            this.correct++;
        } else {
            this.checkSmallernButton.style.backgroundColor = 'red'; 
            this.mistakes++;
        }

        setTimeout(() => {
            this.checkSmallernButton.style.backgroundColor = ''; 
        }, 500); 
    }
}
checkSmallernnp() {
    if (this.currentDigit !== null && this.currentN > 0 && this.digitHistory.length >= this.currentN) {
        const nStepsAgoDigit = this.digitHistory[this.digitHistory.length - this.currentN - 1]; 
        console.log('N steps ago digit:', nStepsAgoDigit);

        if (nStepsAgoDigit !== undefined && nStepsAgoDigit > this.currentDigit) {
            this.checkSmallernButton.style.backgroundColor = 'purple'; 
            this.mistakes++;
        } 
        }

        setTimeout(() => {
            this.checkSmallernButton.style.backgroundColor = ''; 
        }, 500); 
    }


        checkStimuli() {
            const nStepsAgoStimuli = this.stimuliHistory[this.stimuliHistory.length - this.currentN - 1]; 
            console.log('N steps ago rotation:', nStepsAgoStimuli);
            
            if (nStepsAgoStimuli !== undefined && nStepsAgoStimuli === this.currentStimuli) {
                this.checkStimuliButton.style.backgroundColor = 'green';
                this.correct++;
            } else {
                this.checkStimuliButton.style.backgroundColor = 'red';
                this.mistakes++; 
            }

            setTimeout(() => {
                this.checkStimuliButton.style.backgroundColor = ''; 
            }, 500); 
        }
        checkStimulinp() {
            const nStepsAgoStimuli = this.stimuliHistory[this.stimuliHistory.length - this.currentN - 1]; 
            console.log('N steps ago rotation:', nStepsAgoStimuli);
            
            if (nStepsAgoStimuli !== undefined && nStepsAgoStimuli === this.currentStimuli) {
                this.checkStimuliButton.style.backgroundColor = 'purple';
                this.mistakes++;
            }

            setTimeout(() => {
                this.checkStimuliButton.style.backgroundColor = ''; 
            }, 500); 
        }
    
    
    checkColor() {
        const nStepsAgoColor = this.colorHistory[this.colorHistory.length - this.currentN - 1]; 
            console.log('N steps ago color:', nStepsAgoColor);
            
            if (nStepsAgoColor !== undefined && nStepsAgoColor === this.currentColor) {
                this.checkColorButton.style.backgroundColor = 'green';
                this.correct++;
            } else {
                this.checkColorButton.style.backgroundColor = 'red'; 
                this.mistakes++;
            }

            setTimeout(() => {
                this.checkColorButton.style.backgroundColor = ''; 
            }, 500); 
        }
        checkColornp() {
        const nStepsAgoColor = this.colorHistory[this.colorHistory.length - this.currentN - 1]; 
            console.log('N steps ago color:', nStepsAgoColor);
            
            if (nStepsAgoColor !== undefined && nStepsAgoColor === this.currentColor) {
                this.checkColorButton.style.backgroundColor = 'purple';
                this.mistakes++;
            } 

            setTimeout(() => {
                this.checkColorButton.style.backgroundColor = ''; 
            }, 500); 
        }
        
      getDelayInterval() {
            return parseInt(prompt('Enter time delay (in milliseconds):'), 10) || 1000; // Default delay is 1000ms
        }
    }

    // Initialize DeltaNBack instance
    const deltaNBack = new DeltaNBack();
});
