import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

const AddListItem = props => {
  return (
    <body className="additem__bg">
      <Container>
        <Row>
          <Col />
          <Col xs={9}>
            <Form
              onSubmit={props.handleSubmitEvent}
              className="addItem__form--container"
            >
              <h3>Add New Food Item</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Food Item Name:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="input"
                    placeholder="Enter Food Item"
                    name="foodItem"
                    className="addlist__input"
                    defaultValue={
                      props.presetValues ? props.presetValues.foodName : ""
                    }
                  />
                  <InputGroup.Append>
                    <Link
                      to={{
                        pathname: `/webcam`,
                        state: {
                          item: "nothing here"
                        }
                      }}
                    >
                      <Button variant="outline-secondary">
                        <img id="scan__icon" alt=""/>
                      </Button>
                    </Link>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Which category does it belong to?</Form.Label>
                <Form.Control as="select" name="category">
                  <option>Produce</option>
                  <option>Dairy</option>
                  <option>Meat</option>
                  <option>Seafood</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Days Until Expiry:</Form.Label>
                <Form.Control as="select" name="expiryDate">
                <option disabled selected value> -- select a number -- </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                </Form.Control>
              </Form.Group>

              <Row>
                <Col xs={3}>
                  <Button variant="info" type="submit">
                    Add to List
                  </Button>
                </Col>
                <Col>
                  <Button variant="secondary" type="reset" className="listCancel__button">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col />
        </Row>
      </Container>
    </body>
  );
};

export default AddListItem;
