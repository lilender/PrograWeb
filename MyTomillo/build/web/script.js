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

//-----------------------------------Dropdown aka select
$('.dropdown-item').click(function(){
    var text = $(this).text(); // Obtener el texto de la opción seleccionada
    $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
});

//-----------------------------------Funciones para desplazarse entre las vistas
function toSignIn() {
    window.location.href = 'signin.jsp';
  }

function toHome(){
    window.location.href = 'dashboard.jsp';
}
function toPost(){
    window.location.href = 'Post.html';
}
function toAdvancedSearch(){
    window.location.href = 'AdvancedSearch.html';
}
function toProfile() {
    window.location.href = 'profile.jsp';
}

function logOut(){
    window.location.href = 'login.jsp';
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
        alertbox.appendChild(
        '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
        '    <strong>Ingrese su nombre de usuario</strong>'+
        '    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
        '</div>'
        )
        return false; // Prevent form submission
    }
    if (passwordInput.value.trim() === "") {
        alertbox.appendChild(
        '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
        '    <strong>Ingrese su contraseña</strong>'+
        '    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
        '</div>'
        )
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}


//--------------------------------PROFILE FUNCTIONS
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
    $("#editButtons").toggle();
    $("#editButtons2").toggle();
    $("#editButtons3").toggle();

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

    if($("#Ipassword").is(":visible")){
        $("#Ipassword").hide(); // Ocultar el input
    }

});

//Editar contraseña
$("#BEditPassword").click(function(){
    var contraseña = prompt("Ingrese su contraseña para confirmar el cambio:");
    if (contraseña != null && contraseña != "") {
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