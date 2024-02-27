console.log('ok');

let choiseInput = prompt('Pari o Dispari?')
let numberInput = parseInt(prompt('Inserisci un numero da 1 a 5'));

let numberComputer = numberCasual();

function numberCasual() {
    return Math.floor(Math.random() * 5) + 1;
}

console.log(choiseInput, numberInput, numberComputer);


let somma = numberInput + numberComputer

console.log(somma);

function numberPari(numb) {
    return numb % 2 === 0;
}

if (numberPari(somma)) {
    console.log('è pari');
} else {
    console.log('è dispari');
}