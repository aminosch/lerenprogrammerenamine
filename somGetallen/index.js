/*let s =0;
let getal = parseInt(prompt("geef een getal in"));
if(getal>0){
    s = getal;
}

for (let i = 1; getal > 0; i++){
    getal = parseInt(prompt("geef een getal in"));
    s = s + getal
}
console.log(s);*/
let s =0;
let getal = parseInt(prompt("geef een getal in"));
while(getal > 0){
    s = s +getal;
    getal = parseInt(prompt("geef een getal in"));
}
console.log(s);
