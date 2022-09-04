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
    <li>
      <Link to="/"></Link>
    </li> 
     <div className={classes.root}>
      <div className={styles.container}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
      </div>
    </div>
    </>
  );
}

export default Login;
