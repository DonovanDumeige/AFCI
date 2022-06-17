//Exercice 3.1
//* Demander un nombre et indiquer si il est positif ou négatif
//Décommenter pour afficher
/*
let nbre = prompt("Nombre ?")
if (nbre>0) {
    console.log("Il est positif");
} else {
    console.log("Il est négatif");
}
*/

//Exercice 3.2
//* Demander 2 nombres. 
//* Indiquer si leur produit est négatif ou positif
//! On ne doit pas calculer le produit des deux nombres

//Décommenter pour afficher
/*
let x = prompt("Nombre 1?"),
    y = prompt("Nombre 2 ?");
// pour rappel produit = x*y
if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    console.log("Le produit est positif");
} else {
    console.log("Le produit est négatif");
}
*/

//Exercice 3.3
//* Demander 3 noms
//* Informer si ils sont rangés ou non dans l'ordre alphabétique

//Décommenter pour afficher
/*
let x=prompt("Prénom 1 ?"),
    y=prompt("Prénom 2 ?"),
    z=prompt("Prénom 3 ?");

    if ((x<y)&&(y<z)) {
        console.log("Les prénoms sont dans l'ordre alphabétique");
    } else {
        console.log("Les prénoms ne sont pas dans l'ordre alphabétique");
    }
*/

//Exercice 4.1

//* Formulez un alo équivalent à :
//* Si Tutu>Toto+4 OU Tata="Ok"Alors
//* Tutu= Tutu +1
//* Sinon
//* Tutu = Tutu-1

let tutu, toto, Tata
if ((tutu > toto + 4) || (tata = "Ok")) {
    tutu = tutu + 1
} else {
    tutu = tutu - 1
}


//Exercice 4.2
//* demander heure et minutes
//* indiquer l'heure une minute plus tard
//Décommenter pour afficher
/*
let h = prompt("Heure ?"),
    m = prompt("Minute?");
m = ++m;
if (m == 60) {
    m = 0;
    h = ++h;
    if (h == 24) {
        h = 0;
    }
}

console.log(`Dans une minute il sera ${h} heures et ${m} minutes`);
*/

//Exercice 4.3
//*Même consigne, ajouter les secondes
//Décommenter pour afficher
/*
let h=prompt("Donnez moi une heure");
let m=prompt("maintenant, donnez moi les minutes");
let s=prompt("enfin, les secondes");
s = ++s;
if (s == 60 ){
    s = 0;
    m = ++m;
    if(m == 60){
        m = 0;14
        h = ++h
        if(h == 24){
            h=0;
        }
    }
}
console.log(`Dans une seconde il sera ${h} h ${m} min et ${s} sec`);
*/

//Exercice 4.4
//* Un magasin de reprographie facture 
//*0,10€ les 10 premières photocopies
//*0,09€ les vingts suivantes
//*0,08€ au dela
//* Demander le nombre
//*Afficher facture correspondante

//Décommenter pour afficher
/*
let copies=prompt("Combien de copies"),
    prix;

if (copies <=10) {
    prix=copies*0.1;
} else if (copies <=30){
    prix=(10*0.1)+((copies-10)*0.09);
} else{
    prix=(10*0,1)+(20*0.09)+((copies-30)*0.08);
}


console.log(`Cela vous coutera ${prix} euros`);
*/

//Exercice 4.5
//* hommes de plus de 20 ans paient impôt
//* femmes entre 18 et 35 ans paient impôt
//* autres ne paient pas d'impôt

let gender = prompt("êtes-vous un homme ou une femme ?"),
    age = prompt ("quel âge avez-vous ?");
if ((gender ==="homme") && (age>20) || (gender ==="femme") && ((age==18) || (age <=35))){
    console.log("Vous êtes imposable");
} else {
    console.log("Vous n'êtes pas imposable");
}

//Exercice 4.6
//* si candidat a 50% des voix, il est élu
//* deuxième tour uniquement pour candidat ayant eu au moins 12,5% au premier tour
//* Ecrire algo qui permet la saisie des scores
//* Il traitera ensuite le candidat 1 et uniquement lui
//* Indiquer si il est élu, battu
//* en ballotage favorable (2nd tour, en tête)
//* en ballotage défavorable (2nd tour, pas en tête)