import { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./MainPage.css"

export class MainPage extends Component {

    createSkill = (skill, hoverText) => {
        return <ListGroupItem className="skill-item skill">
            Windows<span></span>
        </ListGroupItem>

    }
    render() {
        return (
            <Container className="main-page">
                <Container className="center">
                    <Col className="page-container">
                        {/* blurb text and image */}
                        <Row className="center blurb-container">
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
                        </Row>

                        {/* skills */}
                        <Row>
                            {/* languages. Add on hover that shows what projects I used them on*/}
                                <Row className="skills-container">
                                    <ListGroup className="skills-col" >
                                        <ListGroupItem className="skill-item skill-header">Languages</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">C#</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Java</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Python</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">C/C++</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">SQL</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">JavaScript/Typescript</ListGroupItem>
                                    </ListGroup>

                                    <ListGroup className="skill-filler" >
                                        {/* create empty space */}
                                    </ListGroup>
                                    
                                    <ListGroup className="skills-col" >
                                        <ListGroupItem className="skill-item skill-header">Miscellaneous</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Windows</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Linux</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Unity</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Angular</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">React</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">Spring</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">FastAPI</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">TensorFlow</ListGroupItem>
                                        <ListGroupItem className="skill-item skill">PostgreSQL</ListGroupItem>
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