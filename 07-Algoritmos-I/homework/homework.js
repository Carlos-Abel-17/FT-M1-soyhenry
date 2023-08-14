'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
   let guardar =[1];
   let auxil = 2;
   while (num !== 1) {
    if (num % auxil === 0 ) {
      guardar.push(auxil);
      num = num / auxil;
    }else{
      auxil++
    }
   }
   return guardar
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1 ; i++) {
      if (array[i] > array[i + 1]) {

        let auxiliar = array[i];

        array[i] = array[i + 1]

        array[i + 1] = auxiliar;

        swap = true;
      }
      
    }
  }
  return array
}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
   let j = i - 1;
   let auxili = array[i];
   while (j >= 0 && array[j] > auxili) {
    array[j + 1] = array[j]

    j--
   }
   array[j+1] = auxili;
    
  }
return array
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length-1; i++) {
    let min = i;
    //       ↓←1 y despues se le suma uno 
    for (let k = i+1; k < array.length; k++) {
      //              ↑→ 1 debe ser menor que la longuitud del array
      // si el segundo elemento es menor que el los siguites elementos
       if (array[k] < array[min]) {
         min = k;
       }
      
    }
    if (i !== min ) {
      let general= array[i]
      array[i] =array[min]
      array[min] = general
    }
    
  }
  return array

}
console.log(selectionSort([3,48,21,2,64,25,1]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
