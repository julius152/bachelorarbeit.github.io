import React from 'react';
import './App.css';
import { Navbar, Tabs, Tab, Button, Form, Row, Col, InputGroup, FormControl, FormGroup, ButtonToolbar, Image, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap'
import check from "./untitled.svg"
import error from "./cross.svg"




export default class Mparm extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.chosenfilename = "File Name"
        this.state = {
            uploadcolor: "",
        }
    }
    

        
    render(){
        return(
            <div>
                <br/> 
                <Navbar bg="light" style={{ paddingTop: '40px'}}>
                    <Navbar.Brand>Enter manufacturing parameters</Navbar.Brand>
                </Navbar>
                <br/>

                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Power
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                style = {{backgroundColor: `${this.props.powerV}`}}
                                placeholder="in Watts" 
                                value = {this.props.power} 
                                onChange={(e) => this.props.onChange(e, "power")}
                                onBlur={(e) => this.props.onBlurMparm(e, 50, 100, "power", "powerV")} 
                                onClick = {(e) => this.props.onClickdelete(e, "power")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Gas Flow 1
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                style = {{backgroundColor: `${this.props.jetdiameterV}`}}
                                placeholder="in mm" 
                                value = {this.props.jetdiameter}
                                onChange={(e) => this.props.onChange(e, "jetdiameter")} 
                                onBlur = {(e) => this.props.onBlurMparm(e, 50, 100, "jetdiameter", "jetdiameterV")}
                                onClick = {(e) => this.props.onClickdelete(e, "jetdiameter")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Gas Flow 2
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                style = {{backgroundColor: `${this.props.gasflowV}`}}
                                placeholder="in cm³/s" 
                                value = {this.props.gasflow} 
                                onChange={(e) => this.props.onChange(e, "gasflow")}
                                onBlur={(e) => this.props.onBlurMparm(e, 50, 100, "gasflow", "gasflowV")}
                                onClick = {(e) => this.props.onClickdelete(e, "gasflow")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        
                        <Form.Label column sm={2}>
                        <Dropdown column sm={2}>
                            <Dropdown.Toggle style = {{
                                backgroundColor: "white",
                                color: "black",
                                borderColor: "black"
                            }}>
                                {this.props.wirefeeddropdowntext}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick = {() => this.props.dropdownWirefeed("a")}
                                    >Scaling Factor</Dropdown.Item>
                                <Dropdown.Item
                                    onClick = {() => this.props.dropdownWirefeed("b")}
                                    >Overwrite Explicit Value for the Entire Print Process</Dropdown.Item>
                                <Dropdown.Item
                                    onClick = {() => this.props.dropdownWirefeed("c")}
                                    >Set Value for Entire G-Code without preexisting Value</Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                style = {{
                                    backgroundColor: `${this.props.wirefeedV}`,
                                    marginTop:"7px"
                                }}
                                placeholder={this.props.wirefeedplaceholder}
                                value = {this.props.wirefeed} 
                                onChange={(e) => this.props.onChange(e, "wirefeed")} 
                                onBlur = {(e) => this.props.onBlurMparm(e, 0, 15, "wirefeed", "wirefeedV")}
                                onClick = {(e) => this.props.onClickdelete(e, "wirefeed")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Print Head Speed
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                style = {{backgroundColor: `${this.props.printheadspeedV}`}}
                                placeholder="in mm/s" 
                                value = {this.props.printheadspeed} 
                                onChange={(e) => this.props.onChange(e, "printheadspeed")}
                                onBlur={(e) => this.props.onBlurMparm(e, 50, 100, "printheadspeed", "printheadspeedV")}
                                onClick = {(e) => this.props.onClickdelete(e, "printheadspeed")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Working Distance
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                style = {{backgroundColor: `${this.props.nozzledistanceV}`}}
                                placeholder="in mm" 
                                value = {this.props.nozzledistance} 
                                onChange={(e) => this.props.onChange(e, "nozzledistance")}
                                onBlur={(e) => this.props.onBlurMparm(e, 2, 30, "nozzledistance", "nozzledistanceV")}
                                onClick = {(e) => this.props.onClickdelete(e, "nozzledistance")}
                                />
                        </Col>
                    </Form.Group>
                </Form>
                <Row>
                <Col>
                    <Button
                        
                        disabled = {this.props.mparmsend}
                        style ={{
                            float: "left",
                            width: "180px",
                            marginLeft: "50px",
                            backgroundColor: "#00AB84",
                            borderColor: "#00AB84"
                        }}
                        onClick = {this.props.sendMparmValues}
                        >
                        Send
                    </Button>
                
                    {this.props.mparmvaluescheck &&<Image src={check} style = {{height:40, width:40, float: "left", marginLeft: "20px"}}/>}
                </Col>
                </Row>
                <br/>



                <Navbar bg="light" >
                    <Navbar.Brand>Enter G-Code</Navbar.Brand>
                </Navbar>
                <br/>
                
                <Tabs>
                    <Tab eventKey="Read from File" title='Read from File'>
                        <br/>
                    <Row>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01"
                                style = {{
                                    marginLeft: "67px"
                                }}>
                            Upload
                            </span>
                        </div>
                        <div className="custom-file"
                            style = {{
                                marginRight: "67px"
                            }}
                            >
                            <input
                                ref = {this.fileInput} 
                                type="file"
                                className="custom-file-input"
                                value = {this.filename}
                                onChange = {(e) => this.props.fileSelectionNameOnChange(e, this.fileInput.current.files[0].name)}
                                
                                
                                
                                />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                {this.props.uploadfilenameApp}
                            </label>
                        </div>
                    </div>
                   </Row>
                   <Row>
                    <div>
                    <Button 
                        
                        style = {{
                            
                            marginLeft: "67px",
                            marginTop: "20px",
                            alignSelf: "right"
                        }}
                        onClick = {(e) => this.props.fileUpload(e, this.fileInput.current.files[0])}
                        variant = "secondary"
                        >
                            Upload
                    </Button>

                    {this.props.uploadbutton &&<Image
                        src = {check}
                        style = {{
                            marginLeft: "10px",
                            marginTop: "20px",
                            height: 40,
                            width: 40
                        }}
                        disabled
                        />}
                           

                        
                                 
                                 </div>
                    
                    </Row>  
                    </Tab>
                    <Tab eventKey="Enter manually" title="Enter manually">
                        <br/>
                        <Row>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>X</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "gcodex")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Y</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "gcodey")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Z</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "gcodez")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Speed</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm/s" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "gcodespeed")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                                <Button 
                                    variant='secondary' 
                                    block
                                    onClick = {(e) => this.props.createGcode()}
                                    >
                                    Add
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant = 'secondary'
                                    onClick = {() => this.props.deleteGcode()}
                                    block
                                    >
                                    Delete
                                </Button>
                            </Col>
                            <Col>   
                                <Button
                                    block
                                    variant = 'secondary'
                                    onClick = {() => this.props.editGcode()}
                                    >
                                        Edit
                                    </Button>
                            </Col>
                        </Row>
                        <br/>
                        <FormGroup>
                            <Form.Control 
                                as="textarea" 
                                rows="4"
                                disabled = {this.props.textarea} 
                                value= {this.props.gcode}
                                onChange = {(e) => this.props.onChangeGcode(e)}
                                onBlur = {(e) => this.props.onBlurGcode(e)}
                                />
                            
                        </FormGroup>
                        
                        
                          
                    </Tab>
                </Tabs>

                <br/>
                <ButtonToolbar style={{marginLeft: '50px'}}>
                    <Button 
                        variant='secondary' 
                        style={{
                            marginRight: '10px'
                        }}
                        onClick = {this.props.startTranslate}
                    
                    >Translate/Verify G-Code</Button>
                    {this.props.translated &&<Image
                        src = {check}
                        style = {{
                            marginRight: "10px",
                            height: 40,
                            width: 40
                        }}
                        disabled
                        />}
                    {this.props.verifiedno &&<Image
                        src = {error}
                        style = {{
                            marginRight: "10px",
                            height: 40,
                            width: 28
                        }}
                        />}
                    <Button 
                        variant='info'
                        style = {{
                            marginRight: "10px"
                        }}
                        onClick = {this.props.openGcode}
                        disabled = {this.props.gcodebuttons}
                        >View translated G-Code</Button>
                    
                    
                </ButtonToolbar>
                
                {this.props.expertmode &&<Navbar bg='success' variant='dark'>
                    <Navbar.Brand>Expert Mode</Navbar.Brand>
                </Navbar>}
                <br/>
                {this.props.expertmode &&<Form>
                    <FormGroup as={Row}>
                        <Form.Label column sm={2}>
                            Calculated Frequency
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" disabled default='2,4 Hz'/>
                        </Col>
                        </FormGroup>
                </Form>}
                {this.props.expertmode &&<div>
                        <Button style= {{marginBottom: "20px",backgroundColor: "#00AB84",
                            borderColor: "#00AB84"}}>
                            Access to Plasma Controller Interface
                        </Button>
                        
                        
                        <Navbar bg='light'>
                            
                                <Navbar.Brand
                                    style = {{
                                        float:"left"
                                    }}>Move Printhead freely</Navbar.Brand>
                            
                            
                            
                                
                            </Navbar>

                        <Row>
                            
                            
                            <Col>
                                <br/>
                                
                                <ButtonGroup vertical className="d-flex">
                                    <DropdownButton as={ButtonGroup} title={`Stepsize: ${this.props.stepsize} mm/Click`} >
                                        <Dropdown.Item
                                            onClick = {() => this.props.setStepSize("a")}
                                            >1 mm per Click</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setStepSize("b")}
                                            >5 mm per Click</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setStepSize("c")}
                                            >10 mm per Click</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setStepSize("d")}
                                            >50 mm per Click</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setStepSize("e")}
                                            >100 mm per Click</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton as={ButtonGroup} title ={`Speed: ${this.props.setspeed} mm/s`}>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setSpeed("a")}>
                                                10 mm/s
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setSpeed("b")}>
                                                20 mm/s
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick = {() => this.props.setSpeed("c")}>
                                                50 mm/s
                                            </Dropdown.Item>
                                    </DropdownButton>
                                    
                                    <Button 
                                        onClick = {this.props.returnHome}
                                        variant="secondary" >
                                        Return to Reference Point
                                    </Button>
                                    <Button
                                        onClick = {this.props.repairPos}
                                        variant = "secondary"
                                        >
                                            Repair Position
                                        </Button>
                                    
                                </ButtonGroup>
                                
                            </Col>
                            <Col>
                                <br/>
                                <ButtonGroup className="d-flex">
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleXplus}
                                        >+ X-Axis</Button>
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleXminus}
                                        >- X-Axis</Button>
                                </ButtonGroup>
                                <ButtonGroup className="d-flex">
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleYplus}
                                        >+ Y-Axis</Button>
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleYminus}
                                        >- Y-Axis</Button>
                                </ButtonGroup>
                                <ButtonGroup className="d-flex">
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleZplus}
                                        >+ Z-Axis</Button>
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.movenozzleZminus}
                                        >- Z-Axis</Button>

                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row
                            style = {{
                                marginTop: "20px"
                            }}>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>X</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "fieldx")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Y</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "fieldy")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Z</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="in mm" 
                                    type="number"
                                    onChange = {(e) => this.props.onChange(e, "fieldz")}
                                    />
                            </InputGroup>
                            </Col>
                            <Col>
                                <Button 
                                    variant='secondary' 
                                    block
                                    onClick = {(e) => this.props.manualCoords()}
                                    >
                                    Go
                                </Button>
                            </Col>
                            </Row>
                            <Row
                                style = {{
                                    marginTop:"20px"
                                }}>
                                <Col xl lg="7">
                                <InputGroup
                                    style = {{
                                        marginLeft: "20px",
                                        
                                    }}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Individual Command</InputGroup.Text>
                                    </InputGroup.Prepend>
                                
                                    <FormControl
                                        placeholder="type whatever you want"
                                        onChange = {(e) => this.props.onChange(e, "invcommand")}
                                        />
                                    </InputGroup>
                                    </Col>
                                    <Col xs lg="3">
                                    <Button
                                        block
                                        style = {{
                                            marginRight:"10px"
                                        }}
                                        onClick = {() => this.props.sendInvcommand()}>
                                        Send
                                    </Button>
                                    
                                    </Col>
                            </Row>
                        
                        </div>}
                <br/>

                <Navbar bg='light' style={{paddingBottom: '60px'}}>

                </Navbar>
                
                    
                
            </div>

        )
    }
    

}