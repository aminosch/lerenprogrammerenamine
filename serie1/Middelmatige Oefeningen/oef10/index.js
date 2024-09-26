let getal = parseInt(prompt("geef een getal in"));
let res = "";
for(let i = getal;  i > 0; i = (i - (i % 10)) /10){
    res = res + (i % 10)
}

console.log(res);
