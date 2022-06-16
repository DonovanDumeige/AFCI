<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL i*z" texte="Créer une table du multiplcation"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#y" algoitem="y EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#z" algoitem="z EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Donnez moi un nombre#0" algoitem="AFFICHER &quot;Donnez moi un nombre&quot;"/>
        <item code="2#i#pasliste" algoitem="LIRE i"/>
        <item code="4#La table de multiplication est #0" algoitem="AFFICHER &quot;La table de multiplication est &quot;"/>
        <item code="3#i#1#pasliste" algoitem="AFFICHER i"/>
        <item code="12#z#1#10" algoitem="POUR z ALLANT_DE 1 A 10">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#i#0#pasliste" algoitem="AFFICHER i"/>
            <item code="4# x #0" algoitem="AFFICHER &quot; x &quot;"/>
            <item code="3#z#0#pasliste" algoitem="AFFICHER z"/>
            <item code="4# = #0" algoitem="AFFICHER &quot; = &quot;"/>
            <item code="20#i*z#1" algoitem="AFFICHERCALCUL i*z"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
