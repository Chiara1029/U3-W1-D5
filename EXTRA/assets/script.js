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
    var callList = document.querySelector(".calls-list");
    var cardBody = document.querySelector(".card-body");
    var chargeh6 = document.querySelector(".charge");
    var cardTitle = document.querySelector(".card-title");
    var callingDiv = document.createElement("div");
    callingDiv.className = "calling-div d-flex justify-content-center align-items-center flex-column d-none";
    callingDiv.innerHTML = "<img\n    src=\"https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4_medium.png\"\n    alt=\"\"\n    class=\"avatar rounded-circle\"\n  /><p class=\"mt-3\">Sto chiamando...</p>";
    cardBody.appendChild(callingDiv);
    startCall.addEventListener("click", function () {
        startTime = new Date().getTime();
        chargeh6.classList.remove("d-block");
        cardTitle.classList.remove("d-block");
        chargeDiv.classList.remove("d-block");
        chargeh6.classList.add("d-none");
        cardTitle.classList.add("d-none");
        chargeDiv.classList.add("d-none");
        callingDiv.classList.add("d-flex");
        callingDiv.classList.remove("d-none");
        callList.classList.remove("d-block");
        callList.classList.add("d-none");
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
        chargeh6.classList.remove("d-none");
        cardTitle.classList.remove("d-none");
        chargeDiv.classList.remove("d-none");
        chargeh6.classList.add("d-block");
        cardTitle.classList.add("d-block");
        chargeDiv.classList.add("d-block");
        callingDiv.classList.add("d-none");
        callingDiv.classList.remove("d-flex");
        callList.classList.remove("d-none");
        callList.classList.add("d-block");
        var calls = document.createElement("li");
        calls.innerText = "Chiamata " + "".concat(firstUser.numberOfCalls) + " - durata: " + "".concat(minutes) + " minuti.";
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
