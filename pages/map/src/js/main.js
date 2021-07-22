// import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

'use strict()';

window.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('.switch-theme'),
        slider = document.querySelector('.block__imgs'),
        slideNext = document.querySelector('.slider__arrow-right'),
        slidePrev = document.querySelector('.slider__arrow-left'),
        slideBlocks = document.querySelectorAll('.map-slide'),
        slideImgs = document.querySelectorAll('.map-slide-img'),
        slideNum = document.querySelector('#ms-num'),
        slideRange = document.querySelector('#ms_range'),
        labelPath = document.querySelectorAll('.map-path');

  let slideIndex = 1;

  slideNum.textContent = '0' + (slideIndex + 1);
  slideRange.value = (slideIndex + 1);
  labelPath[3].classList.add('label-path-active');

  function chooseLabel() {
    labelPath.forEach((item) => {
      item.classList.remove('label-path-active');
    });
    switch (slideIndex) {
      case 0: 
        labelPath[2].classList.add('label-path-active');
        break;
      case 1: 
        labelPath[3].classList.add('label-path-active');
        break;
      case 2: 
        labelPath[1].classList.add('label-path-active');
        break;
      case 3: 
        labelPath[0].classList.add('label-path-active');
        break;
    };
    // if (slideIndex === 0) {
    //   labelPath[2].classList.add('label-path-active');
    // };
    // if
  }

  function slideAddClass(index) {
    slideBlocks[index].classList.add('img__border');
    slideBlocks[index].classList.add('img__border-map');
    slideImgs[index].classList.remove('block__image');
  };

  function slideRemoveClass(index) {
    slideBlocks[index - 1].classList.remove('img__border');
    slideBlocks[index - 1].classList.remove('img__border-map');
    slideImgs[index - 1].classList.add('block__image');
  };

  function sliderNext() {
    slideIndex++;
    if (slideIndex > 7) {
      slideIndex = 0;
      slideNum.textContent = '0' + (slideIndex + 1);
      slideRange.value = (slideIndex + 1);
      chooseLabel();
      slider.scrollTo(-1300, 0);
    };

    if (slideIndex == 5 || slideIndex == 6) {
      slider.scrollTo(138 * (slideIndex - 4), 0);
    };

    if (slideIndex == 7) {
      slider.scrollTo(2500 * (slideIndex - 4), 0);
    };
    

    if (slideIndex === 0) {
      slideRemoveClass(8);
    }
    slideAddClass(slideIndex);
    slideRemoveClass(slideIndex);

    slideNum.textContent = '0' + (slideIndex + 1);
    slideRange.value = (slideIndex + 1);
    chooseLabel();
  };

  function sliderPrev() {
    slideIndex--;
    if (slideIndex > 7) {
      slideIndex = 0;

    };
    if (slideIndex < 0) {
      slideIndex = 7;
      slideRemoveClass(1);
      slideNum.textContent = '0' + (slideIndex + 1);
      slideRange.value = (slideIndex + 1);
      chooseLabel();
      slider.scrollTo(1380, 0);
    };
    if (slideIndex === 0) {
      slideRemoveClass(8);
    }

    if (slideIndex <= 4) {
      slider.scrollTo(138 * (slideIndex), 0);
    };

    slideAddClass(slideIndex);
    slideRemoveClass(slideIndex + 2);

    slideNum.textContent = '0' + (slideIndex + 1);
    slideRange.value = (slideIndex + 1);

    chooseLabel();
  };

  slideNext.addEventListener('click', () => {
    sliderNext();
    
    
    // slideIndex++;
    // if (slideIndex > 7) {
    //   slideIndex = 0;
    //   slideNum.textContent = '0' + (slideIndex + 1);
    //   slideRange.value = (slideIndex + 1);
    // };
    // if (slideIndex === 0) {
    //   slideRemoveClass(8);
    // }
    // slideAddClass(slideIndex);
    // slideRemoveClass(slideIndex);

    // slideNum.textContent = '0' + (slideIndex + 1);
    // slideRange.value = (slideIndex + 1);

  });

  slidePrev.addEventListener('click', () => {
    
    sliderPrev();
    
    // slideIndex--;
    // if (slideIndex > 7) {
    //   slideIndex = 0;

    // };
    // if (slideIndex < 0) {
    //   slideIndex = 7;
    //   slideRemoveClass(1);
    //   slideNum.textContent = '0' + (slideIndex + 1);
    //   slideRange.value = (slideIndex + 1);
    // };
    // if (slideIndex === 0) {
    //   slideRemoveClass(8);
    // }

    // slideAddClass(slideIndex);
    // slideRemoveClass(slideIndex + 2);

    // slideNum.textContent = '0' + (slideIndex + 1);
    // slideRange.value = (slideIndex + 1);

  });

  slideRange.addEventListener('input', () => {
    slideBlocks.forEach((item) => {
      item.classList.remove('img__border');
      item.classList.remove('img__border-map');
    });

    slideImgs.forEach((item) => {
      item.classList.add('block__image');
    });

    if ((+slideRange.value - 1) > slideIndex) {
      slideIndex = (+slideRange.value - 2);
      slideNum.textContent = '0' + (slideIndex + 1);
      console.log(slideIndex);
      sliderNext();
    } else {

      sliderPrev();
    }
  })

  slideBlocks.forEach((item) => {
    item.addEventListener('click', (event) => {
      console.log(+event.target.id.slice(-1));
      slideIndex = +event.target.id.slice(-1);
      slideBlocks.forEach((item) => {
        item.classList.remove('img__border');
        item.classList.remove('img__border-map');
      });
      slideImgs.forEach((item) => {
        item.classList.add('block__image');
      });
      slideAddClass(slideIndex);
      slideRange.value = (slideIndex + 1);
      slideNum.textContent = '0' + (slideIndex + 1);
      chooseLabel();

    })
  });
//!----переход по лейблам-----
  document.querySelector('.map__label_eagle').addEventListener('click', () => {
    window.open('../zoos_page/eagle/index.html');
  });
  document.querySelector('.map__label_crocodile').addEventListener('click', () => {
    window.open('../zoos_page/alligator/index.html');
  });
  document.querySelector('.map__label_orangutan').addEventListener('click', () => {
    window.open('../zoos_page/gorilla/index.html');
  });
  document.querySelector('.map__label_panda').addEventListener('click', () => {
    window.open('../zoos_page/panda/index.html');
  });

  //!-----переход по комке----

  document.querySelector('.watch-btn_map').addEventListener('click', () => {
    switch (slideIndex) {
      case 0: 
        window.open('../zoos_page/gorilla/index.html');
        break;
      case 1: 
      window.open('../zoos_page/panda/index.html');
        break;
      case 2: 
      window.open('../zoos_page/alligator/index.html');
        break;
      case 3: 
      window.open('../zoos_page/eagle/index.html');
        break;
    };
  })

  //!----смена темы------

  theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.switch-theme__switcher').classList.toggle('switcher-dark');
  })
});