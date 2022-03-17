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


// Create a new function operate 
// that takes an operator and 2 numbers
//  and then calls one of the above functions on the numbers.

function operate(){
   return `${divide(12,2)}`;
}
console.log(operate())






