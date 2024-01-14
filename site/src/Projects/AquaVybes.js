import { Component } from "react";
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Projects.css"
import logo from "./images/AquaVybes.png";

export class AquaVybes extends Component {
    render() { 
        let imageWidth = 260;
        let imageRatio = 0.7119;

        return (
            <Container className="aquavybes project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="aqua-vybes-logo-container">
                                <Link to="/aqua-vybes">
                                    <img className="pointer-cursor" src={logo} alt="Aqua Vybes logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                    <div className="logo-text" style={{margin: "-40px"}}>AquaVybes</div>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center">
                            <Container className="blurb-font">
                                <p style={{width: "500px", marginBottom: "-10px", color: "black"}} >
                                    This was an online estore that sold custom flavored water for my introduction to 
                                    software engineering class. We used scrum to organize the project and 
                                    meet goals. The estore was built using Spring backend and Angular frontend.
                                    I was responible for setting up user and admin log in, user feedback, and setting up product data.
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Jan. 2023 - May. 2023
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        );
    }
}

export class AquaVybesPage extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                AquaVybes
            </Container>
        );
    }
}
 