const contenedorComentarios = document.getElementById("contenedorComentarios")
const contenedorPrincipal = document.getElementById("contenedorPrincipal")
const modal = document.getElementById("agregarComentarios")
const boton = document.getElementById("button")
const textarea = document.getElementById("makeComment")

function mostrarModal() {
    contenedorPrincipal.classList.add("blur")
    modal.classList.remove("agregarComentarioInvisible")
    modal.classList.add("agregarComentarioVisible")
    boton.disabled = true;
}

function ocultarModal() {
    contenedorPrincipal.classList.remove("blur")
    modal.classList.remove("agregarComentarioVisible")
    modal.classList.add("agregarComentarioInvisible")
    boton.classList.remove("activeButton")
    boton.classList.add("deactivatedButton")
    boton.disabled = true;
    textarea.value = ""
    
}

function activarBoton() {
    var value = textarea.value
    if ( value === "") {
        boton.classList.remove("activeButton")
        boton.classList.add("deactivatedButton")
        boton.disabled = true;
    } else {
        boton.classList.remove("deactivatedButton")
        boton.classList.add("activeButton")
        boton.disabled = false;
    }
}

function crearPublicacion() {
    var text = textarea.value
    var comment = `
    <div class="comentario">
        <div class="superiorComentario">
            <img src="pexels-mohamed-abdelghaffar-771742.jpg" alt="profilePic">
            <p >Andrea Andrade</p>
        </div>
        <p class="publicComment">${text}</p>
    </div>
    `
    contenedorComentarios.innerHTML += comment
    ocultarModal()
}