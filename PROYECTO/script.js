$('.dropdown-item').click(function(){
    var text = $(this).text(); // Obtener el texto de la opción seleccionada
    $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
});

function toSignIn() {
    window.location.href = 'SignIn.html';
  }

function toHome(){
    window.location.href = 'Dashboard.html';
}
function toPost(){
    window.location.href = 'Post.html';
}
function toAdvancedSearch(){
    window.location.href = 'AdvancedSearch.html';
}
function toProfile(){
    window.location.href = 'Profile.html';
}

function logOut(){
    window.location.href = 'LogIn.html';
}

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

$(document).ready(function(){
    $('.dropdown-item').click(function(){
        var text = $(this).text(); // Obtener el texto de la opción seleccionada
        $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
    });
});

$("#BEditData").click(function(){
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
});

$("#BSaveData").click(function(){
    $("#profile-publications").toggle();

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

$("#BEditPassword").click(function(){
    var contraseña = prompt("Ingrese su contraseña para confirmar el cambio:");
    if (contraseña != null && contraseña != "") {
        alert("Contraseña confirmada. Procediendo con el cambio de contraseña.");
        $("#Ipassword").toggle();
    } else {
        alert("Contraseña incorrecta o no ingresada. No se realizará ningún cambio.");
    }
});

$('.BEditPost').click(function(){
    var post = $(this).closest('.post-text');
    var title = post.find('.title').text();
    var classc = post.find('.class').text();
    var contentPost = post.find('.content-post').text();

    var form = '<div class="formEdit"><form method="post" enctype="multipart/form-data" action="Profile.html">'+
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

$('.BNewPost').click(function(){
    var post = $(this).closest('.post-text');
    var title2 = post.find('.title').toggle();
    var classc2 = post.find('.class').toggle();
    var contentPost = post.find('.content-post').toggle();
    var photo = post.find('.card').toggle();
    var BEditPost = post.find('.BEditPost').toggle();

    var form = post.find('.formEdit').toggle();
});

$('.BDeletePost').click(function(){
    var post = $(this).closest('.post-text');
    post.remove();
});