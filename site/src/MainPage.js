import { Component } from "react";
import { Container, Col, Row, ListGroupItem } from "reactstrap";
import "./MainPage.scss";
import dannyImage from "./files/danny_suit.jpg";

export class MainPage extends Component {

    state = { projectText: "", onLeft: true }

    // createDivider = () => {
    //     return <Container className="divider"/>
    // }

    createSkill = (skill, hoverText, onLeft) => {
        return <ListGroupItem className="skill-item skill"
            onMouseEnter={() => this.setState({ projectText: hoverText, onLeft: onLeft })}
            onMouseLeave={() => this.setState({ projectText: "", onLeft: onLeft })}>

            {skill}
            {
                hoverText !== "" ?
                    <span className={"skill-tooltip " + (onLeft ? "left-tooltip" : "right-tooltip")}>{hoverText}</span>
                    : <Container></Container>
            }
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
                                    <Container className="name-text">Daniel Gramowski</Container>
                                </Row>
                                <Row className="d-flex">
                                    <Col className="w-auto">
                                        <Container className="danny-image-container" style={{ marginBottom: "2vh" }}>
                                            <img src={dannyImage} className="danny-image" alt=" of Danny" />
                                            {/* <Container className="image-placeholder" /> */}
                                        </Container>
                                    </Col>
                                    <Col className="d-flex align-items-center">
                                        <Container className="blurb-text">
                                            I am a senior software engineering student at RIT. I
                                            believe high quality software is made by dedicated developers in a highly collaborative
                                            environment. Exceptional developers and team collaboration are needed to thrive. I am a
                                            naturally curious developer that enjoys learning about new ideas and solving interesting problems.
                                        </Container>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* {this.createDivider()} */}

                        {/* skills */}
                        <Row className="skills-section-container">
                            {/* languages. Add on hover that shows what projects I used them on*/}
                            <Container className="skills-text">Skills</Container>
                            <Row className="d-flex center-horiz">
                                <Col className="skills-col text-end" >
                                    <div className="skill-item skill-header">Languages</div>
                                    {this.createSkill("C#", "BracketBarn, Nutriapp, Poker-bot, Too Deep, Ghost Jazz, Kalaras Last Defense", true)}
                                    {this.createSkill("Java", "AquaVybes", true)}
                                    {this.createSkill("Python", "Aurora Machine, BidiiNet, IDEA Card, Poker-bot, BunchNotes", true)}
                                    {this.createSkill("C/C++", "QWER-KEY, Personal Software Engineering (class)", true)}
                                    {this.createSkill("SQL", "Aurora Machine, BracketBarn", true)}
                                    {this.createSkill("JavaScript/Typescript", "Aurora Machine, Resume website, IDEA Card, Nutriapp, BunchNotes, AquaVybes", true)}
                                    {this.createSkill("Rust", "Poker-bot", true)}

                                </Col>

                                <Col className="skills-col">
                                    <div className="skill-item skill-header">Projects Used In</div>
                                    {/* Always render the container, toggle the 'visible' class */}
                                    <div className={`
                                    project-text-container 
                                    ${this.state.projectText ? 'visible' : ''}`}>                                        
                                        <div className={`project-text ${this.state.onLeft ? 'border-left-accent' : 'border-right-accent'}`}>
                                            {this.state.projectText}
                                        </div>
                                    </div>
                                </Col>

                                <Col className="skills-col">
                                    <div className="skill-item skill-header">Miscellaneous</div>
                                    {this.createSkill("Angular", "IDEA Card, AquaVybes", false)}
                                    {this.createSkill("React", "Resume website, Web Engineering (class)", false)}
                                    {this.createSkill("Docker", "Aurora Machine, BracketBarn, BidiiNet", false)}
                                    {this.createSkill("FastAPI", "Aurora Machine, IDEA Card, BunchNotes", false)}
                                    {this.createSkill("ASP Net Core", "BracketBarn, Nutriapp", false)}
                                    {this.createSkill("TensorFlow", "Trained Terrain", false)}
                                    {this.createSkill("PostgreSQL", "Aurora Machine, BracketBarn, BunchNotes", false)}
                                    {this.createSkill("Unity", "Poker-bot, Too Deep, Ghost Jazz, Kalaras Last Defense", false)}
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