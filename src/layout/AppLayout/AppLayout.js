import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Outlet, useNavigate } from "react-router-dom"; // 라우터 안의 자손들을 가져오는 역할
import logoImage from "../../assets/images/logo.png";
import "./AppLayout.style.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
    setOffcanvasOpen(false);
  };

  return (
    <div>
      <Navbar
        key="xxl"
        expand="xxl"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary netflox-navbar"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="netflox-logo">
            <img src={logoImage} alt="Netflox" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-xxl`}
            onClick={() => setOffcanvasOpen(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
            className="netflox-offcanvas"
            show={offcanvasOpen}
            onHide={() => setOffcanvasOpen(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                <Navbar.Brand href="/" className="netflox-logo">
                  <img src={logoImage} alt="Netflox" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 netflox-nav-link">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
              </Nav>
              <Form className="d-flex neflox-search" onSubmit={searchByKeyword}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 netflox-search-input"
                  aria-label="Search"
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                />
                <Button variant="danger netflox-search-button" type="submit">
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
