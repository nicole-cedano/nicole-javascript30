

// function to remove the transform property
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

// function that will play sound and if the key selected has no sound the function ends
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}


// global keys
const keys = Array.from(document.querySelectorAll('.key'))
// on transition end start removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


// event listener that when key is pressed the playSound function is it's call back 
window.addEventListener('keydown', playSound)