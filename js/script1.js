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

//Demander à l'utilisateur de décrire son personnage
//Entrer le pseudo dans une var pseudo
var pseudoEntree = prompt("Comment s'appelle votre Héros ?")
var pseudo = pseudoEntree.toUpperCase();
document.getElementById("pseudo").innerHTML += pseudo;

//Demander sa classe
//Choisir sa classe
var classeChoisie = prompt ("Quelle classe voulez vous incarner ?\n\nEntrez Guerrier, Mage ou Moine\n\nMage c'est vraiment pas easy")
var classeChoisie = classeChoisie.toLowerCase();

var personnage = Object.create(Personnage);
switch (classeChoisie){
    case "mage":

    personnage.init("Mage", 200, 25, 50, "-Boule de Schneck-");
   
    break;

    case "guerrier":

    personnage.init("Guerrier", 450, 45, 40, "-Assomoir de Dant'Gul-");

    break;

    case "moine":

    personnage.init("Moine", 230, 35, 65, "-Liqueur de Vie-");

    break;

    default :
    alert("Ce n'est ni Guerrier ni Mage ni Moine, calme ta joie et fait f5\nJe vais pas faire une boucle pour te faire plaisir enculé")
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

// SET DES ENNEMIS


var giletJaune = Object.create(Ennemi);
giletJaune.init("Glejone Esseulé", 350, 15, 0, "-JBLOK-",100);

var keke = Object.create(Ennemi);
keke.init("Quentin le Muscu Undercut", 275, 30, 25, "-Pastis/Cristaline/Cannabraise-", 75  );

var arrogant = Object.create(Ennemi);
arrogant.init("Jeremy jeune cadre en commerce", 145, 5, 70, "-Deso pas Deso-", 15);

//SET BOUTON PROCHAIN ENNEMI !!! ATTENTION CA VA DOUILLER CETTE FOIS
presenceEnnemi = 0;
    function clic() {
        if (presenceEnnemi < 1){
        var Min= Number(1)
        var Max= Number(3)
    
    function getRndInterger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    switch (getRndInterger(Min, Max)){
    case (1):
    rndEnnemi=giletJaune;
    document.getElementById("santeEnnemi").innerHTML = (giletJaune.sante = Number(350));
    document.getElementById("aventure").innerHTML += ("</br></br></br>'AH NAN VPASSREZ PAS JCROA PA NAN'. Un humanoïde au cuir jaune phosphorescent vous bloque la route, vous empêchant de continuer votre chemin. Son regard hagard suppose que le dialogue sera vain. 'PASSREZ PA PI CETOU!'");
    scrollDown("fenetreCentrale");
    break;
    
    case(2):
    rndEnnemi=keke;
    document.getElementById("santeEnnemi").innerHTML = (keke.sante = Number(275));
    document.getElementById("aventure").innerHTML += ("</br></br></br>Un individu aussi bombé que nerveux marche d'un pas determiné vers vous, son regard injecté de sang vous traverse tandis qu'il s'exclame : 'T'AS TES PAPIERS TOI ? T'ES UN BON FRONCOIS ??'. Vous n'avez pas le temps de répliquer qu'il semble vouloir vous immobiliser.");
    scrollDown("fenetreCentrale");  
    break;
    
    case (3):
    rndEnnemi=arrogant;
    document.getElementById("santeEnnemi").innerHTML = (arrogant.sante = Number(145));
    document.getElementById("aventure").innerHTML += ("</br></br></br>'Ptite merde de pauvre de merde, si ça va pas ici c'est clairement à cause des gens comme toi sans ambitions qui ont la haine du succès et qui ne developpe aucun pouvoir d'achat pour pouvoir accéder à toutes mes offres béton que j'me casse le potin m'voyez à mettre en place, c'est à cause de gens comme toi qu'y'a rien qui va ici vous êtes vraiment un plebe de merde voyez ou pas, t'es con tu parles pas mais qu'est ce que tu vas faire ? Qu'est ce que tu vas m'faire j'suis un intouchable moi petit bâtard, essayes de me toucher que je rigole vas y essaye on va s'marrer' </br>Cet individu est bien trop insuportable pour que vous passiez à côté innocemment.");
    scrollDown("fenetreCentrale");
    break;
    
    default:
    alert("SUCE BIEN MON CUL");
    break;
    }
    presenceEnnemi++;
    document.getElementById("pseudoEnnemi").innerHTML = rndEnnemi.nom;
    document.getElementById("forceEnnemi").innerHTML = rndEnnemi.force;
    document.getElementById("specialEnnemi").innerHTML = rndEnnemi.special;
    } else if (presenceEnnemi = 1){
        alert("Tu as déjà un adversaire à qui botter le fion, occupe toi de celui ci !");
    }
    }
    
    
    var boutonElt = document.getElementById("bouton");
    
    // Ajout d'un gestionnaire pour l'événement click
    
    boutonElt.addEventListener("click", clic);

    //POKEDEX
function askPokedex() {
    if (presenceEnnemi = 1){


switch (rndEnnemi){
case (giletJaune):
alert("Les Glejones sont apparu immédiatement après le TREMBLEMENT DE TERRE du mois de nouvombre.\nCes spécimens n'ont d'humain que leur silhouette et n'ont de caractéristiques communes que leur couleur jaune fluo, leur accent du nord et leur aversion pour l'autorité et pour les charettes.\n\n Aussi Résistants que peu avisés, il n'esquiveront jamais vos coups.");
break;

case(keke):
alert("Depuis qu'il s'est mit à fumer sa récolte de cannabraise du mois de Nouvombre, Quentin est très insatisfait par son sort.\n\nDécidé à en vouloir au monde entier depuis que Sarah ne l'assume plus,\nQuentin a redoublé de créatine pour se rendre toujours plus insuportable.\n\nSes mixtures chamaniques le rendront plus fort,\nMais à quel prix ?")
break;

case (arrogant):
alert("Jeremy a bientôt fini ses études.\nObstiné par l'idée de faire de l'argent,\nil a mit son humanité de côté pensant que, je cite,\n'l'Homme c'est qu'un monton t'façon'\nDepuis qu'il a rejeté tout ceux qui l'aimaient encore un peu,\nJeremy erre sans autre but que d'affirmer sa supériorité à qui veut l'entendre, pour compenser ses angoisses profondes.\n\nCette petite fiote est très fort pour les pirouettes\nmais a toujours peur de se salir les mimines.")
break;

default:
alert("SUCE BIEN MON CUL")
break;
}
} else if (presenceEnnemi = 0){
    alert("'This isn't the time to use that!'\ndirai votre supérieur");
}
}


var boutonPokedex = document.getElementById("pokedex");

// Ajout d'un gestionnaire pour l'événement click

boutonPokedex.addEventListener("click", askPokedex);

//CREATION D'UNE VARIABLE tour DE COMBAT
tour = 0;
function tourJoueur (valeur) {
    if (valeur%2 == 0)
    return true;
else
    return false;
};
//MAINTENANT CA SERAI BIEN QUE LES BOUTONS D'ACTION ILS FASSENT UN TRUC PTN

function attaquer() 
{
    if (rndEnnemi.sante <= 0){
    alert("Bravo, tu as bien baisé cet enculé de "+ rndEnnemi.nom +", c'est le moment de repartir chercher la merde.");

    presenceEnnemi = Number(0);
    

}else if (presenceEnnemi = 0){
    alert("Tu n'as pas d'adversaire, va chercher la merde on en reparle après.");
} else if (presenceEnnemi = 1, tourJoueur(tour)=== true){
    var Min= Number(personnage.force - 10)
    var Max= Number(personnage.force + 10)

function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

valeurAttaque = getRndInterger(Min, Max);
actionPerso = 1;
reactionEnnemi();
}

}



var boutonEltAttaquer = document.getElementById("ATTAQUE");

// Ajout d'un gestionnaire pour l'événement click

boutonEltAttaquer.addEventListener("click", attaquer);



//ON COMPLIQUE TOUT ON RAJOUTE l'esquive !!!!

function esquiver() 
{
    if (presenceEnnemi = 1, tourJoueur(tour)=== true){
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
if (jetEsquive > valeurEsquive){
    actionPerso = 2;
} 
//Echec de l'esquive
else if (jetEsquive < valeurEsquive){
    actionPerso = 3;
}
tour++;
tour++;
reactionEnnemi();

}
}


var boutonEltEsquiver = document.getElementById("ESQUIVE");

// Ajout d'un gestionnaire pour l'événement click

boutonEltEsquiver.addEventListener("click", esquiver);

// reactionEnnemi() : Doit se caler après chaque action du personnage pour créer une réaction de l'ennemi beh oui.
function reactionEnnemi(){
    var Min= Number(1)
    var Max= Number(100)
function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

actionEnnemi = Number(getRndInterger(Min, Max));


//L'ennemi attaque
    if (actionEnnemi < rndEnnemi.courage){
        var Min= Number(rndEnnemi.force - 10)
        var Max= Number(rndEnnemi.force + 10)

    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}
    valeurAttaqueEnnemi = getRndInterger(Min, Max);

    switch (actionPerso){
        case (1) :
    rndEnnemi.sante = rndEnnemi.sante - valeurAttaque;
    document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
    document.getElementById("aventure").innerHTML += ("</br>Votre attaque a fait "+ valeurAttaque+" !");
    scrollDown("fenetreCentrale");  


    personnage.sante = personnage.sante - valeurAttaqueEnnemi;
    document.getElementById("santePerso").innerHTML = personnage.sante;
    document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" vous a attaqué, et infligé "+ valeurAttaqueEnnemi+" !");
    scrollDown("fenetreCentrale");
        break;

        case (2) :
        document.getElementById("aventure").innerHTML += ("</br>Vous avez esquivé l'attaque de "+rndEnnemi.nom+" !");
        scrollDown("fenetreCentrale");
        break;

        case(3) :
        valeurAttaqueEnnemi = getRndInterger(Min, Max);
    personnage.sante = personnage.sante - (valeurAttaqueEnnemi + Number(5));
    document.getElementById("santePerso").innerHTML = personnage.sante;
    document.getElementById("aventure").innerHTML += ("</br>Vous n'avez pas réussi à esquiver, "+ rndEnnemi.nom +" vous a touché, et infligé "+ (valeurAttaqueEnnemi+Number(5))+" !");
    scrollDown("fenetreCentrale");
        break;

        default:
        alert("Quelle étrange interaction.");
    }
actionPerso = 0;

    } 
//L'ennemi Esquive
    else if(actionEnnemi> rndEnnemi.courage, actionPerso === 1){
    var Min= Number(rndEnnemi.esquive);
    var Max= Number(rndEnnemi.esquive +5);
    function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

    let esquiveEnnemi = getRndInterger(Min, Max);
    let chanceEsquive = getRndInterger (Number(0), Number(100))
    if(esquiveEnnemi > chanceEsquive && actionPerso === 1){
    document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" a esquivé votre attaque !");
    scrollDown("fenetreCentrale");
    } else if (esquiveEnnemi <= chanceEsquive && actionPerso===1){
        rndEnnemi.sante = rndEnnemi.sante - (valeurAttaque + Number(10));
        document.getElementById("santeEnnemi").innerHTML = rndEnnemi.sante;
        document.getElementById("aventure").innerHTML += ("</br>"+ rndEnnemi.nom +" n'a pas réussi à esquiver votre coup, votre attaque a fait "+ (valeurAttaque+Number(10))+" !");
        scrollDown("fenetreCentrale");
    } else if (actionPerso === 2 || 3){
        document.getElementById("aventure").innerHTML += ("</br> A vouloir vous esquiver tout les deux, vous semblez danser la Carioca. C'est pas comme ça qu'on va remettre le pays en ordre !");
        scrollDown("fenetreCentrale");
    }
    }
actionPerso = 0;
console.log("le jet d'esquive de l'ennemi est de "+esquiveEnnemi+" et le minimum pour esquiver était de "+chanceEsquive)
} 