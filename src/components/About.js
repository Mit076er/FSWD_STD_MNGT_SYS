import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
    const [ employees, setEmployees] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8080/employees')
    .then(response=>setEmployees(response.data))
    .catch(error=>alert(error));
})

  return (
    <><h1>About Employees</h1> <div className="my-5">
    </div><Card>
          <Card.Header>
              Employee Listing
          </Card.Header>
          <Container>
              <Table striped bordered hover variant="dark">
                  <thead>

                      <tr>
                          
                          <th>Employee Id</th>
                          <th>Employee Name</th>
                          <th>Employee Address</th>
                      </tr>
                  </thead>
                  <tbody>
                    { employees.map((employee) =>
                      <tr>
                          <td>{employee.id}</td>
                          <td>{employee.name}</td>
                          <td>{employee.address}</td>
                      </tr>)
                     }
                  </tbody>
              </Table>
          </Container>
          <Card.Footer>This is the details of Employees!!!</Card.Footer>
      </Card></>
  );
}

export default About;