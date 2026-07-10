function addBy(firstNumber) {
    return (secondNumber) => { return secondNumber + firstNumber };
}

function divideBy(firstNumber) {
    return (secondNumber) => { return secondNumber / firstNumber };
}

let addBy100 = addBy(100);
let addBy1000 = addBy(100);
let divideBy10 = divideBy(100);
let divideBy100 = divideBy(100);
