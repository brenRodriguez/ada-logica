// ejercicio 3

/*
x=[10,24,36,7,98,11,14,20,102];
var mayor=x[0];
var pos= 0;
for(var i=0; i < x.length; i++){
	if(x[i]>mayor){
		mayor=x[i]; pos=i;
	}
}
console.log(mayor);
*/

//ejercicio 1:

/*

//version con >=
x=[10,24,36,7,98,11,14,98];
var mayor=x[0];
var pos= 0;
for(i=0; i <= x.length; i++){
	if(x[i]>= mayor){
		if( mayor == x[i]){
			pos=pos + 1;
			}else{
				pos=1;
			}
			mayor=x[i];
		 /*pos=i;
	}
}
console.log("el valor es:" + mayor+ "y se repite" + pos);
*/
//tarea: mostrar las posiciones de los valores maximos.




//ejercicio 6
//tarea: probar anidar dos for
x = ["a","l","f","a"];
y = ["a","l","f","a","j","o","r"];
var xL= x.length;
var yL= y.length;
var distinto=false;
var N;
var M;

if(xL== yL){
	for (i = 0; i < xL; i++) {
		if(x[i]!= y[i]){
			distinto=true;
		}
	}
}else{
	if (xL > yL) {

		console.log("X es mas largo");
		N=yL;
		M=xL;
	}else{
		console.log("Y es el mas largo");
		N=xL;
		M=yL;
	}
}

var cont=0;
for (i=0; i<N;i++) {
	for (j=0; j<M;j++) {

		if(x[i]==y[j]){
			cont++;
		}
	}
	
}
/*console.log("cantidad de letras en comun"+ cont);*/
var match=[];
	