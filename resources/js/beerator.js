const selfImage = document.getElementById('self-image');
let timer;

//Adds events listener for touchstart. When the screen in touched, a timer begins to count down. If the screen is held for four seconds, then the hidden beerator app will appear.
selfImage.addEventListener('touchstart', target => {
    timer = setTimeout(() => {
        document.getElementById('personal-site').style.display = 'none';
        document.getElementById('beerator').style.display = 'block'
    }, 4000);
});

//If the screen is let go before the 4 seconds, the touchend event listener clears the timer.
selfImage.addEventListener('touchend', target => {
    clearTimeout(timer);
});