import { Component } from "react";
import { Container, Col, Row, ListGroupItem } from "reactstrap";
import "./MainPage.scss";
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
        return (
            <Container className="main-page">
                <Container className="center">
                    <Col className="page-container">
                        {/* blurb text and image */}
                        <Row className="center blurb-container">
                            <Col>
                                <Row>
                                    <Container className="name-text">Danny Gramowski</Container>
                                </Row>
                                <Row className="d-flex">
                                    <Col className="w-auto">
                                        <Container className="danny-image-container" style={{marginBottom: "2vh"}}>
                                            <img src={dannyImage} className="danny-image" alt=" of Danny"/>
                                            {/* <Container className="image-placeholder" /> */}
                                        </Container>
                                    </Col>
                                    <Col className="d-flex align-items-center">
                                        <Container className="blurb-text">
                                            I am a third year software engineering student at RIT. I 
                                            believe high quality software is made by dedicated developers in a highly collaborative
                                            environment. Exceptional developers and team collaboration are needed to thrive. I am a 
                                            naturally curious developer that enjoys learning about new idea solving interesting problems.
                                        </Container>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {this.createDivider()}

                        {/* skills */}
                        <Row className="skills-section-container">
                            {/* languages. Add on hover that shows what projects I used them on*/}
                                <Container className="skills-text">Skills</Container>
                                <Row className="d-flex center-horiz">
                                    <Col className="skills-col text-end" >
                                        <div className="skill-item skill-header">Languages</div>
                                        {this.createSkill("C#", "Too Deep, Nutriapp, Ghost Jazz, Kalaras Last Defense", true)}
                                        {this.createSkill("Java", "AquaVybes, Software Engineering 1 (class), Software Engineering 2 (class)", true)}
                                        {this.createSkill("Python", "Aurora Machine, IDEA Card, BunchNotes, Web Engineering (class)", true)}
                                        {this.createSkill("C/C++", "QWER-KEY, Personal Software Engineering (class)", true)}
                                        {this.createSkill("SQL", "Aurora Machine, BunchNotes, Web Engineering (class)", true)}
                                        {this.createSkill("JavaScript/Typescript", "Aurora Machine, IDEA Card, Nutriapp, BunchNotes, AquaVybes, Web Engineering (class)", true)}
                                    
                                    </Col>
                                  
                                    <Col className="skills-col">
                                        <div className="skill-item skill-header">Projects Used In</div>
                                        {this.state.projectText === "" ? <Container /> :
                                        <Container className="project-text-container">
                                            <Container className="project-text">
                                                {this.state.projectText}
                                            </Container>
                                        </Container>}

                                    </Col>
                                  
                                    <Col className="skills-col">
                                        <div className="skill-item skill-header">Miscellaneous</div>
                                        {this.createSkill("Windows", "Main platform", false)}
                                        {this.createSkill("Linux", "Personal Software Engineering (class)", false)}
                                        {this.createSkill("Angular", "IDEA Card, AquaVybes", false)}
                                        {this.createSkill("React", "This website, Web Engineering (class)", false)}
                                        {this.createSkill("Docker", "Aurora Machine", false)}
                                        {this.createSkill("Spring", "AquaVybes", false)}
                                        {this.createSkill("FastAPI", "Aurora Machine, IDEA Card, BunchNotes", false)}
                                        {this.createSkill("TensorFlow", "Trained Terrain", false)}
                                        {this.createSkill("PostgreSQL", "Aurora Machine, BunchNotes, Web Engineering (class)", false)}
                                        {this.createSkill("Unity", "Ghost Jazz, Kalaras Last Defense", false)}
                                        {this.createSkill("Odoo", "Aurora Machine", false)}
                                    </Col>
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