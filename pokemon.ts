// Romain GERARD TP2 BUT3
class Pokemon{
    protected nom: String;
    protected pointsDeVie: number;
    protected pointsAttaque: number;

    protected type: String;

    public constructor(nom: String, pointsDeVie: number, pointsAttaque: number, type: String){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = type;
    }

    estMort(): boolean {
        if (this.pointsDeVie == 0)
            return true;
        else
            return false;
    }

    attaquer(p: Pokemon): void {
        if (p.pointsDeVie <= 0)
            console.log(`${p.nom} est déjà KO.`);
        else{
            // Type Eau
            if (this.type == "Eau"){

                if(p.type == "Eau"){
                    p.pointsDeVie -= this.pointsAttaque;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Attaque réussie ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Plante"){
                    p.pointsDeVie -= this.pointsAttaque*0.5;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Ce n'est pas très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Feu"){
                    p.pointsDeVie -= this.pointsAttaque*2;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`C'est très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }

            }
            // Type Feu
            if (this.type == "Feu"){

                if(p.type == "Feu"){
                    p.pointsDeVie -= this.pointsAttaque;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Attaque réussie ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Eau"){
                    p.pointsDeVie -= this.pointsAttaque*0.5;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Ce n'est pas très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Plante"){
                    p.pointsDeVie -= this.pointsAttaque*2;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`C'est très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }

            }
            // Type Plante
            if (this.type == "Plante"){

                if(p.type == "Plante"){
                    p.pointsDeVie -= this.pointsAttaque;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Attaque réussie ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Feu"){
                    p.pointsDeVie -= this.pointsAttaque*0.5;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`Ce n'est pas très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }
                if(p.type == "Eau"){
                    p.pointsDeVie -= this.pointsAttaque*2;
                    if (p.pointsDeVie <= 0)
                        console.log(`Bien joué ! ${p.nom} est KO.`);
                    else
                        console.log(`C'est très efficace ! ${p.nom} n'a plus que ${p.pointsDeVie} points de vie !`);
                }

            }
        }
    }

    afficherInformations(): void {
        console.log(`${this.nom} a ${this.pointsAttaque} points d'attaque. Il lui reste ${this.pointsDeVie} points de vie. Il est de type ${this.type} !`);
    }
}

let salameche = new Pokemon("Salamèche", 50, 10, "Feu");
let carapuce = new Pokemon("Carapuce", 50, 10, "Eau");
let bulbizarre = new Pokemon("Bulbizarre", 50, 10, "Plante");
console.log(salameche.estMort());
carapuce.afficherInformations();
salameche.attaquer(carapuce);
salameche.attaquer(bulbizarre);

carapuce.attaquer(salameche);
carapuce.attaquer(bulbizarre);

bulbizarre.attaquer(carapuce);
bulbizarre.attaquer(salameche);


carapuce.attaquer(salameche);
carapuce.attaquer(salameche);
carapuce.attaquer(salameche);
carapuce.attaquer(salameche);
console.log(salameche.estMort());
