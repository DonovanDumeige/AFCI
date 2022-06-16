<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="fonction récursive = une fonction qui s'appelle elle-même" courant="SI (X == 1) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#factorielle#X" algoitem="FONCTION factorielle(X)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="6#X == 1" algoitem="SI (X == 1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#1" algoitem="RENVOYER 1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="205#X * factorielle(X-1)" algoitem="RENVOYER X * factorielle(X-1)"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#F" algoitem="F EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#F#pasliste" algoitem="LIRE F"/>
        <item code="5#F#factorielle(F)#pasliste" algoitem="F PREND_LA_VALEUR factorielle(F)"/>
        <item code="3#F#0#pasliste" algoitem="AFFICHER F"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
