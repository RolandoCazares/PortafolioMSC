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
            <UncontrolledDropdown nav inNavbar className={styles.botonU1}>
              <DropdownToggle nav caret>
              Unit 1
              </DropdownToggle>
              <DropdownMenu right>
                    <DropdownItem>
                    <Link to="/home/unidad1">Homework 1</Link>
                    </DropdownItem>
                <DropdownItem>
                     <Link to="/home/unidad11">Homework 2</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className={styles.botonUvacio}>
              <DropdownToggle nav caret>
              Unit 2
              </DropdownToggle>
              <DropdownMenu right>
                    <DropdownItem>
                        <div>There are no homework in this unit.</div>
                    </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className={styles.botonUvacio}>
              <DropdownToggle nav caret>
              Unit 3
              </DropdownToggle>
              <DropdownMenu right>
                    <DropdownItem>
                        <div>There are no homework in this unit.</div>
                    </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className={styles.botonUvacio}>
              <DropdownToggle nav caret>
              Unit 4
              </DropdownToggle>
              <DropdownMenu right>
                    <DropdownItem>
                        <div>There are no homework in this unit.</div>
                    </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className={styles.botonUvacio}>
              <DropdownToggle nav caret>
              Unit 5
              </DropdownToggle>
              <DropdownMenu right>
                    <DropdownItem>
                        <div>There are no homework in this unit.</div>
                    </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

                <li>
                    <Link to="/">Cerrar sesion</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar