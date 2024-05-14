package servlets;

import DAO.DAOCategoria;
import DAO.DAOUsuario;
import entidades.Usuario;
import entidades.Publicacion;
import DAO.DAOPublicacion;
import jakarta.servlet.RequestDispatcher;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.http.HttpSession;
import java.io.InputStream;
import java.sql.Blob;
import java.util.List;
import java.util.regex.Pattern;


/**
 *
 * @author estra
 */
@WebServlet(name = "ProfileServlet", urlPatterns = {"/ProfileServlet"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
                 maxFileSize = 1024 * 1024 * 10,      // 10MB
                 maxRequestSize = 1024 * 1024 * 50)  // 50MB
public class ProfileServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        Usuario usuario = (Usuario)session.getAttribute("Usuario");
        
        List<Publicacion> publicaciones;
        DAOPublicacion daopost = new DAOPublicacion();
        publicaciones = daopost.getUserPosts(usuario.getIdUsuario());
        
        List<String> categorias;
        DAOCategoria daocat = new DAOCategoria();
        categorias = daocat.getcats();
        
        request.setAttribute("categorias", categorias);
        
        request.setAttribute("success", request.getAttribute("success"));
        request.setAttribute("error", request.getAttribute("error"));

        request.setAttribute("publicaciones", publicaciones);
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("profile.jsp");
        dispatcher.forward(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("PROFILE POST");
        RequestDispatcher rd;
        
        String regex = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$";
        Pattern pattern = Pattern.compile(regex);

        int id = Integer.parseInt(request.getParameter("IuserId").trim());
        
        String user = request.getParameter("Iusername");
        if ("".equals(user)){
            request.setAttribute("error", "Ingrese su nombre de usuario.");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        
        String names = request.getParameter("Iname");
        if (!pattern.matcher(names).matches()) {
            request.setAttribute("error", "Nombre inválido. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        
        String lastname = request.getParameter("ILastname");
        if (!pattern.matcher(lastname).matches()){
            request.setAttribute("error", "Apellido paterno inválido. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        String lastname2 = request.getParameter("ILastname2");
        if (!pattern.matcher(lastname2).matches()){
            request.setAttribute("error", "Apellido materno inválido. Recuerde solo usar carácteres alfanuméricos.");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        regex = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+([a-z0-9.!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9]+\\.)+[a-z0-9]+$";
        pattern = Pattern.compile(regex);
        String email = request.getParameter("Imail");
        if (!pattern.matcher(email).matches()){
            request.setAttribute("error", "Correo electrónico inválido. Recuerde usar un formato válido de correo.");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        
        regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()¡!\"\"#$%&/=´@¨?¿:;,._\\-+*~{}\\[\\]'|]).{8,}$";
        pattern = Pattern.compile(regex);
        String pass = request.getParameter("Ipassword");
        if (!pattern.matcher(pass).matches()){
            request.setAttribute("error", "Contraseña inválida. Debe incluir:<br/>Mínimo 8 caracteres<br/>Mínimo una letra mayúscula<br/>Mínimo una letra minúscula<br/>Mínimo un número<br/>Mínimo un signo de puntuación");
            rd = request.getRequestDispatcher("profile.jsp");
            rd.forward(request, response);
            return;
        }
        
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
        
        DAOUsuario daoUsu = new DAOUsuario();
        Usuario usuario = new Usuario(id, user, names, lastname, lastname2, email, pass, image);

        int result = daoUsu.update(usuario);

        String pantalla;
        switch (result) {
            case 1 -> {
                
                
                Object u = daoUsu.getusuario(usuario);
        
                Usuario newUsuario = new Usuario();
                newUsuario = (Usuario)u;
//                
//                HttpSession session = request.getSession();
//                session.setAttribute("Usuario", newUsuario);
//                request.setAttribute("success", "Información guardada correctamente.");
//                rd = request.getRequestDispatcher("ProfileServlet");
//                response.sendRedirect("ProfileServlet");
//                rd.forward(request, response);
                HttpSession session = request.getSession();
                session.setAttribute("Usuario", newUsuario);
                request.setAttribute("success", "Información guardada correctamente.");
                response.sendRedirect("ProfileServlet");
                
            }
            case 2 -> {
                request.setAttribute("error", "El nombre de usuario ya existe.");
                pantalla = "profile.jsp";
                rd = request.getRequestDispatcher(pantalla);
                rd.forward(request, response);
            }
            default -> {
                request.setAttribute("error", "No se pudo guardar la información, intente de nuevo.");
                pantalla = "profile.jsp";
                rd = request.getRequestDispatcher(pantalla);
                rd.forward(request, response);
            }
        }

        
        
     
    }

}
