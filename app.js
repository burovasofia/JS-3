const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

//sidebar.style.top = `-${3 * 100}vh`

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click', () => {
    ckhaugeSlide('up')
})

downBtn.addEventListener('click', () => {
    ckhaugeSlide('down')
})


document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        ckhaugeSlide('up')
    }else if (event.key === 'ArrowDown') {
        ckhaugeSlide('down')
    }
})

function ckhaugeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount-1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}






















