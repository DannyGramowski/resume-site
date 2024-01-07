import { Component } from "react";
import { Button, Container } from "reactstrap";
import "./Gallery.css"
import { GhostJazz } from "../Projects/GhostJazz";
import { Nutriapp } from "../Projects/Nutriapp";
import { BunchNotes } from "../Projects/BunchNotes"
import { ArrowButton } from "./ArrowButton";
import { AquaVybes } from "../Projects/AquaVybes";

export class Gallery extends Component {
    

    constructor(props) {
        super(props);
        this.state = {galleryIndex: 0, projects: [<AquaVybes />, <BunchNotes />, <Nutriapp />, <GhostJazz />]};

    }
    renderProjects = () => {

        return this.props.projects.map(ele => {
            return ele;
        })
    }

    //left amount == -1, right amount == 1
    arrowClick = (amount) => {
        let newIndex = this.state.galleryIndex + amount;
        let len = this.state.projects.length;
        if(newIndex >= len) newIndex -= len;
        else if(newIndex < 0) newIndex += len;
        this.setState({galleryIndex: newIndex});
    }

    render() {
        return(
            <Container className="center gallery">
                {/* {this.renderProjects()} */}
                <ArrowButton onClick={() => this.arrowClick(-1)} direction="left" />
                {this.state.projects[this.state.galleryIndex]}
                <ArrowButton onClick={() => this.arrowClick(1)} direction="right" />
            </Container>
        )
    }
}