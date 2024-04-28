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
import jakarta.servlet.http.HttpSession;

@WebServlet(name = "LogInServlet", urlPatterns = {"/LogInServlet"})
public class LogInServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("LOGIN POST");
        String user = request.getParameter("Iusername");
        String pass = request.getParameter("Ipassword");
        
        DAOUsuario daoUsu = new DAOUsuario();
        Usuario usuario = new Usuario(user, pass);
        
        
        Object loginUsuario = daoUsu.login(usuario);
        
        Usuario usu = new Usuario();
        usu = (Usuario)loginUsuario;
        
        if(usu.getIdUsuario()!= 0){
            HttpSession session = request.getSession();
            session.setAttribute("Usuario", usu);
            response.sendRedirect("DashboardServlet");
        }else{
            request.setAttribute("error", "Usuario o contraseña incorrectos");
            RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
            rd.forward(request, response);
        }
        
        
        
    }
    
}
