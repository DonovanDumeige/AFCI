"use strict"
/* 
--------------------- EXERCICE 1 ----------------
Créer un objet "Game" qui contiendra un jeu plus ou moins.
Le jeu devra être généré entièrement par JS (pas de html)
Le jeu devra contenir au moins :
Un input de type nombre,
Un bouton pour valider,
Un p pour afficher les messages du jeu
Liberté de personnalisation.
*/

const game = {
    create : function(){
        this.input = document.createElement("input");
        this.input.setAttribute("type", "number");
        this.btn = document.createElement("button");
        this.btn.textContent = "Valider";
        this.p = document.createElement("p");
        this.p.textContent = "Choisir un nombre entre 0 et 100";
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.append(this.p, this.input, this.btn)
        this.input.addEventListener("keyup", e =>{
            if(e.key == "Enter"){
                this.check.bind(this)
            }
        })
        this.btn.addEventListener("click", this.check.bind(this));
        return div;
    },
    start : function() {
        this.turn = 7;
        this.guess = Math.floor(Math.random()*100);
        this.input.focus();
    },

    check : function(){
        if (this.input.value<0 || this.input.value>100) {
            this.p.textContent= 'Veuillez donner un nombre entre 0 et 100';
            return;
        }
        this.turn--;
        if(this.turn === 0){
            this.p.textContent = `Désolé vous avez perdu...
            La réponse était ${this.guess}`
            this.input.disabled = true;
            this.btn.disabled = true;
        } else if (this.input.value > this.guess) {
            this.p.textContent = "Plus petit !";
        } else if (this.input.value < this.guess){
            this.p.textContent = "Plus grand !"; 
        } else{
            this.p.textContent = `Bravo, vous avez gagné ! 
            Vous avez réussi en ${7-this.turn} tour(s)`
            this.input.disabled = true;
            this.btn.disabled = true;
        }
        
        console.log(this.turn);
        console.log(this.input.value)
        this.input.value = "";
        this.input.focus();
    }
}

export default game