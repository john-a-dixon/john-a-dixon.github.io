const dropDownToggle = document.getElementById('dropdown-toggle');
const dropDownLinks = document.getElementById('dropdown-links')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); //Function that returns a promise which resolves after certain amount of time (ms).

async function delayHide() { //Asynchronous function that waits for the sleep function to resolve after 50ms.
    await sleep(50);
    dropDownLinks.style.visibility = 'hidden';
}

dropDownToggle.addEventListener('touchstart', event => {
    dropDownLinks.style.visibility = 'visible';
});

dropDownLinks.addEventListener('touchend', event => {
    delayHide();
});

  