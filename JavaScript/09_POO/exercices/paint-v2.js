"use strict"
/* 
--------------------- EXERCICE 2 ----------------
1. Transformer l'application de dessin en un unique objet.
2. Ajouter une méthode init() qui aura pour rôle de sélectionner le canvas et 
lancer les écouteurs d'évènement.
3. Intégrer le "resize()" à l'ojet et l'appeler dans la méthode.
4/ Changer la méthode "init" pour lui donner un argument optionnel :
    Si on ne lui donne rien, elle devra créer un canvas et l'ajouter au body.
    Le resize se fera alors selon la taille du viewport.
    Si on lui donne un élément HTML en argument, il ajoutera le canvas dans 
    cet élément et son resize se fera selon la taille de l'élément.
*/


const draw = {
    painting: false,

    create: function () {
        console.log(this);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.btnColor = document.createElement('input');
        this.btnSize = document.createElement('input');
        this.canvas.style.border = "1px solid black"
        this.btnColor.setAttribute("type", "color");
        this.btnSize.setAttribute("type", "number")

        const div = document.createElement('div');
        div.style.display = "flex"
        div.style.flexDirection = 'column';
        div.style.gap = "20px"
        div.style.margin = "2rem auto"
    

        const div2 = document.createElement('div')
        div2.style.display = 'flex'
        div2.style.gap = '30px';
        div2.style.width = "100%";

        div2.append(this.btnColor, this.btnSize)
        div.append(this.canvas, div2)
        return div
    },

    startPos: function (a) {
        this.painting = true;
        this.draw(a);
    },

    finishPos: function (a) {
        this.painting = false;
        this.ctx.beginPath();
    },

    draw: function (a) {
        this.options()
        if(!this.painting){
            return;
        } else {
            this.ctx.lineCap = "round";
            this.mouse = this.getMousePos(a)
            this.ctx.lineTo(this.mouse.x, this.mouse.y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(this.mouse.x, this.mouse.y);
        }
    },
    getMousePos: function(evt) {
        let rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    options: function () {
        this.btnSize.addEventListener('input', e => {
            this.ctx.lineWidth = e.target.value
        })
        this.btnColor.addEventListener('input', e => {
            this.ctx.strokeStyle = e.target.value;
        })
    },

    init: function () {
        this.resize()
        window.addEventListener("resize", this.resize.bind(this));
        this.canvas.addEventListener("mousedown", this.startPos.bind(this))
        this.canvas.addEventListener("mouseup", this.finishPos.bind(this))
        this.canvas.addEventListener("mousemove", this.draw.bind(this))
    },

    resize : function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
    },

}

export default draw