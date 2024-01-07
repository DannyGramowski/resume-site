import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./Projects.css";
import logo from "./images/ghost-jazz-logo.png";
import { ArrowButton } from "../Gallery/ArrowButton";
import { Link } from "react-router-dom";

//https://itch.io/jam/rit-game-developers-club-halloween-2023-game-jam/rate/2340203
export class GhostJazz extends Component {
    
    click = () => {
        console.log("click");
    }

    render() {
        let imageWidth = 350;
        let imageRatio = 0.79365;
        return(
            <Container className="ghost-jazz project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Link to="/ghost-jazz">
                                <img className="ghost-jazz-logo pointer-cursor " src={logo} alt="Ghost Jazz logo" width={imageWidth} height={imageRatio * imageWidth}/>
                            </Link>
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

export class GhostJazzPage extends Component {
    render() {
        return (
            <Container>
                page
            </Container>
        );
    }
}