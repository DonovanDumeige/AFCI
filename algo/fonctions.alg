<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Les fonctions. Ce sont des morceaux que l'on peut implémenter à plusieurs endroits, notamment pour répéter des actions. C'est également utile pour fragmenter un algorithme long.&#xa;Le champ paramètre permet d'indiquer quels autres éléments à utiliser. On peut très bien mettre une variable en paramètres." courant="F PREND_LA_VALEUR A+B+C+D+E"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#somme#A,B,C,D,E" algoitem="FONCTION somme(A,B,C,D,E)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#F" algoitem="F EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#F#A+B+C+D+E#pasliste" algoitem="F PREND_LA_VALEUR A+B+C+D+E"/>
            <item code="205#F" algoitem="RENVOYER F"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#addition#A,B" algoitem="FONCTION addition(A,B)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#C#A+B#pasliste" algoitem="C PREND_LA_VALEUR A+B"/>
            <item code="205#C" algoitem="RENVOYER C"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#salutation#nom" algoitem="FONCTION salutation(nom)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#CHAINE#nom1" algoitem="nom1 EST_DU_TYPE CHAINE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#nom1#nom#pasliste" algoitem="nom1 PREND_LA_VALEUR nom"/>
            <item code="4#Bonjour #0" algoitem="AFFICHER &quot;Bonjour &quot;"/>
            <item code="3#nom1#0#pasliste" algoitem="AFFICHER nom1"/>
            <item code="4# ! #1" algoitem="AFFICHER &quot; ! &quot;"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#salut# " algoitem="FONCTION salut( )">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#Bonjour tout le monde !#1" algoitem="AFFICHER &quot;Bonjour tout le monde !&quot;"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#total" algoitem="total EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="206#salut()" algoitem="APPELER_FONCTION salut()"/>
        <item code="206#salut()" algoitem="APPELER_FONCTION salut()"/>
        <item code="206#salutation(&quot;Paul&quot;)" algoitem="APPELER_FONCTION salutation(&quot;Paul&quot;)"/>
        <item code="206#salutation(&quot;Pierre&quot;)" algoitem="APPELER_FONCTION salutation(&quot;Pierre&quot;)"/>
        <item code="5#total#addition(8,14)#pasliste" algoitem="total PREND_LA_VALEUR addition(8,14)"/>
        <item code="5#total#addition(total,42)#pasliste" algoitem="total PREND_LA_VALEUR addition(total,42)"/>
        <item code="3#total#1#pasliste" algoitem="AFFICHER total"/>
        <item code="3#somme#1#pasliste" algoitem="AFFICHER somme"/>
        <item code="5#total#somme(5,3,10,3,1)#pasliste" algoitem="total PREND_LA_VALEUR somme(5,3,10,3,1)"/>
        <item code="3#total#1#pasliste" algoitem="AFFICHER total"/>
        <item code="5#total#somme(10,5,2,3,4)#pasliste" algoitem="total PREND_LA_VALEUR somme(10,5,2,3,4)"/>
        <item code="3#total#1#pasliste" algoitem="AFFICHER total"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
