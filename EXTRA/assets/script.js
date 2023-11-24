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
var firstUser = new MainUser(10);
// let secondUser = new MainUser (20)
// let ThirdUser = new MainUser (70)
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
    var cardBody = document.querySelector(".card-body");
    var chargeh6 = document.querySelector(".charge");
    var cardTitle = document.querySelector(".card-title");
    var callingDiv = document.createElement("div");
    callingDiv.className = "calling-div d-flex justify-content-center align-items-center flex-column d-none";
    callingDiv.innerHTML = "<button class=\"btn btn-secondary rounded-circle\"><i class=\"bi bi-person-circle\"></i></button><p>Sto Chiamando...</p>";
    cardBody.appendChild(callingDiv);
    startCall.addEventListener("click", function () {
        startTime = new Date().getTime();
        calling.id = "calling";
        calling.innerText = "Sto chiamando...";
        calling.classList.add("d-block");
        calling.classList.remove("d-none");
        callList.appendChild(calling);
        // chargeh6.classList.remove("d-block")
        // cardTitle.classList.remove("d-block")
        // chargeDiv.classList.remove("d-block")
        // chargeh6.classList.add("d-none")
        // cardTitle.classList.add("d-none")
        // chargeDiv.classList.add("d-none")
        // callingDiv.classList.add("d-flex")
        // callingDiv.classList.remove("d-none")
    });
    var endCall = document.querySelector(".end-call");
    var endTime;
    endCall.addEventListener("click", function () {
        endTime = new Date().getTime();
        var timeDiff = endTime - startTime;
        timeDiff /= 1000;
        var minutes = Math.round(timeDiff / 60);
        firstUser.call(minutes);
        console.log(minutes);
        // chargeh6.classList.remove("d-none")
        // cardTitle.classList.remove("d-none")
        // chargeDiv.classList.remove("d-none")
        // chargeh6.classList.add("d-block")
        // cardTitle.classList.add("d-block")
        // chargeDiv.classList.add("d-block")
        // callingDiv.classList.add("d-none")
        // callingDiv.classList.remove("d-flex")
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
