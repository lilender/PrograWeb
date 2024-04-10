
package modelos;

public class Database {
    private String url;
    private String database;
    private String user;
    private String pass;
    private String driver;
    
    public Database(){
        this.url = "jdbc:mysql://localhost:3306/";
        this.database = "MyTomillo";
        this.user = "root";
        this.pass = "";
        this.driver = "com.mysql.jdbc.Driver"; 
    }

    public String getUrl() {
        return url;
    }

    public String getDatabase() {
        return database;
    }

    public String getUser() {
        return user;
    }

    public String getPass() {
        return pass;
    }

    public String getDriver() {
        return driver;
    }
    
}
