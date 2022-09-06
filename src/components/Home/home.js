import styles from "./Home.module.css";
import Sidebar from "./Sidebar";
import TopNav from "./Navbar";

function Home({ page }) {
  //console.log(page);
  return (
    <>
      <div className={styles.home}>
        <TopNav />
        <Sidebar/>
      </div>
    </>
  );
}

export default Home;
