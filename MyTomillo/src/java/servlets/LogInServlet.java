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

@WebServlet(name = "LogInServlet", urlPatterns = {"/LogInServlet"})
public class LogInServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("LOGIN POST");
        String user = request.getParameter("fusuario");
        String pass = request.getParameter("fcontra");
        
        DAOUsuario daoUsu = new DAOUsuario();
        Usuario usuario = new Usuario(user, pass);
        
        
        Object loginUsuario = daoUsu.login(usuario);
        
        Usuario usu = new Usuario();
        usu = (Usuario)loginUsuario;
        
        String pantalla;
        if(usu.getIdUsuario()!= 0){
            pantalla = "dashboard.jsp";
            request.setAttribute("Usuario", usu);
        }else{
            pantalla = "AA.jsp";
        }
        
        RequestDispatcher rd = request.getRequestDispatcher(pantalla);
        rd.forward(request, response);
        
    }
    
}
