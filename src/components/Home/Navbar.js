
import React, { useState } from 'react';
import styles from './Home.module.css';
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

function NavbarNav(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navbar}>
      <Navbar color="light" fixed="top" light expand={true} {...args}>
        <NavbarBrand href="/">Matematicas discretas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/home/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/RolandoCazares">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://itnogales.mindbox.app/login/alumno">
                MindBox
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CONACYT
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>MIIC</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>CVU</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNav;