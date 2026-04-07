const formulario = document.getElementById("formularioContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const servicio = document.getElementById("servicio");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorServicio = document.getElementById("errorServicio");
const errorMensaje = document.getElementById("errorMensaje");
const mensajeExito = document.getElementById("mensajeExito");

function limpiarErrores() {
  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorServicio.textContent = "";
  errorMensaje.textContent = "";
  mensajeExito.textContent = "";
}

function validarCorreo(correoTexto) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correoTexto);
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  limpiarErrores();

  let esValido = true;

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    esValido = false;
  }

  if (correo.value.trim() === "") {
    errorCorreo.textContent = "El correo es obligatorio.";
    esValido = false;
  } else if (!validarCorreo(correo.value.trim())) {
    errorCorreo.textContent = "Ingrese un correo válido.";
    esValido = false;
  }

  if (servicio.value === "") {
    errorServicio.textContent = "Debe seleccionar un servicio.";
    esValido = false;
  }

  if (mensaje.value.trim() === "") {
    errorMensaje.textContent = "El mensaje no puede quedar vacío.";
    esValido = false;
  } else if (mensaje.value.trim().length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
    esValido = false;
  }

  if (esValido) {
    mensajeExito.textContent = "Solicitud enviada correctamente. Pronto te contactaremos.";
    formulario.reset();
  }
});