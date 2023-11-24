//Interfaccia Smartphone
interface SmartphonePlus {
    call(minutesCalc: number):void;
    404(): number;
    getNumberOfCalls(): number;
    resetCalls(): void
}

//Classi utenti + metodi
class MainUser implements SmartphonePlus{
    recharge: number;
    numberOfCalls: number;

    constructor(recharge:number) {
        this.recharge = recharge;
        this.numberOfCalls = 0
    }
    call(minutesCalc:number):void {
        let callCosts = 0.20 * minutesCalc;
        this.recharge -= callCosts;
        this.numberOfCalls++
    }
    404(): number{
        return this.recharge;
    }
    getNumberOfCalls(): number {
        return this.numberOfCalls;
    }
    resetCalls(): void {
        this.numberOfCalls = 0;
    }
}

//Istanze classi utenti
let firstUser = new MainUser (50)
let secondUser = new MainUser (20)
let ThirdUser = new MainUser (70)

//DOM
window.onload = () => {
    const chargeDiv = document.querySelector(".chargeDiv") as HTMLDivElement
    let charge = document.createElement("p") as HTMLParagraphElement
    let newCharge = `${firstUser.recharge}`.toString()
    charge.innerText = `${newCharge}` + "€"
    chargeDiv.appendChild(charge)

    const startCall = document.querySelector(".start-call") as HTMLButtonElement
    startCall.addEventListener("click", function(){
        firstUser.call(1)

        const callList = document.querySelector(".callList") as HTMLUListElement
        let calls = document.createElement("li") as HTMLLIElement
        calls.innerText = "Chiamata " + `${firstUser.numberOfCalls}`
        callList.appendChild(calls)
        charge.innerText = `${firstUser.recharge}` + "€"
    })

    const reset = document.querySelector(".reset") as HTMLButtonElement
    reset.addEventListener("click", function() {
        firstUser.resetCalls()
        let calls = document.querySelectorAll("li") as NodeListOf<HTMLLIElement>
        calls.forEach(call => call.remove())
    })
}