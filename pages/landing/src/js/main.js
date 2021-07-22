// import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

'use strict()';

window.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('.switch-theme'),
        watchSlider = document.querySelector('#watch-slider'),
        watchSliderItems = document.querySelectorAll('.slide-item'),
        watchSliderNum = document.querySelector('#ws-num'),
        watchSliderRange = document.querySelector('#ws_range'),
        // watchSliderScroll = document.querySelector('#ws-scroll'),
        petsSlider = document.querySelector('#pets-slider'),
        petsSliderItems = document.querySelectorAll('.main__block--pz'),
        petsSliderNum = document.querySelector('#ps-num'),
        petsSliderRange = document.querySelector('#ps_range'),
        petsSliderItemsText = document.querySelectorAll('.block__text--pz'),
        petsSliderItemsImg = document.querySelectorAll('.ps-image'),
        petsSliderItemsImgBlock = document.querySelectorAll('.block__img--pz'),
        petsSliderRight = document.querySelector('.slider__arrow-right'),
        petsSliderLeft = document.querySelector('.slider__arrow-left');
  
  let arr = [],
      petsSliderIndex = 0;

  for (let i = 0; i < watchSliderItems.length; i++) {
    // let arr = [];
    arr.push(watchSliderItems[i].getAttribute('src'));
  };
  console.log(arr);
  console.log(watchSliderItems);

  // const getElement = selector => {
  //   return document.querySelector(selector);
  // };

  function changeImages(n) {
    console.log(n);
    // console.log(typeof(n));
    if (n == 1) {
      watchSliderItems[0].classList.add('none-img');
      watchSliderItems[2].classList.remove('none-img');
      watchSliderItems[3].classList.remove('none-img');
      watchSliderItems[4].classList.remove('none-img');
      watchSliderItems[5].classList.remove('none-img');
      watchSliderItems[6].classList.remove('none-img');
      watchSliderItems[7].classList.remove('none-img');
    } else {
      watchSliderItems[0].classList.remove('none-img');
    };

    if (n == 4) {
      watchSliderItems[2].classList.remove('none-img');
      watchSliderItems[3].classList.remove('none-img');
      watchSliderItems[4].classList.remove('none-img');
    }; 

    if (n == 5) {
      watchSliderItems[4].classList.remove('none-img');
    }; 

    if (n == 6) {
      watchSliderItems[2].classList.remove('none-img');
      watchSliderItems[3].classList.remove('none-img');
      watchSliderItems[4].classList.add('none-img');
      watchSliderItems[5].classList.add('none-img');
      watchSliderItems[6].classList.add('none-img');
      watchSliderItems[7].classList.add('none-img');
    }; 

    if (n == 7) {
      watchSliderItems[2].classList.remove('none-img');
      watchSliderItems[3].classList.add('none-img');
      watchSliderItems[4].classList.add('none-img');
      watchSliderItems[5].classList.add('none-img');
      watchSliderItems[6].classList.add('none-img');
      watchSliderItems[7].classList.add('none-img');
    }; 

    if (n == 8) {
      watchSliderItems[2].classList.add('none-img');
      watchSliderItems[3].classList.add('none-img');
      watchSliderItems[4].classList.add('none-img');
      watchSliderItems[5].classList.add('none-img');
      watchSliderItems[6].classList.add('none-img');
      watchSliderItems[7].classList.add('none-img');
    }; 

    // watchSliderNum.innerHTML = '0' + n;

    // watchSliderRange.value = n;
      
      for (let i = 0; i < watchSliderItems.length; i++) {
        let newN = i + n - 1;
        // console.log('111' + newN);
        if (newN > watchSliderItems.length) {
          newN = newN - watchSliderItems.length;
        }
        // console.log(newN);
        if (newN == 0) {
          newN = 8;
        }
        // console.log('222' + newN);
        // console.log((n + watchSliderItems.length) % watchSliderItems.length);
        watchSliderItems[i].setAttribute('src', arr[newN - 1]);
        watchSliderItems[i].setAttribute('id', `ws_img_${newN}`);
      }
  }

  watchSlider.addEventListener('click', function(event) {
    let n = +event.target.id.slice(-1);

    if (event.target.classList.contains('slide-item')) {
      watchSliderNum.innerHTML = '0' + n;
      watchSliderRange.value = n;

      changeImages(n);
    
    }
  })

  watchSliderRange.addEventListener('input', () => {
    let n = +watchSliderRange.value;
    
    watchSliderNum.textContent = '0' + n;
    console.log(watchSliderRange.value);

    // console.log(watchSliderItems);
    changeImages(n);
    console.log(watchSliderItems);

  })

  //!------SLIDER pets in zoo----------

  function petsSliderAddClass(index) {
    petsSliderItemsText[index].classList.add('block__text--pz-hover');
    petsSliderItemsImg[index].classList.add('ps-image-hover');
    petsSliderItemsImgBlock[index].classList.add('block__img--pz-hover');
  };

  function petsSliderRemoveClass(index) {
    petsSliderItemsText[index - 1].classList.remove('block__text--pz-hover');
    petsSliderItemsImg[index - 1].classList.remove('ps-image-hover');
    petsSliderItemsImgBlock[index - 1].classList.remove('block__img--pz-hover');
  };

  function petsSliderNext() {
    petsSliderIndex++;
    
    if (petsSliderIndex > 7) {
      petsSliderIndex = 0;
      petsSlider.scrollBy(-1230, 0);
    }; 
    
    if (petsSliderIndex >= 4) {
      // petsSlider.scrollBy(307, 0);
      petsSlider.scrollTo(307 * (petsSliderIndex - 3), 0);
      // petsSlider.style.transform = "translateX(-307px)"
    }; 

    petsSliderAddClass(petsSliderIndex);

    if (petsSliderIndex >= 1) {
      petsSliderRemoveClass(petsSliderIndex);
    };

    petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
    petsSliderRange.value = (petsSliderIndex + 1);
  };

  function petsSliderPrev() {
    petsSliderIndex--;
    console.log(petsSliderIndex);
    if (petsSliderIndex < 0) {
      petsSliderIndex = 7;
      petsSlider.scrollBy(1230, 0);
      petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
      petsSliderRange.value = (petsSliderIndex + 1);
    }; 
    
    if (petsSliderIndex <= 3) {
      petsSlider.scrollTo(307 * (petsSliderIndex), 0);
      // petsSlider.scrollBy(-307, 0);
    }; 

    petsSliderAddClass(petsSliderIndex);

    if (petsSliderIndex >= 0) {
      petsSliderRemoveClass(petsSliderIndex + 2);
    };

    console.log(petsSliderIndex);
    petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
    petsSliderRange.value = (petsSliderIndex + 1);
  }

  petsSliderAddClass(petsSliderIndex);

  petsSliderNum.textContent = '0' + (petsSliderIndex + 1);


  petsSliderRight.addEventListener('click', () => {
    
    petsSliderNext();
    
    // console.log(petsSliderIndex);
    // petsSliderIndex++;
    
    // if (petsSliderIndex > 7) {
    //   petsSliderIndex = 0;
    //   petsSlider.scrollBy(-1230, 0);
    // }; 
    
    // if (petsSliderIndex >= 4) {
    //   petsSlider.scrollBy(307, 0);
    // }; 

    // petsSliderAddClass(petsSliderIndex);

    // if (petsSliderIndex >= 1) {
    //   petsSliderRemoveClass(petsSliderIndex);
    // };

    // petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
    // petsSliderRange.value = (petsSliderIndex + 1);
    
    
  });

  petsSliderLeft.addEventListener('click', () => {

    petsSliderPrev();

    // petsSliderIndex--;
    // console.log(petsSliderIndex);
    // if (petsSliderIndex < 0) {
    //   petsSliderIndex = 7;
    //   petsSlider.scrollBy(1230, 0);
    //   petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
    //   petsSliderRange.value = (petsSliderIndex + 1);
    // }; 
    
    // if (petsSliderIndex <= 3) {
    //   petsSlider.scrollBy(-307, 0);
    // }; 

    // petsSliderAddClass(petsSliderIndex);

    // if (petsSliderIndex >= 0) {
    //   petsSliderRemoveClass(petsSliderIndex + 2);
    // };

    // console.log(petsSliderIndex);
    // petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
    // petsSliderRange.value = (petsSliderIndex + 1);
    
  });

  petsSliderRange.addEventListener('input', () => {
    // console.log(petsSliderIndex);
    // console.log(petsSliderRange.value);
    if ((+petsSliderRange.value - 1) > petsSliderIndex) {
      petsSliderIndex = (+petsSliderRange.value - 2);
      petsSliderNum.textContent = '0' + (petsSliderIndex + 1);
      petsSliderNext();
    } else {
      petsSliderPrev();
    }
    // console.log(petsSliderIndex);
    // petsSliderAddClass(petsSliderIndex);
    // petsSliderRemoveClass(petsSliderIndex);

  })


  //!---change theme-----

  theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.switch-theme__switcher').classList.toggle('switcher-dark');
  })
});
