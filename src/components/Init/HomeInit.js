import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from './HomeInit.module.css';
import prueba from "../../assets/images/ordenador.jpg";

function HomeInit({page}) { 
  //console.log(page);

  return (
    <>
      <div  className={styles.ordenador}>
        {page}
        <Outlet />
        <img src={prueba}/>
      </div>

    </>
  );
}

export default HomeInit;
