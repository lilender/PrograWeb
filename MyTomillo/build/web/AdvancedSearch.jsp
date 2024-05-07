<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@ page import="entidades.Usuario" %>
<%@ page import="entidades.Publicacion" %>
<%Usuario usuario = (Usuario)session.getAttribute("Usuario");
%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <!--Fonts-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Londrina+Sketch">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mansalva">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chelsea+Market">
        
        <!--CSS-->
        <link rel="stylesheet" href="Style.css">

        <title>MyTomillo</title>
        <link rel="icon"  type="image/png" href="pictures/MyTomillo.png">
    </head>

    <header>
        <nav class="row">
            <ul class="d-flex justify-content-between align-items-center">
                <li style="width: 8%;"><a href="#home" onclick="toHome()" style="margin-left: 1rem; margin-right: 2rem;">
                    <img src="pictures/MyTomilloShadow.png" alt="MyTomillo" style="margin-bottom: 0rem;">MyTomillo
                    </a></li>
                <li style="align-self: right; width: 12%;"><a href="#news" class="new-post" onclick="toPost()">Nueva Publicación
                    <img src="pictures/NewPost.png" alt="MyPost" style="width: 20%;">
                    </a> </li>
                <li class="row search-container" style="width: 61%;">
                    <form action="DashboardServlet" method="post" onsubmit="return validacionBusqueda()">
                        <div class="input-group mb-6">
                            <input id="busqueda" name="busqueda" type="text" placeholder="Buscar publicación..." class="search-bar">
                            <button class="button-normal" type="submit" style="width: 10%;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </li>
                <li style="text-align: left; width: 12%;"><a href="#about" class="advanced-search" onclick="toAdvancedSearch()"> Búsqueda Avanzada
                    <img src="pictures/AdvancedSearch.png" alt="Busqueda Avanzada" style="width: 18%;">
                </a></li>
                <li style="width: 7%;"><a href="#perfil" onclick="toProfile()" style="margin-right: 0.5rem; margin-left: 2rem;">
                    <span class="profile-image" style="width: 2rem; height: 2rem; margin: 0rem; padding: 0rem; border: 0.1rem solid #5C5B57;">
                        <%
                        if(usuario != null){
                        %>
                            <img id="profile" src="data:image/jpeg;base64,<%=usuario.getImageAsBase64()%>" alt="MyProfile" class="nav-profile-image" style="padding: 0rem;">
                        <%
                        } else {
                        %>
                            <img id="profile" src="pictures/tomilloprofile.png" alt="MyProfile" class="nav-profile-image" style="padding: 0rem;">
                        <%
                        }
                        %>
                    </span>
                    <%
                    if(usuario != null){
                        out.print(usuario.getUsername());
                    } else {
                        %>Perfil<%
                    }
                    %>
                </a></li>
            </ul>    
        </nav>
    </header>

    <body class="container-fluid">
        <div class="second-grey-background row align-items-center">
            <h4>Búsqueda Avanzada</h4>
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card-back" style="margin-top: 1.5rem; margin-bottom: 3rem;">
                    <p class="row align-items-center" style="font-size: 1rem; display: block;">Aquí­ puedes buscar una publicación con más detalle</p>
                    <form action="AdvancedSearchServlet" method="post">
                        <input type="hidden" id="CategoriaSeleccionada" name="CategoriaSeleccionada" value="">
                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <p style="display: inline-block; margin: 0rem;">Buscar desde el dí­a...</p>
    
                                <div class="custom-date-wrapper" style="display: inline-block;">
                                    <input type="date" style="margin: 0rem; padding : 0rem; display: inline-block;  width: 100%;" name="datePickerInicio">
                                    <img src="pictures/Calendar.png" alt="Calendario" class="calendar-icon">
                                </div>
                                
                                <p style="display: inline-block; margin: 0rem;">hasta el día...</p>
                                <div class="custom-date-wrapper" style="display: inline-block;">
                                    <input type="date" style="margin: 0rem; padding : 0rem; display: inline-block; width: 100%;" name="datePickerFin">
                                    <img src="pictures/Calendar.png" alt="Calendario" class="calendar-icon">
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin: 0.5rem;">
                            <div class="col-md-12">
                                <div class="col-md-12">
                                    <div class="dropdown-center">
                                        <button id="DDcategoria" class="btn button-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                          Selecciona una Categorí­a
                                        </button>
                                        <ul class="dropdown-menu content">
                                            <%
                                            List<String> categorias = (List<String>)request.getAttribute("categorias");

                                            for (String cat : categorias) {
                                                out.println("<li class=\"dropdown-item content-item\">" + cat + "</li>");
                                            }
                                            %>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <textarea id="post" name="post" class="input" type="text" style="width: 90%; height:19rem; border-radius: 3rem; margin-bottom: 1rem; padding: 2rem;" placeholder="Escribe lo que recuerdas..."></textarea>
                            </div>
                        </div>
                        <input class="button-login" type="submit" value="Buscar">
                    </form>
                </div>
            </div>
            <div class="col-md-2"></div>
            <h4 style="padding: 0.7rem;">Resultados de búsqueda:</h4>
            <%
                List<Publicacion> publicaciones;
                if(request.getAttribute("publicaciones") != null) {
                    publicaciones = (List<Publicacion>)request.getAttribute("publicaciones");
                    for (Publicacion post : publicaciones) {
                        if(post.getImagen() != null){
                        %>
                        <div class="post-text">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="stack">
                                        <div class="card">
                                            <div class="post-img">
                                                <img class="image" src="data:image/jpeg;base64,<%=post.getImageAsBase64()%>">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9" style="font-size: 2.6rem;">
                                    <h3><%out.println(post.getFormattedDate());%></h3>
                                    <h4><%out.println(post.getUsuario());%></h4>
                                    <br>
                                    <h1 class="title"><%out.println(post.getTitulo());%></h1>
                                    <h2 class="class"><%out.println(post.getCategoria());%></h2>
                                    <p class="content-post"><%out.println(post.getContenido());%></p>
                                </div>
                            </div>
                        </div>
                        <%
                        } else {
                        %>
                        <div class="post-text">
                            <h3><%out.println(post.getFormattedDate());%></h3>
                            <h4><%out.println(post.getUsuario());%></h4>
                            <br>
                            <h1 class="title"><%out.println(post.getTitulo());%></h1>
                            <h2 class="class"><%out.println(post.getCategoria());%></h2>
                            <p class="content-post"><%out.println(post.getContenido());%></p>
                        </div>
                        <%
                        }
                    }
                }
            %>
        </div>
        </div>
        <div class="row align-items-center">
            <footer class="container-fluid">
                <h3>ContÃ¡ctanos</h3>
                <p>Marla Judith Estrada Valdez <br> Claudia Itzel HernÃ¡ndez Vargas</p>            
            </footer>
        </div>
    </body>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    <script>
    $('.dropdown-item').click(function(){
        var text = $(this).text(); // Obtener el texto de la opción seleccionada
        $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
        $('#CategoriaSeleccionada').val(text);
    });
    </script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>