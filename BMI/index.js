let gewicht = parseFloat(prompt("voer uw gewicht in"));
let lengte = parseFloat(prompt("voer uw lengte in"));
let BMI = gewicht / (lengte ** 2)
if(BMI >= 30){
    console.log("obesitas")
}else if(BMI >= 25){
    console.log("overgewicht")
}else if(BMI >= 18.5){
    console.log("Normaal")
}else {
    console.log("ondergewicht")
}

