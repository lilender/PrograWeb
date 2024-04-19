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
        String sql = "SELECT * FROM TB_USUARIOS WHERE USERNAME = ? AND CONTRA = ?";
        
        Usuario log = new Usuario();
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setString(1, usu.getUsername());
            ps.setString(2, usu.getContra());
            
            rs = ps.executeQuery();
            
            while(rs.next()){
                log.setIdUsuario(rs.getInt("ID_USUARIO"));
                log.setUsername(rs.getString("USERNAME"));
                log.setCorreo(rs.getString("CORREO"));
                log.setContra(rs.getString("CONTRA"));
                log.setNombres(rs.getString("NOMBRES"));
                log.setApellidoP(rs.getString("APELLIDO_P"));
                log.setApellidoM(rs.getString("APELLIDO_M"));
                log.setFechaNacimiento(rs.getDate("F_NACIMIENTO"));
                log.setImagen(rs.getBlob("IMAGEN"));
                log.setEdad(rs.getString("EDAD"));
                log.setGenero(rs.getString("GENERO"));
                
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return log;
        }
        
    }

    public boolean signin(Object obj) {
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "INSERT INTO TB_USUARIOS (USERNAME, CORREO, CONTRA, NOMBRES, APELLIDO_P, APELLIDO_M, F_NACIMIENTO, IMAGEN, EDAD, GENERO) VALUES(?,?,?,?,?,?,?,?,?,?)";
        
        boolean aceptado = false;

        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setString(1, usu.getUsername());
            ps.setString(2, usu.getCorreo());
            ps.setString(3, usu.getContra());
            ps.setString(4, usu.getNombres());
            ps.setString(5, usu.getApellidoP());
            ps.setString(6, usu.getApellidoM());
            ps.setDate(7, usu.getFechaNacimiento());
            ps.setBlob(8, usu.getImagen());
            ps.setString(9, usu.getEdad());
            ps.setString(10, usu.getGenero());
            
            ps.executeUpdate();
            
            con.close();
            aceptado = true;
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en SignIn " + e.getMessage());
        } finally {
            return aceptado;
        }
    }
}
