// import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

'use strict()';

window.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('.switch-theme'),
        zooSlider = document.querySelector('.slider-imgs'),
        zooVideo = document.querySelector('.main-video');

  zooSlider.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.target.children[0].src);
    console.log(zooVideo.src);
    let a = zooVideo.src,
        b = event.target.children[0].src;
    
    zooVideo.src = b;
    event.target.children[0].src = a;

  });

  theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.switch-theme__switcher').classList.toggle('switcher-dark');
  });
});