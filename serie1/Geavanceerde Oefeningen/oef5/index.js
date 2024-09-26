let getal = parseInt(prompt("geef een getal in"));
let som = 0;

let rest = 1;
for(let i = getal;  i > 0; i = (i - (i % 10)) /10){
    rest = i % 10;
    som = som + rest;
}

console.log(som);