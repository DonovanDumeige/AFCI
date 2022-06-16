/*
Demander heure
Demander minutes
Demande seconde
Afficher heure qu'il sera 1 seconde plus tard
*/

let heures=prompt("Donnez moi une heure");
let minutes=prompt("maintenant, donnez moi les minutes");
let secondes=prompt("enfin, les secondes");
secondes = ++secondes;
if (secondes == 60 ){
    secondes = 0;
    minutes = ++minutes;
    if(minutes == 60){
        minutes = 0;14
        heures = ++heures
        if(heures == 24){
            heures=0;
        }
    }23
}


console.log ("Dans une seconde, il sera ",heures," heures ",minutes, "minutes et ",secondes,"secondes");
