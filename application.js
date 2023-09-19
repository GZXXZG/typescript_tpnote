class Personne{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }
    sePresenter(){
        console.log("Je suis "+this.nom+" et j'ai "+this.age+" ans");
    }
    afficherNombrePersonnes(){

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
console.log(personne2 instanceof Personne );