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
let firstUser = new MainUser (10)
// let secondUser = new MainUser (20)
// let ThirdUser = new MainUser (70)

//DOM
window.onload = () => {
    const chargeDiv = document.querySelector(".chargeDiv") as HTMLDivElement
    let charge = document.createElement("p") as HTMLParagraphElement
    let newCharge = `${firstUser.recharge}`.toString()
    charge.innerText = `${newCharge}` + "€"
    chargeDiv.appendChild(charge)

    const startCall = document.querySelector(".start-call") as HTMLButtonElement
    let startTime: number
    const callList = document.querySelector(".callList") as HTMLUListElement
    let calling = document.createElement("li") as HTMLLIElement
    const cardBody = document.querySelector(".card-body") as HTMLDivElement
    const chargeh6 = document.querySelector(".charge") as HTMLTitleElement
    const cardTitle = document.querySelector(".card-title") as HTMLTitleElement
    const callingDiv = document.createElement("div") as HTMLDivElement
    callingDiv.className = "calling-div d-flex justify-content-center align-items-center flex-column d-none"
    callingDiv.innerHTML = `<button class="btn btn-secondary rounded-circle"><i class="bi bi-person-circle"></i></button><p>Sto Chiamando...</p>`
    cardBody.appendChild(callingDiv)
    
    startCall.addEventListener("click", function(){
        startTime = new Date().getTime()
        calling.id = "calling"
        calling.innerText = "Sto chiamando..."
        calling.classList.add("d-block")
        calling.classList.remove("d-none")
        callList.appendChild(calling)

        // chargeh6.classList.remove("d-block")
        // cardTitle.classList.remove("d-block")
        // chargeDiv.classList.remove("d-block")
        // chargeh6.classList.add("d-none")
        // cardTitle.classList.add("d-none")
        // chargeDiv.classList.add("d-none")

        // callingDiv.classList.add("d-flex")
        // callingDiv.classList.remove("d-none")
        
    })
    const endCall = document.querySelector(".end-call") as HTMLButtonElement
    let endTime: number
    endCall.addEventListener("click", function(){
        endTime = new Date().getTime()
        let timeDiff = endTime - startTime
        timeDiff /= 1000
        let minutes = Math.round(timeDiff / 60)

        firstUser.call(minutes)
        console.log(minutes)

        // chargeh6.classList.remove("d-none")
        // cardTitle.classList.remove("d-none")
        // chargeDiv.classList.remove("d-none")
        // chargeh6.classList.add("d-block")
        // cardTitle.classList.add("d-block")
        // chargeDiv.classList.add("d-block")
        // callingDiv.classList.add("d-none")
        // callingDiv.classList.remove("d-flex")

        const callList = document.querySelector(".callList") as HTMLUListElement
        let calling = document.getElementById("calling") as HTMLLIElement
        calling.classList.add("d-none")
        calling.classList.remove("d-block")
        let calls = document.createElement("li") as HTMLLIElement
        calls.innerText = "Chiamata " + `${firstUser.numberOfCalls}` + " durata: " + `${minutes}` + " minuti."
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