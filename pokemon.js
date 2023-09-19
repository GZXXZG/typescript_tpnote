var Pokemon = /** @class */ (function () {
    function Pokemon(nom, pointsDeVie, pointsAttaque, type) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = type;
    }
    Pokemon.prototype.estMort = function () {
        if (this.pointsDeVie == 0)
            return true;
        else
            return false;
    };
    Pokemon.prototype.attaquer = function (p) {
        if (p.pointsDeVie == 0)
            console.log("Le pokémon visé n'a plus de points de vie");
        else {
            // Type Eau
            if (this.type == "Eau") {
                if (p.type == "Eau") {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("Attaque r\u00E9ussie ! ".concat(p.nom, " n'a plus que ").concat(p.pointsDeVie, " points de vie !"));
                }
                if (p.type == "Plante") {
                    p.pointsDeVie -= this.pointsAttaque * 0.5;
                    console.log("Ce n'est pas tr\u00E8s efficace ! ".concat(p.nom, " n'a plus que ").concat(p.pointsDeVie, " points de vie !"));
                }
                if (p.type == "Feu") {
                    p.pointsDeVie -= this.pointsAttaque * 2;
                    console.log("C'est tr\u00E8s efficace ! ".concat(p.nom, " n'a plus que ").concat(p.pointsDeVie, " points de vie !"));
                }
            }
        }
    };
    Pokemon.prototype.afficherInformations = function () {
        console.log("".concat(this.nom, " a ").concat(this.pointsAttaque, " points d'attaque. Il lui reste ").concat(this.pointsDeVie, " points de vie !"));
    };
    return Pokemon;
}());
var salameche = new Pokemon("Salamèche", 50, 10, "Feu");
var carapuce = new Pokemon("Carapuce", 50, 10, "Eau");
var bulbizarre = new Pokemon("Bulbizarre", 50, 10, "Plante");
console.log(salameche.estMort());
carapuce.afficherInformations();
salameche.attaquer(carapuce);
salameche.attaquer(bulbizarre);
carapuce.attaquer(salameche);
carapuce.attaquer(bulbizarre);
bulbizarre.attaquer(carapuce);
bulbizarre.attaquer(salameche);
