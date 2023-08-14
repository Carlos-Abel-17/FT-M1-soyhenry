'use strict'
// MATRIZ

class Matriz {

  constructor(alto, ancho) { //este constructor es el que va a distribuir a lo largo y ancho de la matriz
    this.consecutivos=1;
    this.data = [];//this.dat va ser una array vacio
    for (var i=0; i<alto; i++) { //si i que es 0 es menor que el parametro alto 
      this.data[i] = []; //ya que this.data es un array llamamos a su primer elemnto y le decimos que va a ser un array vacio
      for (var j=0; j<ancho; j++) { //si j que es 0 es menor que el parametro ancho
        this.data[i][j] = this.consecutivos++; // llamamos a los elemento de this.data y como todos los elementos son arrays llamamos a todos sus elementos  y le damos el valor de indefinido
      }
    }
  }

  buscar(val) {//este metodo se encargara de buscar los valores 
    for (var i=0; i<this.data.length; i++) { //si i(0) es menor que la longuitud del this.data que es un array 
      for (var j=0; j<this.data[i].length; j++) { // si j (0)es menor de que la longuitud es this.data[i](esto es los elementos del array que tambien son arrays) 
        if (this.data[i][j] == val) return [i,j]; // si val(El parametro) es igual el valor de el array interno del array this.data y devolver el indice de el valor de el primer array y el array interno 
      }
    }
  }

  sumar(mat) { // 
    var newMatriz = []; //declaramos un  array vacio para crear una nueva  matriz
    for (var i=0; i<this.data.length; i++) { //si i (0) es menor que la longuitud de this.data  
      newMatriz[i]=[]; //los elemento de la new matriz se volveran arrays 
      for (var j=0 ; j<this.data[i].length; j++) { //si j (0) es menor que la longuitud de los elemento de this.data que son arrays
        newMatriz[i][j] = this.data[i][j]+mat[i][j]; //llamamos a los elementos de new matriz y tambien llamamos a los elementos de esos elementos ya que son arrays y  dentro de ellos guardamos a la martiz central y lo sumamos con el parametro mat y sus elementos de elementos   
      }
    }
    return newMatriz; // y va a retornar a la varible newmatriz
  }
  restar(mat) {
    var newMatriz = [];
    for(var i=0; i<this.data.length; i++) {
      newMatriz[i] = [];
      for (var j=0; j<this.data[i].length; j++ ) {
        newMatriz[i][j] = this.data[i][j]-mat[i][j];
      }
    }
    console.log(newMatriz())
    return newMatriz;
  }

  multiplicar(mat) {
    var newMatriz = [];
    var suma = 0;
    for( var i=0; i<this.data.length; i++) {
      newMatriz[i]=[];
      for (var j=0; j<this.data[i].length; j++) {
        for (var k=0; k<array.length; k++) {
          suma += this.data[k][j] * mat[j][k];
        }
        newMatriz[i][j] = suma;
      }
    }
    return newMatriz;
  }

  print() {
    var mat = this.data;
    for( var i = 0; i < mat.length; i++ ){
      let linea = '['
      for (var j = 0; j < mat[i].length; j++) {
          linea += mat[i][j] + (j === mat[i].length-1 ? '' : ',')
      }
      console.log(linea + ']')
    }
  }
}
 
let lamartizC = new Matriz(8,2)
console.log(lamartizC.print())
console.log(lamartizC)


