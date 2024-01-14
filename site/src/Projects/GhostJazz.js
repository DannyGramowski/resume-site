import { Component } from "react";
import { Container, Col, } from "reactstrap";
import { Link } from "react-router-dom";
import "./Projects.css";
import logo from "./images/ghost-jazz-logo.png";

//https://itch.io/jam/rit-game-developers-club-halloween-2023-game-jam/rate/2340203
export class GhostJazz extends Component {
    
    click = () => {
        console.log("click");
    }

    render() {
        let imageWidth = 350;
        let imageRatio = 0.79365;
        return(
            <Container className="ghostjazz project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Link to="/ghostjazz">
                                <img className="ghost-jazz-logo pointer-cursor " src={logo} alt="Ghost Jazz logo" width={imageWidth} height={imageRatio * imageWidth}/>
                            </Link>
                        </Col>
                        <Col className="center blurb-font">
                            <Container>
                                <p style={{width: "500px", marginBottom: "-15px"}}>
                                    This was part of the 2023 Game Developers Club Halloween Game Jam. Ghost Jazz is a rhythm 
                                    game with follows the game jams theme of spontaneity. the song and instruments change periodically 
                                    without warning. I composed one of the two songs and gathered the instrument data. I was also responible
                                    for adding all of the events onto a timeline to allow the game to flow easily. 
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Oct. 2023 - Oct. 2023
                                    </p>
                                </Container>
                            </Container>
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
                GhostJazz
            </Container>
        );
    }
}