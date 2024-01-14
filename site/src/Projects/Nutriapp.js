import { Component } from "react";
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from  "./images/Nutriapp.png";
import "./Projects.css";

export class NutriApp extends Component {
    render() {
        let imageWidth = 250;
        let imageRatio = 0.8333;

        return(

            <Container className="nutriapp project center">
                    <Col className="project-content ">
                        <Col className="center">
                            <Container className="nutri-app-logo-container">
                                <Link to="/nutri-app" >
                                    <img className=" pointer-cursor" src={logo} alt="Ghost Jazz logo" width={imageWidth} height={imageRatio * imageWidth}/>
                                    <div className="logo-text" style={{marginTop: "-15px"}}>Nutriapp</div>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="center">
                            <Container className="blurb-font">

                                <p style={{width: "500px", marginBottom: "-10px"}} >
                                    This is a web app that allows a user to track weight, calories, and workouts as 
                                    well as make recipies and meals from a list of ingredients. I worked on a team of 5 to implement 
                                    the app using a C# backend and svelte frontend. My responsibility was serializing all of the data and 
                                    allow it to be imported and exported as csv, json, and xml.
                                </p>
                                <br />
                                <Container className="center">
                                    <p>
                                        Project Date: &nbsp; Sept. 2023 - Dec. 2023
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Col>
            </Container>
        )
    }
}

export class NutriAppPage extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                NutriApp
            </Container>
        );
    }
}