document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('#block-tapping td');
  const timeIntervalInput = document.getElementById('time-interval');
  const numStimuliInput = document.getElementById('num-stimuli');
  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const totalStimuliDisplay = document.getElementById('total-stimuli');
  const correctStimuliDisplay = document.getElementById('correct-stimuli');
  const accuracyDisplay = document.getElementById('accuracy');
  let intervalId;
  let stimuliCount = 0;
  let coordinates = []; // Array to store coordinates
  let correctMatches = []; // Array to track correct matches
  let totalStimuli = 0;
  let correctStimuli = 0;
  let canTap = false; // Variable to track if tapping is enabled

  function chooseRandomCoordinate() {
    const randomRow = Math.floor(Math.random() * 4);
    const randomCol = Math.floor(Math.random() * 4);
    return { row: randomRow, col: randomCol };
  }

  function showBlueSquare() {
    const randomCoordinate = chooseRandomCoordinate();
    const cellIndex = randomCoordinate.row * 4 + randomCoordinate.col;
    cells[cellIndex].style.backgroundColor = 'blue';
    coordinates.push(randomCoordinate); // Store the coordinate
    stimuliCount++;
    if (stimuliCount >= parseInt(numStimuliInput.value)) {
      clearInterval(intervalId);
      canTap = true; // Enable tapping after stimuli generation
    }
    setTimeout(() => {
      cells[cellIndex].style.backgroundColor = ''; // Reset color after timeout
    }, timeIntervalInput.value / 1.35); // Change 1000 to timeIntervalInput.value if you want to use user input
  }

  function handleCellClick(cellIndex) {
    if (canTap) {
      const tappedCoordinate = {
        row: Math.floor(cellIndex / 4),
        col: cellIndex % 4
      };
      const stimuliCoordinate = coordinates[correctMatches.length];
      const Accuracy = 100 / (totalStimuli / correctStimuli);
      accuracyDisplay.textContent = Accuracy;
      if (
        tappedCoordinate.row === stimuliCoordinate.row &&
        tappedCoordinate.col === stimuliCoordinate.col
      ) {
        // Correct match
        cells[cellIndex].style.backgroundColor = 'green';
        correctMatches.push(stimuliCoordinate);
        correctStimuli++;
        correctStimuliDisplay.textContent = correctStimuli;
      } else {
        // Mismatch
        cells[cellIndex].style.backgroundColor = 'red';
      }
      totalStimuli++;
      totalStimuliDisplay.textContent = totalStimuli;
    }
  }

  // Add event listeners to each cell
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
  });

  startBtn.addEventListener('click', function() {
  const timeInterval = parseInt(timeIntervalInput.value);
  const numStimuli = parseInt(numStimuliInput.value);
  if (!isNaN(timeInterval) && !isNaN(numStimuli)) {
    clearInterval(intervalId);
    stimuliCount = 0;
    coordinates = [];
    correctMatches = [];
    totalStimuli = 0;
    correctStimuli = 0;
    Accuracy = 0;
    totalStimuliDisplay.textContent = '0';
    correctStimuliDisplay.textContent = '0';
    accuracyDisplay.textContent = '0';
    canTap = false;

    // Reset background color of all cells
    cells.forEach(cell => {
      cell.style.backgroundColor = '';
    });

    intervalId = setInterval(showBlueSquare, timeInterval);
  }
});

  stopBtn.addEventListener('click', function() {
    clearInterval(intervalId);
  });
});
