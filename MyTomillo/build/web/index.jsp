<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        
        <form id ="formLogin" action="LogInServlet" method="post">
            <label for="fname">Usuario:</label><br>
            <input type="text" id="fusuario" name="fusuario">
            <label for="fcontra">Contraseña:</label><br>
            <input type="text" id="fcontra" name="fcontra">
            <br>
            <br>
            <input type="submit" id="Iniciar" name="bIniciarSesion" value="Ingresar">
            <button>
                <a href="https://www.fcfm.uanl.mx/"> registrarse </a>
            </button>
        </form>
        
        <%%>
    </body>
</html>
