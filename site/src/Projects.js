import { Component } from "react";
import './projects.css'
import { Container, Col } from "reactstrap";

export class Projects extends Component {

    render() {
        //image gallery here and each project has their own page. make it a square
        return(
            <Container className="project-container">
                <Col>
                    <Container className="project-item">
                        Trained Terrain
                    </Container>

                    <Container className="project-item">
                        NutriBunch
                    </Container>

                    <Container className="project-item">
                        Ghost Jazz
                    </Container>

                    <Container className="project-item">
                        Bunchnotes
                    </Container>

                    <Container className="project-item">
                        Equation Modeler
                    </Container>

                    <Container className="project-item">
                        Kalaras Last Defense
                    </Container>
                </Col>
            </Container>
        );
    }
}