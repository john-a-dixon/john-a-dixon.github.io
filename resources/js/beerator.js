let beeratorCount = 0;

document.getElementById('self-image').addEventListener('click', target => {
    if(beeratorCount < 3)
        beeratorCount++;
});

document.getElementById('intro').addEventListener('click', target => {
    if(beeratorCount === 3) {
        document.getElementById('personal-site').style.display = 'none';
        document.getElementById('beerator').style.display = 'block'
    }

});