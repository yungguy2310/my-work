console.log(starting)

function makeSIM(principal, rate, time) {
    let numerator = principal * rate * time
    let result = numerator / 100;
    return result;
}

const principal = document.getElementById("principal").value;
const rate = document.getElementById("rate").value;
const time = document.getElementById("time").value;
const interestDisplay = document.getElementById("interest").value;
const calculatebutton = document.getElementById("Calculate").value;
const resetbutton = document.getElementById("Reset").value;
console.log(principal, rate, time)
function makeSimpleInterest(){
    const p = parseFloat(principal.value);
    const r = parseFloat(rate.value);
    const t = parseFloat(time.value);

    console.log(p, r, t);

    const interest = (p * r * t) / 100;
    interestDisplay.innerText = interest;
}


function Reset() {
    principal.value = "";
    rate.value = "";
    time.value = "";
    interestDisplay.innerText = "0"
}