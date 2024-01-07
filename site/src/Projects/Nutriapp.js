import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { ArrowButton } from "../Gallery/ArrowButton";
import logo from  "./images/Nutriapp.png";
import "./Projects.css";

export class Nutriapp extends Component {
    render() {
        let imageWidth = 250;
        let imageRatio = 0.8333;
        console.log(this.props);
        return(
            <Container className="nutri-app project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="nutri-app-logo-container">
                                <img className=" pointer-cursor" src={logo} alt="Ghost Jazz logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                <div className="nutri-app-logo-text">Nutriapp</div>
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
        )
    }
}