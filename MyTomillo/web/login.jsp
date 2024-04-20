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

    <body onload="myFunction('<%= request.getAttribute("error") %>')" class="container-fluid">

        <div class="loader-section" id="loader">
            <div class="cs-loader">
              <div class="cs-loader-inner">
                <div class="sheep"></div>
                <div class="sheep"></div>
                <div class="sheep"></div>
                <div class="sheep"></div>
                <div class="sheep"></div>
                <div class="sheep"></div>
              </div>        
            </div>
            <div style="position: absolute; top:52%; left: 45%">
                <div class="intern"></div>
            </div>
            <div class="fence">
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="grass"></div>
            </div>
          </div>

        <div class="row animate-bottom" id="myDiv" style="display: none;">
            <div class="light-background col-md-6">
                <h1>BIENVENIDO</h1>
                <h2>a la comunidad de ovejas</h2>
                <img src="pictures/Ovejas2.png" alt="MyTomillo" style="width: 72%; padding: 2rem;">
            </div>
            
            <div class="grey-background col-md-6">
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
                <img src="pictures/MyTomilloText.png" alt="MyTomillo" style="width: 35%; padding: 1rem;">
                
                <form id ="formLogin" action="LogInServlet" method="post">
                    <div class="align-self-center box-input">
                        <div class="d-flex justify-content-center">
                            <input class="input-login" type="text" id="Iusername" name="Iusername" placeholder="Ingrese Nombre de Usuario">
                        </div>
                    </div>
                    
                    <div class="box-input">
                        <input class="input-login" type="password" id="Ipassword" name="Ipassword" placeholder="Ingrese Contraseña">                        
                    </div>
                    
                    <div class="box-input">
                        <input class="button-login" type="submit" value="Log In">
                    </div>
                </form>
                
                <p class="p-login">¿No tienes una cuenta? ¡Regístrate!</p>
                <button class="button-login" onclick="toSignIn()"> Sign In</button>
                <br>
                <br>
                <p class="p-login" style="padding-top: 2rem;">¡También puedes hechar un vistazo!</p>
                <button class="button-secondary" onclick="toDashboard()">Ingresar sin cuenta</button>
            </div>
        </div>
        <div  style="display: none;" class="row align-items-center" id="myFoot">
            <footer class="container-fluid">
                <h3 style="padding-top: 0.5rem;">Contáctanos</h3>
                <p>Marla Judith Estrada Valdez <br> Claudia Itzel Hernández Vargas</p>            
            </footer>
        </div>

        
    </body>

    <!--Scripts-->
    <script src="script.js"></script>
</html>