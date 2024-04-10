package DAO;

import entidades.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import modelos.Database;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DAOUsuario {
    Usuario usu = new Usuario();
    Database db = new Database();
    
    public Object login(Object obj){
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_USUARIOS2 WHERE USUARIO = ? AND CONTRASENA = ?";
        
        Usuario log = new Usuario();
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setString(1, usu.getUsuario());
            ps.setString(2, usu.getContrasena());
            
            rs = ps.executeQuery();
            
            while(rs.next()){
                log.setIdUsuario(rs.getInt("ID_USUARIO"));
                log.setNombre(rs.getString("USUARIO"));
                log.setContrasena(rs.getString("CONTRASENA"));
                
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return log;
        }
        
    }
}
