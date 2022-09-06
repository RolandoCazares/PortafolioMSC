import { Link } from "react-router-dom";
import styles from './Home.module.css';
import compubinario from "../../assets/images/compubinario.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className={styles.mensaje1}>Hello, I'm glad you visit my page!</div>
            <img className={styles.imagen} src={compubinario}/>
            <div className={styles.mensaje}>To see my homework you must first choose the unit.</div>
            <ul className={styles.padding}>
            
            <li>
                    <Link to="/home/unidad1">Cerrar sesion</Link>
                </li>
                <li>
                    <Link to="/">Cerrar sesion</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar