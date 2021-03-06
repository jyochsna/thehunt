/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";

/*  React Bootstrap Components  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/*  Create Login (Replaced by login.component) */
class Login extends Component {
    render() {
        return (
            <div className="container">
                 <Row>
                    <Col>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center text-secondary"><img src="./images/transparentlock.gif" alt="Key in lock gif" width="150px" />Login to Hunt!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card border="info" >
                                <Card.Body>
                                    <Card.Title><h1 className="text-center text-info">Teachers</h1></Card.Title>
                                    <Card.Text>
                                        <Form className="text-info">
                                            <Form.Group controlId="formTeacherEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group controlId="formTeacherPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                                <Form.Text className="text-muted">
                                                    Your password is case sensitive.
                                            </Form.Text>
                                            </Form.Group>
                                            <Button variant="warning" id="teacherSubmit" type="submit" block>
                                                Login
                                        </Button>

                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="info" >
                                <Card.Body>
                                    <Card.Title><h1 className="text-center text-info">Students</h1></Card.Title>
                                    <Form className="text-info">
                                        <Form.Group controlId="formStudentEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formStudentPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                Your password is case sensitive.
                                            </Form.Text>
                                        </Form.Group>
                                        <Button variant="warning" id="studentSubmit" type="submit" block>
                                            Login
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><hr /></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 className="text-info">
                            <ul>
                                <li><Link to="/admin">Admin</Link> Dashboard</li>
                                <li><Link to="/teacher">Teacher</Link> Dashboard</li>
                                <ul>
                                    <li><Link to="/teachercreate">Create Hunts</Link> | <Link to="/teachermanagehunts">Manage Hunts</Link> | <Link to="/teachermanagestudents">Manage Students</Link></li>
                                </ul>
                                <li><Link to="/student">Student</Link> Dashboard</li>
                                <ul>
                                    <li><Link to="/studentplay">Play Hunts</Link> | <Link to="/studenthistory">Hunts History</Link></li>
                                </ul>
                                <li><Link to="/edithunt">EditHunt</Link></li>
                                <li><Link to="/junk">404 Error Page</Link></li>
                            </ul>
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                    </Col>
                </Row>
            </div>
        )
    }
}

/*  Export Login  */
export default Login;