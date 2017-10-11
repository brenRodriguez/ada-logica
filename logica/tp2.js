//ejercicio 1: logica de canje de productos puntos/pesos.
var valorProductoEnPuntos= 30;
var puntosCte= 22;
var esPremium= false;
var montoAPagarEnPesos=0;
if (puntosCte>= valorProductoEnPuntos) {
	console.log("realizar canje directamente")
}else if (puntosCte>=valorProductoEnPuntos/2 && esPremium==true) {
	montoAPagarEnPesos= montoAPagarEnPesos + (valorProductoEnPuntos/2) *5
	console.log("Debe abonar en pesos"+ montoAPagarEnPesos);
} else{
	montoAPagarEnPesos=montoAPagarEnPesos + (valorProductoEnPuntos/2)*3
	console.log("Debe abonar en pesos"+ montoAPagarEnPesos);
}





// ejercicio 2. Colonia de vacaciones
var distanciaColonia= 15;
var presupuestoDeAna= 2000;
var costoMensualColonia= 2800;
var costoAlmuerzo=100;
var DobleTurno=true;
var incluyeAlmuerzo=true;


if (distanciaColonia>=10 || costoMensualColonia<=1500) {
	console.log("Contratar transporte");
} else if (distanciaColonia<=10) {
	if (costoAlmuerzo<= costoMensualColonia*15/100) {
		console.log("incluir almuerzo");
	}
	}		
	else if(distanciaColonia>=10 || costoMensualColonia >= 1500 && (DobleTurno==true && incluyeAlmuerzo==true)){
		console.log("Ana esta dispuesta a pagar hasta 2500");	
	}

//ejercicio 3. Cuotas sin interes.
var esMastercard=false;
var esVisa=false;
var esAmex=false;
if (esMastercard==true) {
	console.log("con Mastecard tenes hasta 6 cuotas sin interes");
} else if(esVisa==true){
	console.log("con Visa tenes hasta 9 cuotas sin interes");
} else if (esAmex==true) {
	console.log("con Amex tenes hasta 3 cuotas sin interes");
}
else{
	console.log("con otras tarjetas,tenes solo 1 cuota sin interes");
}


