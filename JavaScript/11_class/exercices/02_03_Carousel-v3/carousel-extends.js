'use strict'

import EasyDom from "./EasyDom.js";
const c = new EasyDom();
export default class carousel extends EasyDom {
    btns = [];
    items = [];
    dots = [];
    constructor(imgs) {
        super()
        const container = c.tag("div", {class: "carousel-container"})
        const dots = c.tag("div", {class: "dots"})
        console.log(container);
        imgs.forEach((img, i) => {
            const div = c.tag("div", {class: "items fade"});
            console.log(div);
            const image = c.tag("img", {src: [img]})
            div.append(image);
            const dot = c.tag("span", {class: "dot", id: i})
            dots.append(dot);
            container.append(div);
            this.dots.push(dot);
            this.items.push(div);
        })
        container.append(dots);
        const next = c.tag("a", {class: "next", innerHTML: "&#10095;"})
        const prev = c.tag("a", {class: "prev",innerHTML: "&#10094;"})
        container.append(next, prev);
        this.btns.push(next, prev);
        this.container = container;
    }

    showItems(n) {
        this.index = n > this.items.length-1 ? 0 : n < 0 ? this.items.length-1:n;
        this.items.forEach((item, i) => {
            item.style.display = "none";
            this.dots[i].classList.remove("active");
        })
        console.log(this.items, this.index);
        this.items[this.index].style.display = "block";
        this.dots[this.index].classList.add("active");
    }
    currentItem(e) {
        let n = parseInt(e.target.id);
        this.showItems(n);
    }

    changeItem(e){
        if(e.target.classList.contains("next")){
            this.showItems(++this.index);
        }else{
            this.showItems(--this.index);
        }
    }

    init(){
        this.showItems(0);
        c.event(this.dots, "pointerdown", this.currentItem.bind(this))
        c.event(this.btns, "pointerdown", this.changeItem.bind(this))
    }

}
