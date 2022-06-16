<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="TANT_QUE (nb&lt;1  OU nb>3) FAIRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Donnez moi un nombre entre 1 et 3#0" algoitem="AFFICHER &quot;Donnez moi un nombre entre 1 et 3&quot;"/>
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="15#nb&lt;1  OU nb>3" algoitem="TANT_QUE (nb&lt;1  OU nb>3) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Merci de me un nombre entre 1 et 3#0" algoitem="AFFICHER &quot;Merci de me un nombre entre 1 et 3&quot;"/>
            <item code="2#nb#pasliste" algoitem="LIRE nb"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#merci !#0" algoitem="AFFICHER &quot;merci !&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
