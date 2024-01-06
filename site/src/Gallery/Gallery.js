import { Component } from "react";
import { Button, Container } from "reactstrap";
import "./Gallery.css"
import { GhostJazz } from "../Projects/GhostJazz";

export class Gallery extends Component {

    renderProjects = () => {

        return this.props.projects.map(ele => {
            return ele;
        })
    }

    render() {
        return(
            <Container className="center gallery">
                {/* {this.renderProjects()} */}
                <GhostJazz />
            </Container>
        )
    }
}