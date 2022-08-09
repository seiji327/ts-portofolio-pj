import { Navbar, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  const items: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Navbar.Brand className="px-3 m-0" href="#home">
        Seiji
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav>
          {items.map((item, index) => (
            <Nav.Item key={index}>
              {/* Add section jump */}
              <Nav.Link href={`#${item.toLowerCase()}`}>{item}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
