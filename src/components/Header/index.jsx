import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./index.module.css";
const Header = () => {
  return (
    <header>
      <h1 className={style.header_title}>Servicios</h1>
      <Navbar bg="light" variant="light">
        <Nav>
          <Nav.Link>
            <Link to="/">Todos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/autos">Autos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/salud">Salud</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/hogar">Hogar</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
