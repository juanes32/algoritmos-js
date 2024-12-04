// TIPOS DE DATOS

let nombre="Juan Esteban Ariza Pedraza";
let edad= 21;
let mayorEdad= false;
let estatura;

console.log( typeof nombre);
console.log( typeof edad);
console.log( typeof mayorEdad);
console.log( typeof estatura);


//TIPOS DE DATOS COMPLEJOS
let frutas=["Pera", "Manzana", "melon"];

let auto={
    modelo: 2024,
    marca:"ferrari",
    colo:"negro",
    cilindraje: "V12",
    tipo: "camioneta"
}

//contatenado Variables

console.log("Bienvenido usuario" + nombre + " su edad es " + edad + " Su fruta favorita es " + frutas[0])

//Estructuras de control de condicional

console.log('----------------------------------------')

if (edad > 25) {
    console.log("Es un Adulto")
}

else if (edad > 18) {
    
}

else if (edad > 13) {
    
}

else{
    console.log("es un niño")

let tipoSuscripcion = 'Gold'
}
switch(tipoSuscripcion) {
    case 'Basic':
            console.log('Muy suave o Pobre')
        break;

    case'Gold':
            console.log('Buen plan, pero sigue sinedo pobre')

        break;
   case'Platinum':
            console.log('El mejor plan')
            
    default:
            console.log('Este plan no existe')
        break;
}

//Estructuras de control de bucles

let contador = 0;
while (contador <11) {
    console.log('Este es el numero' + contador);
    contador = contador + 1;
}

for (let i = 100; i<10 ; i=i+1){
    console.log('Contador con for numero' + 1)
}


