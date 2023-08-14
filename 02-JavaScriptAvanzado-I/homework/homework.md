# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript

x = 1; // Al no poner ni let, ni var, ni const, se declara la varible como una variable global que se podra usar en cualquier parte de todo el codigo sin enbargo si es declarada dentro una funcion no servira llamarlo afuera de la funcion ya que solo funciona dentro del contexto de la funcion  
var a = 5;//declaracion normal de una variable con var
var b = 10;//declaracion normal de una variable con var
var c = function (a, b, c) { //funcion llamada c
   var x = 10;//declaracion normal de una variable con var
   console.log(x);//esto va a inprimir 10 ya que la varible declarada co var es 10
   console.log(a);// esto inprime 8 por el paramentro que mas abajo se le da el valor  
   var f = function (a, b, c) {
      b = a; // aca el parametro b toma el valor de a que es 8 osea al llamarlo se va a imprimir 8 
      console.log(b);//se imprime 8
      b = c;//aca b toma el valor del parametro c que es 10 
      var x = 5;//declaracion normal de una variable con var
   };
   f(a, b, c);
   console.log(b);//esto inprime 9 ya que solo toma el valor ya decladaros mas abajo de cada parametro(a,b,c)
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar);//no va inprimir nada ya que hasta este momento esta varible no esta declarada ya que no es un estado global si no una varible declarado con var   
console.log(baz); // esto si inprime el valor que le pongas a la variable global 'baz'
foo();// por defecto java scrit ya eleva(hoisting) a este llamado de funcion por esa razon no inporta si se le llama al funcion antes de declararla 
function foo() {//declaracion de la funcion 
   console.log('Hola!');
}
var bar = 1;//dando el valor a la varible bar que va ser uno el cual no se imprimira ya que esta varible debe de ser llamada despues de ser declarada no antes
baz = 2; // declarando el estado global de la varible baz y el valor sera 2 el cual ser impreso cuando lo llamemos  
```

```javascript
var instructor = 'Tony';// declaracion normal de una varible con var 
if (true) {// condicion que va ser true (verdad)
   var instructor = 'Franco';//la varible instructor que ya fue declarada va ser remplazada por la nueva declaracion de la varible instructor que ahora va ser 'franco'   
}
console.log(instructor);
```

```javascript
var instructor = 'Tony';// declaracion normal de una varible con var 
console.log(instructor);//tony
(function () {
   if (true) {
      var instructor = 'Franco';//esta varible solo va a funcionar dentro del contexto de la funcion 
      console.log(instructor);
   }
})();
console.log(instructor);//tony
```

```javascript
var instructor = 'Tony';// declaracion normal de una varible con var 
let pm = 'Franco';// declaracion normal de una varible con let
if (true) {//condicion
   var instructor = 'The Flash';//
   let pm = 'Reverse Flash';
   console.log(instructor);//the flash
   console.log(pm);//reverce flash
}
console.log(instructor); // la varible se remplaza ya que sies declarada con var se puede llamar a la varible y remplazada no importe donde este the flash
console.log(pm);// el valor de la varible sigue siendo franco ya que esta varible no puede ser llmada dentro de la funcion y no es remaplazada por la varible pm declarada dentro de la funcion
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//6
4 + 5 + "px" //9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//NaN
7 / 0//0
{}[0]//indefinido
parseInt("09")//9
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//false
[3]+[3]-[10]//23
3>2>1//false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}//esto imprime friskies

getFood(false);//no se ejecuta la funcion ya que no pasa la condicion
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;//llama a la propiedad fullname que esta dentro de prop  
      },
   },
};

console.log(obj.prop.getFullname());//imprime Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());//no imprime nd
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
