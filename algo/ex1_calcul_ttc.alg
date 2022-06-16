<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Prix TTC&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#B" algoitem="B EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#D" algoitem="D EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Quel est le prix HT ?#0" algoitem="AFFICHER &quot;Quel est le prix HT ?&quot;"/>
        <item code="2#A#pasliste" algoitem="LIRE A"/>
        <item code="4#Quelle est la quantité ?#0" algoitem="AFFICHER &quot;Quelle est la quantité ?&quot;"/>
        <item code="2#B#pasliste" algoitem="LIRE B"/>
        <item code="5#C#1.20#pasliste" algoitem="C PREND_LA_VALEUR 1.20"/>
        <item code="5#D#(A*B)*C#pasliste" algoitem="D PREND_LA_VALEUR (A*B)*C"/>
        <item code="4#Prix TTC#1" algoitem="AFFICHER &quot;Prix TTC&quot;"/>
        <item code="3#D#0#pasliste" algoitem="AFFICHER D"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
