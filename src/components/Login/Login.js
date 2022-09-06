import styles from "./Login.module.css";
import { makeStyles } from "@mui/styles";
import fondo from "../../assets/images/ingenieria-sistemascomputacionales.jpg"
import Candado from "../../assets/images/giphy.gif"
import { useNavigate } from "react-router-dom";
import About from "./Animation/About";
import { Hidden } from "@mui/material";



const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden"
  }
}));




function Login() {
    
    const classes = useStyles();
    let navigate = useNavigate();
  
        function validar(){
          let usuario="GUILLEMU";
          let contrasena="MSC2022";
          let x = document.form.uname.value;
          let y = document.form.psw.value;
          if(usuario === x && contrasena === y){
            let path = `/home`; 
            navigate(path);
          }
          else{
            alert("Usuario y/o contraseña incorrectos")
          }
        }

  return (
    <>
     <div className={classes.root}>
        <div className={styles.tarjeta}>
        <div className={styles.container}>
        <div className={styles.welcome}>
        This is Rolando Cazares's portfolio
        </div>
        <h6 className={styles.message}>On this site you can see rolando's jobs and tasks. Please log in.</h6>
        <img src={Candado} className={styles.candado}/>
         {<form name="form" action="INICIO SESION">
          <div>
          <label >
                <b className={styles.etiqueta}>Username:</b>
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Username"
                name="uname"
              />
          </div>
          
              <label htmlFor="psw">
                <b className={styles.etiqueta}>Password:</b>
              </label>
              <input
                className={styles.input}
                type="password"
                placeholder="Enter Password"
                name="psw"
              />
          </form>}

        <button id="inicio"
          className={styles.login}
          onClick={() => {
              return validar()}}
        >
          Login
        </button>
      </div>
      
      </div>
      <div className={styles.Pagedisplaysection}>
        <About />
    </div>
    </div>
    </>
  );
}

export default Login;
