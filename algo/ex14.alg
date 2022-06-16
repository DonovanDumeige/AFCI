<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;la valeur maximum est &quot;" texte="Demander x nb. Stopper si nb = 0. Afficher le max et la position"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#max" algoitem="max EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#pos" algoitem="pos EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#nb#1#pasliste" algoitem="nb PREND_LA_VALEUR 1"/>
        <item code="5#i#1#pasliste" algoitem="i PREND_LA_VALEUR 1"/>
        <item code="4#Donnez un nombre#1" algoitem="AFFICHER &quot;Donnez un nombre&quot;"/>
        <item code="15#nb != 0" algoitem="TANT_QUE (nb != 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#saisie n°#0" algoitem="AFFICHER &quot;saisie n°&quot;"/>
            <item code="3#i#1#pasliste" algoitem="AFFICHER i"/>
            <item code="2#nb#pasliste" algoitem="LIRE nb"/>
            <item code="6#(i == 1) OU (nb > max)" algoitem="SI ((i == 1) OU (nb > max)) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#max#nb#pasliste" algoitem="max PREND_LA_VALEUR nb"/>
                <item code="5#pos#i#pasliste" algoitem="pos PREND_LA_VALEUR i"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="5#i#i+1#pasliste" algoitem="i PREND_LA_VALEUR i+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#la valeur maximum est #0" algoitem="AFFICHER &quot;la valeur maximum est &quot;"/>
        <item code="3#max#1#pasliste" algoitem="AFFICHER max"/>
        <item code="4#c'est le nombre n°#0" algoitem="AFFICHER &quot;c'est le nombre n°&quot;"/>
        <item code="3#pos#0#pasliste" algoitem="AFFICHER pos"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
