import React from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
function Header() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ height: 40, dispaly: "flex", justifyContent: "space-between" }}
      >
        <Nav.Link href="/">
          <Navbar.Brand style={{ marginLeft: 10 }}>IndiaMart</Navbar.Brand>
        </Nav.Link>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        <div
          style={{
            // right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "3%",
            gap: 20,
          }}
        >
          <input
            type="text"
            placeholder="search here"
            style={{ width: "85%" }}
          />
          <Button variant="outline-primary" size="sm">
            <Badge>
              <FaShoppingCart size={17} />
              (0)
            </Badge>
          </Button>
          <h3 style={{ color: "white" }}>
            <Nav.Link href="/sign-in">
              <VscAccount />
            </Nav.Link>
          </h3>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
