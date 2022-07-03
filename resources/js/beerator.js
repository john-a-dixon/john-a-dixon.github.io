const selfImage = document.getElementById('self-image');
let timer;

selfImage.addEventListener('touchstart', target => {
    timer = setTimeout(() => {
        document.getElementById('personal-site').style.display = 'none';
        document.getElementById('beerator').style.display = 'block'
    }, 4000);

    console.log(timer);
});

selfImage.addEventListener('touchend', target => {
    clearTimeout(timer);
});