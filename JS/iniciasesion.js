
/* const usuario1 = document.getElementById("usuario1");
const correo1 = document.getElementById("correo1");
const contrasena1 = document.getElementById("contrasena1");
let numeroSitio=0

function guardarSitio1(){
    newSite = {};
    newSite.usuario1 = usuario1.value;
    newSite.correo1 = correo1.value;
    newSite.contrasena1 = contrasena1.value;
    console.log("test1")
    numeroSitios = localStorage.getItem("sesiones")?localStorage.getItem("sesiones"):0;
    numeroSitios++;
    localStorage.setItem("sesiones", numeroSitios);
    localStorage.setItem("sesion" + numeroSitios, JSON.stringify(newSite));
    console.log(newSite);
    usuario1.value = "";
    correo1.value = "";
    contrasena1.value = "";
 } */

    const usuario1 = document.getElementById("usuario1");
    const correo1 = document.getElementById("correo1");
    const contrasena1 = document.getElementById("contrasena1");
    let numeroSitio = 0;
    
    function guardarSitio1() {
        if (usuario1.value !== "" && correo1.value !== "" && contrasena1.value !== "") {
            // Crear un nuevo objeto con los valores
            newSite = {
                usuario1: usuario1.value,
                correo1: correo1.value,
                contrasena1: contrasena1.value
            };
    
            // Obtener el número de sitios guardados previamente
            numeroSitios = localStorage.getItem("sesiones") ? localStorage.getItem("sesiones") : 0;
            numeroSitios++;
    
            // Guardar en localStorage
            localStorage.setItem("sesiones", numeroSitios);
            localStorage.setItem("sesion" + numeroSitios, JSON.stringify(newSite));
            console.log(newSite);
    
            // Limpiar los campos
            usuario1.value = "";
            correo1.value = "";
            contrasena1.value = "";
    
            // Redireccionar a otra página después de guardar los datos
            window.location.href="favoritos.html"; // Cambia "nuevaPagina.html" por la URL o página de destino
        } else {
            alert("Por favor, completa todos los campos.");
        }
    }
    
