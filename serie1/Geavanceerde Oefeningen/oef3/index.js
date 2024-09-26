let n = parseInt(prompt("geef een getal in"));
let resultaat = "";
for(let v = 1 ; v <= n ; v=v*2){
    if (v * 2 < n){
        resultaat = resultaat + v + ","
    } else{
        resultaat = resultaat + v;
    }
}

console.log(resultaat);