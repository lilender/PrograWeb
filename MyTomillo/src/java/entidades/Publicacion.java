/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entidades;
import java.sql.Blob;
import java.text.SimpleDateFormat;
import java.sql.Timestamp;
import DAO.DAOCategoria;
import java.sql.SQLException;
import java.util.Base64;

public class Publicacion {
    private int IdUsuario;
    private int IdPublicacion;
    private String Titulo;
    private String Contenido;
    private Blob Imagen;
    private int IdCategoria;
    private boolean Estado;
    private Timestamp FechaPublicacion;
    
    public Publicacion(){}

    public Publicacion(int IdUsuario, String Titulo, String Contenido, Blob Imagen, int IdCategoria){
        this.IdUsuario = IdUsuario;
        this.Titulo = Titulo;
        this.Contenido = Contenido;
        this.Imagen = Imagen;
        this.IdCategoria = IdCategoria;
    }
    
    public String getImageAsBase64() {
        if (Imagen == null) {
            return null;
        }
        try {
            byte[] bytes = Imagen.getBytes(1, (int) Imagen.length());
            return Base64.getEncoder().encodeToString(bytes);
        } catch (SQLException e) {
            return null;
        }
    }
    
    public int getIdUsuario() {
        return IdUsuario;
    }

    public void setIdUsuario(int IdUsuario) {
        this.IdUsuario = IdUsuario;
    }

    public int getIdPublicacion() {
        return IdPublicacion;
    }

    public void setIdPublicacion(int IdPublicacion) {
        this.IdPublicacion = IdPublicacion;
    }

    public String getTitulo() {
        return Titulo;
    }

    public void setTitulo(String Titulo) {
        this.Titulo = Titulo;
    }

    public String getContenido() {
        return Contenido;
    }

    public void setContenido(String Contenido) {
        this.Contenido = Contenido;
    }

    public Blob getImagen() {
        return Imagen;
    }

    public void setImagen(Blob Imagen) {
        this.Imagen = Imagen;
    }

    public int getIdCategoria() {
        return IdCategoria;
    }
    
    public String getCategoria() {
        DAOCategoria daocat = new DAOCategoria();
        return daocat.getCategoria(IdCategoria);
    }

    public void setIdCategoria(int IdCategoria) {
        this.IdCategoria = IdCategoria;
    }

    public boolean isEstado() {
        return Estado;
    }

    public void setEstado(boolean Estado) {
        this.Estado = Estado;
    }

    public Timestamp getFechaPublicacion() {
        return FechaPublicacion;
    }

    public void setFechaPublicacion(Timestamp FechaPublicacion) {
        this.FechaPublicacion = FechaPublicacion;
    }
    
    public String getFormattedDate() {
        String formattedDate = "Publicado el ";

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy 'a las' HH:mm");

        formattedDate += sdf.format(FechaPublicacion);

        return formattedDate;
    }
    
}
