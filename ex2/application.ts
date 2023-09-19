class Point{
    private abs: number;
    private ord: number;

    public constructor(abs: number, ord: number){
        this.abs = abs;
        this.ord = ord;
    }
    
    sePresenter(): void {
        console.log(`Mon abscisse est : ${this.abs} et mon ordonnée est : ${this.ord}`);
    }
    
    calculerDistance(p: Point){
        console.log(`La distance entre les deux points est de ${Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2)).toFixed(2)}`);
    }
    
    calculerMilieu(p: Point){
        console.log(`Le milieu entre les deux points se situe en (${(this.abs + p.abs)/2};${(this.ord + p.ord)/2})`);
    }
}
let point1 = new Point(1, 2);
let point2 = new Point(3, 4);
point1.sePresenter();
point2.sePresenter();
point1.calculerDistance(point2);
point1.calculerMilieu(point2);