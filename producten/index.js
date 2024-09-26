let prijs = parseFloat(prompt("voer de prijs per product in"));
let aantal = parseInt(prompt("voer de aantal in"));
let kopen ;
if(aantal >= 10){
    kopen = prijs*aantal*0.9
    console.log(kopen.toFixed(2))

}else {
    kopen = prijs*aantal*0.9
    console.log(kopen.toFixed(2))
}

