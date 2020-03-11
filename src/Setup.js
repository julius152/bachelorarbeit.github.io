import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Row, Col, Tabs, Tab, ButtonGroup} from 'react-bootstrap';
import { Stage, Layer, Rect, Text, Arrow } from 'react-konva';
import Image from 'react-bootstrap/Image';
import check from './untitled.svg';
import setupimg from './setupimg.svg';



export default class Setup extends React.Component {


    render() {
        return (
            
        <div>
                <Navbar bg="light" style={{ paddingTop: '60px'}}>
                    <Navbar.Brand>Set Up Parameters</Navbar.Brand>
                    <Dropdown >
                            <Dropdown.Toggle variant = "secondary">                                
                                {this.props.dropdowntitle}
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item
                                    onClick={(e) => {this.props.dropdownClick(e)}}
                                >Standard</Dropdown.Item>
                            </Dropdown.Menu>    
                        </Dropdown>
                </Navbar>
                <Row>
                <Col xs={this.props.columnsizeform}>
                <Form>
                <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Tool Width [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control
                                
                                style = {{backgroundColor: `${this.props.toolwidthV}`}} 
                                value={this.props.toolwidth} 
                                onChange={(e) => this.props.onChange(e, "toolwidth")}
                                onBlur = {(e) => {this.props.onBlur(e, 0, 350, "toolwidth", "toolwidthV")}}
                                onClick={(e) => {this.props.onClickdelete(e, "toolwidth")}}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}> 
                        <Form.Label column sm={this.props.columnsizetext}>
                            Tool Length [mm]
                        </Form.Label>
                        
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control
                                
                                style={{backgroundColor: `${this.props.toollengthV}`}}
                                onClick={(e) => {this.props.onClickdelete(e, "toollength")}}
                                name = "toollength" 
                                value={this.props.toollength}
                                onChange={(e) => {this.props.onChange(e, "toollength")}}
                                onBlur={(e) => {this.props.onBlur(e, 0, 400, "toollength", "toollengthV")}}                       
                            />

                            
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Tool Height [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                
                                style = {{backgroundColor: `${this.props.toolheightV}`}}
                                value={this.props.toolheight} 
                                name = "toolheight"
                                onChange={(e) => this.props.onChange(e, "toolheight")}
                                onBlur = {(e) => {this.props.onBlur(e, 0, 150, "toolheight", "toolheightV")}}
                                onClick={(e) => {this.props.onClickdelete(e, "toolheight")}}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Available Chamber Width [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                type="number" 
                                disabled 
                                value={`${370-this.props.toolwidth}`} 
                                onChange={(e) => this.props.onChange(e, "chamberwidth")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Available Chamber Length [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control
                                type="number" 
                                disabled
                                value={`${560-this.props.toollength}`} 
                                onChange={(e) => this.props.onChange(e, "chamberlength")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Available Chamber Height [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                type="number"
                                style = {{
                                    backgroundColor: `${this.props.chamberheightV}`
                                }} 
                                disabled 
                                value={`${185-this.props.toolheight-this.props.nozzledistance-this.props.substrateheight}`} 
                                onChange={(e) => this.props.onChange(e, "chamberheight")} />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Substrate Plate Width [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                style = {{backgroundColor: `${this.props.substratewidthV}`}}
                                value={this.props.substratewidth} 
                                onChange={(e) => this.props.onChange(e, "substratewidth")} 
                                onBlur={(e) => this.props.onBlur(e, 0, 370, "substratewidth", "substratewidthV")}
                                onClick= {(e) => this.props.onClickdelete(e, "substratewidth")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Substrate Plate Length [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                style = {{backgroundColor: `${this.props.substratelengthV}`}} 
                                value={this.props.substratelength} 
                                onChange={(e) => this.props.onChange(e, "substratelength")}
                                onBlur={(e) => this.props.onBlur(e, 0, 560, "substratelength", "substratelengthV")}
                                onClick={(e) => this.props.onClickdelete(e, "substratelength")}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Substrate Plate Height [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control
                                
                                style = {{backgroundColor: `${this.props.substrateheightV}`}}  
                                value={this.props.substrateheight} 
                                onChange={(e) => this.props.onChange(e, "substrateheight")}
                                onBlur = {(e) => this.props.onBlur(e, 0, 100, "substrateheight", "substrateheightV")}
                                onClick = {(e) => this.props.onClickdelete(e, "substrateheight")}
                                />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Form.Label column sm={this.props.columnsizetext}>
                            Working Distance [mm]
                        </Form.Label>
                        <Col sm={this.props.columnsizeinput}>
                            <Form.Control 
                                style = {{backgroundColor: `${this.props.nozzledistanceV}`}} 
                                value={this.props.nozzledistance} 
                                onChange={(e) => this.props.onChange(e, "nozzledistance")}
                                onClick = {(e) => this.props.onClickdelete(e, "nozzledistance")}
                                onBlur = {(e) => this.props.onBlur(e, 2, 30, "nozzledistance", "nozzledistanceV")}
                                />
                        </Col>
                    </Form.Group>
                    

                </Form>
                </Col>
                <Col xs={this.props.columnsizeimage}>
                    <Image 
                        src = {setupimg}
                        style = {{
                            marginTop: "10px"
                        }}
                        />
                </Col>
                </Row>
                <Row>
                <Button
                        
                        disabled = {this.props.submitbutton}
                        style = {{
                            float: "left",
                            width: "180px",
                            marginLeft: "50px",
                            height: "40px",
                            backgroundColor: "#00AB84",
                            borderColor: "#00AB84"

                            }}
                        onClick = {(e) => this.props.sendSetupValues()}
                        >
                        Send
                </Button>
                <div
                    class = "imagecontainer"
                    style = {{
                        
                        alignSelf: "left",
                        marginLeft: "20px",
                        
                    }}>

                {this.props.setupvalues1check &&<Image 
                    style = {{
                        width: 40,
                        height: 40
                    }}
                    src= {check}
                        />}
                </div>
                
                </Row>
                <br/>
                <Row>
                    <Col>
                <Navbar bg="light">
                    <Navbar.Brand>Position of Substrate Plate</Navbar.Brand>
                </Navbar>  
                <br/>
                
                
                {this.props.dangershow &&<Tabs disabled>
                    <Tab eventKey="enter" title="Enter Coordinates" disabled={this.props.setup2activate}>
                        <br/>

                        <Form>
                            
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        style = {{backgroundColor: `${this.props.substrateposxV}`}}
                                        placeholder="X in mm" 
                                        value={this.props.substrateposx} 
                                        onChange={(e) => this.props.onChange(e, "substrateposx")}
                                        onBlur = {(e) => this.props.onBlurPos(e, 10, 370-this.props.substratewidth, "substrateposx", "substrateposxV")}
                                        disabled = {this.props.setup2activate}
                                        onClick = {(e) => this.props.onClickdeletePos(e, "substrateposx")}
                                        />                               
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        style = {{backgroundColor: `${this.props.substrateposyV}`}}
                                        placeholder="Y in mm" 
                                        value={this.props.substrateposy} 
                                        onChange={(e) => this.props.onChange(e, "substrateposy")}
                                        onBlur = {(e) => this.props.onBlurPos(e, 10, 560-this.props.substratelength, "substrateposy", "substrateposyV")}
                                        disabled = {this.props.setup2activate}
                                        onClick = {(e) => this.props.onClickdeletePos(e, "substrateposy")}
                                        />
                                </Form.Group>
                                
                                
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab eventKey="Move Nozzle" title="Move Nozzle" disabled={this.props.setup2activate}>
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
                                    <Button variant="secondary"disabled>
                                    {this.props.printheadpos}
                                    </Button>
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.setPosmanualsubstrate}
                                        >
                                    Set Nozzle Position as Substrate Plate Coordinates
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
                    </Tab>
                </Tabs>}
                </Col>
                
                
              
                <Col>
                <Navbar bg="light">
                    <Navbar.Brand>Definition of Reference Point</Navbar.Brand>
                </Navbar>          
                <br/>
                
                {this.props.dangershow &&<Tabs>
                    <Tab 
                        eventKey="enter" 
                        title="Enter Coordinates"
                        disabled = {this.props.setup2activate}
                        >
                        <br/>

                        <Form>
                            
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        style = {{backgroundColor: `${this.props.rpposxV}`}}
                                        placeholder="X in mm"
                                        value = {this.props.rpposx}
                                        onChange={(e) => this.props.onChange(e, "rpposx")}
                                        onBlur = {(e) => this.props.onBlurPos(e, 0, 370, "rpposx", "rpposxV")}
                                        disabled = {this.props.setup2activate}
                                        onClick = {(e) => this.props.onClickdeletePos(e, "rpposx")}
                                        />                               
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                        style = {{backgroundColor: `${this.props.rpposyV}`}}
                                        placeholder="Y in mm"
                                        value = {this.props.rpposy}
                                        onChange={(e) => this.props.onChange(e, "rpposy")}
                                        onBlur = {(e) => this.props.onBlurPos(e, 0, 560, "rpposy", "rpposyV")}
                                        disabled = {this.props.setup2activate}
                                        onClick = {(e) => this.props.onClickdeletePos(e, "rpposy")}
                                        />
                                </Form.Group>
                                
                                
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab 
                        eventKey="Move Nozzle" 
                        title="Move Nozzle" 
                        disabled = {this.props.setup2activate}
                        >
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
                                    <Button variant="secondary" disabled>
                                    {this.props.printheadpos}
                                    </Button>
                                    <Button 
                                        variant="secondary"
                                        onClick = {this.props.setPosmanualrppos}
                                        >
                                    Set Nozzle Position as Reference Point
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
                         
                         </Tab>
                         </Tabs>}
                         </Col>
                         </Row>
                         <Row>
                            <Col>
                            {this.props.dangershow &&<Button
                                   
                                    disabled = {this.props.previewbutton}
                                    style ={{
                                        backgroundColor: "#00AB84",
                                        borderColor: "#00AB84",

                                        float: "left",
                                        width: "180px",
                                        marginLeft: "40px",
                                        marginTop: "20px"

                                    }}
                                    onClick = {(e) => this.props.sendSetupValues2()}
                                    >
                                    Send
                                </Button>}
                                <div>
                                {this.props.setupvalues2check && 
                                <Image 
                                    src={check} 
                                    style = {{
                                        width: 40,
                                        height: 40,
                                        float: "left",
                                        marginLeft: "20px",
                                        marginTop: "20px"
                                        }}
                                        />}
                                </div>
                                
                                </Col>
                                <Col>
                                {this.props.dangershow &&<Button
                                    onClick = {(e) => this.props.showPreview(e)}
                                    style = {{
                                        float: "left",
                                        width: "180px",
                                        marginLeft: "0px",
                                        marginTop: "20px",
                                        
                                        }}

                                    disabled = {this.props.previewbutton}
                                    variant = "info" 
                                    >
                                    View Graphic
                                </Button>}
                        
                                
                            </Col>
                            <Col>
                                
                            </Col>
                         </Row>
                        
                         {this.props.dangerbutton &&<Button
                            variant = "danger"
                            block
                            style = {{
                                height: "100px",
                                fontSize: "20px"

                            }}
                            >
                                To continue please enter correct values above.
                            </Button>}

                        
                        <br/>
                
                    {this.props.showgraphicalrepresentation &&<div>
                    <Navbar 
                        bg='light'
                        
                        >
                        <Navbar.Brand>Graphical Representation of Entered Values</Navbar.Brand>
                    </Navbar>
                     <Stage width={600} height={590}>
                        <Layer>
                            <Text
                                text='X'
                                x={105}
                                y={5}
                                />
                            <Text
                                text='Y'
                                x={5}
                                y={105}
                                />                            
                            <Arrow
                                
                                points={[10,10,100,10]}
                                
                                pointerLength={5}
                                pointerWidth={5}
                                fill="black"
                                stroke="black"
                                strokeWidth={1}
                                />
                            <Arrow
                                points={[10,10,10,100]}
                                pointerLength={5}
                                pointerWidth={5}
                                fill="black"
                                stroke="black"
                                strokeWidth={1}
                                />
                            <Rect
                                x={20}
                                y={20}
                                width={370}
                                height={560}
                                fill='white'
                                stroke='black'
                                />
                            {this.props.showpreview &&<Rect
                                x={20 + parseInt(this.props.substrateposx)}
                                y={20 + parseInt(this.props.substrateposy)}
                                width={this.props.substratewidth}
                                height={this.props.substratelength}
                                fill="#00AB84"
                                stroke='black'
                                />}
                            {this.props.showpreview &&<Text
                                text='X'
                                x={20 + parseInt(this.props.rpposx)}
                                y={20 + parseInt(this.props.rpposy)}
                                />}
                        </Layer>
                        </Stage>               
                
                        </div>}
                    <Navbar 
                        bg="light"
                        style={{ paddingTop: '60px'}}
                        >

                    
                    </Navbar>
                  
                        
            </div>
                      

        );
    }

    
}

