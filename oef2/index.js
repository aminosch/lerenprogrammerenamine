// let, var, const


//datatypes
let familieNaam = "Ben Slimene";
let geboorteJaar = 1982;
let huidigJaar = 2024;

let age = huidigJaar - geboorteJaar;

//console.log ("Het resultaat van %s, is %d jaar",familieNaam, age);
//console.log("het resultaat van " +familieNaam+ " is" + age);

//ES5 Notatie
console.log("het resultatt van", familieNaam, "is", age)

//ES6 Notatie
console.log(`het resultatt van ${familieNaam} is ${age}` )

let n1 = parseInt(prompt("voer je eerste getal in"));
let n2 = parseInt(prompt("voer je eerste getal in"));
console.log(n1, "+", n2, "=", n1+n2 );
console.log(n1, "*", n2, "=", n1*n2 );
console.log(n1, "/", n2, "=", n1/n2 );
console.log(n1, "-", n2, "=", n1-n2 );

console.log(`${n1} + ${n2} = ${n1+n2}`)
console.log(`${n1} * ${n2} = ${n1*n2}`)
console.log(`${n1} / ${n2} = ${n1/n2}`)
console.log(`${n1} - ${n2} = ${n1-n2}`)
console.log(`${n1} % ${n2} = ${n1%n2}`)
console.log(`${n1} ** ${n2} = ${n1**n2}`)
console.log(`${n1} - ${n2} = ${n1++-n2++}`)
console.log(n1++)



let getal5 = 5;
//getal5 = getal5 + 1;
getal5 +=1;

console.log(5=="5"); //true
console.log(5==="5") //false

