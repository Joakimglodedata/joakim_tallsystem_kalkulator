// let baseNumberInput = document.getElementById("baseNumberInput").value; 
// let baseNumberOutput = document.querySelector("#baseNumberOutput").value
// let inputNumber = document.querySelector("#inputNumber").value
// submitBase.onclick = myfunction
// test.onclick = () => console.log(inputNumber)
// test1.onclick = () => console.log(baseNumberOutput)
// test2.onclick = () => console.log(baseNumberInput)

const highNumbers = { 
    A: 10,
    B: 11,
    C: 12, 
    D: 13, 
    E: 14, 
    F: 15, 
    G: 16, 
    H: 17, 
    I: 18, 
    J: 19, 
    K: 20, 
    L: 21, 
    M: 22, 
    N: 23, 
    O: 24, 
    P: 25, 
    Q: 26, 
    R: 27, 
    S: 28, 
    T: 29, 
    U: 30, 
    V: 31, 
    W: 32, 
    X: 33, 
    Y: 34, 
    Z: 35
}

submitOutput.onclick = magic

function magic() {
    const baseNumberInput = document.getElementById("baseNumberInput").value; 
    const baseNumberOutput = document.querySelector("#baseNumberOutput").value
    const inputNumber = document.querySelector("#inputNumber").value
    const output = document.querySelector("#outputNumberDisplay")
    console.log(inputNumber)
    console.log(baseNumberOutput)
    console.log(baseNumberInput)

    
    const splitInput = inputNumber.toString().split("").map(x => highNumbers[x] || x).map(Number);
    document.querySelector("#splitDisplay").textContent = `Split result: ${splitInput}`

    // let indexValues
    // while (indexValues <= inputSum);

    const inputResults = splitInput.reverse().map((value, index) => value * baseNumberInput ** (index));
    console.log(inputResults);
    
    output.textContent = `Result: ${inputResults}`

    inputTotal = inputResults.reduce((total, num) => total + num)
    
    
    
}

// // Reference table
// const referenceTable = {
//     apple: "fruit",
//     carrot: "vegetable",
//     salmon: "fish"
//   };
  
//   // Input array
//   const inputArray = ["apple", "carrot", "chocolate", "salmon", "bread"];
  
//   // Convert values based on the reference table
//   const convertedArray = inputArray.map(item => referenceTable[item] || item);
  
//   console.log(convertedArray);
  // Output: ["fruit", "vegetable", "chocolate", "fish", "bread"]




