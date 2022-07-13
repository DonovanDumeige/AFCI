"use strict"

const ps = document.querySelectorAll('main p');
const obs = new IntersectionObserver(showPara, {threshold: 0.5});
ps.forEach(p=>obs.observe(p))
function showPara(entries){
    entries.forEach(reveal)
}

function reveal(entry) {
    if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)"
        obs.unobserve(entry.target)
    }
}

// const obs = new IntersectionObserver(entries=>entries.forEach(entry=>{
//     if(entry.isIntersecting){
//         entry.target.style.opacity = "1"
//         obs.unobserve(entry.target);
//     }
// })
// , {threshold: 0.5});
// ps.forEach(p=>obs.observe(p));

//TODO : EXO 2
const lastP = document.querySelector('main p:last-child');
const obsLast = new IntersectionObserver(addMore,{rootMargin:"200px"});
const m = document.querySelector('main');

obsLast.observe(lastP)

function addMore(entries) {
    let ent = entries[0];
    if(ent.isIntersecting){
        let p;
        for (let i = 0; i < 10; i++) {
            p = document.createElement('p')
            p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime dolor recusandae ea magnam sunt qui officia velit! Cumque, vero minima quae nobis est doloremque ab nesciunt saepe ex maiores.Nesciunt officia voluptates autem sunt! Accusantium debitis corporis eum quasi aut eveniet voluptatibus doloremque, veritatis adipisci, atque explicabo autem rerum quaerat. Mollitia, modi? Placeat dolorem consequatur optio odit qui facilis!Perferendis veniam, unde assumenda vitae reiciendis et voluptatum ullam placeat tempore aspernatur eos ex eveniet voluptates magnam nam, aliquid expedita repellat enim. Provident sed reprehenderit quis reiciendis sit quasi nisi?Ullam reiciendis illum molestiae recusandae, quaerat voluptates aliquam. Explicabo quae facilis ut qui ullam tempora. Voluptatibus, dolores nisi praesentium suscipit voluptate tempore ad deleniti officiis fugit. Tenetur consectetur optio et.Alias debitis cum quia illo cupiditate aspernatur possimus non voluptatum hic! Nisi nobis neque natus placeat, temporibus ea ut quam magnam excepturi dolores laudantium expedita dolor, aliquid totam nemo modi."
            m.append(p);
            obs.observe(p);
        }
    obsLast.unobserve(lastP)
    obsLast.observe(p)
    }
}