import { Component } from "react";
import './projects.css'
import { Container, Col } from "reactstrap";
import { Gallery } from "./Gallery/Gallery";
import { GhostJazz } from "./Projects/GhostJazz";
import { BunchNotes } from "./Projects/BunchNotes";

export class Projects extends Component {

    render() {
        //image gallery here and each project has their own page. make it a square
        return(
            <Container>
               <Gallery projects={[<GhostJazz />, <BunchNotes />]} />
            </Container>
        );
    }
}