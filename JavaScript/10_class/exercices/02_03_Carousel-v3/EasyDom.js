"use strict"

export default class EasyDom{
    /** 
     * Fusion entre le querySelector et le querySelectorAll
     * @param {string} balise
     */ 
    select(balise){
        const tag = document.querySelectorAll(balise)
        if(tag.length === 1){
            return tag[0];
        }
        return tag;
    }

    /**
     * Fais un addEventListener sur un élément html ou un tableau d'élément HTML
     * @param {HTMLElement|Array} balise 
     * @param {string} event 
     * @param {function} fonction 
     */
    event(balise, event, fonction){
        if(balise instanceof HTMLElement){
            balise.addEventListener(event, fonction);
            return;
        }
        balise.forEach(b=>{
            b.addEventListener(event, fonction);
        })
    }

    /**
     * 
     * @param {string} balise 
     * @param {object} options 
     */
    tag(balise, options={}){
        const tag = document.createElement(balise);
        for(let o in options){
            if( o === "innerHTML" || o === "textContent"){
                tag [o] = options[o];
                continue; //dit à la boucle de s'arrêter et de passer à la suivant
            }
            tag.setAttribute(o, options[o]);
        }
        return tag;
    }
}