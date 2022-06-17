//Exercice 1.1

let A = 1, B = A + 3;
A = 3;

// Réponse : A=3, B=4

//Exercice 1.2
A = 5;
B = 3;
let C = A + B;

A = 2;
C = B - A;

// Quelles sont les valeurs de A,B & C?
//Réponse A=2, B=3, C=1

//Exercice 1.3

A = 5;
B = A + 4; //9
A = A + 1; //6
B = A - 4 //2
// Réponse : A=6, B=2

//Exercice 1.4

A = 3;
B = 10;
C = A + B; //13
B = A + B; // 13
A = C //13

// Réponse : A = 13, B = 13, C = 13

//Exercice 1.5
A = 2;
B = 5;
A = B;
B = A;

// Réponse : A= 5, B= 5
//? Est-ce que les deux dernières instructions permettent d'échanger les valeurs de A & B ?
//todo Non
//? Si l'on inverse les deux instructions cela change t-il quelque chose ?
//todo Non hormis que A=2 et B=2

//Exercice 1.6
//* Ecrire un algorithmique permettant de changer les valeurs de A et de B 

A=2;
B=5;
C=A;

A=B;
B=C;

// Réponse A=5, B=2

//Exercice 1.7
//* Ecrire un algorithme transférant à B la valeur de A, à C la valeur de B
//* et à A la valeur de C

A=5;
B=3;
C=1;
D=A;
E=B;

A=C;
B=D;
C=E;

//Exercice 2.1
let val=231, double=val*2;
console.log(val);
console.log(double);

//Réponse : val=231, double=262

//Exercice 2.2
//*Demander un nombre à un utilisateur et afficher le carré de ce nombre

//Décommenter pour afficher
/*
let nbre = prompt("Donnez moi un nombre");
let carre = nbre**2;
console.log(`Le carré de ${nbre} est ${carre}`);
*/

//Exercice 2.3
//* Ecrire un programme qui lit le prix HT d'un article, le nombre d'articles
//* et le taux de TVA et qui fournit le prix TTC correspondant

//Décommenter pour afficher
/*
let prixHT = prompt("Prix ?"),
    articles = prompt("Article ?"),
    tva = prompt("TVA ?"),
    ttc = (prixHT*articles)*(1+tva/100);
console.log(`Cela vous coutera ${ttc} euros`);
*/

//Exercice 2.4
//* Ecrire un algorithme utilisant des string et affichant
//* quatre variables possibles de la phrase suivante :
//* "Belle marquise, vos beaux yeux me font mourir d'amour"
//* On ne se soucie pas des majuscules, ni de la ponctuation

let p1 = "belle marquise",
    p2 = "vos beaux yeux",
    p3 = "me font mourir"
    p4 = "d'amour";
console.log(`Variante 1 : ${p1} ${p2} ${p3} ${p4}`);
// belle marquise vos beaux yeux me font mourir d'amour
console.log(`Variante 2 : ${p4} ${p1} ${p2} ${p3}`);
// d'amour belle marquise vos beaux yeux me font mourir
console.log(`Variante 3 : ${p2} ${p3} ${p4} ${p1}`);
// vos beaux yeux me font mourir d'amour belle marquise
console.log(`Variante 4 : ${p4} ${p2} ${p3} ${p1}`);
// d'amour vos beaux yeux me font mourir belle marquise