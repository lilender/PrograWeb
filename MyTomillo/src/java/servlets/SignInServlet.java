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
        String names = request.getParameter("Iname");
        String lastname = request.getParameter("ILastname");
        String lastname2 = request.getParameter("ILastname2");
        String email = request.getParameter("Imail");
        
        // Get the Part corresponding to the file input field
        Part filePart = request.getPart("file");

        // Read the content of the uploaded file
        InputStream fileContent = filePart.getInputStream();

        // Convert the InputStream to a byte array
        byte[] imageData = fileContent.readAllBytes();

        // Remember to close the InputStream
        fileContent.close();
        
        Blob image = null;
        try {
                image = new javax.sql.rowset.serial.SerialBlob(imageData);
            } catch (Exception e) {
                // Handle exception
            }
        String dateString = request.getParameter("datePicker");
        java.util.Date utilDate;
        try {
            utilDate = new SimpleDateFormat("yyyy-MM-dd").parse(dateString);
        } catch (ParseException ex) {
            return;
        }
        Date birth = new java.sql.Date(utilDate.getTime());


        String user = request.getParameter("Iusername");
        String pass = request.getParameter("Ipassword");
        String pass2 = request.getParameter("Ipassword2");
        if(!pass.equals(pass2)){
            request.setAttribute("error", "Las contraseñas no coinciden.");
            RequestDispatcher rd = request.getRequestDispatcher("signin.jsp");
            rd.forward(request, response);
        } else {
            DAOUsuario daoUsu = new DAOUsuario();
            Usuario usuario = new Usuario(user, email, pass, names, lastname, lastname2, birth, image);
            
            
            boolean aceptado = daoUsu.signin(usuario);
            
            String pantalla;
            if(aceptado){
                request.setAttribute("success", "Usuario registrado correctamente. Inicie sesión.");
                pantalla = "login.jsp";
            }else{
                request.setAttribute("error", "No se pudo registrar el usuario, intente de nuevo.");
                pantalla = "signin.jsp";
            }
            
            RequestDispatcher rd = request.getRequestDispatcher(pantalla);
            rd.forward(request, response);

            
        }

        
        
    }

}
