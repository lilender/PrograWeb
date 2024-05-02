/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import DAO.DAOPublicacion;
import entidades.Publicacion;
import DAO.DAOCategoria;
import entidades.Categoria;
import jakarta.servlet.RequestDispatcher;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Part;
import java.io.InputStream;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author estra
 */
@WebServlet(name = "EditPostServlet", urlPatterns = {"/EditPostServlet"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
                 maxFileSize = 1024 * 1024 * 10,      // 10MB
                 maxRequestSize = 1024 * 1024 * 50)  // 50MB
public class EditPostServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RequestDispatcher rd;
        
String idpost = request.getParameter("IpostId");
System.out.println("ID Post: " + idpost); // Print the value of idpost to the console
int id_post = Integer.parseInt(idpost.trim());


        String titulo = request.getParameter("Iname");
        
        String contenido = request.getParameter("post");
        
        //request.getParameter("IpostId")
        
        // Get the Part corresponding to the file input field
        Part filePart = request.getPart("file");
            
        // Read the content of the uploaded file
        InputStream fileContent = filePart.getInputStream();

        // Convert the InputStream to a byte array
        byte[] imageData = fileContent.readAllBytes();

        Blob image = null;

        if (imageData.length != 0){
            try {
                image = new javax.sql.rowset.serial.SerialBlob(imageData);
            } catch (Exception e) {
                // Handle exception
            }
        }
        // Remember to close the InputStream
        fileContent.close();
        
        String categoria = request.getParameter("CategoriaSeleccionada").trim();
        
        Categoria cat = new Categoria(categoria);
        DAOCategoria daocat = new DAOCategoria();
        cat = daocat.add(cat);
        
        
        Publicacion post = new Publicacion( titulo, contenido, image, cat.getIdCategoria(), id_post);
        
        
        DAOPublicacion daopost = new DAOPublicacion();
        int result = daopost.updatepost(post);
        
        String pantalla;
        switch (result) {
            case 1 -> {
                request.setAttribute("success", "Publicación editada.");
                response.sendRedirect("ProfileServlet");
            }
            default -> {
                request.setAttribute("error", "No se pudo editar la publicación, intente de nuevo.");
                pantalla = "profile.jsp";
                rd = request.getRequestDispatcher(pantalla);
                rd.forward(request, response);
            }
        }
        
    }


}
