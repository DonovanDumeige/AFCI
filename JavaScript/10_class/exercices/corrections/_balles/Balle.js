"use script"

export default class Balle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.r = this.randomizer(10, 100);
        // sur mon axe X je définis un minimum qui est la taille du rayon et un max qui est la largeur de mon canvas
        // moins la taille du rayon
        this.x = this.randomizer(this.r, this.canvas.width - this.r)
        this.y = this.randomizer(this.r, this.canvas.height - this.r)
        this.vx = this.randomizer(2, 10, true) //vitesse horizontale
        this.vy = this.randomizer(2, 10, true) //vitesse verticale
        this.color = this.randColor();

    }
    randomizer(min = 0, max = 100, negative = false) { //un minimum, un maximum, une possibilité de gérer les nb négatifs
        if (negative) {
            let n = Math.random() < 0.5 ? -1 : 1 //Pour rappel Math.random() retourne par défaut une valeur en 0 et 1.
            console.log("max : " + max + ", " + "min : " + min);
            return Math.floor(Math.random() * n * (max - min)) + min
        }
        return Math.floor(Math.random() * (max - min)) + min
    }

    randColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
        this.move()
    }

    move() {
        if (this.x + this.r > this.canvas.width || this.x - this.r < 0) {
            this.vx = -this.vx;
        }
        if (this.y + this.r > this.canvas.height || this.y - this.r < 0) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}