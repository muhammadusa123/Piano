// Ensure this script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons
    const buttons = document.querySelectorAll('.no button');

    // Variable to hold the current audio
    let currentAudio = null;
    let isPlaying = false; // Track whether a sound is currently playing

    // Function to play or stop sound based on button element
    function toggleSound(button) {
        // Get the sound file from the data attribute
        const soundFile = button.getAttribute('data-sound');

        if (isPlaying && currentAudio && currentAudio.src === soundFile) {
            // If the same button is pressed again, stop the sound
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset audio to start
            isPlaying = false; // Update state
            button.classList.remove('active'); // Remove active class
        } else {
            // Stop and reset currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset audio to start
                // Remove active class from the previous button
                buttons.forEach(btn => btn.classList.remove('active'));
            }

            // Start playing the new sound
            currentAudio = new Audio(soundFile);
            currentAudio.play();
            isPlaying = true; // Update state
            button.classList.add('active'); // Add active class
        }
    }

    // Add mousedown event listener to each button
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            toggleSound(button);
        });
    });

    // Add keyboard event listener
    document.addEventListener('keydown', (event) => {
        const keyMap = {
            'a': 0, // 1.mp3
            's': 1, // 2.mp3
            'd': 2, // 3.mp3
            'f': 3, // 4.mp3
            'g': 4, // 5.mp3
            'h': 5, // 6.mp3
            'j': 6, // 7.mp3
            'k': 7, // 8.mp3
            'l': 8, // 9.mp3
            ';': 9  // 11.mp3
        };

        const buttonIndex = keyMap[event.key];
        if (buttonIndex !== undefined) {
            toggleSound(buttons[buttonIndex]);
            buttons[buttonIndex].classList.add('active'); // Add active class on key press
        }
    });

    // Remove active class on keyup
    document.addEventListener('keyup', (event) => {
        const keyMap = {
            'a': 0,
            's': 1,
            'd': 2,
            'f': 3,
            'g': 4,
            'h': 5,
            'j': 6,
            'k': 7,
            'l': 8,
            ';': 9
        };

        const buttonIndex = keyMap[event.key];
        if (buttonIndex !== undefined) {
            buttons[buttonIndex].classList.remove('active'); // Remove active class on keyup
        }
    });
});

