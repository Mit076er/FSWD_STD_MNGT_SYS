import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {
  render() {
    return (
      <div className='my-4'>
        <Card>
            <Card.Header>Add employee Details</Card.Header>
       <Form>
        <Card.Body>             
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee id</Form.Label>
        <Form.Control type="text" placeholder="Enter id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" />
      </Form.Group>
      
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Footer>
    </Form>
    </Card>
      </div>
    )
  }
}
