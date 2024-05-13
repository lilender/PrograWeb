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
    window.location.href = 'DashboardServlet';
}
function toPost(user) {
    if(user){
        window.location.href = 'PostServlet';    
    }else{
        window.location.href = 'login.jsp';
    }
    
}
function toAdvancedSearch(){
    window.location.href = 'AdvancedSearchServlet';
}
function toProfile(user) {
    if(user){
        window.location.href = 'ProfileServlet';
    } else{
        window.location.href = 'login.jsp';
    }
}

function toDashboard(){
    window.location.href = 'DashboardServlet';
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
    var usernameInput = document.getElementById("Iusername").value.trim();
    var passwordInput = document.getElementById("Ipassword").value.trim();
    var alertbox = document.getElementById("alert");

    if (usernameInput === "") {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (usernameInput.length > 30) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Número de carácteres excedido</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }

    if (passwordInput === "") {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Ingrese su contraseña</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (passwordInput.length > 60) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Número de carácteres excedido</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
//--------------------------------SIGNIN FUNCTIONS
function previewFile(idimage, idpost) {
    var preview = document.getElementById(idimage);
    var file = document.getElementById(idpost).files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
function validacionSignIn() {
    var nameInput = document.getElementById("Iname").value.trim();
    var lastnameInput = document.getElementById("ILastname").value.trim();
    var lastname2Input = document.getElementById("ILastname2").value.trim();
    var mailInput = document.getElementById("Imail").value.trim();
    var fileInput = document.getElementById("file");
    var dateInput = document.getElementById("datePicker");
    var usernameInput = document.getElementById("Iusername").value.trim();
    var passInput = document.getElementById("Ipassword").value.trim();
    var pass2Input = document.getElementById("Ipassword2").value.trim();
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;

    
    if (nameInput === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        if (!nameRegex.test(nameInput)) {
            alertDiv.innerHTML = 
            '<strong>Nombre inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
        if (nameInput.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Nombre inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastnameInput === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su apellido paterno</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        if (!nameRegex.test(lastnameInput)) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
        if (lastnameInput.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastname2Input === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su apellido materno</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        if (!nameRegex.test(lastname2Input)) {
            alertDiv.innerHTML = 
            '<strong>Apellido materno inválido. Recuerde solo usar caracteres alfanuméricos.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
        if (lastname2Input.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    if (mailInput === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su correo electrónico</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (!regex.test(mailInput)) {
            alertDiv.innerHTML = 
            '<strong>Correo electrónico inválido. Recuerde usar un formato válido de correo.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
        if (mailInput.length > 255) {
            alertDiv.innerHTML = 
            '<strong>Correo electrónico inválido. Máximo de 255 carácteres.</strong>' +
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
    
    if (usernameInput === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        if (usernameInput.length > 30) {
            alertDiv.innerHTML = 
            '<strong>Nombre de usuario inválido. Máximo de 30 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    
    if (passInput === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese su contraseña</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    else {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!"#$%&/=´@¨?¿:;,._\-+*~{}\[\]'|]).{8,60}$/;
        if (!regex.test(passInput)) {
            alertDiv.innerHTML = 
            '<strong>Contraseña inválida. Debe incluir:<br/>Mínimo 8 carácteres, máximo 60<br/>Mínimo una letra mayúscula<br/>Mínimo una letra minúscula<br/>Mínimo un número<br/>Mínimo un signo de puntuación</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    if (pass2Input === "") {
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
    var nameInput = document.getElementById("Iname").value.trim();
    var lastnameInput = document.getElementById("ILastname").value.trim();
    var lastname2Input = document.getElementById("ILastname2").value.trim();
    var mailInput = document.getElementById("Imail").value.trim();
    var fileInput = document.getElementById("file");
    var usernameInput = document.getElementById("Iusername").value.trim();
    var passInput = document.getElementById("Ipassword").value.trim();
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    
    if (usernameInput === "") {
        if(printalert){
            alertDiv.innerHTML = 
            '<strong>Ingrese su nombre de usuario</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } 
    else {
        if (usernameInput.length > 30) {
            alertDiv.innerHTML = 
            '<strong>Nombre de usuario inválido. Máximo de 30 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (nameInput === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su nombre</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(nameInput)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Nombre inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
        if (nameInput.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Nombre inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastnameInput === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su apellido paterno</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastnameInput)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Apellido paterno inválido. Recuerde solo usar carácteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
        if (lastnameInput.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (lastname2Input === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su apellido materno</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        if (!nameRegex.test(lastname2Input)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Apellido materno inválido. Recuerde solo usar caracteres alfanuméricos.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
        if (lastname2Input.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Apellido paterno inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }

    if (mailInput === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su correo electrónico</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (!regex.test(mailInput)) {
            if(printalert){
                alertDiv.innerHTML = 
                '<strong>Correo electrónico inválido. Recuerde usar un formato válido de correo.</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                alertbox.appendChild(alertDiv);
            }
            return false;
        }
        if (mailInput.length > 255) {
            alertDiv.innerHTML = 
            '<strong>Correo electrónico inválido. Máximo de 255 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
        }
    }
    if (passInput === "") {
        if(printalert){
            alertDiv.innerHTML = 
                '<strong>Ingrese su contraseña</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        }
        return false; // Prevent form submission
    } else {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!"#$%&/=´@¨?¿:;,._\-+*~{}\[\]'|]).{8,60}$/;
        if (!regex.test(passInput)) {
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

$(function() {
    $('.BEditPost').click(function() {

    var post = $(this).closest('.post-text');
    var title = post.find('.title').text();
    var classc = post.find('.class').text();
    var contentPost = post.find('.content-post').text();
    var imageSource = post.find('.image').attr('src');
    if (!imageSource) {
        imageSource = "pictures/PhotoDefault.png";
    }
    var idpost = post.find("#IpostId").attr('value');
    idpost = idpost.trim();

    var categorias = post.find("#categoriaspost").attr('value');
    var categoriesArray = categorias.split(",");
    
    categorias = "";
    categoriesArray.forEach(function(cat) {
        categorias += '<li class="dropdown-item content-item">' + cat + '</li>';
    });


    post.empty();
    var form = '<div class="formEdit">' +
    '<div id="alert'+idpost+'">' +
    '</div>' +
    '<form method="post" enctype="multipart/form-data" action="EditPostServlet" onsubmit="return validacionEditarPost(' + idpost + ')">' +
        '<input type="hidden" id="IpostId" name="IpostId" value="' + idpost + '">' +
        '<input type="hidden" id="CategoriaSeleccionada'+idpost+'" name="CategoriaSeleccionada" value="'+classc+'">' +
        '<div class="row justify-content-center">' +
            '<div class="col-md-3 align-self-center">' +
                '<div class="square-bg-photo">' +
                    '<img id="previewImage'+idpost+'" src="' + imageSource + '" alt="MyTomillo">' +
                '</div>' +
                '<div class="box-input">' +
                    '<input type="file" name="file" id="file' + idpost + '" class="inputfile" style="width: 70%; height: 100%;" onchange="previewFile(\'previewImage' + idpost + '\', \'file' + idpost + '\')">' +
                    '<label class="label-file" for="file' + idpost + '" style="width: 100%; height: 100%; background: #a4c780b7;">Agregar imagen</label>' +
                '</div>' +
            '</div>' +
            '<div class="col-md-9">' +
                '<div class="box-input">' +
                    '<input type="text" id="Iname'+idpost+'" name="Iname" value="' + title + '" style="width: 100%;">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="dropdown-center">' +
                        '<button id="DDcategoria'+idpost+'" class="btn button-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">' +
                            classc +
                        '</button>' +
                        '<ul class="dropdown-menu content" id="categoryList">' +
                            categorias +
                            '<li class="">' +
                                '<input id="newCategoryInput" type="text" placeholder="Nueva Categoría" style="width: 60%">' +
                                '<button type="button" id="addCategoryButton">Agregar</button>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                '<div class="row justify-content-center">' +
                    '<div class="col-md-12">' +
                        '<textarea id="post'+idpost+'" name="post" class="input" type="text" style="width: 100%; height:19rem; resize: none;">' +
                            contentPost +
                        '</textarea>' +
                    '</div>' +
                '</div>' +
                '<input type="submit" class="button-login content="Actualizar">' +
            '</div>' +
        '</div>' +
    '</form>';

    
    post.append(form);
    
    });
});


//Nuevo post NO SE USA, NO EXISTE TAL BOTON
//$('.BNewPost').click(function(){
//    var post = $(this).closest('.post-text');
//    var title2 = post.find('.title').toggle();
//    var classc2 = post.find('.class').toggle();
//    var contentPost = post.find('.content-post').toggle();
//    var photo = post.find('.card').toggle();
//    var BEditPost = post.find('.BEditPost').toggle();
//
//    var form = post.find('.formEdit').toggle();
//});

//Borrar post
//$('.BDeletePost').click(function(){
//    var post = $(this).closest('.post-text');
//    post.remove();
//});

function validacionEditarPost(idpost){
    var titulo = document.getElementById("Iname"+idpost).value.trim();
    var contenido = document.getElementById("post"+idpost).value.trim();
    var categoria = document.getElementById("CategoriaSeleccionada"+idpost).value.trim();
    
    var alertbox = document.getElementById("alert"+idpost);
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    if (titulo === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese el título de su publicación</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (titulo.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Título inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    if (contenido === "") {
        alertDiv.innerHTML = 
                '<strong>Ingrese texto en su post</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (contenido.length > 300) {
            alertDiv.innerHTML = 
            '<strong>Contenido inválido. Máximo de 300 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    if (categoria === "") {
        alertDiv.innerHTML = 
                '<strong>Seleccione una categoría</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    if (categoria.length > 15) {
            alertDiv.innerHTML = 
            '<strong>Categoria inválida. Máximo de 15 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    return true; // Allow form submission
}

function confirmacionBorrarPost(){
    //    AQUI HAY QUE PROGRAMAR LA CONFIRMACION DE BORRAR BOTON
    return true;
}


//--------------------------------POST FUNCTIONS
$('.dropdown-item').click(function(){
    var text = $(this).text(); // Obtener el texto de la opción seleccionada
    $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
    $('#CategoriaSeleccionada').val(text);
});

function validacionPost(){
    var titulo = document.getElementById("Iname").value.trim();
    var contenido = document.getElementById("post").value.trim();
    var categoria = document.getElementById("CategoriaSeleccionada").value.trim();
    
    var alertbox = document.getElementById("alert");
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    
    if (titulo === "") {
        alertDiv.innerHTML = 
            '<strong>Ingrese el título de su publicación</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (titulo.length > 60) {
            alertDiv.innerHTML = 
            '<strong>Título inválido. Máximo de 60 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    if (contenido === "") {
        alertDiv.innerHTML = 
                '<strong>Ingrese texto en su post</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    if (contenido.length > 300) {
            alertDiv.innerHTML = 
            '<strong>Contenido inválido. Máximo de 300 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    if (categoria === "") {
        alertDiv.innerHTML = 
                '<strong>Seleccione una categoría</strong>' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

            alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    } 
    if (categoria.length > 15) {
            alertDiv.innerHTML = 
            '<strong>Categoria inválida. Máximo de 15 carácteres.</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            alertbox.appendChild(alertDiv);
            return false;
    }
    return true; // Allow form submission
}

//--------------------------------Validacion FUNCTIONS
function validacionBusqueda(){
    var texto = document.getElementById("busqueda").value.trim();
    if (texto.length > 60) {
        var alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = 
            '<strong>Número de carácteres excedido</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        alertbox.appendChild(alertDiv);
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}


/*
 * AJAX
 * Herramienta para mandar solicitudes http?
 * no es obligatorio usar ajax
 * 
 */