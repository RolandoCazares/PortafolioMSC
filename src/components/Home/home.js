import styles from "./Home.module.css";
import Sidebar from "./Sidebar";
import TopNav from "./Navbar";
import ImgWelcome from "../../assets/images/welcome.jpg"

function Home({ page }) {
  //console.log(page);
  return (
    <>
      <div className={styles.home}>
        <TopNav />
        <Sidebar/>
        <img src={ImgWelcome} alt='imagen de bienvenida' width="100%" height="100%"/>
      </div>
    </>
  );
}

export default Home;
