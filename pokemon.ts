class Pokemon{
    private nom: String;
    private pointsDeVie: number;
    private pointsAttaque: number;

    public constructor(nom: String, pointsDeVie: number, pointsAttaque: number){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
    }

    estMort(): boolean {
        if (this.pointsDeVie == 0)
            return true;
        else
            return false;
    }

    attaquer(p: Pokemon): void {
        if (p.pointsDeVie == 0)
            console.log("Le pokémon visé n'a plus de points de vie");
        else{
            p.pointsDeVie -= this.pointsAttaque;
            console.log(`Attaque réussie ! Le pokémon visé n'a plus que ${p.pointsDeVie} points de vie !`);
        }
    }

    afficherInformations(): void {
        console.log(`${this.nom} a ${this.pointsAttaque} points d'attaque. Il lui reste ${this.pointsDeVie} points de vie !`);
    }
}

let pikachu = new Pokemon("Pikachu", 100, 10);
let carapuce = new Pokemon("Carapuce", 100, 10);
console.log(pikachu.estMort());
carapuce.afficherInformations();
pikachu.attaquer(carapuce);