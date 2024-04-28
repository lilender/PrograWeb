package DAO;

import entidades.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import modelos.Database;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

public class DAOUsuario {
    Usuario usu = new Usuario();
    Database db = new Database();
    
    public Object login(Object obj){
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_USUARIOS WHERE USERNAME = ? COLLATE utf8mb4_bin AND CONTRA = ? COLLATE utf8mb4_bin";
        
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

    public int signin(Object obj) {
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "INSERT INTO TB_USUARIOS (USERNAME, CORREO, CONTRA, NOMBRES, APELLIDO_P, APELLIDO_M, F_NACIMIENTO, IMAGEN, EDAD, GENERO) VALUES(?,?,?,?,?,?,?,?,?,?)";
        
        int result = 0;
        if("".equals(usu.getEdad())){
            return 3;
        }
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
            result = 1;
            
        } catch (SQLIntegrityConstraintViolationException e){
            result = 2;
        } 
        catch(SQLException | ClassNotFoundException e){
            result = 0;
        } finally {
            return result;
        }
    }
    
    public int update(Object obj){
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        
        String sql;

        if(usu.getImagen() == null){
            sql = "UPDATE TB_USUARIOS SET USERNAME = ?, CORREO = ?, CONTRA = ?, NOMBRES = ?, APELLIDO_P = ?, APELLIDO_M = ? WHERE ID_USUARIO = ?";

        } else {
            sql = "UPDATE TB_USUARIOS SET USERNAME = ?, CORREO = ?, CONTRA = ?, NOMBRES = ?, APELLIDO_P = ?, APELLIDO_M = ?, IMAGEN = ? WHERE ID_USUARIO = ?";

        }
        
        
        int result = 0;
        
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
            if(usu.getImagen() == null){
                ps.setInt(7, usu.getIdUsuario());
            } else {
                ps.setBlob(7, usu.getImagen());
                ps.setInt(8, usu.getIdUsuario());
            }
            
            
            ps.executeUpdate();
            
            con.close();
            result = 1;
            
        } catch (SQLIntegrityConstraintViolationException e){
            result = 2;
        } 
        catch(SQLException | ClassNotFoundException e){
            result = 0;
        } finally {
            return result;
        }
        
    }
    
    public Object getusuario(Object obj){
        usu = (Usuario)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_USUARIOS WHERE ID_USUARIO = ?";
        
        Usuario log = new Usuario();
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setInt(1, usu.getIdUsuario());
            
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
    
    public String getusername(int ID){
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT USERNAME FROM TB_USUARIOS WHERE ID_USUARIO = ?";
        
        String usu = "";
        
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);    
            ps.setInt(1, ID);
            rs = ps.executeQuery();
            
            
            while(rs.next()){
                usu = rs.getString("USERNAME");
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return usu;
        }
    }
    
}
