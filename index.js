const blockWrapper = document.querySelector('.home-block-wrapper')
const inputWrapper = document.querySelector('.home-input-wrapper')
const inputButton = document.querySelector('.home-bottom-button')

let activeBlock = true

updateInput(activeBlock)

function updateInput(activeBlock) {
  if (activeBlock) {
    blockWrapper.style.width = '100%'
    blockWrapper.style.padding = '3px'
    inputWrapper.style.width = '0px'
    inputWrapper.style.padding = '0px'
  } else {
    blockWrapper.style.width = '0px'
    blockWrapper.style.padding = '0px'
    inputWrapper.style.width = '100%'
    inputWrapper.style.padding = '3px 8px 3px 0px'
  }
}

inputButton.addEventListener('click', () => {
  if (window.innerWidth <= 730) {
    activeBlock = false
    updateInput(activeBlock)
  } else {
    activeBlock = !activeBlock
    updateInput(activeBlock)
  }
})

const burger = document.querySelector('.burger')
const headerBody = document.querySelector('.header-body')

burger.addEventListener('click', () => {
  headerBody.classList.toggle('open')
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 730 && activeBlock) {
    activeBlock = false
    updateInput(activeBlock)
  }
})

/////////////////////////////////////////////////
new Swiper('.destinations-cards-container', {
  slidesPerView: 6,
  spaceBetween: 32,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    490: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    730: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    970: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1100: {
      spaceBetween: 12,
      slidesPerView: 6,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})
new Swiper('.hotels-card-container', {
  slidesPerView: 4,
  spaceBetween: 32,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})
new Swiper('.activities-card-container', {
  slidesPerView: 4,
  spaceBetween: 32,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
