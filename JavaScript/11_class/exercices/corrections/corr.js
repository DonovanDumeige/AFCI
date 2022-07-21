import S from "./easyDom-corr.js";
const s = new S();

const liste = s.select("ul");
const items =  s.select("li")

s.event(liste, "click", ()=>{console.log("coucou la liste")})
s.event(items, "click", ()=>{console.log("bonjour les items")})

const div = s.tag("div",{textContent : "Bonjour tout le monde !"})
document.body.append(div);