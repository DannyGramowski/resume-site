import { Component } from "react";
import { Container, Button } from "reactstrap";
import "./MainPage.css"
import { Link } from "react-router-dom";

export class MainPage extends Component {
    render() {
        return (
            <Container className="main-page">
                <Container className="center">
                    <Container className="center blurb-container">
                        <Container className="blurb-text">
                            My name is Danny Gramowski. I am a second year software engineering student at RIT. I have
                            experience in a large number of different fields within computer science. I enjoy learning and 
                            one way I scratch this itch is to try something new. I started programming in my FIRST robotics team 
                            in 9th grade. During COVID, I expanded my horizons and began developing games in UNITY. 
                        </Container>
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