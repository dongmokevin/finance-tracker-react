import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

function AddCategory({ setShowCategory, setCategories, categories }) {
  const types = ["income", "expense", "savings"];
  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter a category");
      return;
    }

    // Checks if category exist if yes displays an alert else add category to lsit
    const categoryExist = categories.find((category) => category.name === name);
    if (categoryExist) {
      alert("Category already exist");
    } else {
      const category = {
        name,
        type: selectedType,
      };

      setCategories((currentState) => [...currentState, category]);
      setSelectedType(false);

      alert("Category Added Succesfully");
      setName("");
    }
  };
  return (
    <Container>
      <h1>AddCategory</h1>
      <Button
        className="mb-3"
        variant="secondary"
        onClick={() => setShowCategory(false)}
      >
        return to the main menu
      </Button>

      <Container className="container">
        <Card>
          <Card.Body>
            <h1>Enter a category for transactions</h1>
            <p>
              E.g. 'Electricity' or 'Gas' or 'Salary' with type of 'income' or
              'expense'
            </p>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="form-group mb-2">
                    <Form.Control
                      type="text"
                      value={name}
                      placeholder="Add category"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      {types.map((type, index) => {
                        return (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default AddCategory;
