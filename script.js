// Get references to the audio and buttons
const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');
const volumeControl = document.getElementById('volumeControl');
const skipBackward = document.getElementById('skipBackward');
const skipForward = document.getElementById('skipForward');

// Play/Pause button functionality
playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';  // Change button text to "Pause"
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';  // Change button text to "Play"
  }
});

// Volume control functionality
volumeControl.addEventListener('input', function() {
  audio.volume = volumeControl.value; // Adjust volume based on the range input
});

// Skip forward 10 seconds
skipForward.addEventListener('click', function() {
  audio.currentTime += 10;  // Skip forward 10 seconds
});

// Skip backward 10 seconds
skipBackward.addEventListener('click', function() {
  audio.currentTime -= 10;  // Skip backward 10 seconds
});
