// let baseNumberInput = document.getElementById("baseNumberInput").value; 
// let baseNumberOutput = document.querySelector("#baseNumberOutput").value
// let inputNumber = document.querySelector("#inputNumber").value
// submitBase.onclick = myfunction
// test.onclick = () => console.log(inputNumber)
// test1.onclick = () => console.log(baseNumberOutput)
// test2.onclick = () => console.log(baseNumberInput)

submitOutput.onclick = magic

function magic() {
    const baseNumberInput = document.getElementById("baseNumberInput").value; 
    const baseNumberOutput = document.querySelector("#baseNumberOutput").value
    const inputNumber = document.querySelector("#inputNumber").value
    const output = document.querySelector("#outputNumberDisplay")
    console.log(inputNumber)
    console.log(baseNumberOutput)
    console.log(baseNumberInput)

    function splitnumber(inputNumber) {
        return inputNumber
        .toString()
        .split("")
        .map(Number);
    }
    
    const splitInput = splitnumber(inputNumber)
    document.querySelector("#splitDisplay").textContent = `Split result: ${splitInput}`

    
    //Jobb videre med denne funksjonen
    const results = splitInput.reverse()
    .map((value, index) => value * index);
    console.log(results);
    
    


    const result = inputNumber * baseNumberInput
    output.textContent = `Result: ${result}`
    
}




