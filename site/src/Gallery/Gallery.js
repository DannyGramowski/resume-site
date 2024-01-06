import { Component } from "react";
import { Button, Container } from "reactstrap";
import "./Gallery.css"
import { GhostJazz } from "../Projects/GhostJazz";
import { Nutriapp } from "../Projects/Nutriapp";

export class Gallery extends Component {
    

    constructor(props) {
        super(props);
        this.state = {galleryIndex: 0, projects: [<Nutriapp arrowClick={this.arrowClick}/>, <GhostJazz arrowClick={this.arrowClick}/>]};

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
                {this.state.projects[this.state.galleryIndex]}
            </Container>
        )
    }
}