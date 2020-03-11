import React from 'react';
import './App.css';
import { Navbar, Button, Form, Row, Col, InputGroup, FormGroup, Nav, Image, ProgressBar} from 'react-bootstrap';
import check from "./untitled.svg"




export default class Build extends React.Component {


    render(){
        return(
            <div>
            <Navbar bg="light" style={{ paddingTop: '60px'}}>
                <Navbar.Brand>Overview - Set Up Values</Navbar.Brand>
                <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ width: "100%"}}>
                    <Button variant="secondary" disabled>in mm</Button>
                </Nav>
                </Navbar.Collapse>
                
                
            </Navbar>
            <br/>
            
            
            <Form>
            <Row>
            <Col>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Tool Dimensions
                    </Form.Label>
                
                    <Col sm={8}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Length</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.toollength} disabled />
                        <InputGroup.Prepend>
                            <InputGroup.Text>Heigth</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.toolheight} disabled/>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Width</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.toolwidth} disabled />
                    </InputGroup>  
                    </Col>
                   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Chamber Dimensions
                    </Form.Label>
                    <Col sm={8}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Length</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.chamberlength} disabled />
                        <InputGroup.Prepend>
                            <InputGroup.Text>Heigth</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.chamberheight} disabled/>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Width</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={this.props.chamberwidth} disabled />
                    </InputGroup>  
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Substrate Plate Size
                    </Form.Label>
                    <Col sm={8}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Length</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substratelength}/>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Width</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substratewidth}/>
                        </InputGroup>
                    </Col>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Distance TCP-Nozzle
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control disabled placeholder="-" value={this.props.nozzledistance}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Substrate Plate Coordinates
                    </Form.Label>
                    <Col sm={8}>
                    <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>X</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substrateposx}/>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Y</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substrateposy}/>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Reference Point Coordinates
                    </Form.Label>
                    <Col sm={8}>
                    <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>X</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substrateposx}/>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Y</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control disabled placeholder="-" value={this.props.substrateposy}/>
                        </InputGroup>
                    </Col>
                </Form.Group>
            </Col>
            </Row>
            </Form>
            
            
            
            <br/>
            <Navbar bg='light'>
                <Navbar.Brand>Overview - Manufacturing Parameters</Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "100%"}}>
                
                </Nav>
            </Navbar>
            <br/>
            <Form>
            <Row>
            <Col>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Power
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control placeholder="-" disabled value = {`${this.props.power} Watt`} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Jet Diameter
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control disabled placeholder="-" value = {`${this.props.jetdiameter} mm`}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Gas Flow
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control disabled placeholder="-" value = {`${this.props.gasflow} mm³/s`}/>
                    </Col>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Wirefeed
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control disabled placeholder="-" value = {`${this.props.wirefeed} mm/s`} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Print Head Speed
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control disabled placeholder="-" value = {`${this.props.printheadspeed} mm/s`}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Nozzle Distance
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control placeholder="-" disabled value = {`${this.props.nozzledistance} mm`}/>
                    </Col>
                </Form.Group>
            </Col>
            </Row>
            </Form>
            
            <br/>
            <Row>
            <Col>    
            
            <Navbar bg='light'>
                <Navbar.Brand>Time Delay for Starting Procedure</Navbar.Brand>
            </Navbar>
            <br/>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Wirefeed
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="number" 
                            placeholder="ms" 
                            onChange = {(e) => this.props.onChange(e, "wiredelay")}
                            onBlur = {(e) => this.props.onBlurDelay(e)}
                            onClick = {(e) => this.props.onClickdelete(e, "wiredelay")}
                            value = {this.props.wiredelay}
                            />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Plasmabeam
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="number" 
                            placeholder="in ms"
                            onChange = {(e) => this.props.onChange(e, "plasmadelay")}
                            onBlur = {(e) => this.props.onBlurDelay(e)}
                            onClick = {(e) => this.props.onClickdelete(e, "plasmadelay")}
                            value = {this.props.plasmadelay}
                            />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        XYZ-Tisch
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="number" 
                            placeholder="in ms"
                            onChange = {(e) => this.props.onChange(e, "xyzdelay")}
                            onBlur = {(e) => this.props.onBlurDelay(e)}
                            onClick = {(e) => this.props.onClickdelete(e, "xyzdelay")}
                            value = {this.props.xyzdelay}
                            />
                    </Col>
                </Form.Group>
            </Form>
            <Button
                style = {{
                    width: "180px",
                    float: "left",
                    marginLeft: "50px",
                    marginBottom: "20px",
                    backgroundColor: "#00AB84",
                    borderColor: "#00AB84"
                }}
                onClick = {this.props.sendTimeDelay}
                >
                Send
            </Button>
            {this.props.delayvaluescheck &&<Image 
                src = {check}
                style = {{
                    height: 40,
                    width: 40,
                    float: "left",
                    marginLeft: "20px"
                }}
                />}
            <br/>
            </Col>
            <Col>
            <Navbar bg='light'>
                <Navbar.Brand>Build Procedure</Navbar.Brand>
            </Navbar>
            <br/>
            <Button
                block 
                size = "lg"
                variant = "secondary"
                onClick = {this.props.readifyPrint}
                disabled = {this.props.startstoppausecheck}
                >
                    Move Printhead to Reference Point and Set Limits of Substrateplate
                    </Button>
            <Button 
                block size='lg' 
                style = {{
                    backgroundColor: "#00AB84",
                    borderColor: "#00AB84"
                }}
                //disabled = {this.props.startbutton}
                onClick = {this.props.startPrinting}
                
                >Start</Button>
            <Button 
                block size='lg' 
                variant='danger'
                //disabled = {this.props.startstoppausecheck}
                onClick = {this.props.stopPrint}

                >Stop</Button>
            <br/>
            </Col>


            </Row>  
            <Navbar bg='light'>
                <Navbar.Brand>Console Log</Navbar.Brand>    
            </Navbar>

            <ProgressBar 
                now={this.props.progress}
                label = {`${this.props.progress}%`}
                style = {{
                    marginTop: "10px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    height: "50px",
                    fontSize: "25px"
                }}
                />
            <br/>
            <FormGroup>
                <Form.Control as="textarea" rows="12" disabled value = {this.props.linecontent}>{this.props.consolelog}</Form.Control>
            </FormGroup>
            <Button
                block
                size = "lg"
                variant="secondary"
                onClick = {this.props.resetAll}>
                    Reset All
                </Button>
            <Navbar bg='light' style={{paddingBottom: '60px'}}>

            </Navbar>

            

                            
            

        
         </div>
        )
    }
}
