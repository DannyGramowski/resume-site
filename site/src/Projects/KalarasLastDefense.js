import { Container, Col } from "reactstrap";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import logo from "./images/Kalaras.png";

export class KalarasLastDefense extends Component {
    
    render() {
        let imageWidth = 180;
        let imageRatio = 0.7349;

        return(
            <Container className="kalaras project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="nutri-app-logo-container">
                                <Link to="/kalaras">
                                    <img className="pointer-cursor" src={logo} alt="Kalaras Last Defense logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                    <div className="logo-text">Kalara's Last Defense</div>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center blurb-font">
                            <Container>
                                <p style={{width: "500px", marginBottom: "-15px"}}>
                                    This is a fully release tower defense game built in Unity. I did everything 
                                    from music composition, 3d modeling, and programing.  
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Sept. 2020 - Apr. 2021
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        )
    }
}

export class KalarasLastDefensePage extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                Kalaras
            </Container>
        );
    }
}