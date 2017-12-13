//EJERCICIO 1: crear un array de numeros que aparezcan de forma incremental.
/*
var nuevoArray=[];
var largo= 10;
for ( i = 1; i <= largo; i++) {
	nuevoArray.push(i);
}
console.log(nuevoArray);

//EJERCICIO 2:mismo ejercicio pero hay que agregar un 0 en la posiciones pares y en las impares
var nuevoArray=[];
var largo= 10;
for ( i = 1; i <= largo; i++) {
	nuevoArray.push(0,i);
}
console.log(nuevoArray);

/*
var cantidadDeElementos= numeros.length;
var indice=numeros.length-1;
console.log( cantidadDeElementos +" ," + indice);
*/
//EJERCICIO 3 Y 4
var numeros=[10,24,36,7,98,11,14,20];
var mayor
for (var i = 0; i <= numeros.length; i++) {
	if (numeros[i]> numeros[i+1] &&  numeros[i]> numeros[i-1]) {
		mayor= numeros[i];
	}
}
console.log("el numero de valor maximo en el array es: " + mayor + " y su indice es " + numeros.indexOf(mayor));

/*
//EJEMPLO DE BUCLES ANIDADOS.
for (vuelta=0;vuelta<10;vuelta++){ 
   	for (varAnidada=0;varAnidada<10;varAnidada++) { 
   	console.log("la ejecucion del bucle externo da: " + vuelta+  "y la del bucle anidado da: " + varAnidada) 
   	} 
}

// EJERCICIO 5

var numeros2=[10,24,36,7,98,11,14,20,98,14,10,98];
var mayor

for (var i = 0; i <= numeros2.length; i++) {
	
		if (numeros[i]> numeros[i+1] &&  numeros[i]> numeros[i-1]) {
			mayor= numeros[i];
	}
} console.log(mayor);

var contador=0;
for (var j= 0;j <= numeros2.length; j++) {	
		if (mayor===numeros2[j]) {
			contador= contador + 1;
		}	
	}
//}
console.log(contador);



//EJERCICIO 6

var arrayX=["a","l","f","a"];
var arrayY=["a","l","f","a","j","o","r"];


for (var i = 0; i <= arrayX.length; i++) {
	for (var j = 0; j <= arrayY.length; j++) {
		if (arrayX.length > arrayY.length) {
			console.log("el array mas largo es array X")
		} else if(arrayX.length < arrayY.length){
			console.log("el array mas largo es array Y")
		} else{
			console.log("los arrays son iguales")	
		}
	}		
}
*/
var arreglo1=["a","l","f","a"];
var arreglo2=["a","l","f","a","j","o","r"];
var sumatoria=0;
for (var i=0; i<=arreglo1.length-1; i++) {
	for (var j= 0; j<=arreglo2.length-i; j++) {
		if( arreglo1[i]==arreglo2[j]){
			sumatoria++;
		}
	}
}
		console.log(sumatoria);
		
