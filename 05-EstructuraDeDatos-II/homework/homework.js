'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() { 
  this._length = 0;
  this.head = null
}

function Node(value) {
  this.value = value;
  this.next = null ;
}

LinkedList.prototype.add = function (value){
  let newNode = new Node(value);
  if(this.head === null){
    this.head = newNode
  }else{
    let cabeza = this.head;
    while(cabeza.next !== null){
      cabeza = cabeza.next
    }
    cabeza.next = newNode;
  }
  this._length++
}

LinkedList.prototype.remove = function(){
  if(this._length === 0) {console.log('la lista esta vacia'); return null}
  if (this._length === 1) {
    const data = this.head.value;
    this.head = null;
    this._length = 0;
    return data;
  }

// esto era mi codigo
//   let head = this.head
//   const data = head.value;
//   let previus = null;
//    while(head.next){
//      previus = head;
//      head = head.next
//    }
//    head.next = null
//    return data
//  }
//  this._length-

  let currentNode = this.head;
  let previousNode = null;
  while (currentNode.next) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  const data = currentNode.value;
  previousNode.next = null;
  this._length--;

  return data;
   
}

LinkedList.prototype.search = function(param){
  if (this._length === 0) {
    return null;
  }

  let current = this.head;

  while (current) {
    if (typeof param === 'function') {
      if (param(current.value)) {
        return current.value;
      }
    } else {
      if (current.value === param) {
        return current.value;
      }
    }
    current = current.next;
  }

  return null;
};

let MiLista = new LinkedList();
MiLista.add(9)
MiLista.add(4)
MiLista.add(4)
MiLista.add(7)

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (Buckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  const buckets = new Array(this.numBuckets);

  const isValidKey = function(key) {
    return typeof key === 'string';
  };

  this.hash = function(key) {
    if (!isValidKey(key)) {
      throw new TypeError('Invalid key. Key must be a string.');
    }

    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  };

  this.set = function(key, value) {
    if (!isValidKey(key)) {
      throw new TypeError('Invalid key. Key must be a string.');
    }

    const index = this.hash(key);
    if (!buckets[index]) {
      buckets[index] = [];
    }
    const existingItem = buckets[index].find(item => item.key === key);
    if (existingItem) {
      existingItem.value = value; // Sobreescribir si la clave ya existe
    } else {
      buckets[index].push({ key, value });
    }
  };

  this.get = function(key) {
    if (!isValidKey(key)) {
      throw new Error('Invalid key. Key must be a string.');
    }

    const index = this.hash(key);
    if (buckets[index]) {
      const item = buckets[index].find(item => item.key === key);
      if (item) {
        return item.value;
      }
    }
    return null;
  };

  this.hasKey = function(key) {
    if (!isValidKey(key)) {
      throw new Error('Invalid key. Key must be a string.');
    }

    const index = this.hash(key);
    if (buckets[index]) {
      return buckets[index].some(item => item.key === key);
    }
    return false;
  };

  this.buckets = function() {
    return buckets;
  };
}

const myHashTable = new HashTable();
myHashTable.set('instructora', 'Ani');
myHashTable.set('alumno', 'Carlos');


// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
