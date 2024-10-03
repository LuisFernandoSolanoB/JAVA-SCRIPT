// console.log("hola mundo")
  
// var nombre="fernando";
// var apellido="solano";
// const PI = 3.14;

// console.log(nombre);
// console.log(apellido);
// console.log(PI);

// var nombre="luis";
// console.log(nombre);



// let persona = {
//     nombre: "fernando",
//     apellido: "solano",
//     edad: 40
// }
// console.log(persona);

// let list = [1, 2, 3, 4, 5]
// console.log(list[0]); 

// function saludar() {
//     console.log("hola mundo");
// }
// saludar()
// saludar()
// saludar()
// saludar()
// saludar()

// let suma = 10 + 5;

// console.log (suma);

// let numero1 = 10;
// let numero2 = 5;
// let resta = numero2-numero1;
// let multiplicación = numero1*numero2;
// let division = numero1/numero2;
// console.log (resta)
// console.log (multiplicación)
// console.log (division)

// console.log ("suma" , suma);
// console.log (10 + 5 + "suma");

// let x = 10;
// console.log(x);
// x += 5; // => x = x + 5  15
// console.log(x);
// x *=5; // => x = x * 5  75
// console.log(x);
// x++; // x= x+1
// console.log(x); 

// let x2 = 10
// let y = 18
// console.log(x2);
// console.log(y);
// x++; // => x = x+5  15 

// function saludar(nombre) {
//     return "hola " +nombre;
// }
// let saludo = saludar("Ana");
// console.log(saludo); // "hola, Ana"

// function sumar(x,y) {
//     return x + y;
// }
// let resultado = sumar (7, 5);
// console.log(resultado); 

// function restar (x,y) {
//     return x - y;
// }
// let resultado2 = restar (10, 7);
// console.log(resultado2);

// function multiplicar (x,y) {
//     return x * y;
// }
// let resultado3 = multiplicar (5, 10);
// console.log(resultado3);

// function dividir (x,y) {
//     return x / y;
// }
// let resultado4 = dividir (8, 2);
// console.log (resultado4);  

// console.log (dividir (8, 2)); // forma más directa

// let global = "Soy global";


// function prueba() {
//     let local = "Soy local"; 
//     console.log(global); // "Soy global"
//     console.log(local);  // "Soy local"
// }
// prueba();
// /*console.log(local); // Error: local is not definid*/

// for (let i = 0; i < 5; i++) {
//     console.log("Número: " + i);
//   }

// let suma2 = 0;
// for(let cont = 1; cont<=100; cont++){
//     suma2+=cont;
// }
// prom = suma2/100;
// console.log("el promedio es: " + prom);

// let l = 0;
// while (l < 15) {
//     console.log("Número: " + l);
//     l++;
// }
// factorial=1
// let j=1
// while (j <= 12) {

//     factorial*=j
//     j++
   
// }
// console.log(factorial)

// let estudiantes = [
//     {nombres:"carlos", edad:40},
//     {nombres:"pedro", edad:25},
//     {nombres:"juan", edad:33},
//     {nombres:"julio", edad:48},
//     {nombres:"jose", edad:22},
// ];

   

// let edad = 18;
// if (edad < 18) {
//     console.log("Eres menor de edad.")
// } else if (edad >= 18 && edad < 65) {
//     console.log("Eres adulto."); 
// } else {
//     console.log("Eres mayor.");
// }

/*function calcular_edad(edad){
    if (edad < 18) {
        console.log("Eres menor de edad.")
    } else if (edad >= 18 && edad < 65) {
        console.log("Eres adulto."); 
    } else {
        console.log("Eres mayor.");
    }   
}
calcular_edad (42)
calcular_edad (22)
calcular_edad (70)
calcular_edad (12)

for (i=1; i<=100; i++){
    calcular_edad(i);
}*/
/*for(let carro of carros){
    console.log(carro.marca); 
}*/

/*i=0
for(let carro of carros){
    if (carro.mpg>=30){
        console.log(carro.marca),
        i++
    }
}
console.log("la cantidad de carros son: " + i)

function escala(valor){
   resultado = 1;
   console.log("1");
   for(i=2;i<=valor;i++){
    console.log(resultado+"x"+i)
    resultado*=i
   } 
   for(i=1;i<=valor;i++){
   console.log(resultado+"/"+i)
   resultado/=i
   }
   console.log("1")
}
 
escala(9)*/

let elemento = document.getElementById("miElemento");
console.log(elemento);
elemento.textContent = "Esto es JavaScript";
elemento.style ="color:red";