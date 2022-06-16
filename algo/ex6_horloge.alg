<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (heure == 24) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#heure" algoitem="heure EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#minutes" algoitem="minutes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#futur" algoitem="futur EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Quelle est l'heure ?#0" algoitem="AFFICHER &quot;Quelle est l'heure ?&quot;"/>
        <item code="2#heure#pasliste" algoitem="LIRE heure"/>
        <item code="4#Et combien de minutes ?#0" algoitem="AFFICHER &quot;Et combien de minutes ?&quot;"/>
        <item code="2#minutes#pasliste" algoitem="LIRE minutes"/>
        <item code="5#futur#minutes +1#pasliste" algoitem="futur PREND_LA_VALEUR minutes +1"/>
        <item code="6#heure == 24" algoitem="SI (heure == 24) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#heure#0#pasliste" algoitem="heure PREND_LA_VALEUR 0"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#futur == 60" algoitem="SI (futur == 60) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#futur#00#pasliste" algoitem="futur PREND_LA_VALEUR 00"/>
            <item code="5#heure#heure+1#pasliste" algoitem="heure PREND_LA_VALEUR heure+1"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="4#Dans une minute il sera #0" algoitem="AFFICHER &quot;Dans une minute il sera &quot;"/>
        <item code="3#heure#0#pasliste" algoitem="AFFICHER heure"/>
        <item code="4#h et #0" algoitem="AFFICHER &quot;h et &quot;"/>
        <item code="3#futur#0#pasliste" algoitem="AFFICHER futur"/>
        <item code="4# minutes#0" algoitem="AFFICHER &quot; minutes&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
