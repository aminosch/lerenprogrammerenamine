let leeftijd = parseInt(prompt("geef uw leeftijd in: "))


if (leeftijd >= 18)  {
    console.log(`je bent ${leeftijd} jaar oud, je mag deelnemen`);
    let volledig = prompt("wilt u een volledig bulletin van 12 vakjes  j of n");
    if (volledig === "j"){
        console.log("20 euro")
    }else{
        let vakjes = parseInt(prompt("hoeveel vakjes 2 of 4 of 6 of 8 of 10"));
        if (vakjes === 2){
            console.log("4 euro")
        }else if (vakjes === 4){
            console.log("8 euro")
        }else if (vakjes === 6){
            console.log("12 euro")
        }else if (vakjes === 8){
            console.log("16 euro")
        }else if (vakjes === 10){
            console.log("18 euro")
        }else{
            console.log("error")
        }
    }
}else  {
    console.log("om deel te nemen aan de spelen moet je 18 jaar oud zijn")
}

