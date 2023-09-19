var Pokemon = /** @class */ (function () {
    function Pokemon(nom, pointsDeVie, pointsAttaque) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
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
            p.pointsDeVie -= this.pointsAttaque;
            console.log("Attaque r\u00E9ussie ! Le pok\u00E9mon vis\u00E9 n'a plus que ".concat(p.pointsDeVie, " points de vie !"));
        }
    };
    Pokemon.prototype.afficherInformations = function () {
        console.log("".concat(this.nom, " a ").concat(this.pointsAttaque, " points d'attaque. Il lui reste ").concat(this.pointsDeVie, " points de vie !"));
    };
    return Pokemon;
}());
var pikachu = new Pokemon("Pikachu", 100, 10);
var carapuce = new Pokemon("Carapuce", 100, 10);
console.log(pikachu.estMort());
carapuce.afficherInformations();
pikachu.attaquer(carapuce);
carapuce.afficherInformations();
