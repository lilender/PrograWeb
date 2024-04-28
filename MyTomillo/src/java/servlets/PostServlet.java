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
@WebServlet(name = "PostServlet", urlPatterns = {"/PostServlet"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
                 maxFileSize = 1024 * 1024 * 50,      // 50MB
                 maxRequestSize = 1024 * 1024 * 100)  // 100MB
public class PostServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        List<String> categorias;
        DAOCategoria daocat = new DAOCategoria();
        categorias = daocat.getcats();
        
        request.setAttribute("categorias", categorias);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("post.jsp");
        dispatcher.forward(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("POST... POST");
        RequestDispatcher rd;
        
        int id_usuario = Integer.parseInt(request.getParameter("IuserId").trim());
        
        String titulo = request.getParameter("Iname");
        
        String contenido = request.getParameter("post");
        
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
        
        String categoria = request.getParameter("CategoriaSeleccionada");
        
        Categoria cat = new Categoria(categoria);
        DAOCategoria daocat = new DAOCategoria();
        cat = daocat.add(cat);
        
        Publicacion post = new Publicacion(id_usuario, titulo, contenido, image, cat.getIdCategoria());
        DAOPublicacion daopost = new DAOPublicacion();
        
        int result = daopost.newpost(post);
        String pantalla;
        switch (result) {
            case 1 -> {
                request.setAttribute("success", "Publicación creada.");
                pantalla = "dashboard.jsp";
                rd = request.getRequestDispatcher(pantalla);
                rd.forward(request, response);
            }
            default -> {
                request.setAttribute("error", "No se pudo guardar la información, intente de nuevo.");
                pantalla = "post.jsp";
                rd = request.getRequestDispatcher(pantalla);
                rd.forward(request, response);
            }
        }
    }


}
