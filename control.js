function ElementoId (id) {
	return document.getElementById(id);
};

function ComprobarLocalStorage () {
	if (typeof(Storage) !== "undefined") {
    // Local Storage correcto.
} 
else {
    // Lo sentimos, no soporta Local storage...
}
}

function Guardar(){
	localStorage.setItem("nombre", ElementoId("nombre").value);
	
}
