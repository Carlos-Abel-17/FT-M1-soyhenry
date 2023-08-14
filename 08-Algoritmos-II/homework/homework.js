'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <=1){
    return array
  }
  let pivot = array[0];
  let left = [];
  let rigth = [];
  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot){
      left.push(array[i])
    }else{
      
        rigth.push(array[i])
      
    }
    
  }
    return [...quickSort(left),pivot,...quickSort(rigth)]
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 if (array.length <= 1) {
  return array
 }
  let LaMitad = Math.floor(array.length / 2)
  let left = array.slice(0,LaMitad)
  let rigth = array.slice(LaMitad)

  return mergue(mergeSort(left),mergeSort(rigth))
  //okey probemos ahora
}
function mergue(left,rigth){
  const result=[];
  let leftIndex = 0;
  let rigthIndex = 0;

  while (leftIndex<left.length&&rigthIndex<rigth.length) {
    if (left[leftIndex]<rigth[rigthIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    }else{
      result.push(rigth[rigthIndex]);
      rigthIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(rigth.slice(rigthIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
