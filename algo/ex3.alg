<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="y EST_DU_TYPE NOMBRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#x" algoitem="x EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#y" algoitem="y EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Donnez moi deux nombres#1" algoitem="AFFICHER &quot;Donnez moi deux nombres&quot;"/>
        <item code="4#nombre 1 ?#0" algoitem="AFFICHER &quot;nombre 1 ?&quot;"/>
        <item code="2#x#pasliste" algoitem="LIRE x"/>
        <item code="4#nombre 2 ? #0" algoitem="AFFICHER &quot;nombre 2 ? &quot;"/>
        <item code="2#y#pasliste" algoitem="LIRE y"/>
        <item code="6#(x>0 ET y>0) OU (x&lt;0 ET y&lt;0)" algoitem="SI ((x>0 ET y>0) OU (x&lt;0 ET y&lt;0)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#le produit est positif#0" algoitem="AFFICHER &quot;le produit est positif&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#le produit est négatif#0" algoitem="AFFICHER &quot;le produit est négatif&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
