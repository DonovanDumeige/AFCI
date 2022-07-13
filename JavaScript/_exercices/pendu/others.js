// Créer le mot à deviner
var word2guess = prompt('Entrez un mot à deviner !');

// Passer le mot entré en majuscules
word2guess = word2guess.toUpperCase();

// Tableau pour stocker les lettres proposées
var alrGuessed = [];

// Tableau pour stocker le mot à deviner sous forme de _ _ _ _ _ _
var theWord = [];

// Variable pour stocker la lettre proposée
var guess;

// Spliter le mot à deviner pour qu'il soit sous forme de tableau
var displayWord = word2guess.split('');

// Boucle pour ajouter au mot vide le nombre d'entrées correspondant au mot à deviner
for (var i = 0; i < displayWord.length; i++) {
    theWord.push(' _ ');
}

// Récupérer l'objet qui va afficher le mot au fur et à mesure
var theWordDisplay = document.getElementById('theWord');

// Récupérer l'objet qui va afficher les lettres déjà proposées
var alrGuessedDisplay = document.getElementById('alrGuessed');

// Récupérer l'objet pour afficher le message de félicitations
var infosDisplay = document.getElementById('infos');

// On concatène le tableau pour en faire un mot
theWordDisplay.textContent = theWord.join('');

// Fonction pour vérifier les lettres entrées
function validate() {

    // Récupérer la valeur entrée par l'user
    guess = document.getElementById('input').value;

    // Expression régulière pour vérifier que l'entrée est une lettre
    var objRegExp = /[A-Za-z]/;

    // Si l'input contient bien une lettre
    if (objRegExp.test(guess)) {

        // Vider le champ infos
        infosDisplay.textContent = '';

        // Passer la lettre entrée en majuscule
        guess = guess.toUpperCase();

        // Ajouter la lettre que l'user a deviné en fin de tableau
        alrGuessed.push(guess);
    } else {
        // Afficher un messge d'erreur
        infosDisplay.textContent = 'Only letters';
    }

    // Si l'ensemble des lettres entrées ne correspondent pas au mot à deviner (s'il reste des lettres à deviner)
    if (theWord.join('') !== displayWord.join('')) {

        // On crée une boucle pour tester les lettres
        for (var i = 0; i < displayWord.length; i++) {

            // Si la lettre entrée par l'user correspond à une des lettres
            if (guess == displayWord[i]) {

                // Ajouter la lettre dans le mot à deviner
                theWord[i] = guess;

                // Modifier l'affichage pour que l'user voit où se trouve la lettre
                theWordDisplay.textContent = theWord.join('');

            }
        }

        // Mettre à jour l'affichage des lettres essayées pour l'user
        alrGuessedDisplay.textContent = alrGuessed.join('  ');

        // Vider le champ texte
        document.getElementById('input').value = "";

        // Si le mot est complété
        if (theWord.join('') === displayWord.join('')) {

            // On affiche un message pour dire que l'user a gagné 
            infosDisplay.textContent = 'You Win !';

            alrGuessedDisplay.textContent = 'RELOAD for new game ;)';

        }

    } else {

        // Recharger le jeu
        location.reload();
    }

};