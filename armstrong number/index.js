//let getal = BigInt(100000000000000000000)

for (getal = 1; getal <= 10000000000000000; getal++){
    let chaine = getal.toString();
    //chaine.toString();
    let resultaat = 0;
    for (let i= 0; i < chaine.length; i++){
        resultaat = resultaat + parseInt(chaine[i]) ** chaine.length;
    }
    if(resultaat === getal){
        console.log(getal)
    }
}

