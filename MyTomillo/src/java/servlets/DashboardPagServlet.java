/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import DAO.DAOPublicacion;
import entidades.Publicacion;
import DAO.DAOCategoria;
import entidades.Categoria;
import entidades.Usuario;
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
@WebServlet(name = "DashboardPagServlet", urlPatterns = {"/DashboardPagServlet"})
public class DashboardPagServlet extends HttpServlet {

   @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String pagina = request.getParameter("Pag");
        int pag = Integer.parseInt(pagina.trim());
        
        String search = request.getParameter("Search").trim();
        if ("true".equals(search)){
            String texto = request.getParameter("Searchword").trim();

            List<Publicacion> publicaciones;
            DAOPublicacion daopost = new DAOPublicacion();

            publicaciones = daopost.getSearchPosts(texto,pag);

            request.setAttribute("n_paginas",daopost.getnSearchPosts(texto)/10+1); 
            request.setAttribute("search", publicaciones);
            request.setAttribute("searchword", texto);
            request.setAttribute("Pagina", pag);
            RequestDispatcher dispatcher = request.getRequestDispatcher("dashboard.jsp");
            dispatcher.forward(request, response);
        } else {
            List<Publicacion> publicaciones;
            DAOPublicacion daopost = new DAOPublicacion();
            publicaciones = daopost.getDashboardPosts(pag);
            request.setAttribute("n_paginas",daopost.getnDashboardPosts()/10+1); 
            request.setAttribute("publicaciones", publicaciones);
            request.setAttribute("Pagina", pag);

            RequestDispatcher dispatcher = request.getRequestDispatcher("dashboard.jsp");
            dispatcher.forward(request, response);
        }
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
