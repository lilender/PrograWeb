/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import com.mysql.cj.jdbc.CallableStatement;
import entidades.Categoria;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import modelos.Database;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

public class DAOCategoria {
    Categoria cat = new Categoria();
    Database db = new Database();
    
    public Categoria add(Object obj){
        cat = (Categoria)obj;
        
        Connection con;
        CallableStatement cs;
        ResultSet rs;
        String sql = "CALL sp_agregar_categoria(?);";
        
        Categoria log = new Categoria();
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            cs = (CallableStatement) con.prepareCall(sql);
            cs.setString(1, cat.getCategoria());
            
            rs = cs.executeQuery();
            
            while(rs.next()){
                log.setIdCategoria(rs.getInt("ID_CATEGORIA"));
                log.setCategoria(rs.getString("CATEGORIA"));
                
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return log;
        }
        
    }
    
    public List<String> getcats(){
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT * FROM TB_CATEGORIAS";
        
        List<String> log = new ArrayList<>();
        
        try {
            Class.forName(db.getDriver());
            con = DriverManager.getConnection(
                    db.getUrl() + db.getDatabase(),
                    db.getUser(),
                    db.getPass());
            ps = con.prepareStatement(sql);        
            rs = ps.executeQuery();
            
            
            while(rs.next()){
                log.add(rs.getString("CATEGORIA")); // Add the new categoria to the ArrayList
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return log;
        }
    }
    
    public String getCategoria(int ID){
        Connection con;
        PreparedStatement ps;
        ResultSet rs;
        String sql = "SELECT CATEGORIA FROM TB_CATEGORIAS WHERE ID_CATEGORIA = ?";
        
        String cat = "";
        
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
                cat = rs.getString("CATEGORIA");
            }
            con.close();
            
        } catch(SQLException | ClassNotFoundException e){
            System.out.println("Error en LogIn " + e.getMessage());
        } finally {
            return cat;
        }
    }
}
