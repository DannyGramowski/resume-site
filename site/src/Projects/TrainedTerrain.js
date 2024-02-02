import { Component } from "react";
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Projects.css"
import logo from "./images/AquaVybes.png"

export class TrainedTerrain extends Component {
    render() {
        let imageWidth = 250;
        let imageRatio = 0.8333;

        return(

            <Container className="trainedterrain project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="nutri-app-logo-container">
                                <Link to="/nutri-app" >
                                    <img className=" pointer-cursor" src={logo} alt="Trained Terrain logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                    <div className="logo-text" style={{marginTop: "-15px"}}>Trained Terrain</div>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center">
                            <Container className="blurb-font">

                                <p style={{width: "500px", marginBottom: "-10px"}} >
                                    This is an app that converts a 2d topography map to a 3D representation using 
                                    machine learning. The goal of the project was to learn machine leraning and
                                    tensorflow.
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; May. 2023 - Jan. 2024
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        )
    }
}