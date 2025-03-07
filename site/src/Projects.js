import { Component } from "react";
import './projects.scss'
import { Container, Col } from "reactstrap";
import { Gallery } from "./gallery/Gallery";


export class Projects extends Component {

    render() {
        //image gallery here and each project has their own page. make it a square
        return(
            <Container className="project-page">
                <Gallery />
            </Container>
        );
    }
}