const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let sum =0;
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
            sum += countArray(array[i])
        }else[
            sum += array[i]
        ]
        
    }
    return sum
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    
    let count = 0;
    
        function countProperties(obj) {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              count++;
              
              if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
                countProperties(obj[key]);
              }
            }
          }
        }
        
        countProperties(obj);
        return count;
        //otra manera de hacerlo
        //let total= object.keys(object).length 
        //for(let props in object && !Array.isArray(object[props]))
        //if(typeof object[props] === 'object){total=countProps(object[props])} 

       //return total

      };
      


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let current = this.head;
    let changes = 0;
  
    while (current !== null) {
      if (isNaN(Number(current.value))) {
        current.value = 'Kiricocho';
        changes++;
      }
  
      current = current.next;
    }
  
    return changes;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let resultado = new Queue;
    while (queueOne.size()&& queueTwo.size()) {
      resultado.enqueue(queueOne.dequeue())
      resultado.enqueue(queueTwo.dequeue())
    }
    while (queueOne.size() > 0) {
      resultado.enqueue(queueOne.dequeue())
    }
    while(queueTwo.size() > 0){
      resultado.enqueue(queueTwo.dequeue())
    }
return resultado
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(number){
        return multiplier * number
    }

}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    let sum = this.value;

    if (this.left) {
      sum += this.left.sum();
    }
  
    if (this.right) {
      sum += this.right.sum();
    }
  
    return sum;
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}