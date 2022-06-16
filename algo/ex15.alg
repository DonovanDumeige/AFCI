<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Definir un nombre aléatoire entre 0 et 100. Demander à l'utilisateur de deviner le nb. Lui indiquer &quot;plus&quot; ou &quot;moins&quot; et le féliciter quand il trouve." courant="AFFICHER aDeviner"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" totalAffichages="1000" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nbre EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbre"/>
        <item algoitem="aDeviner EST_DU_TYPE NOMBRE" code="1#NOMBRE#aDeviner"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="tour EST_DU_TYPE NOMBRE" code="1#NOMBRE#tour"/>
        <item algoitem="play EST_DU_TYPE NOMBRE" code="1#NOMBRE#play"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="aDeviner PREND_LA_VALEUR floor(random()*100)" code="5#aDeviner#floor(random()*100)#pasliste"/>
        <item algoitem="AFFICHER aDeviner" code="3#aDeviner#1#pasliste"/>
        <item algoitem="tour PREND_LA_VALEUR 7" code="5#tour#7#pasliste"/>
        <item algoitem="AFFICHER &quot;Devine moi !&quot;" code="4#Devine moi !#1"/>
        <item algoitem="LIRE nbre" code="2#nbre#pasliste"/>
        <item algoitem="TANT_QUE (nbre != aDeviner) FAIRE" code="15#nbre != aDeviner">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="SI (nbre > aDeviner) ALORS" code="6#nbre > aDeviner">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nbre PREND_LA_VALEUR aDeviner" code="5#nbre#aDeviner#pasliste"/>
                <item algoitem="AFFICHER &quot;Trop grand ! :)&quot;" code="4#Trop grand ! :)#0"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="nbre PREND_LA_VALEUR aDeviner" code="5#nbre#aDeviner#pasliste"/>
                    <item algoitem="AFFICHER &quot;Trop petit ! :)&quot;" code="4#Trop petit ! :)#0"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="tour PREND_LA_VALEUR tour-1" code="5#tour#tour-1#pasliste"/>
            <item algoitem="LIRE nbre" code="2#nbre#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="SI (tour == 0) ALORS" code="6#tour == 0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Dommage vous avez perdu !&quot;" code="4#Dommage vous avez perdu !#1"/>
            <item algoitem="AFFICHER &quot;La réponse était &quot;" code="4#La réponse était #0"/>
            <item algoitem="AFFICHER aDeviner" code="3#aDeviner#0#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER &quot;Bravo!&quot;" code="4#Bravo!#1"/>
        <item algoitem="AFFICHER &quot;Cela vous a pris &quot;" code="4#Cela vous a pris #0"/>
        <item algoitem="AFFICHERCALCUL 7-tour" code="20#7-tour#0"/>
        <item algoitem="AFFICHER &quot; tours&quot;" code="4# tours#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
