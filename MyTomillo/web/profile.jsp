<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

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
                    <form action="dashboard.jsp">
                        <div class="input-group mb-6">
                            <input type="text" placeholder="Buscar publicación..." class="search-bar">
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
                        <img src="pictures/TomilloProfile.png" alt="MyProfile" class="nav-profile-image" style="padding: 0rem;">
                    </span>
                    Perfil
                </a></li>
            </ul>    
        </nav>
    </header>

    <body class="container-fluid">
        <div class="second-grey-background row">
            
            <div class="col-md-5">
                <div class="card-back">
                        <span class="profile-image">
                            <img src="pictures/tomilloprofile.png" alt="Profile">
                        </span>
                    <div class="row align-items-center">
                        <div class="col-md-12 align-items-center">
                            <span><h1 id="Susername">LittleEnder</h1></span>
                            <div class="box-input">
                                <form action="/upload" method="post" enctype="multipart/form-data">
                                    <input class="input" type="text" id="Iusername" name="Iusername" placeholder="LittleEnder" style="margin: .7rem; display: none;">
                                    <input class="input" type="text" id="Iname" name="Iname" placeholder="Marla Judith" style="margin: .7rem; display: none;">
                                    <input class="input" type="text" id="ILastname" name="ILastname" placeholder="Estrada" style="margin: .7rem; display: none;">                        
                                    <input class="input" type="text" id="ILastname2" name="ILastname2" placeholder="Valdez" style="margin: .7rem; display: none;">       
                                    <input class="input" type="email" id="Imail" name="Imail" placeholder="tomillo@uanl.edu.mx" style="margin: .7rem; display: none;">    
                                    <input class="input" type="password" id="Ipassword" name="Imail" placeholder="password" style="margin: .7rem; display: none;">

                                    <div class="box-input">
                                        <input type="file" name="file" id="file" class="inputfile" style="height: 2.8rem; margin: .7rem; display: none;">
                                        <label id="Ifile" class="label-file" for="file" style="height: 2.8rem; margin: .7rem; display: none;"></label> 
                                    </div>                                    
                                </form>
                            </div>
                            <span><p id="Sname">Marla Judith Estrada Valdez </p></span>
                            <span><p id="Sage">19 años</p></span>
                            <span><p id="Smail">tomillo@uanl.edu.mx</p></span>
                            <button id="BEditData" class="button-primary">Editar Perfil</button>
                            <button id="BEditPassword" class="button-primary" style="display: none;">Editar Contraseña</button>
                            <button id="BSaveData" class=" button-primary" style="display: none;">Guardar Información</button>
                            <button id="BLogOut" class="button-primary" style="display: flex; margin: 0 auto" onclick="logOut()">Cerrar Sesión</button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="col-md-7">
                <div id="profile-publications" style="margin-top: 4rem;">
                    <div class="row align-items-center">
                        <div class="col-md-12 align-items-center">

                            <h1 style="font-size: 2.6rem; color: #f6f3f0; -webkit-text-stroke: .01rem #f6f3f0;">Publicaciones de LittleEnder</h1>

                            <div class="post-text" style="width: 100%;">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="stack">
                                            <div class="card">
                                                <div class="post-img">
                                                    <img class="image" src="pictures/4.jpg" alt="stock">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9" style="font-size: 2.6rem;">
                                        <h3>09/02/2024</h3>
                                        <h4>LittleEnder</h4>
                                        <br>
                                        <h1 class="title">Hoy compré una oveja</h1>
                                        <h2 class="class">Mascotas</h2>
                                        <p class="content-post">Lorem ipsum dolor sit amet, ct amet purus.</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex flex-row-reverse">
                                        <button class="button-primary BDeletePost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Eliminar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#1a6f24" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                              </svg>
                                        </button>
                                        <button class="button-primary BEditPost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Editar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1a6f24" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                              </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="post-text" style="width: 100%;">
                                <h3>09/02/2024</h3>
                                <h4>LittleEnder</h4>
                                <br>
                                <h1 class="title">Hoy compré una oveja</h1>
                                <h2 class="class">Mascotas</h2>
                                <p class="content-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Cursus in hac habitasse platea dictumst quisque. Ipsum a arcu cursus vitae congue. Eget aliquet nibh praesent tristique magna sit amet purus.</p>
                                
                                <div>
                                    <div class="d-flex flex-row-reverse">
                                        <button class="button-primary BDeletePost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Eliminar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#1a6f24" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                              </svg>
                                        </button>
                                        <button class="button-primary BEditPost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Editar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1a6f24" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                              </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="post-text" style="width: 100%;">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="stack">
                                            <div class="card">
                                                <div class="post-img">
                                                    <img class="image" src="pictures/4.jpg" alt="stock">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9" style="font-size: 2.6rem;">
                                        <h3>09/02/2024</h3>
                                        <h4>LittleEnder</h4>
                                        <br>
                                        <h1 class="title">Hoy compré una oveja</h1>
                                        <h2 class="class">Mascotas</h2>
                                        <p class="content-post">Lorem ipsum dolor sit amet, ct amet purus.</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex flex-row-reverse">
                                        <button class="button-primary BDeletePost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Eliminar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#1a6f24" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                              </svg>
                                        </button>
                                        <button class="button-primary BEditPost" style="width: 16%; align-self: left; display: inline; margin: 0.2rem; padding: 0.2rem;">Editar 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1a6f24" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                              </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
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

</html>