/* MIGUEL ANGEL BRENA BECERRIL
Deberas realizar los ejercicios anexados abajo:
1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
 */

let numeros=[ ];
n1=Math.random();
numeros=[Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]
alert(numeros)


/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.*/
frase= "1,2,3,4,5";
fraseArray=frase.split(",")
alert(fraseArray)

 /* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
 */
let arreglo=[10,40,30,20,15,5];
alert("arreglo sin ordenar ["+arreglo+"]")
let arreglo1=arreglo.sort(function(a, b){return a - b});
let max=arreglo1.length - 1;
alert( "arreglo ordenado de menor a mayor ["+arreglo1+"] El menor es "+arreglo1[0]+"El mayor es "+arreglo1[max]);




