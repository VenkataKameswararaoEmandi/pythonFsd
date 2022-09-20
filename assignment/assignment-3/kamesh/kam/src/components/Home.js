import React from "react";
import { Card } from "react-bootstrap";
import Contact from "./Contact";
import Products from "./Products";
import About from "./About";
function Home() {
  return (
    <div>
      <Card>
        <Card.Img
          src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI="
          alt="shopping pic"
          height={700}
        />
        <Card.ImgOverlay>
          <Card.Body style={{ paddingTop: 140, color: "brown" }}>
            <Card.Title>
              <h3 style={{ fontSize: 30 }}> Shop here with flat discount</h3>
            </Card.Title>
            <Card.Text>
              <p style={{ fontSize: 18 }}>
                Shop in <strong>IndiaMart</strong> with Cards and Upi and
                <br />
                getcashback upto Rs.2000 /-
              </p>
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Products />
      <Contact />
      <About />
    </div>
  );
}

export default Home;
