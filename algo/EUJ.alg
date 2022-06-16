<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="i EST_DU_TYPE NOMBRE" texte="Definir un nombre aléatoire entre 0 et 100. Demander à l'utilisateur de deviner le nb. Lui indiquer &quot;plus&quot; ou &quot;moins&quot; et le féliciter quand il trouve."/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" totalAffichages="1000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nbre" algoitem="nbre EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#aDeviner" algoitem="aDeviner EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#tour" algoitem="tour EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#play" algoitem="play EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#replay" algoitem="replay EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#aDeviner#floor(random()*100)#pasliste" algoitem="aDeviner PREND_LA_VALEUR floor(random()*100)"/>
        <item code="5#tour#7#pasliste" algoitem="tour PREND_LA_VALEUR 7"/>
        <item code="5#play#1#pasliste" algoitem="play PREND_LA_VALEUR 1"/>
        <item code="4#Devine moi !#1" algoitem="AFFICHER &quot;Devine moi !&quot;"/>
        <item code="15#nbre != aDeviner ET tour > 0" algoitem="TANT_QUE (nbre != aDeviner ET tour > 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="6#nbre > aDeviner" algoitem="SI (nbre > aDeviner) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#nbre#aDeviner#pasliste" algoitem="nbre PREND_LA_VALEUR aDeviner"/>
                <item code="4#C'est moins ! :)#0" algoitem="AFFICHER &quot;C'est moins ! :)&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="5#nbre#aDeviner#pasliste" algoitem="nbre PREND_LA_VALEUR aDeviner"/>
                    <item code="4#C'est plus ! :)#0" algoitem="AFFICHER &quot;C'est plus ! :)&quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="5#tour#tour-1#pasliste" algoitem="tour PREND_LA_VALEUR tour-1"/>
            <item code="2#nbre#pasliste" algoitem="LIRE nbre"/>
            <item code="6#tour == 0" algoitem="SI (tour == 0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Dommage vous avez perdu !#1" algoitem="AFFICHER &quot;Dommage vous avez perdu !&quot;"/>
                <item code="4#La réponse était #0" algoitem="AFFICHER &quot;La réponse était &quot;"/>
                <item code="3#aDeviner#1#pasliste" algoitem="AFFICHER aDeviner"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#nbre == aDeviner " algoitem="SI (nbre == aDeviner ) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Bravo!#1" algoitem="AFFICHER &quot;Bravo!&quot;"/>
                <item code="4#Cela vous a pris #0" algoitem="AFFICHER &quot;Cela vous a pris &quot;"/>
                <item code="20#7-tour#0" algoitem="AFFICHERCALCUL 7-tour"/>
                <item code="4# tours#1" algoitem="AFFICHER &quot; tours&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Rejouer ? Oui / Non#1" algoitem="AFFICHER &quot;Rejouer ? Oui / Non&quot;"/>
        <item code="2#replay#pasliste" algoitem="LIRE replay"/>
        <item code="6#replay == &quot;Oui&quot;" algoitem="SI (replay == &quot;Oui&quot;) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="2#nbre#pasliste" algoitem="LIRE nbre"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
