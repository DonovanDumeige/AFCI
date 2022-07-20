"use strict"

/**
 * Faire une classe EasyDom qui prendra 3 méthodes et pas de constructeur.
 * 1. La méthode select prendra un argument. (par exemple "balise")
 *      Elle devra faire un querySelectorAll sur cet argument
 *      puis elle vérifiera combien d'élément elle a trouvé, 
 *      si il y en a qu'un elle retournera cet élément sinon elle retournera le tableau.
 * 2. la méthode event qui prendra 3 arguments (par exemple "balise", "evenement", "fonction").
 *      si argument 1 est une instance de HTMLElement. elle fera un addEventlistener dessus en donnant 
 *          les arguments 2 et 3 en paramètre de celui ci.
 *      Sinon il fera un forEach sur l'argument 1 pour ajouter sur tous les éléments un addEventListener
 *          commme précédement.
 * 3. La méthode tag prendra deux arguments dont le second sera par défaut un objet vide {}.
 * (par exemple "balise" et "options")
 *      elle commencera par créer un élément HTML en utilisant le premier argument.
 *      puis pour chaque option si la clef est "innerHTML" ou "textContent" alors elle ajoutera 
 *      les valeurs correspondante à la balise précédement créé
 *      sinon elle ajoutera la clef en attribut avec sa valeur (setAttribute);
 *      puis retournera le nouvel élément.
 */
export default class EasyDom{
    select(balise){
        this.balises = document.querySelectorAll(balise)
        let index = this.balises.length
        if(index == 1){
            this.balises = this.balises[0];
        } 

    }
    event(balise, evenement, fonction){

        let instance = this.balises instanceof HTMLElement
    
        // Si balise est une instance HTML
        if(instance){
            this.balises.addEventListener(evenement, fonction)
        } else{
            balise.forEach(()=>{
                this.balises = document.createElement(balise)
                this.balises.textContent = "Je suis généré par JS !"
                this.balises.style.border = "1px solid black"
                this.balises.addEventListener(evenement, fonction)
                document.body.append(this.balises)
            })
        } 
    } 
    tag(balise, options){
        this.create = document.createElement(balise)
        console.log(options);
        if(options === "innerHTML" || options ==="textContent"){
            this.create.setAttribute("innerHTML", options)
            this.create.setAttribute("textContent", options)
        } else{
            this.create.setAttribute("innerHTML", options);
            this.create.setAttribute("textContent", options);
        }
        console.log(this.create);
        //puis pour chaque option si la clef est "innerHTML" ou "textContent" alors elle ajoutera 
        //les valeurs correspondante à la balise précédement créé
        //sinon elle ajoutera la clef en attribut avec sa valeur (setAttribute);
        //puis retournera le nouvel élément.
    }
}