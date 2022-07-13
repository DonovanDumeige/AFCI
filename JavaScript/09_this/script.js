"use strict"

/* 
Par défaut, this représente l'objet dans lequel il se trouve.
Au plus haut niveau de notre script, il est donc égal à l'objet window
*/

console.log(this);
console.log(this === window);

function test() {
    /* 
    Dans une fonction, il sera soit indéfini si on utilise "use strict",
    soit il prendra l'objet parent, ici window.
    */
console.log(this);
}
test();

document.body.addEventListener("click", test);

/* 
à la différence de e.target qui renvera l'élément sur lequel l'évènement a lieu
(ici il peut soit renvoyer body soit span)
this renverra toujours body (dans notre cas présent)
*/

document.body.addEventListener("click", function(e){
    console.log(this, e.target)
});

/* 
Dans notre fonction fléchée, this ne représentera plus l'élément de l'évènement
mais l'objet englobant, ici "window"
*/

document.body.addEventListener("click", ()=>{
    console.log(this)
});
document.body.click() // déclenche les évènements "click" 

/* 
.bind() permet de créer une nouvelle fonction avec un this qui retournera l'objet
placé en paramètre de .bind()
mon test() donne un this indéfini
mon test2() donne un this égal à {text: "salut tout le monde"}

*/
let test2 = test.bind({text: "salut tout le monde"});
test();
test2();

let article = document.createElement('article');
document.body.addEventListener("click", test.bind(article));
document.body.click();