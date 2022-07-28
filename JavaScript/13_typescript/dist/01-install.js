"use strict";
/*
typescript est une surcouche de javascript. Tout ce que l'on fait en JS est faisable
en typescript.
Les fichiers ont leur propre extension .ts, au contraire d'une simple bibliothèque (library)
De ce fait le navigateur ne peut pas lire ce type de fichiers.
Il faudra d'abord les compiler en javascript avant de pouvoir les lire.

-------------------------------- Avantage -----------------------------------------
    - typage : cela nous force à coder avec rigueur en indiquant le type de chaque variable, argument...
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
et si l'éxécution est bloqué lancer :
    "set-executionpolicy remotesigned" dans powershell en administrateur.

Pour compiler un fichier :
(npx en local) tsc "chemin vers le fichier"

Pour compiler dans un dossier différent :
(npx) tsc "chemin vers le fichier" --outDir "chemin vers le dossier js"

Il est possible de créer un fichier tsconfig.json à la racine de notre projet afin d'éviter de nous répéter.
L'option compilerOptions : {outDir : "chemin vers le dossier"} permet de ne pas avoir à retaper le
dossier de sortie à chaque fois.
L'option files :[] permet de lister les fichiers à compiler.
Une fois cela fait, nous avons juste à taper :
(npx) tsc
Mais là encore, c'est trop demandé aux développeurs; (xd).
(npx) tsc --watch
permettre de lancer une surveillance de nos fichiers ts, et de compiler à chaque sauvegarde.
*/
var btn = document.querySelector('#compte');
var i = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("pointerdown", function () {
    i++;
    btn.textContent = i.toString();
});
if (btn) {
    btn.style.backgroundColor = "orange";
}
