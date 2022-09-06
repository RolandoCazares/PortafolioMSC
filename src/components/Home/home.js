import styles from "./Home.module.css";
import Sidebar from "./Sidebar";
import TopNav from "./Navbar";
import { Outlet } from "react-router-dom";

function Home({ page }) {
  //console.log(page);
  return (
    <>
      <div className={styles.home}>
        <TopNav />
        <Sidebar/>
        <div className={styles.content}>{page}</div>
        <Outlet/>
      </div>
    </>
  );
}

export default Home;
