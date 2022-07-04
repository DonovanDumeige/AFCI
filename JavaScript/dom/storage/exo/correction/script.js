"use strict"

const select = document.querySelector('#themes')
select.addEventListener("input", switchTheme)

function switchTheme() {
    switch (select.value) {
        case "rose":
        document.documentElement.style.setProperty("--fond", "pink");
        document.documentElement.style.setProperty("--text", "purple");
        break;
        case "bleu":
            document.documentElement.style.setProperty("--fond", "cyan");
            document.documentElement.style.setProperty("--text", "blue");
        break;
        case "tortue":
            document.documentElement.style.setProperty("--fond", "green");
            document.documentElement.style.setProperty("--text", "yellow");
        break;
    }
    localStorage.setItem("theme", select.value)
}



function loadTheme() {
    let t = localStorage.getItem("theme")
    if(t){
        let option = select.querySelector(`[value=${t}]`);
        if (option) {
            console.log(option);
            option.selected=true;
            switchTheme();
        }
    }
}
loadTheme()