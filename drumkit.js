window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;//if key is not found stop the function
    audio.currentTime = 0;//play continous
    audio.play()
    key.classList.add('playing')
    setTimeout(() => { key.classList.remove('playing') }, 400)
    // console.log(event.keyCode)

})