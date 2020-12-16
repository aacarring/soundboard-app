const buttons = document.querySelectorAll('.button');
const sounds = document.querySelectorAll('.sound');


buttons.forEach((button, index) => button.addEventListener('click', function() {
    sounds[index].currentTime = 0;
    sounds[index].play();
}));