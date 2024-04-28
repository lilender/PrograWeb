//Loader
var timeOut;
function myFunction(mensaje) {
    if (mensaje && mensaje !== "null") {
        showPage();
    } else {
        timeOut = setTimeout(showPage, 3000);
    }
}




function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "flex";
  document.getElementById("myFoot").style.display = "flex";
}

//-----------------------------------Funciones para desplazarse entre las vistas
function toSignIn() {
    window.location.href = 'signin.jsp';
  }

function toHome(){
    window.location.href = 'dashboard.jsp';
}
function toPost() {
    window.location.href = 'PostServlet';
}
function toAdvancedSearch(){
    window.location.href = 'AdvancedSearch.html';
}
function toProfile() {
    window.location.href = 'ProfileServlet';
}

function toDashboard(){
    window.location.href = 'dashboard.jsp';
}

//-----------------------------------Obtiene la fecha actual
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Obtener los componentes de la fecha
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por eso se suma 1
    var anio = fechaActual.getFullYear();

    // Formatear la fecha como "DD/MM/YYYY"
    var fechaFormateada = dia + '/' + mes + '/' + anio;

    // Insertar la fecha en el elemento h3
    document.getElementById('H3Date').textContent = fechaFormateada;
});

//--------------------------------LOGIN FUNCTIONS
function validacionLogIn() {
    var usernameInput = document.getElementById("Iusername");
    var passwordInput = document.getElementById("Ipassword");
    var alertbox = document.getElementById("alert");

    if (usernameInput.value.trim() === "") {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }

    if (passwordInput.value.trim() === "") {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Ingrese su contraseña</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
//--------------------------------SIGNIN FUNCTIONS
function previewFile() {
    var preview = document.getElementById('previewImage');
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
function validacionSignIn() {
    var nameInput = document.getElementById("Iname");
    var lastnameInput = document.getElementById("ILastname");
    var lastname2Input = document.getElementById("ILastname2");
    var mailInput = document.getElementById("Imail");
    var fileInput = document.getElementById("file");
    var dateInput = document.getElementById("datePicker");
    var usernameInput = document.getElementById("Iusername");
    var passInput = document.getElementById("Ipassword");
    var pass2Input = document.getElementById("Ipassword2");
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;

    
    if (nameInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(nameInput.value)) {
            alertDiv.innerHTML = 
            '<strong>Nombre inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastnameInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su apellido paterno</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastnameInput.value)) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastname2Input.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su apellido materno</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastname2Input.value)) {
            alertDiv.innerHTML = 
            '<strong>Apellido materno inválido. Recuerde solo usar caracteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    if (mailInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su correo electrónico</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (!regex.test(mailInput.value)) {
            alertDiv.innerHTML = 
            '<strong>Correo electrónico inválido. Recuerde usar un formato válido de correo.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    
    if (fileInput.files.length === 0) {
        alertDiv.innerHTML = 
            '<strong>Seleccione una imágen.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    
    if (dateInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su fecha de nacimiento</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (usernameInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (passInput.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su contraseña</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!"#$%&/=´@¨?¿:;,._\-+*~{}\[\]'|]).{8,}$/;
        if (!regex.test(passInput.value)) {
            alertDiv.innerHTML = 
            '<strong>Contraseña inválida. Debe incluir:<br/>Mínimo 8 caracteres<br/>Mínimo una letra mayúscula<br/>Mínimo una letra minúscula<br/>Mínimo un número<br/>Mínimo un signo de puntuación</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    if (pass2Input.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese la confirmación de su contraseña</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } else {
        if (pass2Input !== passInput) {
            alertDiv.innerHTML = 
            '<strong>Las contraseñas no coinciden.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    return true; // Allow form submission
}
//--------------------------------PROFILE FUNCTIONS
function validacionProfile(printalert){
    var nameInput = document.getElementById("Iname");
    var lastnameInput = document.getElementById("ILastname");
    var lastname2Input = document.getElementById("ILastname2");
    var mailInput = document.getElementById("Imail");
    var fileInput = document.getElementById("file");
    var usernameInput = document.getElementById("Iusername");
    var passInput = document.getElementById("Ipassword");
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    if (usernameInput.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    }
    if (nameInput.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su nombre</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(nameInput.value)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Nombre inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
    }
    if (lastnameInput.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su apellido paterno</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastnameInput.value)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Apellido paterno inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
    }
    if (lastname2Input.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su apellido materno</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastname2Input.value)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Apellido materno inválido. Recuerde solo usar caracteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
    }

    if (mailInput.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su correo electrónico</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (!regex.test(mailInput.value)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Correo electrónico inválido. Recuerde usar un formato válido de correo.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
    }
    if (passInput.value.trim() === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su contraseña</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!"#$%&/=´@¨?¿:;,._\-+*~{}\[\]'|]).{8,}$/;
        if (!regex.test(passInput.value)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Contraseña inválida. Debe incluir:<br/>Mínimo 8 caracteres<br/>Mínimo una letra mayúscula<br/>Mínimo una letra minúscula<br/>Mínimo un número<br/>Mínimo un signo de puntuación</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
    }
    
    return true; // Allow form submission
}

//Editar información
$("#BEditData").click(function(){
    $("#Susername").toggle();
    $("#Sname").toggle();
    $("#Smail").toggle();
    $("#Sage").toggle();

    $("#Iusername").toggle();
    $("#Iname").toggle();
    $("#ILastname").toggle();
    $("#ILastname2").toggle();
    $("#Imail").toggle();

    $("#file").toggle();
    $("#Ifile").toggle();

    $("#BSaveData").toggle();
    $("#BEditPassword").toggle();
    $("#BEditData").toggle();
});

//Guardar información
$("#BSaveData").click(function(){
//    if(validacionProfile(false)){
//        $("#editButtons").toggle();
//        $("#editButtons2").toggle();
//        $("#editButtons3").toggle();
//
//        $("#Susername").toggle();
//        $("#Sname").toggle();
//        $("#Smail").toggle();
//        $("#Sage").toggle();
//
//        $("#Iusername").toggle();
//        $("#Iname").toggle();
//        $("#ILastname").toggle();
//        $("#ILastname2").toggle();
//        $("#Imail").toggle();
//
//        $("#file").toggle();
//        $("#Ifile").toggle();
//
//        $("#BSaveData").toggle();
//        $("#BEditPassword").toggle();
//        $("#BEditData").toggle();
//
//        if($("#Ipassword").is(":visible")){
//            $("#Ipassword").hide(); // Ocultar el input
//        }
//
//    }
    
});

//Editar contraseña
$("#BEditPassword").click(function(){
    var contraseña = prompt("Ingrese su contraseña para confirmar el cambio:");
    if (contraseña !== null && contraseña !== "") {
        alert("Contraseña confirmada. Procediendo con el cambio de contraseña.");
        $("#Ipassword").toggle();
    } else {
        alert("Contraseña incorrecta o no ingresada. No se realizará ningún cambio.");
    }
});

//Editar post
$('.BEditPost').click(function(){
    var post = $(this).closest('.post-text');
    var title = post.find('.title').text();
    var classc = post.find('.class').text();
    var contentPost = post.find('.content-post').text();

    var form = '<div class="formEdit"><form method="post" enctype="multipart/form-data" action="profile.jsp">'+
        '<div class="row justify-content-center"><div class="col-md-3 align-self-center"><div class="square-bg-photo">'+
        '<img src="pictures/PhotoDefault.png" alt="MyTomillo"></div><div class="box-input">' +
        '<input type="file" name="file" id="file" class="inputfile" style="width: 70%; height: 100%;">' +
        '<label class="label-file" for="file" style="width: 100%; height: 100%; background: #a4c780b7;">Agregar imagen</label></div>'
        + '</div> <div class="col-md-9">'
        + '<div class="box-input"><input type="text" id="Iname" name="Iname" placeholder="' + title +
        '" style="width: 100%;"></div> <div class="row"><div class="dropdown-center">' +
        '<button id="DDcategoria" class="btn button-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">'
        + classc + '</button> <ul class="dropdown-menu content"> <li><a class="dropdown-item content-item" href="#">Hobbies</a></li>'
        + '<li><a class="dropdown-item content-item" href="#">Mascotas</a></li></ul></div></div><div class="row justify-content-center">'
        + '<div class="col-md-12"><textarea id="post" class="input" type="text" style="width: 100%; height:19rem; resize: none;" placeholder="'
        + contentPost + '"></textarea></div></div><input type="submit" class="button-login content="Actualizar"></div></form>';

    post.append(form);
    var title2 = post.find('.title').toggle();
    var classc2 = post.find('.class').toggle();
    var contentPost = post.find('.content-post').toggle();
    var photo = post.find('.card').toggle();
    var BEditPost = post.find('.BEditPost').toggle();
    var BDeletePost = post.find('.BDeletePost').toggle();
});

//Nuevo post
$('.BNewPost').click(function(){
    var post = $(this).closest('.post-text');
    var title2 = post.find('.title').toggle();
    var classc2 = post.find('.class').toggle();
    var contentPost = post.find('.content-post').toggle();
    var photo = post.find('.card').toggle();
    var BEditPost = post.find('.BEditPost').toggle();

    var form = post.find('.formEdit').toggle();
});

//Borrar post
$('.BDeletePost').click(function(){
    var post = $(this).closest('.post-text');
    post.remove();
});


//--------------------------------POST FUNCTIONS
$('.dropdown-item').click(function(){
    var text = $(this).text(); // Obtener el texto de la opción seleccionada
    $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
    $('#CategoriaSeleccionada').val(text);
});

function validacionPost(){
    var titulo = document.getElementById("Iname");
    var contenido = document.getElementById("post");
    var categoria = document.getElementById("CategoriaSeleccionada");
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    if (titulo.value.trim() === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese el título de su publicación</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (contenido.value.trim() === "") {
        alertDiv.innerHTML = 
                '<strong>Ingrese texto en su post</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    if (categoria.value.trim() === "") {
        alertDiv.innerHTML = 
                '<strong>Seleccione una categoría</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    
    return true; // Allow form submission
}
