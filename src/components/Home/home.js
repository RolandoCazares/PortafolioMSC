import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styles from ".//Home.module.css";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./Navbar";

function Home({ page }) {
  //console.log(page);
  return (
    <>
      <Sidebar />
      <TopNav />
      <div className={styles.content}>{page}</div>
      <Outlet />
    </>
  );
}

export default Home;