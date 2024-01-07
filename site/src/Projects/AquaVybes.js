import { Component, Link } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css"
import { ArrowButton } from "../Gallery/ArrowButton";
import logo from "./images/AquaVybes.png";

export class AquaVybes extends Component {
    render() { 
        let imageWidth = 180;
        let imageRatio = 1;

        return (
            <Container className="aqua-vybes project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="nutri-app-logo-container">
                                <img className="pointer-cursor" src={logo} alt="Ghost Jazz logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                <div className="aqua-vybes-logo-text">AquaVybes</div>
                            </Container>
                        </Col>
                        <Col className="center">
                            <p style={{width: "500px"}}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </Col>
                    </Col>
            </Container>
        );
    }
}