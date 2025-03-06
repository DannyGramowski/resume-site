import { Component } from "react";
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Projects.scss"
import logo from "./images/Ideacard.png";

export class IdeaCard extends Component {
    render() { 
        let imageWidth = 260;
        let imageRatio = 0.7119;

        return (
            <Container className="ideacard project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="idea-card-logo-container">
                                <Link to="/aqua-vybes">
                                    <img className="pointer-cursor" src={logo} alt="Idea Card logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center">
                            <Container className="blurb-font">
                                <p style={{width: "500px", marginBottom: "-20px", color: "white"}} >
                                    A website built as part of the Google Developer Student Club Solution Challenge. This website
                                    allows people with disabilities to fill in their disabilities and desired accommodations. Then 
                                    they can export their information to a variety of formats to give to managers and hiring managers to help alleviate some of the stigma and misinformation surrounding disabilities.
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Jan. 2024 - Feb. 2024
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        );
    }
}