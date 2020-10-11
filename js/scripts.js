class Character {
    posX = 0
    posY = 0
    speed = 4

    constructor(el) {
        this.el = el // html эллемент
    }

    jump() {
        axisY = setInterval(() => {
            if (this.posY >= 200) { // если пргнул
                let toBot = setInterval(() => {
                    if (this.posY <= 0) { // если опустился
                        clearInterval(toBot)
                        clearInterval(axisY)
                        flagY = true
                    } else {
                        this.posY -= this.speed
                        this.el.style.bottom = `${this.posY + this.el.offsetWidth - 50}px`
                    }
                });
            } else {
                this.posY += this.speed
                this.el.style.bottom = `${this.posY + this.el.offsetWidth - 50}px`
            }
            flagY = false
        })
    }
    goLeft() {
        if (flagX1) {
            axisX1 = setInterval(() => {
                this.posX -= this.speed
                if (this.posX < 0) this.posX = 0 // чтобы не выезжал
                this.el.style.left = `${this.posX}px`
                flagX1 = false
            })
        }
    }
    goRight() {
        if (flagX2) {
            axisX2 = setInterval(() => {
                this.posX += this.speed
                if ((this.el.offsetWidth + this.posX) > window.innerWidth) this.posX = window.innerWidth - this.el.offsetWidth // чтобы не выезжал
                this.el.style.left = `${this.posX}px`
                flagX2 = false
            })
        }
    }
    teleport() {
        if (flagRand) return; flagRand = true;
        this.posX = Math.floor(Math.random() * ((window.innerWidth - this.el.offsetWidth) - 0))
        this.posY = Math.floor(Math.random() * ((window.innerHeight - this.el.offsetHeight) - 150))
        this.el.style.left = `${this.posX}px`
        this.el.style.bottom = `${this.posY + this.el.offsetWidth - 50}px`
        this.jump() // чтобы опустился
        setTimeout(() => { flagRand = false }, 500)
    }
}

let lemon = new Character(document.querySelector('div.lemon'))
    axisX1 = null
    axisX2 = null
    axisY = null
    flagX1 = true
    flagX2 = true
    flagY = true
    flagRand = false

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 32: if (flagY) lemon.jump(); break; // SPACE            
        case 65: lemon.goLeft(); break; // A
        case 68: lemon.goRight(); break; // D
        default: break;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 68) { // D
        clearInterval(axisX2)
        flagX2 = true
    } else if (e.keyCode === 65) { // A
        clearInterval(axisX1)
        flagX1 = true
    }
})

document.querySelector('div.btns').addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case 'x0.5': lemon.speed = 2; break;
        case 'x1': lemon.speed = 4; break;
        case 'x2': lemon.speed = 8; break;
        case 'rand': lemon.teleport(); break;
        default: break;
    }
})