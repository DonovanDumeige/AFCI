<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (copies > 30) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#copies" algoitem="copies EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Combien de copies voulez-vous ?#0" algoitem="AFFICHER &quot;Combien de copies voulez-vous ?&quot;"/>
        <item code="2#copies#pasliste" algoitem="LIRE copies"/>
        <item code="6#copies > 0 ET copies &lt;= 10" algoitem="SI (copies > 0 ET copies &lt;= 10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#copies#copies*0.10#pasliste" algoitem="copies PREND_LA_VALEUR copies*0.10"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#copies > 10 ET copies &lt;= 30" algoitem="SI (copies > 10 ET copies &lt;= 30) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#copies#copies*0.09#pasliste" algoitem="copies PREND_LA_VALEUR copies*0.09"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#copies > 30" algoitem="SI (copies > 30) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#copies#copies*0.08#pasliste" algoitem="copies PREND_LA_VALEUR copies*0.08"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="4#Cela vous coûtera #0" algoitem="AFFICHER &quot;Cela vous coûtera &quot;"/>
        <item code="3#copies#0#pasliste" algoitem="AFFICHER copies"/>
        <item code="4# euros#0" algoitem="AFFICHER &quot; euros&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
