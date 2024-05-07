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
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author estra
 */
@WebServlet(name = "AdvancedSearchServlet", urlPatterns = {"/AdvancedSearchServlet"})
public class AdvancedSearchServlet extends HttpServlet {

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<String> categorias;
        DAOCategoria daocat = new DAOCategoria();
        categorias = daocat.getcats();
        
        request.setAttribute("categorias", categorias);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("AdvancedSearch.jsp");
        dispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String f_inicio_string = request.getParameter("datePickerInicio");
        String f_fin_string = request.getParameter("datePickerFin");
        
        java.util.Date utilDate;
        Date f_inicio = null;
        if (!"".equals(f_inicio_string)){
            try {
                utilDate = new SimpleDateFormat("yyyy-MM-dd").parse(f_inicio_string);
            } catch (ParseException ex) {
                return;
            }
            f_inicio = new java.sql.Date(utilDate.getTime());
        }
        Date f_fin = null;
        if (!"".equals(f_fin_string)){
            try {
                utilDate = new SimpleDateFormat("yyyy-MM-dd").parse(f_fin_string);
            } catch (ParseException ex) {
                return;
            }
            f_fin = new java.sql.Date(utilDate.getTime());
        }
        int offset = 0;
        
        String categoria = request.getParameter("CategoriaSeleccionada").trim();
        Categoria cat = new Categoria(categoria);
        
        if("".equals(categoria)){
            cat.setIdCategoria(0);
        } else {
            DAOCategoria daocat = new DAOCategoria();
            cat = daocat.add(cat);
        }

        String texto = request.getParameter("post").trim();

        List<Publicacion> publicaciones;
        DAOPublicacion daopost = new DAOPublicacion();
        
        publicaciones = daopost.getAdvancedSearchPosts(f_inicio, f_fin, offset, cat.getIdCategoria(),texto);
        
        request.setAttribute("publicaciones", publicaciones);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("AdvancedSearch.jsp");
        
        List<String> categorias;
        DAOCategoria daocat = new DAOCategoria();
        categorias = daocat.getcats();
        
        request.setAttribute("categorias", categorias);
        
        dispatcher.forward(request, response);
        
    }



}
