function add(...args){
    let sum = 0;
    args.forEach(arg =>{
        sum += arg
    })
    return sum;
}

function subtract(...args){
    return args.reduce((total,current) => {
        return total -= current;
    })
}


function multiply(...args){
    return args.reduce((total, current) =>{
       return total *= current;
    }, 1)
}


function divide(...args){
    return args.reduce((total, current) => {
        return total /= current;
    })
}



// Create a new function operate 
// that takes an operator and 2 numbers
//  and then calls one of the above functions on the numbers.




function operate(...args){
   return `${subtract(...args)}`;
}
console.log(operate(10,5,2))
