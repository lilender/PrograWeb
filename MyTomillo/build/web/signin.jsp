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

    <body class="container-fluid">
        
        <div class="light-background row">
            
            <div class="col-md-6">
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
                %>
                </div>
                <h1>BIENVENIDO</h1>
                <h2>a la comunidad de ovejas</h2>
                <br>

                <div class="box">
                    <p style="padding: 1rem;">Para formar parte de la comunidad de ovejas, por favor, ayúdanos llenano la siguiente información</p>
                </div>
                
                    <form action="SignInServlet" method="post" enctype="multipart/form-data" onsubmit="return validacionSignIn()">
                        <div class="box d-flex justify-content-center">
                            <input type="text" id="Iname" name="Iname" placeholder="Ingrese Nombre(s)" style="width: 100%; margin: .7rem;">
                        </div>
                        
                        <div class="box d-flex justify-content-center">
                            <input type="text" id="ILastname" name="ILastname" placeholder="Ingrese Apellido Paterno" style="width: 50%; margin: .7rem;">                        
                            <input type="text" id="ILastname2" name="ILastname2" placeholder="Ingrese Apellido Materno" style="width: 50%; margin: .7rem;">                        
                        </div>

                        <div class="box d-flex justify-content-center">
                            <input type="email" id="Imail" name="Imail" placeholder="Ingrese correo electrónico" style="width: 100%; margin: .7rem; margin-bottom: 1.5rem;">                        
                        </div>
                        
                        <div class="box d-flex justify-content-center" style="margin-right: 8rem;">
                            <div class="box-input">
                                <img id="previewImage" src="pictures/TomilloProfileShadow.png" alt="Foto de perfil" style="width: 70%; margin-bottom: 1rem;">
                                <br>
                                <input type="file" name="file" id="file" class="inputfile" style="height: 2.7rem;" onchange="previewFile()">
                                <label class="label-file" for="file" style="height: 2.7rem;"></label>
                            </div>
                            <div class="box-input" style="margin-bottom: 0rem;">
                                <p style="margin: 0.1rem;">Ingrese fecha de nacimiento:</p>
                                <div class="custom-date-wrapper" style="width: 16rem;">
                                    <input type="date" style="margin: 0.9rem; padding : 0rem; width: 16rem" id="datePicker" name="datePicker">
                                    <img src="pictures/Calendar.png" alt="Calendario" class="calendar-icon">
                                </div>
                                <input type="text" id="Iusername" name="Iusername" placeholder="Ingrese nombre de usuario" style="width: 100%; margin: .9rem;">                        
                                <input type="password" id="Ipassword" name="Ipassword" placeholder="Ingrese contraseña" style="width: 100%; margin: .9rem;">                        
                                <input type="password" id="Ipassword2" name="Ipassword2" placeholder="Confirme contraseña" style="width: 100%; margin: .9rem;">                        
                            </div>
                        </div>
                        <p style="margin: 0.1rem;">Seleccione su género:</p>
                        <div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Iradio" id="Iradio1" value="M" checked>
                            <label class="form-check-label" for="Iradio1">
                                Masculino
                            </label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Iradio" value="F" id="Iradio2">
                            <label class="form-check-label" for="Iradio2">
                                Femenino
                            </label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="Iradio" value="N" id="Iradio3">
                            <label class="form-check-label" for="Iradio3">
                                Prefiero no especificar
                            </label>
                            </div>
                        </div>
                        <button class="button-primary" type="submit" style="width: 25%; margin: 1rem;">Sign In</button>
                    </form>  
                    
            </div>
            
            <div class="grey-background col-md-6 d-flex justify-content-center">
                <img src="pictures/Ovejas2.png" alt="MyTomillo" style="width: 75%; padding: 2rem; align-self: center;">
            </div>
        </div>
        
        <div class="row align-items-center">
            <footer class="container-fluid">
                <h3 style="padding-top: 0.5rem;">Contáctanos</h3>
                <p>Marla Judith Estrada Valdez <br> Claudia Itzel Hernández Vargas</p>            
            </footer>
        </div>
    </body>
    <script src="script.js"></script>
</html>