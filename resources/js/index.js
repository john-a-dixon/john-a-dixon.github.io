const dropDownToggle = document.getElementById('dropdown-toggle');
const dropDownLinks = document.getElementById('dropdown-links')

/****************************************A Simple fix for my problem, though I do not know what it does just yet.****************************************/
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function delayHide() {
    await sleep(50);
    dropDownLinks.style.visibility = 'hidden';
}

dropDownToggle.addEventListener('touchstart', event => {
    dropDownLinks.style.visibility = 'visible';
});

dropDownLinks.addEventListener('touchend', event => {
    delayHide();
});

  