document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("formularioLogin");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const usuarioGuardado = localStorage.getItem("usuario");
    const contrasenaGuardada = localStorage.getItem("contrasena");
    const usuarioCorrecto = usuarioGuardado || "admin";
    const contrasenaCorrecta = contrasenaGuardada || "1234";

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {

      alert("Inicio de sesión exitoso");

      window.location.href = "index.html";

    } else {

      alert("Usuario o contraseña incorrectos");

    }
  });

});