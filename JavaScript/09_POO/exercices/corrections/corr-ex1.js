"use strict"


const game = {
    create : function(){
        /* 
        Si on fait appel à une propriété qui n'existe pas, cela va se créer de 
        soi-même
        */
        this.input = document.createElement("input");
        this.input.setAttribute("type","number");
        this.btn = document.createElement('button');
        this.btn.textContent = "Tenter votre chance";
        this.p = document.createElement('p');
        this.p.textContent = "Choisir un nombre entre 0 et 100";
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.append(this.p, this.input, this.btn)
        /*
        Je bind mon this de l'évènement sur le this actuel.
        C'est à dire que mon évènement au lieu de rendre this, 
        la cible de mon évènement (le bouton) me rendra l'objet (game)
        */

        this.btn.addEventListener("click", this.check.bind(this))
        return div;
    },
    start: function(){
        this.target = Math.floor(Math.random()*100)
        this.input.focus
    },
    check : function(){
        if(this.input.value < this.target){
            this.p.textContent = "C'est plus grand !";
        } else if (this.input.value > this.target){
            this.p.textContent = "C'est plus petit !";
        } else{
            this.p.textContent = "Félicitations, tu as gagné";
            this.btn.disabled = true;
        }
        this.input.value = "";
        this.input.focus;
    }
}
export default game