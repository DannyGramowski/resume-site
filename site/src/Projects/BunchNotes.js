import { Component } from "react";
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Projects.css"
import logo from "./images/BunchNotes.png";

export class BunchNotes extends Component {
    
    render() {
        let imageWidth = 180;
        let imageRatio = 1;
        return(
            <Container className="bunchnotes project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="bunch-notes-logo-container">
                                <Link to="/bunch-notes">
                                    <img className="pointer-cursor" src={logo} alt="Bunch Notes logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                    <div>
                                        <span className="logo-text">Bunch</span><span className="logo-text" style={{color: "rgb(14 165 233)"}}>Notes</span>
                                    </div>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center blurb-font">
                            <Container>
                                <p style={{width: "500px", marginBottom: "-15px"}}>
                                    This was part of Brickhack 9 at RIT. BunchNotes is a note sharing platfrom that
                                    allows students to upload class notes for credits that they can use to look at 
                                    other people notes for other classes. My job was to set up the APIs to hook up 
                                    the SQL and frontend. We used fastapi in python to set up the backend. 
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Feb. 2023 - Feb. 2023
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        )
    }
}

export class BunchNotesPage extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                BunchNotes
            </Container>
        );
    }
}