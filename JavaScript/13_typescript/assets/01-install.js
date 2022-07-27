"use strict";
/*
typescript est une surcouche de javascript. Tout ce que l'on fait en JS est faisable
en typescript.
Les fichiers ont leur propre extension .ts, au contraire d'une simple bibliothèque (library)
De ce fait le navigateur ne peut pas lire ce type de fichiers.
Il faudra d'abord les compiler en javascript avant de pouvoir les lire.

-------------------------------- Avantage -----------------------------------------
    - typage : cela nous force à coder avec riguer en indiquant le type de chaque variable, argument...
    Cela peut nous permettre d'éviter plus facilement certaines erreurs et nous faire gagner du temps.
    - TS peut aussi facilement nous permettre d'adapter un code moderne à de vieux navigateurs
    - à la différence d'une bibliothèque, une fois compilé il n'y a rien à ajouter. Le code ne sera pas
    alourdi par TS

---------------------------------- Défaut --------------------------------------------
    - On est forcé de compiler notre code.
    - Cela rajoute un outil en plus à paramétrer en début de projet.

---------------------------------- Installation -----------------------------------------
Nous avons besoin de NPM
On peut alors l'installer en global ou en local
npm install typescript --save-dev (-g ou --location=global pour le global)
On peut vérifier si l'installation a bien été effectué avec :
npx tsc -v (en local)
tsc -v (en global)

En cas de non reconnaissance de la commande :
vérifier si c'est en global que NPM est bien dans les variables d'environnement

Pour compiler un fichier :
(npx en local) tsc "chemin vers le fichier"
*/
var btn = document.querySelector('#compte');
var i = 0;
btn.addEventListener("pointerdown", function () {
    i++;
    btn.textContent = i;
});
