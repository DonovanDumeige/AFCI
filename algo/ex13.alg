<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte="Demander 5 nombre. Afficher le plus grand. Bonus :indiquer à quelle position le nb a été donné&#xa;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#max" algoitem="max EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#position" algoitem="position EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#max#0#pasliste" algoitem="max PREND_LA_VALEUR 0"/>
        <item code="4#Indiquez un nombre#0" algoitem="AFFICHER &quot;Indiquez un nombre&quot;"/>
        <item code="12#i#1#5" algoitem="POUR i ALLANT_DE 1 A 5">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#nb#pasliste" algoitem="LIRE nb"/>
            <item code="6#(i == 1) OU (nb > max)" algoitem="SI ((i == 1) OU (nb > max)) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#max#nb#pasliste" algoitem="max PREND_LA_VALEUR nb"/>
                <item code="5#position#i#pasliste" algoitem="position PREND_LA_VALEUR i"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#la valeur maximum est : #0" algoitem="AFFICHER &quot;la valeur maximum est : &quot;"/>
        <item code="3#max#1#pasliste" algoitem="AFFICHER max"/>
        <item code="4#Il correspond à la saisie n°#0" algoitem="AFFICHER &quot;Il correspond à la saisie n°&quot;"/>
        <item code="3#position#0#pasliste" algoitem="AFFICHER position"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
