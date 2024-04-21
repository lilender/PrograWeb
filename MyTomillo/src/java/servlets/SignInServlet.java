/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import DAO.DAOUsuario;
import entidades.Usuario;
import jakarta.servlet.RequestDispatcher;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import jakarta.servlet.annotation.MultipartConfig;
import java.io.InputStream;
import java.sql.Date;
import java.sql.Blob;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;

/**
 *
 * @author estra
 */
@WebServlet(name = "SignInServlet", urlPatterns = {"/SignInServlet"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
                 maxFileSize = 1024 * 1024 * 10,      // 10MB
                 maxRequestSize = 1024 * 1024 * 50)  // 50MB
public class SignInServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("SIGNIN POST");
        RequestDispatcher rd;
        
        String regex = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$";
        Pattern pattern = Pattern.compile(regex);

        String names = request.getParameter("Iname");
        if (!pattern.matcher(names).matches()) {
            request.setAttribute("error", "Ingrese su nombre. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        
        String lastname = request.getParameter("ILastname");
        if (!pattern.matcher(lastname).matches()){
            request.setAttribute("error", "Ingrese su apellido paterno. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        String lastname2 = request.getParameter("ILastname2");
        if (!pattern.matcher(lastname2).matches()){
            request.setAttribute("error", "Ingrese su apellido materno. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        regex = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+([a-z0-9.!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9]+\\.)+[a-z0-9]+$";
        pattern = Pattern.compile(regex);
        String email = request.getParameter("Imail");
        if (!pattern.matcher(email).matches()){
            request.setAttribute("error", "Ingrese su correo electrónico. Recuerde usar un formato válido de correo.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        // Get the Part corresponding to the file input field
        Part filePart = request.getPart("file");
            
        // Read the content of the uploaded file
        InputStream fileContent = filePart.getInputStream();

        // Convert the InputStream to a byte array
        byte[] imageData = fileContent.readAllBytes();

        if (imageData.length == 0){
            request.setAttribute("error", "Seleccione una imágen.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        // Remember to close the InputStream
        fileContent.close();
        
        Blob image = null;
        try {
                image = new javax.sql.rowset.serial.SerialBlob(imageData);
            } catch (Exception e) {
                // Handle exception
            }
        
        String dateString = request.getParameter("datePicker");
        if ("".equals(dateString)){
            request.setAttribute("error", "Ingrese su fecha de nacimiento.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        
        java.util.Date utilDate;
        try {
            utilDate = new SimpleDateFormat("yyyy-MM-dd").parse(dateString);
        } catch (ParseException ex) {
            return;
        }
        Date birth = new java.sql.Date(utilDate.getTime());


        String user = request.getParameter("Iusername");
        if ("".equals(user)){
            request.setAttribute("error", "Ingrese su nombre de usuario.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        
        regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!\"\"#$%&/=´@¨?¿:;,._\\-+*~{}\\[\\]'|]).{8,}$";
        pattern = Pattern.compile(regex);
        String pass = request.getParameter("Ipassword");
        if (!pattern.matcher(pass).matches()){
            request.setAttribute("error", "Ingrese su contraseña. Debe incluir:<br/>Mínimo 8 caracteres<br/>Mínimo una letra mayúscula<br/>Mínimo una letra minúscula<br/>Mínimo un número<br/>Mínimo un signo de puntuación");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        String pass2 = request.getParameter("Ipassword2");
        if ("".equals(pass2)){
            request.setAttribute("error", "Ingrese su contraseña de nuevo.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        if(!pass.equals(pass2)){
            request.setAttribute("error", "Las contraseñas no coinciden.");
            rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
            return;
        }
        String genero = request.getParameter("Iradio");
        if("N".equals(genero)){
            genero = null;
        }
        DAOUsuario daoUsu = new DAOUsuario();
        Usuario usuario = new Usuario(user, email, pass, names, lastname, lastname2, birth, image, genero);

        int result = daoUsu.signin(usuario);

        String pantalla;
        switch (result) {
            case 1 -> {
                request.setAttribute("success", "Usuario registrado correctamente. Inicie sesión.");
                pantalla = "login.jsp";
            }
            case 2 -> {
                request.setAttribute("error", "El nombre de usuario ya existe.");
                pantalla = "signin.jsp";
            }
            case 3 -> {
                request.setAttribute("error", "Fecha de nacimiento inválida.");
                pantalla = "signin.jsp";
            }
            default -> {
                request.setAttribute("error", "No se pudo registrar el usuario, intente de nuevo.");
                pantalla = "signin.jsp";
            }
        }

        rd = request.getRequestDispatcher(pantalla);
        rd.forward(request, response);
        
        
    }

}
