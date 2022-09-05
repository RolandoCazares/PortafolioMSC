import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom"
import fondo from "../../assets/images/ingenieria-sistemascomputacionales.jpg"
import Candado from "../../assets/images/giphy.gif"
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
}));



function Login() {
  const classes = useStyles();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  
  return (
    <>
     <div className={classes.root}>
      <div className={styles.container}>
        <div className={styles.welcome}>
        This is Rolando Cazares's portfolio
        </div>
        <h6 className={styles.message}>On this site you can see rolando's jobs and tasks. Please log in.</h6>
        <img src={Candado} className={styles.candado}/>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          /* ref={usernameRef} */
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          /* ref={passwordRef} */
        />
        <button
          className={styles.login}
          onClick= {
            routeChange
          }
        >
          Login
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;
