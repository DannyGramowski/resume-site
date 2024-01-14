import { Component } from "react";
import { Container, Button, Col, Row } from "reactstrap";
import "./MainPage.css"
import { Link } from "react-router-dom";

export class MainPage extends Component {
    render() {
        return (
            <Container className="main-page">
                <Container className="center">
                    <Container className="center blurb-container">
                        <Col>
                            <Row>
                                <Container className="name-text">I am Danny Gramowski</Container>
                            </Row>
                            <Container className="image-placeholder">
                            {/* image */}

                            </Container>
                            <Row>
                                <Container className="blurb-text">
                                    I am a second year software engineering student at RIT. I have
                                    experience in a large number of different fields within computer science. I enjoy learning and 
                                    one way I scratch this itch is to try something new. I started programming in my FIRST robotics team 
                                    in 9th grade. During COVID, I expanded my horizons and began developing games in UNITY. From there I went on 
                                    to college and began trying all sorts of coding diciplinces. I have done personal projects
                                    in web development, machine learning, more game development.  
                                </Container>

                            </Row>
                            <Row>
                                <Container></Container>
                            </Row>
                        </Col>
                    </Container>
                </Container>

                <Container className="center">
                    <a href="./files/Danny_Resume.pdf" download className="download-button center">
                        <div className="download-text">
                            Resume
                        </div>
                    </a>
                </Container>
            </Container>
        );
    }
}