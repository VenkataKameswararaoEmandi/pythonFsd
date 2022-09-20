import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductDetails(props) {
  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          src={props.pic}
          width={200}
          height={230}
          style={{ padding: 5 }}
        />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Card.Text>{props.text}</Card.Text> */}
          <Card.Text>{props.price}</Card.Text>
          <Button variant="outline-primary" size="sm">
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;
