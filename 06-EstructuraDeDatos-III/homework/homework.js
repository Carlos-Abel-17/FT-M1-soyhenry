'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.rigth= null;
   
}

BinarySearchTree.prototype.insert = function(value){
   if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
    }
      
   

BinarySearchTree.prototype.contains = function(value){
   if (this.value === value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    return false;
 
}

BinarySearchTree.prototype.size = function(){
   return 1 + (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0);
  
}
BinarySearchTree.prototype.depthFirstForEach = function(callback,order="in-order"){
   if (order === "pre-order") {
      callback(this.value);
    }
    if (this.left) {
      this.left.depthFirstForEach(callback,order);
    }
    if (order === "in-order") {
      callback(this.value);
    }
    if (this.right) {
      this.right.depthFirstForEach(callback,order);
    }
    if (order === "post-order") {
      callback(this.value);
    }
}  

BinarySearchTree.prototype.breadthFirstForEach = function(callback){
   const queue = [this];

   while (queue.length) {
     const node = queue.shift();
 
     if (node) {
       callback(node.value);
 
       if (node.left) {
         queue.push(node.left);
       }
       if (node.right) {
         queue.push(node.right);
       }
     }
   }
  }
 




   // let ElArbol = new BinarySearchTree(20);//1
   // //-----LEFT-----//
   // ElArbol.insert(15);//2
   // ElArbol.insert(17);//3
   // ElArbol.insert(5);//4
   // ElArbol.insert(14);//5
   // ElArbol.insert(0);//6
   // ElArbol.insert(13);//7
   // ElArbol.insert(1);//8
   // ElArbol.insert(12);//9
   // ElArbol.insert(11);//10
   // //----RIGTH-----//
   // ElArbol.insert(25);//11
   // ElArbol.insert(21);//12
   // ElArbol.insert(28);//13
   // ElArbol.insert(50);//14
   // ElArbol.insert(45);//15
   // ElArbol.insert(30);//16
   // ElArbol.insert(35);//17
   // ElArbol.insert(33);//18
   // ElArbol.insert(31);//19
   // ElArbol.insert(34);//20
   //----CONTAINS---//
   // console.log(ElArbol.contains())
   //----SIZE---//
   // console.log(ElArbol.size())
 
   // console.log(ElArbol)


   // No modifiquen nada debajo de esta linea
   // --------------------------------

module.exports = {
   BinarySearchTree,
};
