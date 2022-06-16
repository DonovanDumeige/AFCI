<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (age &lt;= 7) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#age" algoitem="age EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Quel est ton âge ?#0" algoitem="AFFICHER &quot;Quel est ton âge ?&quot;"/>
        <item code="2#age#pasliste" algoitem="LIRE age"/>
        <item code="6#age &lt;= 7" algoitem="SI (age &lt;= 7) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#poussin !#0" algoitem="AFFICHER &quot;poussin !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#age >=8 ET age &lt;=9" algoitem="SI (age >=8 ET age &lt;=9) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#pupille !#0" algoitem="AFFICHER &quot;pupille !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#age >=10 ET age &lt;=11" algoitem="SI (age >=10 ET age &lt;=11) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#minime !#0" algoitem="AFFICHER &quot;minime !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#cadet !#0" algoitem="AFFICHER &quot;cadet !&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
