class Personne{
    static nbInstance = 0;
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
        Personne.nbInstance++;
    }
    sePresenter(){
        console.log("Je suis "+this.nom+" et j'ai "+this.age+" ans");
    }
    
    Personne(){nbInstance++;}
    Enfant(){nbInstance++;}
    
    afficherNombrePersonnes() {
        console.log("Il y a "+Personne.nbInstance+" personnes.")
    }
}

let personne1 = new Personne("Romain", 22);
personne1.sePresenter();

class Enfant extends Personne{
    sePresenter(){
        super.sePresenter();
        console.log("Je suis un enfant");
    }
}

let personne2 = new Enfant("Loic", 12);
personne2.sePresenter();
personne1.afficherNombrePersonnes();