package entidades;
import java.time.LocalDate;
import java.time.Period;
import java.sql.Date;
import java.sql.Blob;

public class Usuario {
    private int IdUsuario;
    private String Username;
    private String Correo;
    private String Contra;
    private String Nombres;
    private String ApellidoP;
    private String ApellidoM;
    private Date FechaNacimiento;
    private Blob Imagen;
    private String Edad;
    private String Genero;
    
    public Usuario(){}
    
    public Usuario(String username, String contra){
        this.Username = username;
        this.Contra = contra;
    }

    public Usuario(String Username, String Correo, String Contra, String Nombres, String ApellidoP, String ApellidoM, Date FechaNacimiento, Blob Imagen) {
        this.Username = Username;
        this.Correo = Correo;
        this.Contra = Contra;
        this.Nombres = Nombres;
        this.ApellidoP = ApellidoP;
        this.ApellidoM = ApellidoM;
        this.FechaNacimiento = FechaNacimiento;
        this.Imagen = Imagen;
        this.Edad = calculateAge(FechaNacimiento);
    }

    private String calculateAge(Date fechaNacimiento) {
        LocalDate birthDate = fechaNacimiento.toLocalDate();

        LocalDate currentDate = LocalDate.now();

        Period period = Period.between(birthDate, currentDate);

        return String.valueOf(period.getYears());
    }


    public int getIdUsuario() {
        return IdUsuario;
    }

    public void setIdUsuario(int IdUsuario) {
        this.IdUsuario = IdUsuario;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String Correo) {
        this.Correo = Correo;
    }

    public String getContra() {
        return Contra;
    }

    public void setContra(String Contra) {
        this.Contra = Contra;
    }

    public String getNombres() {
        return Nombres;
    }

    public void setNombres(String Nombres) {
        this.Nombres = Nombres;
    }

    public String getApellidoP() {
        return ApellidoP;
    }

    public void setApellidoP(String ApellidoP) {
        this.ApellidoP = ApellidoP;
    }

    public String getApellidoM() {
        return ApellidoM;
    }

    public void setApellidoM(String ApellidoM) {
        this.ApellidoM = ApellidoM;
    }

    public Date getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(Date FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
    }

    public Blob getImagen() {
        return Imagen;
    }

    public void setImagen(Blob Imagen) {
        this.Imagen = Imagen;
    }

    public String getEdad() {
        return Edad;
    }

    public void setEdad(String Edad) {
        this.Edad = Edad;
    }

    public String getGenero() {
        return Genero;
    }

    public void setGenero(String Genero) {
        this.Genero = Genero;
    }

    
    
}
