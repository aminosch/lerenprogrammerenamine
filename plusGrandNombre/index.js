for (let getal = 1; getal <= 200000; getal++){
    let chaine = getal.toString();
    //chaine.toString();
    let resultaat = 0;
    for (let i= 0; i < chaine.length; i++){
        resultaat = resultaat + parseInt(chaine[i]) ** 3;
    }
    if(resultaat === getal){
        console.log(getal)
    }
}

