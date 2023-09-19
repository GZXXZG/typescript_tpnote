var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.sePresenter = function () {
        console.log("Mon abscisse est : ".concat(this.abs, " et mon ordonn\u00E9e est : ").concat(this.ord));
    };
    Point.prototype.calculerDistance = function (p) {
        console.log("La distance entre les deux points est de ".concat(Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2)).toFixed(2)));
    };
    Point.prototype.calculerMilieu = function (p) {
        console.log("Le milieu entre les deux points se situe en (".concat((this.abs + p.abs) / 2, ";").concat((this.ord + p.ord) / 2, ")"));
    };
    return Point;
}());
var point1 = new Point(1, 2);
var point2 = new Point(3, 4);
point1.sePresenter();
point2.sePresenter();
point1.calculerDistance(point2);
point1.calculerMilieu(point2);
