const form = document.getElementById("formu");
form.addEventListener("submit", function(norecargues) {

    norecargues.preventDefault()


})




function mostrardatos() {

    //variables


    var codigo = parseInt(document.getElementById("cod").value);
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = parseInt(document.getElementById("precio").value);
    var ver = document.getElementById("funtion1").value;


    if (precio >= 20000) {
        precio = precio - (precio * 20 / 100)
    }


    //insercion de celdas

    const tabla = document.getElementById("tablita")

    let nuevafila = tabla.insertRow(-1)

    //celdas

    let celda0 = nuevafila.insertCell(0)
    celda0.textContent = codigo;

    let celda1 = nuevafila.insertCell(1)
    celda1.textContent = nombre;

    let celda2 = nuevafila.insertCell(2)
    celda2.textContent = cantidad;

    let celda3 = nuevafila.insertCell(3)
    celda3.textContent = precio;

    let celda4 = nuevafila.insertCell(4)
    celda4.objectContent = ver;


    funtion1.style.visibility = "visible";
}



const openModal = document.getElementById("funtion1")
const modal = document.getElementById("modalpro")
const closeModal = document.getElementById("modalcierre")

openModal.addEventListener('click', (e) => {
    e.preventDefault();

    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});