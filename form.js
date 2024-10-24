document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('form');
const nombre = document.getElementById('name');
const apellido = document.getElementById('surname');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const select = document.getElementById('selector');


form.addEventListener('submit', e => {
    e.preventDefault();

    const showName = document.getElementById('name').value;
    const showSurname = document.getElementById('surname').value;
    const showEmail = document.getElementById('mail').value;
    const showPhone = document.getElementById('phone').value;
    const showSelect = document.getElementById('selector').value;
    
    let MostrarDatos = `<p>Pedido ingresado con exito!</p>
                        <p>Nos pondremos en contacto contigo via email o por celuar</p><br>
                    <p><strong>Nombre:</strong> ${showName}</p><br>
                    <p><strong>Apellido:</strong> ${showSurname}</p><br>
                    <p><strong>Email:</strong> ${showEmail}</p><br>
                    <p><strong>Telefono:</strong> ${showPhone}</p><br>
                    <p><strong>Pedido:</strong> ${showSelect}</p><br>`;

   

    let flagError = false;

    let validarNombreyApellido = /^[a-zA-Z\s]+$/;
    let validarPhone = /^\d+$/;
    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 

    let borrador = document.querySelectorAll("span.ErrorMensaje");
       for (const element of borrador) {
            element.remove();
       }

    if(nombre.value.trim == '' || !validarNombreyApellido.test(nombre.value)){
        mostrarError(nombre, "*Nombre no valido");
        flagError = true;
    }else if(nombre.value.length < 4 ){
        mostrarError(nombre, "*Debe ingresar un nombre mayor de 4 caracteres.");
        flagError = true;
    }

    if(apellido.value.trim == '' || !validarNombreyApellido.test(apellido.value)){
        mostrarError(apellido, "*Apellido no valido");
        flagError = true;
    }else if(apellido.value.length < 4 ){
        mostrarError(apellido, "*Debe ingresar un apellido mayor a 4 caracteres.");
        flagError = true;
    }

    if(!validarEmail.test(email.value)){
        mostrarError(email, "*Email no valido");
        flagError = true;
    }

    if(phone.value == '' || phone.value.length < 8){
        mostrarError(phone, "*Numero de telefono no valido");
        flagError = true;
    }

    if(select.value == "op1"){
        mostrarError(select, "*Debe seleccionar una de las opciones");

        flagError = true;
    }

    if(!flagError){
        e.target.reset();
        document.getElementById('Resultado').innerHTML = MostrarDatos;
    }
});
});


function mostrarError(entrada, mensaje){
    let error = document.createElement('span');
    error.classList.add("ErrorMensaje");
    let errorShow = document.createTextNode(mensaje);
    error.appendChild(errorShow);
    entrada.insertAdjacentElement('afterend', error);

}