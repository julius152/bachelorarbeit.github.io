import React from 'react';
import './App.css';
import { Navbar, Image, Row, Col } from "react-bootstrap";
import FHG from './svg/fhg_logo.svg'
import FHA from './svg/fh_aachen.svg'

export default class Setup extends React.Component {


    render() {
        return (
            <div>
            <Navbar 
                bg="light"
                style = {{
                    paddingTop:"50px",
                    
                }}/>
            <Row>
                <Col>
                
            <Image
                src = {FHG}
                style = {{
                    marginTop:"100px"
                }}
                />
                </Col>
            </Row>

            <Row>
            <Col>
            <Image
                src={FHA}
                style = {{
                    marginTop: "100px",
                    width: "800px"
                }}
                />
                </Col>
            </Row>
            </div>
        )
    }
}