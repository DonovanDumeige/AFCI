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