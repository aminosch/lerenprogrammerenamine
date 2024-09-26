for (let getal = 1; getal<= 20000; geatl++){
    let chaine = toString(getal);
    let resultaat = 0;
    for (i= 0; i < chaine.length; i++){
        resultaat = resultaat + parseInt(chaine[i])**3;
    }
    if(resultaat === getal){
        console.log(getal)
    }
}

