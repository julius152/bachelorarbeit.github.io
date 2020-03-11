import React from 'react';
import './App.css';
import { Nav, Dropdown, Navbar, Form, Button, Modal } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Clock from "react-digital-clock";



export default class Nbar extends React.Component {


    render() {
        return (
            <div className="App">
                <Navbar bg="dark" variant="dark" size="lg" fixed="top">
                    <Navbar.Brand href="setup">Prototype</Navbar.Brand>
                    <Nav className="mr-auto">
                    
                            <LinkContainer to="setup">
                                <Nav.Link>Set Up</Nav.Link>
                            </LinkContainer>
                            <LinkContainer 
                                to="mp"
                                >
                                <Nav.Link>Manufacturing Parameters</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="build">
                                <Nav.Link>Build</Nav.Link>
                            </LinkContainer>
                    </Nav>
                    <Button style = {{backgroundColor: "#00AB84",
                            borderColor: "#00AB84" }} className='mr-2' disabled>
                        <Form>
                            <Form.Check 
                                type="switch"
                                label="Expert Mode" 
                                id="custom-switch"
                                checked = {this.props.expertmode}
                                onClick = {(e) => this.props.expertmodeClick(e)}
                                />
                        </Form>
                    </Button>
                    <Button 
                        variant="info"
                        style = {{
                            marginRight:"7px"
                        }}
                        disabled
                        >
                    <Clock/>
                    </Button>
                    {this.props.dangerbutton &&<Button variant="danger" className='mr-2'>
                        Danger!
                    </Button>}

                    <Dropdown drop="left">
                        <Dropdown.Toggle variant ="secondary">
                            More
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item
                                onClick = {() => this.props.setColumnsize(8,3,4,5)}
                                >Screenformat 4:3</Dropdown.Item>
                            <Dropdown.Item
                                onClick = {() => this.props.setColumnsize(5,5,5,7)}
                                >Screenformat 16:9</Dropdown.Item>
                        </Dropdown.Menu>    
                    </Dropdown>       
                

                    
                </Navbar> 
                <Modal 
                    show={this.props.passwordshow}
                    size = "lg"
                >
                    <Modal.Header>
                    <Modal.Title>Please Enter Password to Activate Expertmode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type = "password"
                                    onChange = {(e) => this.props.onChange(e,"password")}
                                    style = {{
                                        borderColor: `${this.props.passwordbordercolor}`
                                    }}
                                    value = {this.props.password}
                                    onClick = {this.props.passwordOnClick}
                                    />
                                {this.props.passwordnotcorrect &&<Form.Text 
                                    className="text-muted-red"
                                    style = {{
                                        color: "red"
                                    }}
                                    >
                                Password is not correct. Please try again.
                                </Form.Text>}
                            </Form.Group>
                            </Form> 
                    
                            </Modal.Body>
                    <Modal.Footer>
                    <Button 
                        style = {{
                            backgroundColor: "#00AB84",
                            borderColor: "#00AB84"
                        }}
                        onClick = {this.props.passwordCheck} >
                        Enter
                    </Button>
                    <Button 
                        onClick = {this.props.passwordClose}
                        variant="secondary">
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>                   
            </div>
        );
    }
}