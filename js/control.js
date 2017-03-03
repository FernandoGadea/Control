function ElementoId(id) {
    return document.getElementById(id);
};

function ComprobarLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        // Local Storage correcto.
    } else {
        // Lo sentimos, no soporta Local storage...
    }
}

ComprobarLocalStorage();

function Guardar() {
    localStorage.setItem("nombre", ElementoId("nombre").value);
    localStorage.setItem("apellido1", ElementoId("apellido1").value);
    localStorage.setItem("apellido2", ElementoId("apellido2").value);
    localStorage.setItem("dir", ElementoId("dir").value);
    localStorage.setItem("pob", ElementoId("pob").value);
    localStorage.setItem("cp", ElementoId("cp").value);
    localStorage.setItem("mail", ElementoId("mail").value);


}
