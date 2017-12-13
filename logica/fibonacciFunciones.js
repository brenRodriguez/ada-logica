/*function fibonacci(num){

	if (num<=1)return 1; 
	return fibonacci(num-1)+ fibonacci(num-2)	
	}
var cantConejos=fibonacci(7);
console.log(cantConejos);
*/
function potencia(base, exponente){
	var resultado=1;
	for (var i = 0; i < exponente; i++) {
		resultado= resultado*base;
	}
	return resultado;
}

var operacion = potencia(5,2);//invocacion de funcion
console.log(operacion);


function primos(numero){
	var modulo= 0;
	for (var i = 2; i < numero; i++) {
		modulo=numero% i;
		if (modulo == 0){ 
			//numero == 0 && numero % 1 == 0 && numero % i) {
		return false;
		}
	}
return true;	
}

console.log(primos(6));

//otra version de prim*s:
/*
function primos(N){
	for (var i = N-1; i < 1; i--) {
		var x= N % i;
		if (x== 0) {
			return false;
		}
	}
	return true;
}

console.log(primos(13));*/
function primos (N){
	var i=2;
	while((i > 1) && (i < N)){
		var x = N % i;
		if (x == 0) {
		return false;
		}
	i++;
	}
	return true;
}

function primos (N){
	var i= 2;
	do{
		var x= N % i;
		if (x==0) {
			return false;
		}
		i++	
	} while((i>1) && (i<N)){
		return true;
	}
var numero= 13;
console.log(primos(numero));
}







