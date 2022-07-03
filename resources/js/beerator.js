document.getElementById('self-image').addEventListener('mousedown', target => {
    setTimeout(() => {
        document.getElementById('personal-site').style.display = 'none';
        document.getElementById('beerator').style.display = 'block'
    }, 4000);
});