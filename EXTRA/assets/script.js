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
    var startTime;
    var callList = document.querySelector(".callList");
    var calling = document.createElement("li");
    startCall.addEventListener("click", function () {
        startTime = new Date().getTime();
        calling.id = "calling";
        calling.innerText = "Sto chiamando...";
        calling.classList.add("d-block");
        calling.classList.remove("d-none");
        callList.appendChild(calling);
    });
    var endCall = document.querySelector(".end-call");
    var endTime;
    endCall.addEventListener("click", function () {
        // firstUser.call(1)
        endTime = new Date().getTime();
        var timeDiff = endTime - startTime;
        timeDiff /= 1000;
        var minutes = Math.round(timeDiff / 60);
        firstUser.call(minutes);
        console.log(minutes);
        var callList = document.querySelector(".callList");
        var calling = document.getElementById("calling");
        calling.classList.add("d-none");
        calling.classList.remove("d-block");
        var calls = document.createElement("li");
        calls.innerText = "Chiamata " + "".concat(firstUser.numberOfCalls) + " durata: " + "".concat(minutes) + " minuti.";
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
