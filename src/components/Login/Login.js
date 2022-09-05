import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom"
import fondo from "../../assets/images/ingenieria-sistemascomputacionales.jpg"

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
  return (
    <>
     <div className={classes.root}>
      <div className={styles.container}>
        <label>
        Welcome to Rolando Cazares's portfolio
        </label>
        <h6>On this site you can see rolando's jobs and tasks. please log in.</h6>
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
      </div>
    </div>
    </>
  );
}

export default Login;
