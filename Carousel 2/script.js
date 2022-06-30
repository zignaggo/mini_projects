const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')
const radios = document.querySelectorAll('#radio-container input')
const imageNumber = document.querySelectorAll('#carousel-slider > div > img').length
const slider = document.querySelector('#carousel-slider')

// Radios Event

radios.forEach((element, index) => {

        if(index===0) element.click()

        element.addEventListener('change', () => {
            slider.style.transform = `translateX(calc(100%/${-imageNumber}*${index}))`
            }
        )
    }
)

// Arrows Event

arrowLeft.addEventListener('click', () => {

    var indiceClick = radios.length-1

        for (let indice = radios.length-1; indice > 0; indice--) {
            if (radios[indice].checked) {
                indiceClick=indice-1
            }
        }
        
        (indiceClick == radios.length-1) ?  0 : radios[indiceClick].click()
})


arrowRight.addEventListener('click', () => {
        var indiceClick = 0

        for (let indice = 0; indice < radios.length; indice++) {
                if (radios[indice].checked) {
                    indiceClick=indice+1
           }
        }

        (indiceClick === radios.length) ?  0 : radios[indiceClick].click()
    }
)