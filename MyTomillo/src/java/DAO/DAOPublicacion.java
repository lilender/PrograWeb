/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import entidades.Publicacion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import modelos.Database;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class DAOPublicacion {
    Publicacion post = new Publicacion();
    Database db = new Database();
    
    public int newpost(Object obj) {
        post = (Publicacion)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "INSERT INTO TB_PUBLICACIONES (ID_USUARIO, TITULO, CONTENIDO, IMAGEN, ID_CATEGORIA) VALUES(?,?,?,?,?)";
        
        int result = 0;

        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setInt(1, post.getIdUsuario());
            ps.setString(2, post.getTitulo());
            ps.setString(3, post.getContenido());
            ps.setBlob(4, post.getImagen());
            ps.setInt(5, post.getIdCategoria());
            
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
    
    public int updatepost(Object obj) {
        post = (Publicacion)obj;
        
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "UPDATE TB_PUBLICACIONES SET TITULO = ?, CONTENIDO = ?, IMAGEN = ?, ID_CATEGORIA = ? WHERE ID_PUBLICACION = ?;";
        
        int result = 0;

        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setString(1, post.getTitulo());
            ps.setString(2, post.getContenido());
            ps.setBlob(3, post.getImagen());
            ps.setInt(4, post.getIdCategoria());
            ps.setInt(5, post.getIdPublicacion());
            
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
    
    public List<Publicacion> getUserPosts(int IdUser){
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_PUBLICACIONES WHERE ID_USUARIO = ? AND ESTADO = 1 ORDER BY F_PUBLICACION DESC";
        
        List<Publicacion> log = new ArrayList<>();
        
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setInt(1, IdUser);
            rs = ps.executeQuery();
            
            
            while(rs.next()){
                Publicacion p = new Publicacion();
                p.setIdPublicacion(rs.getInt("ID_PUBLICACION"));
                p.setIdUsuario(rs.getInt("ID_USUARIO"));
                p.setTitulo(rs.getString("TITULO"));
                p.setContenido(rs.getString("Contenido"));
                p.setImagen(rs.getBlob("IMAGEN"));
                p.setIdCategoria(rs.getInt("ID_CATEGORIA"));
                p.setEstado(rs.getBoolean("ESTADO"));
                p.setFechaPublicacion(rs.getTimestamp("F_PUBLICACION"));
                
                log.add(p);
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return log;
        }
    }
    
    public List<Publicacion> getDashboardPosts(int pag){
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_PUBLICACIONES WHERE ESTADO = 1 ORDER BY F_PUBLICACION DESC LIMIT 10 OFFSET ?;";
        
        List<Publicacion> log = new ArrayList<>();
        
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setInt(1, pag*10);
            rs = ps.executeQuery();
            
            
            while(rs.next()){
                Publicacion p = new Publicacion();
                p.setIdPublicacion(rs.getInt("ID_PUBLICACION"));
                p.setIdUsuario(rs.getInt("ID_USUARIO"));
                p.setTitulo(rs.getString("TITULO"));
                p.setContenido(rs.getString("Contenido"));
                p.setImagen(rs.getBlob("IMAGEN"));
                p.setIdCategoria(rs.getInt("ID_CATEGORIA"));
                p.setEstado(rs.getBoolean("ESTADO"));
                p.setFechaPublicacion(rs.getTimestamp("F_PUBLICACION"));
                
                log.add(p);
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error " + e.getMessage());
        } finally {
            return log;
        }
    }
    
    public int deletepost(int IdPost) {
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "UPDATE TB_PUBLICACIONES SET ESTADO = 0 WHERE ID_PUBLICACION = ?";
        
        int result = 0;

        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);
            ps.setInt(1, IdPost);
            
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
}
