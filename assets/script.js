//Classi utenti + metodi
var User = /** @class */ (function () {
    function User(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
    }
    User.prototype.chiamata = function (minutiRicarica) {
        var costoChiamata = 0.20 * minutiRicarica;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
    };
    User.prototype[404] = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//Istanze classi utenti
var user1 = new User(50);
console.log("User1 saldo iniziale: ", user1[404]());
user1.chiamata(3);
user1.chiamata(5);
user1.chiamata(7);
console.log("User1 ha effettuato ", user1.getNumeroChiamate(), "chiamate");
console.log("Il nuovo saldo di User1 è: ", user1[404]());
user1.azzeraChiamate();
console.log("Numero chiamate (reset): ", user1.numeroChiamate);
var user2 = new User(20);
console.log("User2 saldo iniziale: ", user2[404]());
user2.chiamata(10);
user2.chiamata(5);
console.log("User2 ha effettuato ", user2.getNumeroChiamate(), "chiamate");
console.log("Il nuovo saldo di User2 è: ", user2[404]());
user2.azzeraChiamate();
console.log("Numero chiamate (reset): ", user2.numeroChiamate);
var user3 = new User(70);
console.log("User3 saldo iniziale: ", user3[404]());
user3.chiamata(15);
user3.chiamata(35);
user3.chiamata(10);
user3.chiamata(5);
console.log("User3 ha effettuato ", user3.getNumeroChiamate(), "chiamate");
console.log("Il nuovo saldo di User3 è: ", user3[404]());
user3.azzeraChiamate();
console.log("Numero chiamate (reset): ", user3.numeroChiamate);
