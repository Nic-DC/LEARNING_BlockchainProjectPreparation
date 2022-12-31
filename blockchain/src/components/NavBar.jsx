import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import { GiMoonClaws } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { GoTelescope } from "react-icons/go";
import { SiBlockchaindotcom } from "react-icons/si";

import { useState } from "react";

const NavBar = () => {
  const [toggleMode, setToggleMode] = useState("light");

  const changeTextColor = () => {
    return toggleMode === "light" ? "text-dark" : "text-light";
  };

  return (
    <Navbar bg={toggleMode} expand="lg">
      <Navbar.Brand href="#home" className={changeTextColor()}>
        <SiBlockchaindotcom id="appLogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className={changeTextColor()}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" className={changeTextColor()}>
            Link
          </Nav.Link>
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            className={toggleMode === "light" ? "text-dark" : "text-light"}
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant={toggleMode === "light" ? "outline-dark" : "outline-light"} className="mr-sm-2">
            <GoTelescope id="searchBtn" />
          </Button>
          <FormControl type="text" placeholder="Search" />
        </Form>
        <Button
          variant="dark"
          className="ml-3 d-flex justify-center"
          onClick={() => toggleMode === "light" && setToggleMode("dark")}
        >
          Night <GiMoonClaws id="darkmodeBtn" className="ml-2" />
        </Button>
        <Button
          variant="outline-dark"
          className={
            toggleMode === "light" ? "text-dark d-flex justify-center ml-1" : "text-light d-flex justify-center ml-1"
          }
          onClick={() => toggleMode === "dark" && setToggleMode("light")}
        >
          Day{" "}
          <BsSunglasses id="lightmodeBtn" className={toggleMode === "light" ? "text-dark ml-2" : "text-light ml-2"} />
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
