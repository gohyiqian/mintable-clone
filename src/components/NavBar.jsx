import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { mobile } from "../responsiveMobile";
import SearchBar from "./SearchBar";
import styles from "../App.module.css";

import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBarStyle = {
  position: "sticky",
  top: "0",
  zIndex: "999",
  backgroundColor: "white",
  color: "white",
  minHeight: "80px",
};

const Center = styled.div`
  flex: 2;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column", margin: "5px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.img`
  display: flex;
  margin: 0;
  cursor: pointer;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Navbar style={NavBarStyle} variant="light" expand="lg" collapseOnSelect>
      <Container>
        <Left>
          <LinkContainer to="/">
            <Logo src="../../mintable_logo.svg" />
          </LinkContainer>
          <Nav className="ml-auto">
            <NavDropdown
              title="All Categories"
              id="basic-nav-dropdown"
              className={styles.nav_dropdown}
            >
              <LinkContainer to="/admin/allusers">
                <NavDropdown.Item>Work In Progress</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Left>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Center>
            <SearchBar />
          </Center>

          <Nav className="ml-auto">
            <Right>
              <LinkContainer to="/shop">
                <Nav.Link className={styles.nav_dropdown}>SHOP</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/mint">
                <Nav.Link className={styles.nav_dropdown}>MINT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/discover">
                <Nav.Link className={styles.nav_dropdown}>DISCOVER</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resources">
                <Nav.Link className={styles.nav_dropdown}>RESOURCES</Nav.Link>
              </LinkContainer>

              <NavDropdown title="ETH" id="basic-nav-dropdown">
                <LinkContainer to="/admin/allusers">
                  <NavDropdown.Item>$ USD</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <Button
                type="submit"
                variant="light"
                className={styles.btn_signup}
              >
                Sign Up
              </Button>
              <Button
                type="submit"
                variant="light"
                className={styles.btn_login}
              >
                Login
              </Button>
            </Right>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
