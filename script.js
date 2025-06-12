const video = document.querySelector('.video');
const playButton = document.querySelector('.player__button');
const progressFilled = document.querySelector('.progress__filled');
const volumeInput = document.querySelector('.volume');
const speedInput = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

speedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

skipButton.addEventListener('click', () => {
    video.currentTime += 25;
});