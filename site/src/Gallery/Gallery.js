import { Component } from "react";
import { Container } from "reactstrap";
import "./Gallery.css"
import { GhostJazz } from "../Projects/GhostJazz";
import { NutriApp } from "../Projects/NutriApp";
import { BunchNotes } from "../Projects/BunchNotes"
import { ArrowButton } from "./ArrowButton";
import { AquaVybes } from "../Projects/AquaVybes";
import { KalarasLastDefense } from "../Projects/KalarasLastDefense";
import { ProjectButton } from "./ProjectButton";

export class Gallery extends Component {
    

    constructor(props) {
        super(props);
        this.state = {galleryIndex: 0, 
            projectData: [{name: "NutriApp", background: "#386641", textColor: "#ffffff"},
             {name: "Ghost Jazz", background: "#0dd091", textColor: "#3c3b3b"},
              {name: "AquaVybes", background: "#ccfffc", textColor: "#0195de"},
               {name: "BunchNotes", background: "#f7efb2", textColor: "#000000"},
               {name: "Kalara's Last Defense", background: "#ec4242", textColor: "#fff5e0"}],
            projects: [<NutriApp />, <GhostJazz />, <AquaVybes />, <BunchNotes />, <KalarasLastDefense />]};
    
        if(this.state.projectData.length != this.state.projects.length) {
            throw "names do not match projects";
        }
    }

    buttonClick = (newIndex) => {
        this.setState({galleryIndex: newIndex});
    }

    renderProjects = () => {
        return this.props.projects.map(ele => {
            return ele;
        });
    }

    renderButtons = () => {
        return [...Array(this.state.projects.length).keys()].map(ele => {
            return <ProjectButton active={ele === this.state.galleryIndex} 
            onClick={() => {this.buttonClick(ele)}} projectData={this.state.projectData[ele]}/>
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
            <Container>
                <Container className="center gallery">
                    {/* {this.renderProjects()} */}
                    <ArrowButton onClick={() => this.arrowClick(-1)} direction="left" />
                    {this.state.projects[this.state.galleryIndex]}
                    <ArrowButton onClick={() => this.arrowClick(1)} direction="right" />
                </Container>

                <Container className="center">
                    {this.renderButtons()}
                </Container>
            </Container>
        )
    }
}