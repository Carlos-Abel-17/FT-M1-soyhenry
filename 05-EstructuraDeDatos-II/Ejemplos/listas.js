'use strict'

/* LISTAS ENLAZDAS */

function Lista(){
	this.point = null;
	this.len = 0;
}

function Nodo(data) {
	this.data = data;
	this.next = null;
}

Lista.prototype.push = function(data) { // este metodo agrega un nuevo elemento al final de la lista
	var newNodo = new Nodo(data);
	if (this.point == null) {//si la lista esta vacia entonces this.point se convierte en el primer nodo de la lista
		this.point = newNodo;
	} else {
		pointer = this.point;
		while (pointer.next!=null) {//esto busca un las listas un nodod vacio para podre insertar uno nuevo
			pointer = pointer.next;
		}
		pointer.next = newNodo;
	}
	this.len++;//le sumamos uno a la longuitud de las listas
}

Lista.prototype.insertFirst = function(data) {//va agregar un nuevo nodo al comienzo de la lista enlazada
	let newNodo = new Nodo(data);
	if (this.point == null) {//le pregunta this.point esta vacio?
		this.point = newNodo;// si la respuesta es 'Si' va agregar un uevo nodo al comienzo de la lista enlazada
	} else {
		var pointer = this.point;
		this.point = newNodo;
		newNodo.next = pointer;
	}
	this.len++;
}

Lista.prototype.insert = function(data,pos) {//esto va inserta un nuevo nodo con un dato en una posiscion especifica de la lista
	if (this.len < pos) return this.push(data); //si la longuitud de la lsita es menor a la posicion entonces el nuevo nodo sera insertada al final de la lista ¿y como asi lo inserta? llamando al metodo push que ya esta definido anteriormente
	var newNodo = new Nodo(data);
	if (pos == 1) {// esto dice si la posicion (pos) es igual a 1 se insertada el nuevo nodo al principìo de la lsita enlazada
		newNodo.next = this.point;
		this.point = newNodo;
	}
	var pointer = this.point;
	while (pos > 1) {//si la posiscion no es ni al final ni al principio
		pos--;//esto va avanzar en la lista enlazada buscando en las posicion una que concuerde con las condiciones anteriores
		pointer = pointer.next;
	}
	newNodo.next = pointer.next;
	pointer.next = newNodo;
}

Lista.prototype.print = function() {// esto va inprimir todos los datos de tooddso los nodos de la lista enlazada 
	 pointer = this.point;
	while (pointer.next!=null) {
		console.log(pointer.data);
		pointer = pointer.next;
	}
	console.log(pointer.data);
}

Lista.prototype.printOne = function(pos) {// este metodo va inprimir solo el dato del nodo de la posicion asignada
	if (pos > this.len) return console.log('Posicion fuera de rango.');//esto va a verificar si la posicion dada esta dentro del rango de las lsiata guardadas
	//si supera la posicion a las lista guardas entonces se inprimira lo que esta en el console.log
	pointer = this.point;
	var aux = pos;
	while (aux > 1) {// esto va a recorrer todos los nodos buscando la posicion asignada
		aux--;
		pointer = pointer.next;
	}
	console.log('Data ['+pos+'] = '+pointer.data)
}

Lista.prototype.deleteFirst = function() {//esta funcion va a eleiminar el primer nodo de la lista enlazada
	if (this.len == 0) return console.log('Es una lista vacia');
	this.point = this.point.next;
	this.len--;
}

Lista.prototype.deleteLast = function() {	
	pointer = this.point;
	while (pointer.next.next!=null) {
		pointer = pointer.next;
	}
	pointer.next = null;
	this.len--;
}

Lista.prototype.find = function(val) {//el proposito de este metodo es buscar el valor en la lsita enlazada y devolver el nodo que la contenga 
	if (this.len == 0) return console.log('Es una lista vacia');
	var pointer = this.point;//el primer nodo
	var check = false;//este rastrea al nodo
	if (pointer.data == val) check = true;
	//  check es false && el ultimo nodo es null?
	while (!check && pointer.next != null) {
		pointer = pointer.next;
		if (pointer.data == val) check = true;
	}
	if (check) {
		return pointer;
	} else {
		return undefined;	
	} 
}

var list = new Lista();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.insert();
list.print()
