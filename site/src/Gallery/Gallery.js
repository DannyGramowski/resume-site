import { Component } from "react";
import { Container, Col } from "reactstrap";
import './Gallery.scss'
import { GalleryProject } from "./GalleryProject";

import AquaVybesImage from "./images/AquaVybes.png"
import BunchNotesImage from "./images/BunchNotes.png"
import GhostJazzImage from "./images/ghost-jazz-logo.png"
import IdeaCardImage from "./images/Ideacard.png"
import KalarasImage from "./images/KalarasTransparent.png"
import NutriappImage from "./images/Nutriapp.png"
import TrainedTerrainImage from "./images/TrainedTerrain.png"
import QwerkeyImage from "./images/QWER-KEY.png"

export class Gallery extends Component {

    state = {activeProjectId: 0}

    projectData = [
        {
            projectName: "QWER-KEY",
            description: "Turned household objects into functioning USB keyboards to present at Imagine RIT. Used Raspberry Pi Pico to determine user inputs then send mapped keypress accross attached USB cable.",
            date: "Sept. 2024 - Present",
            backgroundColor: "#4b6858",
            textColor: "#46acc2",
            projectImage: QwerkeyImage,
        },  

        {
            projectName: "IDEACard",
            description: "A website built as part of the Google Developer Student Club Solution Challenge. This website allows people with disabilities to fill in their disabilities and desired accommodations. Then they can export their information to a variety of formats to give to managers and hiring managers to help alleviate some of the stigma and misinformation surrounding disabilities.",
            date: "Jan. 2024 - Feb. 2024",
            backgroundColor: "#32435F",
            textColor: "#ffffff",
            projectImage: IdeaCardImage,
        }, 

        {
            projectName: "Trained Terrain",
            description: "This is an app that converts a 2d topography map to a 3D representation using  machine learning. The goal of the project was to learn machine learning and tensorflow.",
            date: "May 2023 - Jan. 2024",
            backgroundColor: "#22401b",
            textColor: "#e10e0e",
            projectImage: TrainedTerrainImage,
        }, 

        {
            projectName: "Nutriapp",
            description: "This is a web app that allows a user to track weight, calories, and workouts as well as make recipies and meals from a list of ingredients. I worked on a team of 5 to implement the app using a C# backend and svelte frontend. My responsibility was serializing all of the data and allow it to be imported and exported as csv, json, and xml.",
            date: "Sept. 2023 - Dec. 2023",
            backgroundColor: "#386641",
            textColor: "#ffffff",
            projectImage: NutriappImage,
        },

        {
            projectName: "Ghost Jazz",
            description: "This was part of the 2023 Game Developers Club Halloween Game Jam. Ghost Jazz is a rhythm game with follows the game jams theme of spontaneity. The song and instruments change periodically without warning. I composed one of the two songs and gathered the instrument data. I was also responiblefor adding all of the events onto a timeline to allow the game to flow easily.",
            date: "Oct. 2023",
            backgroundColor: "#0dd091",
            textColor: "#3c3b3b",
            projectImage: GhostJazzImage,
        },

        {
            projectName: "AquaVybes",
            description: "This was an online estore that sold custom flavored water for my introduction to software engineering class. We used scrum to organize the project and meet goals. The estore was built using Spring backend and Angular frontend. I was responible for setting up user and admin log in, user feedback, and setting up product data.",
            date: "Jan. 2023 - May 2023",
            backgroundColor: "#ccfffc",
            textColor: "#0195de",
            projectImage: AquaVybesImage,
        },  

        {
            projectName: "BunchNotes",
            description: "This was part of Brickhack 9 at RIT. BunchNotes is a note sharing platfrom that allows students to upload class notes for credits that they can use to look at other people notes for other classes. My job was to set up the APIs to hook up the SQL and frontend. We used fastapi in python to set up the backend.",
            date: "Feb. 2023",
            backgroundColor: "#f7efb2",
            textColor: "#000000",
            projectImage: BunchNotesImage,
        },   

        {
            projectName: "Kalara's Defense",
            description: "This is a fully release tower defense game built in Unity. I did everything from music composition, 3D modeling, and programing.",
            date: "Sept. 2020 - Apr. 2021",
            backgroundColor: "#ec4242",
            textColor: "#fff5e0",
            projectImage: KalarasImage,
        },    
    ]
    // qwerkey, too deep

    slide(right) {
        let id = this.state.activeProjectId  
        console.log("slide", right, id)
        if(right) {
            id++;
            if(id >= this.projectData.length) {
                id -= this.projectData.length;
            }
        } else {
            id--;
            if(id < 0) {
                id += this.projectData.length;
            }
        }
        
        this.setState({activeProjectId: id})
    }

    render() {
        return(
            <Container className="w-100 p-0">
                <GalleryProject projectData={this.projectData[this.state.activeProjectId]} slideFunc={(right) => this.slide.bind(this, right)}/>
            </Container>
        );
    }
}