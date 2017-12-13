var numeros=[4,2,6,7,3,2,3];
console.log(numeros.sort());//.sort sirve para ordenar un listado de menor a mayor.




/*Ejercicio 1:Cargar de forma automatica incremental, un array de numeros a partir de un largo dado por el usuario.*/
/*
var N=5;
var elementos=[];

for(var elementos=0; elementos<N; elementos+=1){
	console.log("iteracion numero"+elementos);
     /*elementos+=1;
 }*/


//algoritmo de burbujeo (bubble sort):

 var numeros=[6,5,3,1,8,7,2,4];
 var swap= true;
console.log("Asi es al princpio: "+ numeros);
 for (var i=0; i < numeros.length && swap==true; i++){
 	swap=false;
 	for (var j= 0; j < numeros.length-i; j++) {
 		//si el numero es mayot a su siguiente, hay intercambio
 		if( numeros[j]> numeros[j+1]){
 			var temp= numeros[j];
 			numeros[j]=numeros[j + 1];
 			numeros[j +1]= temp;
 			swap=true;
 		}
 	}
 }
console.log("Asi es al final: " + numeros);