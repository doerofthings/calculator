function add(...args){
    let sum = 0;
    args.forEach(arg =>{
        sum += arg
    })
    return sum;
}

function subtract(...args){
    let difference = 0;
    args.forEach(arg =>{
        difference -= arg
    })
    return difference;
}

function multiply(...args){
    return args.reduce((total, current) =>{
       return total *= current;
    }, 1)
}

function divide(...args){
    return args.reduce((total, current) => {
        return total /= current;
    }, 1)
}


// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
// Do not worry about wiring up the JS just yet.
// There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
// Add a “clear” button.