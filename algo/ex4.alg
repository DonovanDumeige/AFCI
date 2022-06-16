<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;les mots ne sont pas triés dans l'ordre alphabétique&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#mot1" algoitem="mot1 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#mot2" algoitem="mot2 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#mot3" algoitem="mot3 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#mot1#pasliste" algoitem="LIRE mot1"/>
        <item code="2#mot2#pasliste" algoitem="LIRE mot2"/>
        <item code="2#mot3#pasliste" algoitem="LIRE mot3"/>
        <item code="6#(mot1 > mot2) ET (mot1 > mot3)" algoitem="SI ((mot1 > mot2) ET (mot1 > mot3)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#les mots sont bien dans l'ordre alphabétique#0" algoitem="AFFICHER &quot;les mots sont bien dans l'ordre alphabétique&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#les mots ne sont pas triés dans l'ordre alphabétique#0" algoitem="AFFICHER &quot;les mots ne sont pas triés dans l'ordre alphabétique&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
