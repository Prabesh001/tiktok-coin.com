// Set the initial time (5 minutes in milliseconds)
let timeInMilliseconds = 5 * 60 * 1000;

// Get a reference to the countdown element
const countdownElement = document.getElementById('countdown');

// Function to update the countdown display
function updateCountdown() {
    // Calculate the minutes and seconds
    const minutes = Math.floor(timeInMilliseconds / 60000);
    const seconds = ((timeInMilliseconds % 60000) / 1000).toFixed(0);

    // Display the time in the format "mm:ss"
    countdownElement.textContent = `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;

    // Check if the countdown has reached zero
    if (timeInMilliseconds <= 0) {
        clearInterval(interval);
        countdownElement.textContent = '0:00';
        // You can add code here to execute when the countdown reaches zero
    } else {
        // Decrement the time by 1 second
        timeInMilliseconds -= 1000;
    }
}

// Initial call to update the countdown display
updateCountdown();

// Set up a setInterval to update the countdown every second
const interval = setInterval(updateCountdown, 1000);