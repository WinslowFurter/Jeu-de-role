//BONJOUR DANS MON SUPER JEU DE ROLE IHIH

//TODO BEM
//Rendre le joueur Mortel, et remmetre sa vie à flot quand il finit un combat

function dialogBox(text){
    var dialogBox = document.getElementById('dialogBox');
    dialogBox.classList.remove('hidden');
    dialogBox.classList.add('shown')
    dialogBox.innerHTML = text;
    var dialogEventListener = dialogBox.addEventListener('click', function(){
        dialogBox.classList.remove('shown');
        dialogBox.classList.add('hidden')
        dialogBox.removeEventListener(dialogEventListener)
    })
}
function test() {
    dialogBox(echecEsquive);
}

var boutonElt = document.getElementById("test");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", test);



//CREATION D'UNE VARIABLE tour DE COMBAT parce que c'est quand même utile
let tour = 0;
let compteurEnnemiVaincu = Number(0) ;
let esquiveReussie = 0;




//LES FONCTIONS UTILES PARTOUT LA

//Reset de la fenetre ennemie
function resetEnnemi (){
    document.getElementById("pseudoEnnemi").innerHTML = "";
    document.getElementById("forceEnnemi").innerHTML = "";
    document.getElementById("specialEnnemi").innerHTML = "";
    document.getElementById("santeEnnemi").innerHTML = "";
    presenceEnnemi = 0;
    tour = 0;
}
// scrollDown("mon_id"); // ceci aura pour effet de mettre le scroll en bas de la div mon_id 
function scrollDown(myDiv){
    var elem = document.getElementById(myDiv);
    elem.scrollTop = elem.scrollHeight;
    console.log("on est dans scrolldown")
} 

var Personnage = {
    // Initialise le personnage
    init: function (nom, sante, force, esquive, special) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.esquive = esquive;
        this.special = special;
    }
};

//Variable pour savoir si un nombre est pair ou impair
function tourJoueur (valeur) {
    if (valeur%2 == 0)
    return true;
else
    return false;
};


//FONCTION VIVRE OU MOURIR
function mourir(){
    if(personnage.sante<0){
    presenceEnnemi = 666;
    dialogBox("Oh, on dirait que " + rndEnnemi.nom + " a eu raison de toi\nT'es un peu une merde, et t'as un peu pas d'bol\n\ntu as tout de même niqué "+compteurEnnemiVaincu +" Boloss sur ta route\n\nf5 pour recommencer... DU DEBUT HAHAHA")
}
}

function vivre(){
    specialReboot=3;
    presenceEnnemi=0;
    compteurEnnemiVaincu++;
    switch (classeChoisie){

    case "mage":
    personnage.esquive = Number(65);
   personnage.sante= 200 + (compteurEnnemiVaincu*20);
   document.getElementById("santePerso").innerHTML = personnage.sante;
   document.getElementById("esquivePerso").innerHTML = personnage.esquive;
    break;

    case "guerrier":

    personnage.sante= Number(400 + (compteurEnnemiVaincu*10));
    document.getElementById("santePerso").innerHTML = personnage.sante;

    break;

    case "moine":
        personnage.esquive = Number(75);
    personnage.sante= Number(300 + (compteurEnnemiVaincu*20));
    document.getElementById("santePerso").innerHTML = personnage.sante;
    document.getElementById("esquivePerso").innerHTML = personnage.esquive;

    break;

    case "david":

    personnage.sante= 8888888;
    document.getElementById("santePerso").innerHTML = personnage.sante;

    break;

    default:
    dialogBox("TARTAPUTE");
    break;
    }
}

function ennemiMort(){
    if (rndEnnemi.sante <= 0){
        dialogBox("Bravo, tu as bien baisé cet enculé de "+ rndEnnemi.nom +", c'est le moment de repartir chercher la merde.");
        resetEnnemi();
        vivre();}
}
//Fonction fin de transparence mage
function resetSpecial(){
    if (specialReboot < 3){
        specialReboot++;}
    if (specialReboot===3){
         if(classeChoisie === "mage"){
                personnage.esquive=Number(65);
                document.getElementById("esquivePerso").innerHTML=personnage.esquive;
            }
        }
}







//amorce de variable utilies tout le temps + explications

//Si il n'y a pas d'ennemi ou qu'il est mort, est a 0 pour permettre d'autres interactions
//si un ennemi est là est à 1
//si le joueur est mort est à 666 pour permettre de bloquer tout le jeu
//EST LIE A TOUT LES BOUTONS -Prochain Ennemi l'amorce à 1, Attaque pour pas taper dans le vent, Esquive pour la même raison et Special aussi.
presenceEnnemi = 0;
specialReboot = 3;
















// INITIALISATION PERSONNAGE



//Demander à l'utilisateur de décrire son personnage
//Entrer le pseudo dans une var pseudo
var pseudo ="ji"
document.getElementById("pseudo").innerHTML += pseudo;

//Demander sa classe
//Choisir sa classe
var classeChoisie = "mage"

var personnage = Object.create(Personnage);
switch (classeChoisie){
    case "mage":

    personnage.init("Mage", 200, 25, 65, "-Incantations d'Akimieumieu-");
   
    break;

    case "guerrier":

    personnage.init("Guerrier", 400, 45, 40, "-Assomoir de Dant'Gul-");

    break;

    case "moine":

    personnage.init("Moine", 300, 25, 75, "-Liqueur de Vie-");

    break;

    case "david":

    personnage.init("David", 88888888, 88, 88, "-Music & Wisdom-");
    document.getElementById("aventure").innerHTML = "<h3>GOD MOD ACTIF</h3>";

    break;

    default :
    dialogBox("Ce n'est ni Guerrier ni Mage ni Moine, calme ta joie et fait f5\nJe vais pas faire une boucle pour te faire plaisir enculé")
}
document.getElementById("classe").innerHTML += personnage.nom;
document.getElementById("santePerso").innerHTML += personnage.sante;
document.getElementById("forcePerso").innerHTML += personnage.force;
document.getElementById("esquivePerso").innerHTML += personnage.esquive;
document.getElementById("specialPerso").innerHTML += personnage.special;
//FIN DU SETUP PERSONNAGE


document.getElementById("aventure").innerHTML = "<h3>Bienvenu "+ pseudo + " voici le début de ton histoire</h3>";
document.getElementById("aventure").innerHTML += ("Allons, l'aventure commence sur les chemins d'été de la province de Murignon.");
document.getElementById("aventure").innerHTML += ("</br>Murignon est un endroit que les vertueux ont deserté, seul les maraux qui travaillent la terre de génération en génération restent entretenir leur petit pécule dans une tranquillité toute relative.");
document.getElementById("aventure").innerHTML += ("</br></br> Vous savez, " + pseudo + ", que la seule raison pour laquelle vous êtes ici, c'est à cause de l'appel de votre supérieur. Depuis le TREMBLEMENT DE TERRE du mois révolu, les routes se sont révélées dangereuses, et les habitants perturbés.</br>Vous devez réinstorer la paix dans ces terres, et au mieux, enquêter sur les mystères survenus. </br>Votre intuition vous recommande de parcourir les chemins, et de chercher un peu la merde.");

scrollDown("fenetreCentrale");
























                                    // SET DES ENNEMIS

var Ennemi = {
    // Initialise le personnage
    init: function (nom, sante, force, esquive, special, courage) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.esquive = esquive;
        this.special = special;
        this.courage = courage;
    }
};

var giletJaune = Object.create(Ennemi);
giletJaune.init("Glejone Esseulé", 350, 30, 0, "-JBLOK-",100);

var keke = Object.create(Ennemi);
keke.init("Quentin le Muscu Undercut", 275, 30, 25, "-Pastis/Cristaline/Cannabraise-", 75  );

var arrogant = Object.create(Ennemi);
arrogant.init("Jeremy jeune cadre en commerce", 145, 10, 70, "-Deso pas Deso-", 15);

var babos = Object.create(Ennemi);
babos.init("Antoine le Babos", 1,1,1,"-Cogito Ergo Seum-",1);

var macron = Object.create(Ennemi);
macron.init("Macron le servile", 666,50,50,"C LEUR PROJETS", 50)













                                                //COMBAT








//SET BOUTON PROCHAIN ENNEMI !!! 





    function clic() {
       if (presenceEnnemi === 666){
            dialogBox("TU ES MORT OH T'AS PAS COMPRIS OU QUOI ?");
       } 
       
    
       else if (presenceEnnemi < 1){
        var Min= Number(1)
        var Max= Number(5)

        function getRndInterger(min, max) {
           return Math.floor(Math.random() * (max - min + 1) ) + min;}
        ennemiChoisi = getRndInterger(Min,Max);
//Début de niveau
    if(compteurEnnemiVaincu<4){
    switch (compteurEnnemiVaincu){
    case (0):
    rndEnnemi=giletJaune;
    document.getElementById("santeEnnemi").innerHTML = (giletJaune.sante = Number(350));
    document.getElementById("aventure").innerHTML += ("</br></br></br>'AH NAN VPASSREZ PAS JCROA PA NAN'. Un humanoïde au cuir jaune phosphorescent vous bloque la route, vous empêchant de continuer votre chemin. Son regard hagard suppose que le dialogue sera vain. 'PASSREZ PA PI CETOU!'</br>");
    scrollDown("fenetreCentrale");
    break;
    
    case(1):
    rndEnnemi=keke;
    document.getElementById("santeEnnemi").innerHTML = (keke.sante = Number(275));
    document.getElementById("aventure").innerHTML += ("</br></br></br>Un individu aussi bombé que nerveux marche d'un pas determiné vers vous, son regard injecté de sang vous traverse tandis qu'il s'exclame : 'T'AS TES PAPIERS TOI ? T'ES UN BON FRONCOIS ??'. Vous n'avez pas le temps de répliquer qu'il semble vouloir vous immobiliser.</br>");
    scrollDown("fenetreCentrale");  
    break;
    
    case (2):
    rndEnnemi=arrogant;
    document.getElementById("santeEnnemi").innerHTML = (arrogant.sante = Number(145));
    document.getElementById("aventure").innerHTML += ("</br></br></br>'Ptite merde de pauvre de merde, si ça va pas ici c'est clairement à cause des gens comme toi sans ambitions qui ont la haine du succès et qui ne developpe aucun pouvoir d'achat pour pouvoir accéder à toutes mes offres béton que j'me casse le potin m'voyez à mettre en place, c'est à cause de gens comme toi qu'y'a rien qui va ici vous êtes vraiment un plebe de merde voyez ou pas, t'es con tu parles pas mais qu'est ce que tu vas faire ? Qu'est ce que tu vas m'faire j'suis un intouchable moi petit bâtard, essayes de me toucher que je rigole vas y essaye on va s'marrer' </br>Cet individu est bien trop insuportable pour que vous passiez à côté innocemment.</br>");
    scrollDown("fenetreCentrale");
    break;
    
    case(3):
    rndEnnemi = babos;
    document.getElementById("santeEnnemi").innerHTML = (babos.sante = Number(1));
    document.getElementById("aventure").innerHTML += ("</br></br></br>Un couinement de roue vous pousse à vous retourner. Un jeune homme aux cheveux blonds tentaculaires s'adresse à vous, même si ses yeux sont rivés sur le monocycle qui le supporte. </br>'Eh mec, tu sais, ici c'est de plus en plus Babylone. Les gens ils sont encore plus fous qu'ils étaient déjà bien fous tu vois ? genre avant ils couraient partout pour faire des trucs mais ça allait. Maintenant ils courent pour faire des trucs mais ça va pas, tu vois, c'est la couleur de leur âme qu'a changé, genre, avant ils étaient dur avec eux même et avec les autres, maintenant ils ont laissé tombé et ils sont en detresse ils savent que ça va pas mais genre ils savent pas pourquoi même si ils savent pourquoi au fond. WOOOOOOH j'me suis perdu allez bisous</br>");
    scrollDown("fenetreCentrale");
    break;
    default:
    dialogBox("SUCE BIEN MON CUL");
    break;
    }


    //fin de niveau
    }else if(compteurEnnemiVaincu>=4){
        switch (ennemiChoisi){
            case (1):
            rndEnnemi=giletJaune;
            document.getElementById("santeEnnemi").innerHTML = (giletJaune.sante = Number(350));
            document.getElementById("aventure").innerHTML += ("</br></br></br>'AH NAN VPASSREZ PAS JCROA PA NAN'. Un humanoïde au cuir jaune phosphorescent vous bloque la route, vous empêchant de continuer votre chemin. Son regard hagard suppose que le dialogue sera vain. 'PASSREZ PA PI CETOU!'</br>");
            scrollDown("fenetreCentrale");
            break;
            
            case(2):
            rndEnnemi=keke;
            document.getElementById("santeEnnemi").innerHTML = (keke.sante = Number(275));
            document.getElementById("aventure").innerHTML += ("</br></br></br>Un individu aussi bombé que nerveux marche d'un pas determiné vers vous, son regard injecté de sang vous traverse tandis qu'il s'exclame : 'T'AS TES PAPIERS TOI ? T'ES UN BON FRONCOIS ??'. Vous n'avez pas le temps de répliquer qu'il semble vouloir vous immobiliser.</br>");
            scrollDown("fenetreCentrale");  
            break;
            
            case (3):
            rndEnnemi=arrogant;
            document.getElementById("santeEnnemi").innerHTML = (arrogant.sante = Number(145));
            document.getElementById("aventure").innerHTML += ("</br></br></br>'Ptite merde de pauvre de merde, si ça va pas ici c'est clairement à cause des gens comme toi sans ambitions qui ont la haine du succès et qui ne developpe aucun pouvoir d'achat pour pouvoir accéder à toutes mes offres béton que j'me casse le potin m'voyez à mettre en place, c'est à cause de gens comme toi qu'y'a rien qui va ici vous êtes vraiment un plebe de merde voyez ou pas, t'es con tu parles pas mais qu'est ce que tu vas faire ? Qu'est ce que tu vas m'faire j'suis un intouchable moi petit bâtard, essayes de me toucher que je rigole vas y essaye on va s'marrer' </br>Cet individu est bien trop insuportable pour que vous passiez à côté innocemment.</br>");
            scrollDown("fenetreCentrale");
            break;
            
            case(4):
            rndEnnemi = babos;
            document.getElementById("santeEnnemi").innerHTML = (babos.sante = Number(1));
            document.getElementById("aventure").innerHTML += ("</br></br></br>Un couinement de roue vous pousse à vous retourner. Un jeune homme aux cheveux blonds tentaculaires s'adresse à vous, même si ses yeux sont rivés sur le monocycle qui le supporte. </br>'Eh mec, tu sais, ici c'est de plus en plus Babylone. Les gens ils sont encore plus fous qu'ils étaient déjà bien fous tu vois ? genre avant ils couraient partout pour faire des trucs mais ça allait. Maintenant ils courent pour faire des trucs mais ça va pas, tu vois, c'est la couleur de leur âme qu'a changé, genre, avant ils étaient dur avec eux même et avec les autres, maintenant ils ont laissé tombé et ils sont en detresse ils savent que ça va pas mais genre ils savent pas pourquoi même si ils savent pourquoi au fond. WOOOOOOH j'me suis perdu allez bisous</br>");
            scrollDown("fenetreCentrale");
            break;

            case(5):
            rndEnnemi = macron;
            document.getElementById("santeEnnemi").innerHTML = (macron.sante = Number(666));
            document.getElementById("aventure").innerHTML += ("</br></br></br>FINAL BOSS TEMPORAIRE, IL EST RAPIDE, PAS BEAU, MAIS HABILE.</br>Enjoy.</br>");
            scrollDown("fenetreCentrale");
            break;
            
            default:
            dialogBox("SUCE BIEN MON CUL");
            break;
            }
    }
    presenceEnnemi++;
    document.getElementById("pseudoEnnemi").innerHTML = rndEnnemi.nom;
    document.getElementById("forceEnnemi").innerHTML = rndEnnemi.force;
    document.getElementById("specialEnnemi").innerHTML = rndEnnemi.special;
    } 


    else if (presenceEnnemi === 1){
        dialogBox("Tu as déjà un adversaire à qui botter le fion, occupe toi de celui ci !");}
}
    
    var boutonElt = document.getElementById("bouton");
    boutonElt.addEventListener("click", clic);








                        //POKEDEX





function askPokedex() {
    
    if (presenceEnnemi = 0){
        dialogBox("'This isn't the time to use that!'\ndirai votre supérieur");
    }else if (presenceEnnemi = 1){


switch (rndEnnemi){
case (giletJaune):
dialogBox("Les Glejones sont apparu immédiatement après le TREMBLEMENT DE TERRE du mois de nouvombre.\nCes spécimens n'ont d'humain que leur silhouette et n'ont de caractéristiques communes que leur couleur jaune fluo, leur accent du nord et leur aversion pour l'autorité et pour les charettes.\n\n Aussi Résistants que peu avisés, il n'esquiveront jamais vos coups.");
break;

case(keke):
dialogBox("Depuis qu'il s'est mit à fumer sa récolte de cannabraise du mois de Nouvombre, Quentin est très insatisfait par son sort.\n\nDécidé à en vouloir au monde entier depuis que Sarah ne l'assume plus,\nQuentin a redoublé de créatine pour se rendre toujours plus insuportable.\n\nSes mixtures chamaniques le rendront plus fort,\nMais à quel prix ?")
break;

case (arrogant):
dialogBox("Jeremy a bientôt fini ses études.\nObstiné par l'idée de faire de l'argent,\nil a mit son humanité de côté pensant que, je cite,\n'l'Homme c'est qu'un monton t'façon'\nDepuis qu'il a rejeté tout ceux qui l'aimaient encore un peu,\nJeremy erre sans autre but que d'affirmer sa supériorité à qui veut l'entendre, pour compenser ses angoisses profondes.\n\nCette petite fiote est très fort pour les pirouettes\nmais a toujours peur de se salir les mimines.")
break;

case(babos):
dialogBox("Antoine est le babos du village. On le sent venir de loin avec son odeur de foin et de cannabraise, il n'a jamais voulu de mal à personne. \n\nSon objectif ?  Acquerir des savoirs faire inutiles, prendre du bon temps, et comprendre la vie. ... Pour le moment, il fume en faisant du monocycle, son Djambe sur la tête, son Didgeridoo dans le dos et deux livres de philosphie dans le sac, dont les couvertures ont servis à faire des cartons à rouler.")
break;


default:
dialogBox("SUCE BIEN MON CUL")
break;}
    }
}

var boutonPokedex = document.getElementById("pokedex");
boutonPokedex.addEventListener("click", askPokedex);












































                                            //Combat !!


//MAINTENANT CA SERAI BIEN QUE LES BOUTONS D'ACTION ILS FASSENT UN TRUC PTN

function attaquer() 
{
    if (presenceEnnemi === 666){
        dialogBox("MORT DE CHEZ MORT ARRETE MAINTENANT. TU PEUX PAS ATTAQUER T'ES MORT. MORT. MOOOOORT");
    }else if (presenceEnnemi === 0){
        dialogBox("Tu n'as pas d'adversaire, va chercher la merde on en reparle après.");
    }else if (presenceEnnemi = 1, tourJoueur(tour)=== true){
    var Min= Number(personnage.force - 10)
    var Max= Number(personnage.force + 10)

        function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

valeurAttaque = getRndInterger(Min, Max);
actionPerso = 1;
reactionEnnemi();
esquiveReussie = 0;
resetSpecial();
}

}



var boutonEltAttaquer = document.getElementById("ATTAQUE");

// Ajout d'un gestionnaire pour l'événement click

boutonEltAttaquer.addEventListener("click", attaquer);



//ON COMPLIQUE TOUT ON RAJOUTE l'esquive !!!!

function esquiver() 
{
    //Cas spéciaux : Mort, ou pas d'ennemi
    if (presenceEnnemi === 666){
        dialogBox("Eh me saoule pas là relance le jeu ou casse toi connard J'AI AUTRE CHOSE A FOUTRE LA.")
    
    }else if(presenceEnnemi ===0){ 
        dialogBox("Tu donnes l'impression de danser sur les chemins, c'est mignon mais ça va pas t'aider.")
    }
    
    //PROCEDURE HABITUELLE
    else if (presenceEnnemi = 1, tourJoueur(tour)=== true){
    var Min= Number(personnage.esquive - 5)
    var Max= Number(personnage.esquive + 15)
    var Miin = Number(1)
    var Maax = Number(100)
    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

jetEsquive = getRndInterger(Min, Max);
valeurEsquive = getRndInterger(Miin, Maax);
console.log("jetEsquive du joueur : "+jetEsquive+" et la valeur minimale à avoir était "+valeurEsquive);
                    //Esquive réussie
            if (jetEsquive >= valeurEsquive){
                actionPerso = 2;
            } 
                    //Echec de l'esquive
            else if (jetEsquive < valeurEsquive){
            actionPerso = 3;
    }
reactionEnnemi();
resetSpecial();
    }
    
}




var boutonEltEsquiver = document.getElementById("ESQUIVE");

// Ajout d'un gestionnaire pour l'événement click

boutonEltEsquiver.addEventListener("click", esquiver);








                            //ET MAINTENT LE SPECIAL HAHAHAHAHA WHY SO SERIOUS GAMER RISE UP
function specialClic() {
    if (presenceEnnemi===0){
        dialogBox("Tu veux t'amuser à faire de l'esbrouffe sans spectateurs ? T'es quel genre de gars ? Le genre à boire tout seul chez lui ? A faire tourner les serviettes lors d'un dîner en tête à tête avec ton chat ? Garde ton energie pour tes prochaines rencontres.")
    }else if (presenceEnnemi===1){
    if(specialReboot <3){
        dialogBox("Tu dois encore attendre pour relancer un special, t'es fou ou quoi ? T'ES UN CHEATER UN TRUC DU GENRE ? NAN MAIS T'ES QUI POUR VOULOIR ENVOYER DES COUPS SPECIAUX H24, TA MERE ELLE T'A EDUQUé COMMENT AU JUSTE ?");
    }else if(specialReboot ===3){
        document.getElementById("aventure").innerHTML += ("</br></br>COUP SPECIAL DE LA MORT QUI TACHE</br>Attend trois actions pour pouvoir relancer le bouzin");
    switch (classeChoisie){
        
    
    case "guerrier":
    
        rndEnnemi.esquive = Number(15);
        degatAssomoir = Number(personnage.force*2);
        rndEnnemi.sante = rndEnnemi.sante - degatAssomoir;
        document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
        document.getElementById("aventure").innerHTML += ("</br></br>Votre coup était SANS SOMMATION, votre adversaire en est tout étourdi et il semble perdre en agilité, il aura du mal à esquiver vos prochains coups, et vous lui infligez "+degatAssomoir+" point de dégats dans sa teuté.</br>");
    
    break;
    
    case "moine":
    
        personnage.esquive = personnage.esquive - 15;
        personnage.sante = personnage.sante + 250;
        document.getElementById("santePerso").innerHTML = personnage.sante;
        document.getElementById("esquivePerso").innerHTML = personnage.esquive;
        document.getElementById("aventure").innerHTML += ("</br></br>Vous sortez une fiole de votre poche et prenez une lampée, vous vous santez en meilleure forme, mais votre agilité en prend un coup ! Avec modération s'il vous plait !</br>");
    
    break;

    case "mage":

        //Decide d'une invocation random parmis 3 possibles

                var Min= Number(1)
                var Max= Number(3)

                function getRndInterger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;}
            incantation = getRndInterger(Min, Max);
            document.getElementById("aventure").innerHTML += ("</br></br>Les incantations d'Akimieumieu sont instables, vous vous concentrez et ");
            

            switch (incantation){
                case (1) :
                incantationName="BOULE DE SHNECK ULTRA";
                degatBoule= (rndEnnemi.sante/2)+30;
                rndEnnemi.sante = rndEnnemi.sante - degatBoule;
                document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
            document.getElementById("aventure").innerHTML += ("lancez le sort '"+incantationName+"' qui amoche votre adversaire bien salement, lui ôtant " + degatBoule + " Points de vie</br>EN FAIT C'EST LA MOITIE DE SA VIE + 30 SI T'A CAPTé</br>" )    
            
            break;

                case (2) :
                incantationName="INVISIBILITÉ BON MARCHÉ";
                personnage.esquive = Number(88);
                document.getElementById("esquivePerso").innerHTML = personnage.esquive;
                document.getElementById("aventure").innerHTML += ("lancez le sort '"+incantationName+"'. L'adversaire ne vous voit que sous une forme quasiment transparente. Un peu comme si il regardait au travers d'une pinte de bière vide. C'est le moment d'esquiver ses coups !</br>" )    
            
            break;
                
                case (3) :
                incantationName="CARRESSE PSYCHIQUE";
                degatCarresse= 1;
                rndEnnemi.sante = rndEnnemi.sante + degatCarresse;
                document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
                document.getElementById("aventure").innerHTML += ("lancez le sort '"+incantationName+"' que vous aviez appris à lancer à la Fac pour séduire une jeune mage très douce, qui depuis votre séparation s'est étrangement passionnée pour la démonologie. Ce sort n'est pas vraiment un sort de combat, et votre adversaire semble même un peu plus excité qu'au paravant, vous lui avez rendu " + degatCarresse + " Point de vie</br>" )    
           
            break;
        }
        break;
        case "david":
        attaquer();
        document.getElementById("aventure").innerHTML += ("</br></br>VOTRE ENNEMI A SIMPLEMENT CESSé D'EXISTER.</br>");
        resetEnnemi();
    
        break;
    
        default :
        dialogBox("Interaction cheloue du spécial, merci d'en faire part au MJ il code comme un pied, veuillez l'excuser.")
        break;
    }
esquiver();
specialReboot=0;
console.log("Le spécial s'est exécuté");
scrollDown("fenetreCentrale");
}
}
}
var boutonElt = document.getElementById("SPECIAL");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", specialClic);



















// reactionEnnemi() : Doit se caler après chaque action du personnage pour créer une réaction de l'ennemi beh oui.
function reactionEnnemi(){
    
    //choix du bot d'attaquer ou d'esquiver selon son courage
    var Min= Number(1)
    var Max= Number(100)
    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

actionEnnemi = Number(getRndInterger(Min, Max));

if (rndEnnemi === babos){
        dialogBox("Antoine a filé sur son petit monocycle, son équlibre approximatif vous rend empathique, vous n'avez aucune raison de pourrir sa journée, le reste du monde s'en chargera déjà très bien.");
        resetEnnemi();
        vivre();}
                            //si l'ennemi décide d'attaquer :
    else if (actionEnnemi < rndEnnemi.courage){

        //Calculer la valeur de son attaque
        var Min= Number(rndEnnemi.force - 10)
        var Max= Number(rndEnnemi.force + 10)

    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}
    valeurAttaqueEnnemi = Number(getRndInterger(Min, Max));

    switch (actionPerso){
        //Le joueur a décidé d'attaquer || les coups s'échangent.
case (1) :
        if (esquiveReussie === 1){
            rndEnnemi.sante = rndEnnemi.sante - (valeurAttaque*2);
            document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
            document.getElementById("aventure").innerHTML += ("</br>Votre attaque a fait "+ (valeurAttaque*2)+", dans la geste de votre esquive, l'ennemi est assomé et ne vous touche pas ce tour !</br>");
            esquiveReussie = 0;
            scrollDown("fenetreCentrale");  

        }else if (esquiveReussie === 0){
            rndEnnemi.sante = rndEnnemi.sante - valeurAttaque;
            document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
            document.getElementById("aventure").innerHTML += ("</br>Votre attaque a fait "+ valeurAttaque+" !");
            scrollDown("fenetreCentrale");  


    personnage.sante = personnage.sante - valeurAttaqueEnnemi;
    document.getElementById("santePerso").innerHTML = personnage.sante;
    document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" vous a attaqué, et infligé "+ valeurAttaqueEnnemi+" !");
    scrollDown("fenetreCentrale");}
                        

        break;

        //Le joueur a décidé d'esquiver et reussi son jet || Il esquive l'attaque de l'adversaire
case (2) :
        document.getElementById("aventure").innerHTML += ("</br>Vous avez esquivé l'attaque de "+rndEnnemi.nom+" !");
        scrollDown("fenetreCentrale");
        esquiveReussie = 1;
        ennemiMort();
        break;

        //Le joueur a décidé d'esquiver et raté son jet || Il prend cher dans sa petite gueule de fils de pute
case(3) :

        valeurAttaqueEnnemi = getRndInterger(Min, Max);
        echecEsquive = valeurAttaqueEnnemi*2
    personnage.sante = personnage.sante - echecEsquive;
    document.getElementById("santePerso").innerHTML = personnage.sante;
    document.getElementById("aventure").innerHTML += ("</br>Vous vous êtes lamentablement empiergé, "+ rndEnnemi.nom +" vous a touché, et infligé "+ echecEsquive +" !</br>");
    scrollDown("fenetreCentrale");
    esquiveReussie=0;
        break;

        default:
        dialogBox("Quelle étrange interaction.");
    }
actionPerso = 0;

    } 

                    //L'ennemi décide d'Esquiver alors que le joueur attaque

    else if(actionEnnemi> rndEnnemi.courage){
    var Min= Number(rndEnnemi.esquive);
    var Max= Number(rndEnnemi.esquive +5);
    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

    let esquiveEnnemi = getRndInterger(Min, Max);
    let chanceEsquive = getRndInterger (Number(0), Number(100))

    // Le joueur et l'ennemi esquivent, ces bouffons.
    if (actionPerso === 2){
        document.getElementById("aventure").innerHTML += ("</br> A vouloir vous esquiver tout les deux, vous semblez danser la Carioca. C'est pas comme ça qu'on va remettre le pays en ordre !</br>");
        scrollDown("fenetreCentrale");}
    else if (actionPerso === 3){
        document.getElementById("aventure").innerHTML += ("</br> A vouloir vous esquiver tout les deux, vous semblez danser la Carioca. C'est pas comme ça qu'on va remettre le pays en ordre !</br>");
        scrollDown("fenetreCentrale");}

//L'ennemi reussi son esquive
    else if(esquiveEnnemi > chanceEsquive && actionPerso === 1){
    document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" a esquivé votre attaque !");
    scrollDown("fenetreCentrale");

}
   
    //l'ennemi loupe son esquive
    else if (esquiveEnnemi <= chanceEsquive && actionPerso===1){
        if(esquiveReussie===0){
            rndEnnemi.sante = rndEnnemi.sante - (valeurAttaque + Number(10));
            document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
            document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" n'a pas réussi à esquiver votre coup, votre attaque a fait "+ (valeurAttaque+Number(10))+" !");
            scrollDown("fenetreCentrale");}
        else if (esquiveReussie===1){
            rndEnnemi.sante = rndEnnemi.sante - (valeurAttaque*4);
            document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
            document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" n'a pas réussi à esquiver votre coup et vous étiez dans un élan devastateur, votre attaque a fait "+ (valeurAttaque*4)+" !");
            scrollDown("fenetreCentrale");
        }}
     
    }
    //Checker si quelqu'un a perdu
     mourir();
    ennemiMort();
actionPerso = 0;
    
} 