import { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./MainPage.css";
import dannyImage from "./files/Danny zipline.png";

export class MainPage extends Component {

    state = {projectText: ""}

    createDivider = () => {
        return <Container className="divider"/>
    }

    createSkill = (skill, hoverText, onLeft) => {
        return <ListGroupItem className="skill-item skill" onMouseEnter={() => this.setState({projectText: hoverText})} onMouseLeave={() => this.setState({projectText: ""})}>{skill}
            {hoverText !== "" ? <span className={"skill-tooltip " + (onLeft ? "left-tooltip" : "right-tooltip")}>{hoverText}</span> : <Container></Container>}
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
                                    <Container className="name-text">Danny Gramowski</Container>
                                </Row>
                                <Container className="center-horiz">
                                    <img src={dannyImage} height={dannyHeight} width={dannyHeight * dannyRatio} alt=" of Danny"/>
                                    {/* <Container className="image-placeholder" /> */}
                                </Container>
                                

                                <Row className="center-horiz">
                                    <Container className="blurb-text">
                                        Hi I am Danny Gramowski. I am a second year software engineering student at RIT. I 
                                        believe high quality software is made by dedicated developers in a highly collaborative
                                        environment. You need both exceptional developers and the collaboration for everyone to 
                                        thrive. I am a naturally curious developer that enjoys learning about new topics as well
                                        as working on team projects.
                                    </Container>

                                </Row>
                                <Row>
                                    <Container></Container>
                                </Row>
                            </Col>
                        </Row>

                        {this.createDivider()}

                        {/* skills */}
                        <Row className="skills-section-container">
                            {/* languages. Add on hover that shows what projects I used them on*/}
                                <Container className="skills-text">Skills</Container>
                                <Row className="skills-container center-horiz">
                                    <ListGroup className="skills-col" >
                                        <ListGroupItem className="skill-item skill-header">Languages</ListGroupItem>
                                        {this.createSkill("C#", "Nutriapp, Ghost Jazz, Kalaras Last Defense", true)}
                                        {this.createSkill("Java", "AquaVybes, Computer Science 1 (class), Computer Science 1 (class)", true)}
                                        {this.createSkill("Python", "IDEA Card, BunchNotes, Web Engineering (class)", true)}
                                        {this.createSkill("C/C++", "Personal Software Engineering (class)", true)}
                                        {this.createSkill("SQL", "BunchNotes, Web Engineering (class)", true)}
                                        {this.createSkill("JavaScript/Typescript", "IDEA Card, Nutriapp, BunchNotes, AquaVybes, Web Engineering (class)", true)}
                                    </ListGroup>

                                    <ListGroup className="skill-filler" >
                                            <Container className="skill-filler-background" />
                                        {/* create empty space */}
                                    </ListGroup>
                                    <ListGroup className="center-skills-col skills-col">
                                        <ListGroupItem className="skill-item skill-header">Projects Used In</ListGroupItem>
                                        {this.state.projectText === "" ? <Container /> :
                                        <Container className="project-text-container">
                                            <Container className="project-text">
                                                {this.state.projectText}
                                            </Container>
                                        </Container>}
                                    </ListGroup>

                                    <ListGroup className="skill-filler" >
                                            <Container className="skill-filler-background" />
                                        {/* create empty space */}
                                    </ListGroup>
                                    
                                    <ListGroup className="skills-col" >

                                        <ListGroupItem className="skill-item skill-header">Miscellaneous</ListGroupItem>
                                        {this.createSkill("Windows", "Main platform", false)}
                                        {this.createSkill("Linux", "Personal Software Engineering (class)", false)}
                                        {this.createSkill("Unity", "Ghost Jazz, Kalaras Last Defense", false)}
                                        {this.createSkill("Angular", "IDEA Card, AquaVybes", false)}
                                        {this.createSkill("React", "This website, Web Engineering (class)", false)}
                                        {this.createSkill("Spring", "AquaVybes", false)}
                                        {this.createSkill("FastAPI", "IDEA Card, BunchNotes", false)}
                                        {this.createSkill("TensorFlow", "Trained Terrain", false)}
                                        {this.createSkill("PostgreSQL", "BunchNotes, Web Engineering (class)", false)}
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