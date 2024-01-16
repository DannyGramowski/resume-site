import { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./MainPage.css";
import dannyImage from "./files/Danny zipline.png";

export class MainPage extends Component {

    createSkill = (skill, hoverText, onLeft) => {
        return <ListGroupItem className="skill-item skill">{skill}
            {hoverText != "" ? <span className={"skill-tooltip " + (onLeft ? "left-tooltip" : "right-tooltip")}>{hoverText}</span> : <Container></Container>}
        </ListGroupItem>

    }
    render() {
        let dannyHeight = 500;
        let dannyRatio = 0.666;
        return (
            <Container className="main-page">
                <Container className="center">
                    <Col className="page-container">
                        {/* blurb text and image */}
                        <Row className="center blurb-container">
                            <Col>
                                <Row >
                                    <Container className="name-text">I am Danny Gramowski</Container>
                                </Row>
                                <Container className="center-horiz">
                                    <img src={dannyImage} height={dannyHeight} width={dannyHeight * dannyRatio}/>
                                    {/* <Container className="image-placeholder" /> */}
                                </Container>
                                

                                <Row className="center-horiz">
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
                        </Row>

                        {/* skills */}
                        <Row>
                            {/* languages. Add on hover that shows what projects I used them on*/}
                                <Row className="skills-container center-horiz">
                                    <ListGroup className="skills-col" >
                                        <ListGroupItem className="skill-item skill-header">Languages</ListGroupItem>
                                        {this.createSkill("C#", "Nutriapp, Ghost Jazz, Kalaras Last Defense", true)}
                                        {this.createSkill("Java", "AquaVybes, Computer Science 1(class), Computer Science 1(class)", true)}
                                        {this.createSkill("Python", "BunchNotes, Web Engineering(class)", true)}
                                        {this.createSkill("C/C++", "Personal Software Engineering(class)", true)}
                                        {this.createSkill("SQL", "BunchNotes, Web Engineering(class)", true)}
                                        {this.createSkill("JavaScript/Typescript", "Nutriapp, BunchNotes, AquaVybes, Web Engineering(class)", true)}
                                    </ListGroup>

                                    <ListGroup className="skill-filler" >
                                        {/* create empty space */}
                                    </ListGroup>
                                    
                                    <ListGroup className="skills-col" >

                                        <ListGroupItem className="skill-item skill-header">Miscellaneous</ListGroupItem>
                                        {this.createSkill("Windows", "Main platform", false)}
                                        {this.createSkill("Linux", "Personal Software Engineering(class)", false)}
                                        {this.createSkill("Unity", "Ghost Jazz, Kalaras Last Defense", false)}
                                        {this.createSkill("Angular", "AquaVybes", false)}
                                        {this.createSkill("React", "This website, Web Engineering(class)", false)}
                                        {this.createSkill("Spring Boot", "AquaVybes", false)}
                                        {this.createSkill("FastAPI", "BunchNotes", false)}
                                        {this.createSkill("TensorFlow", "Trained Terrain", false)}
                                        {this.createSkill("PostgreSQL", "BunchNotes, Web Engineering(class)", false)}
                                    </ListGroup>
                                </Row>

                            {/* frameworks */}
                            <Container>

                            </Container>
                        </Row>

                        {/* hobbies */}
                        <Row>

                        </Row>
                    </Col>
                </Container>



                {/* <Container className="center">
                    <a href="./files/Danny_Resume.pdf" download className="download-button center">
                        <div className="download-text">
                            Resume
                        </div>
                    </a>
                </Container> */}
            </Container>
        );
    }
}