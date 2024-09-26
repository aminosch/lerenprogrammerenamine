let getal = parseInt(prompt("geef een getal in"));
let n = 0
for(let i = getal;  i > 0; i = (i - (i % 10)) /10){
    n = n+1;
}

console.log(n);