function saludar(){
    console.log("hola mundo")
    alert("hello word in javascript")
}

// ALGORITMO QUE REALIZA UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO
function suma(){
    // 1. declarar variables necesarias para la funcion o algoritmo
    let A = 0;
    let B = 0;
    let SUMA = 0;

    // 2.Solicitar al usuario que ingrese los valores
    // y estos se asignan a las variables

    A = parseInt(prompt("ingrese el primer Valor"))
    B = parseInt(prompt("Ingrese el segundo Valor"))

    // 3. Realizar el procedimiento

    SUMA = A + B;

    // 4. Mostrar el Resultado
    alert("SUMA " + SUMA)

    

}


// ALGORITMO QUE REALIZA UNA SUMA RESTA MULTIPLICACION Y DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO

const operaciones = () => {
    let a;
    let b;
    // let opcion;
    
    let suma;
    let resta;
    let multiplicacion;
    let division;

    a = parseInt(prompt("ingrese el primer valor."));
    b = parseInt( prompt("ingrese el segundo valor."));
    // opcion = prompt("ingrese la operacion.");

    // if (opcion === "suma") {
    //     resultado = a + b;
    // } else if (opcion === "resta") {
    //     resultado = resta;
    // } else if(opcion === "multiplicacion") {
    //     resultado = a * b;
    // } else if(opcion === "division") {
    //     resultado = a / b;
    // } else {
    //     resultado = "ERROR"
    // }

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert(`El resultado es para los numeros ${a} y ${b} es: ${suma}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${resta}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${multiplicacion}`)
    alert(`El resultado es para los numeros ${a} y ${b} es: ${division}`)
    
}


// 3. Realizar un algoritmo que destermine el cuadrado de un numero ingresado por el  usario
function cuadrado(){
    let num = parseInt(prompt("Escribe tunumero:"));
    let resultado  = num ** 2;

    alert(`El resultado el cuadaro de tu numero es ${resultado}`)
}

// 4. Realizar un algoritmo, que determine le area de un triangulo a partir de la base y altura ingresadas por el usario

function areaTriangulo(){
    let base = parseInt(prompt("Ingresa la base de tu triangulo:"));
    let altura = parseInt(prompt("Ingresa la altura de tu triangulo:"));

    let resultado = (base * altura ) / 2;

    console.log(`EL area el triangulo con  base: ${base} y altura: ${altura} = ${resultado}`);
    alert(`EL area el triangulo con  base: ${base} y altura: ${altura} = ${resultado}`);
    
}


// 5.Realizar un Algoritmo, que determine los milimetros metros y kilometros de un valor dado en pulgadas
function distancia(){

    let pul = 0
    let km = 0
    let cm  = 0 
    let mm = 0 
    let m = 0

    pul = parseInt(prompt('ingrese el valor en pulgadas'))

    km = pul * 0.0000254
    cm = pul * 2.54
    mm = pul * 25.4 
    m = pul * 0.0254
     
    alert('el resultado en kilometros es:' + km)
    alert('el resultado en centimetros es:' + cm)
    alert('el resultado en milimetos es:' + mm)
    alert('el resultado en metros es:' + m)
   
    }   



// 6. Realizar un algoritmo que determine el numero si es par o inpar

function paroimpar(){
    let ñero = 0
    let  gomelo= 0

    ñero = parseInt(prompt('ingrese un numero'))
    
    gomelo = ñero % 2
    
    if( gomelo == 0) {
        alert('si el numero es par')
    }
    else{
        alert('si el numero es impar')
    }


}




// 7. Realizar un algoritmo que determine el numero mayor de 3 numeros ingresados por el ususario

function mayorque(){
    let c = 0
    let b = 0
    let a = 0
   
    c = parseInt(prompt('ingrese el primero numero'))
    b = parseInt(prompt('ingrese el segundo numero'))
    a = parseInt(prompt('ingrese el tercer numero'))

    if  ((c < b) && (c < a)){ 

    alert ('el numero ' c ' es menor a ' b 'y a' a )
    }
    else{
        alert ('el numero ' b ' es menor a ' a 'y a' c)
    }
    else{
        alert ('el numero ' a 'es menor a ' c 'y a' b)
    }
}


// 8. el colegio abc nesecita que capture el nombre del estudiante la matria y 7 calificaciones entre 1 y 10 con esta informacion determinar si el estudiante aprobo o rebrobo teniendo en cuenta que se aprueba con 6.1


function promedio(){
    let calificacion1 = 0
    let calificacion2 = 0
    let calificacion3 = 0
    let calificacion4 = 0
    let calificacion5 = 0
    let calificacion6 = 0
    let calificacion7 = 0

    calificacion1 = parseInt(prompt('ingrese la primera calificacion'))
    calificacion2 = parseInt(prompt('ingrese la segunda calificacion'))
    calificacion3 = parseInt(prompt('ingrese la tercer calificacion'))
    calificacion4 = parseInt(prompt('ingrese la cuarta calificacion'))
    calificacion5 = parseInt(prompt('ingrese la quinta calificacion'))
    calificacion6 = parseInt(prompt('ingrese la sexta calificacion'))
    calificacion7 = parseInt(prompt('ingrese la septima calificacion'))

    promedio = (calificacion_1 + calificacion_2 + calificacion_3 + calificacion_4 + calificacion_5 + calificacion_6 + calificacion_7) / 7

    if 

}

// 9. un individuo desea invertir su capital en un banco y requiere conocer cuanto dinero ganara despues de n numero de años  teniendo en cuenta que el banco paga un interesmensual del 0,7%

function inversion(){
    let interes = 0
    let años = 0
    let dinero = 0 
    let inanual = 0 
    let indinero = 0
    let intotal = 0
    
    interes = 0.084 
    dinero = parseInt(prompt('ingrese la cantidad de dinero'))
    años = parseInt(prompt('ingrese el numero de años en el cual quiere ver su inversion'))

    inanual =  interes * años
    indinero = dinero * inanual
    intotal = indinero + dinero 
    
    alert('su monto total a l acantidad de ' + años + 'años, es' + intotal + 'con ganancia de' + indinero)
 
}



