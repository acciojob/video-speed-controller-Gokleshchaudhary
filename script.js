const video = document.querySelector('.player__video'); // Select the video element
const playButton = document.querySelector('.toggle'); // Select the toggle button
const progressFilled = document.querySelector('.progress__filled');
const volumeInput = document.querySelector('.volume');
const speedInput = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

// Play/Pause functionality
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
});

// Update progress bar
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

// Volume control
volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Playback speed control
speedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Rewind functionality
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10; // Rewind by 10 seconds
});

// Skip functionality
skipButton.addEventListener('click', () => {
    video.currentTime += 25; // Skip forward by 25 seconds
});