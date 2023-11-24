//Classi utenti + metodi
var MainUser = /** @class */ (function () {
    function MainUser(recharge) {
        this.recharge = recharge;
        this.numberOfCalls = 0;
    }
    MainUser.prototype.call = function (minutesCalc) {
        var callCosts = 0.20 * minutesCalc;
        this.recharge -= callCosts;
        this.numberOfCalls++;
    };
    MainUser.prototype[404] = function () {
        return this.recharge;
    };
    MainUser.prototype.getNumberOfCalls = function () {
        return this.numberOfCalls;
    };
    MainUser.prototype.resetCalls = function () {
        this.numberOfCalls = 0;
    };
    return MainUser;
}());
//Istanze classi utenti
var firstUser = new MainUser(50);
var secondUser = new MainUser(20);
var ThirdUser = new MainUser(70);
//DOM
window.onload = function () {
    var chargeDiv = document.querySelector(".chargeDiv");
    var charge = document.createElement("p");
    var newCharge = "".concat(firstUser.recharge).toString();
    charge.innerText = "".concat(newCharge) + "€";
    chargeDiv.appendChild(charge);
    var startCall = document.querySelector(".start-call");
    startCall.addEventListener("click", function () {
        firstUser.call(1);
        var callList = document.querySelector(".callList");
        var calls = document.createElement("li");
        calls.innerText = "Chiamata " + "".concat(firstUser.numberOfCalls);
        callList.appendChild(calls);
        charge.innerText = "".concat(firstUser.recharge) + "€";
    });
    var reset = document.querySelector(".reset");
    reset.addEventListener("click", function () {
        firstUser.resetCalls();
        var calls = document.querySelectorAll("li");
        calls.forEach(function (call) { return call.remove(); });
    });
};
