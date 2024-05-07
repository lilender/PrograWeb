<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="entidades.Usuario"%>

<%Usuario usuario = (Usuario)session.getAttribute("Usuario");
%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <!-- Bootstrap JS -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

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
                    <%out.print(usuario.getUsername());%>
                </a></li>
            </ul>    
        </nav>
    </header>

    <body class="container-fluid">
        <div class="second-grey-background row align-items-center">
            <h4>Dile al rebaño lo que piensas</h4>

            <div class="post-text" style="width: 80%; padding: 1rem;">
                <div id="alert">
                        <%
                        if(request.getAttribute("error") != null){
                            %>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong><%= request.getAttribute("error") %></strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <%
                        }
                        if(request.getAttribute("success") != null){
                            %>
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong><%= request.getAttribute("success") %></strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <%
                        }
                        %>
                </div>
                <form action="PostServlet" method="post" enctype="multipart/form-data" onsubmit="return validacionPost()">
                    <input type="hidden" id="IuserId" name="IuserId" value="<%out.println(usuario.getIdUsuario());%>">
                    <input type="hidden" id="CategoriaSeleccionada" name="CategoriaSeleccionada" value="">

                    <div class="row">
                        <div class="col-md-4 align-self-center">
                            <div class="square-bg-photo">
                                <img id="previewImage" src="pictures/PhotoDefault.png" alt="MyTomillo">
                            </div>
                            <div class="box-input" >
                                <input type="file" name="file" id="file" class="inputfile" style="width: 70%; height: 100%;" onchange="previewFile('previewImage','file')">
                                <label class="label-file" for="file" style="width: 70%; height: 100%; background: #a4c780b7;">Agregar imagen</label>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3 id="H3Date"></h3>
                            <h4><%out.print(usuario.getUsername());%></h4>
                            <br>
                            <div class="row justify-content-center" style="margin: 1rem;">
                                <div class="col-md-6 align-items-center">
                                    <div class="box-input">
                                        <input type="text" id="Iname" name="Iname" placeholder="Dale un nombre a tu publicación" style="width: 100%;">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="dropdown-center">
                                        <button id="DDcategoria" class="btn button-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                          Selecciona una Categorí­a
                                        </button>
                                        <ul class="dropdown-menu content" id="categoryList">
                                            <%
                                            List<String> categorias = (List<String>)request.getAttribute("categorias");

                                            for (String cat : categorias) {
                                                out.println("<li class=\"dropdown-item content-item\">" + cat + "</li>");
                                            }
                                            %>
                                          <li class="">
                                                <input id="newCategoryInput" type="text" placeholder="Nueva Categoría" style="width: 60%">
                                                <button type="button" id="addCategoryButton">Agregar</button>
                                          </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-12">
                                        <textarea id="post" name="post" class="input" type="text" style="width: 100%; height:19rem; resize: none;" placeholder="Escribe lo que piensas..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <input id="Postf" class="button-login" type="submit" value="Publicar">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row align-items-center">
            <footer class="container-fluid">
                <h3>Contáctanos</h3>
                <p>Marla Judith Estrada Valdez <br> Claudia Itzel Hernández Vargas</p>            
            </footer>
        </div>
    </body>

    <!--JQuery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="script.js"></script>
        <script>
        $(document).ready(function() {
            $("#addCategoryButton").click(function() {
                var newCategoryInput = document.getElementById("newCategoryInput");
                var newCategoryName = newCategoryInput.value.trim();
                if (newCategoryName.length > 15) {
                        alertDiv.innerHTML = 
                        '<strong>Categoria inválida. Máximo de 15 carácteres.</strong>' +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                        alertbox.appendChild(alertDiv);
                        return;
                }
                if (newCategoryName !== "") {
                    var newItem = document.createElement("li");
                    newItem.classList.add("dropdown-item", "content-item");
                    newItem.textContent = newCategoryName;

                    var categoryList = document.getElementById("categoryList");
                    categoryList.insertBefore(newItem, categoryList.lastElementChild);
                    
                    $('.dropdown-item').click(function(){
                        var text = $(this).text(); // Obtener el texto de la opción seleccionada
                        $('#DDcategoria').text(text); // Establecer el texto del botón del dropdown con el texto de la opción seleccionada
                        $('#CategoriaSeleccionada').val(text);
                    });

                    newCategoryInput.value = "";
                }
            });
        });
        </script>

</html>