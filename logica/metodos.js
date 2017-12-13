var planetas= ["Mercurio","Marte","Tierra","Urano","Neptuno","Saturno", "Venus","Jupiter"];

planetas.forEach(function(){
	console.log("Esto es un foreach");
});
//e= elemento;
//i= indice;
//array= arrray;
//foreach, puede recibir hasta 3 parametros.
//sintaxis de foreach:
//ej:
//callback : funcion dentro de una funcion.

planetas.forEach(function(){

});
//otra forma:
var myFunction=function(){
};

planetas.forEach(myFunction);

//si quiero recuperar el valor que retorna el foreach, lo guardo en una var.
var metodo= planetas.forEach(function(){
});



planetas.forEach(function(planeta, indice){
	console.log(planeta, indice);
});

//forma de abreviar function(ecmascript).
planetas.forEach((planeta, indice)=>{
	console.log(planeta, indice);
});


planetas.forEach((e,i,array)=>{
	console.log("El planeta es "+ e + "y esta ubicado en " + i + "" + array)
});


//metodo MAP
//crea un nuevo array
var numeros= [1,2,3,4,5,6,7];
var numerosMultiplicados= numeros.map(function(numero){
	return numero*2;
});
console.log("Array original: "+numeros);
console.log("Array x 2: "+ numerosMultiplicados);



//crear un array del 1 al 1000.
//crear otro de los elementos + 10.

var miArray= [];

//forma 1 de crear un array con numeros del 0 al 1000.
for (var i = 0; i <= 1000; i++) {

	miArray[i] = i;//retorna el elemento  i al indice i de miArray
}
console.log(miArray);

var nuevoArray = miArray.map(function(e){
	return e + 10;
});
console.log("Array original: " + miArray);

console.log("Array + 10: " + nuevoArray);


/*
//forma 2 de crear un array con numeros del 0 al 1000.
var miArray= [];
miArray[0] = 0;
for (var i = 1; i <= 1000; i++) {

	miArray[i] = miArray[i-1] + i;
}
console.log(miArray);

var nuevoArray = miArray.map(function(e){
	return e + 10;
});*/
//crear un array con elementos, y lyuego otro con esos string en mayuscula(toUpperCase())
var verduras =[palta, apio, tomate, ];
toUpperCase()



