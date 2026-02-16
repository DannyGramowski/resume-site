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
import PokerBotImage from "./images/poker-bot.png"
import BidiiNetImage from "./images/bidii_net.png"
import BracketBarnImage from "./images/bracket-barn.png"
import AmericanDreamImage from "./images/american-dream.png"
import LyricLenseImage from "./images/lyric-lens.png"

export class Gallery extends Component {

    state = {activeProjectId: 0}

    componentDidMount() {
        this.projectData.forEach((project) => {
            const img = new Image();
            img.src = project.projectImage;
        });
    }

    projectData = [
        {
            projectName: "BracketBarn",
            description: "Overhauling a legacy regional racquetball tournament management system using ASP.NET Core, PostgreSQL, and Vue with a professional mentor. Set up CI pipeline and integration test infrastructure to maintain high code quality and reliability. Developed with raw SQL to gain better understanding of ORM’s, and maintain complete control of the system",
            date: "Dec. 2025 - Present",
            backgroundColor: "#ffffff",
            textColor: "#1B9AAA",
            projectImage: BracketBarnImage,
            url: ""
        },  
        {
            projectName: "BidiiNet",
            description: "Executing the full-stack development of a job board for African Universities as a capstone project using Django and Svelte. The project modernizes higher education hiring workflows while accounting for cultural nuances and internationalization requirements. Constructing a solid foundation and comprehensive documentation to facilitate team transfer for next year.",
            date: "Sept. 2025 - Present",
            backgroundColor: "#228B22",
            textColor: "#080808",
            projectImage: BidiiNetImage,
            url: "",
        },  
        // {
        //     projectName: "American Dream", //1BA5FF FF5959 ECF0F1   
        //     description: "FILL ME OUT",
        //     date: "Jan. 2026 - Present",
        //     backgroundColor: "#ECF0F1",
        //     textColor: "#1BA5FF",
        //     projectImage: AmericanDreamImage,
        // },  
        {
            projectName: "LyricLense",
            description: "Built a cloud-native app that generates AI album art from Spotify playlists. Used S3 buckets, API Gateway, Lambda, Bedrock, Comprehend, and Dynamo AWS services to extract track lyrics, process them through a generative model, and store the final image in the cloud.",
            date: "Sept. 2025 - Dec. 2025",
            backgroundColor: "#000000",
            textColor: "#FFFFFF",
            projectImage: LyricLenseImage,
            url: "https://github.com/LyricsLens/LyricLens"

        },  
        {
            projectName: "Poker-bot",
            description: "Built poker in Unity to support hosting a tournament of poker bots that connect through a socket. Provided comprehensive technical documentation and starter code, then invited software engineering friends to build their own bots to compete against each other.",
            date: "July. 2025 - Aug. 2025",
            backgroundColor: "#091938",
            textColor: "#F7F8F7",
            projectImage: PokerBotImage,
            url: "https://github.com/DannyGramowski/Bunch-A-Bets"
        },  
        {
            projectName: "QWER-KEY",
            description: "Turned TV remote, rotary phone, cat piano, and Etch-A-Sketch into functioning USB keyboards to present at Imagine RIT. Used a Raspberry Pi Pico to determine user inputs then send mapped keypress across attached USB cable.",
            date: "Sept. 2024 - April 2025",
            backgroundColor: "#4b6858",
            textColor: "#46acc2",
            projectImage: QwerkeyImage,
            url: "https://github.com/DannyGramowski/Keyboards",
        },  

        {
            projectName: "IDEACard",
            description: "Website built as submission for Google Developer Student Club Solution Challenge to solve 1 of the 17 United Nations sustainability goals. People with disabilities can fill in their disabilities and desired accommodations, then they can export their information to give to managers and hiring managers to help alleviate some of the stigma and misinformation surrounding disabilities.",
            date: "Jan. 2024 - Feb. 2024",
            backgroundColor: "#32435F",
            textColor: "#ffffff",
            projectImage: IdeaCardImage,
            url: "https://github.com/DannyGramowski/dvcard",
        }, 

        {
            projectName: "Trained Terrain",
            description: "Converts a 2d topography map to a 3D representation using machine learning. Scraped and processed height data and maps from government websites to train the model. The goal of the project was to learn machine learning and tensorflow.",
            date: "May 2023 - Jan. 2024",
            backgroundColor: "#22401b",
            textColor: "#e10e0e",
            projectImage: TrainedTerrainImage,
            url: "",
        }, 

        {
            projectName: "Nutriapp",
            description: "Created a web app that allows a user to track weight, calories, and workouts as well as make recipes and meals from a list of ingredients. I worked on a team of 5 to implement the app using a C# backend and svelte frontend. Responsible for serializing all of the data and allow it to be imported and exported as csv, json, and xml.",
            date: "Sept. 2023 - Dec. 2023",
            backgroundColor: "#386641",
            textColor: "#ffffff",
            projectImage: NutriappImage,
            url: "",
        },

        {
            projectName: "Ghost Jazz",
            description: "Built a rhythm game for the 2023 Game Developers Club Halloween Game Jam. Composed one of the two songs and gathered the instrument data and build timeline system for syncing music notes with visuals.",
            date: "Oct. 2023",
            backgroundColor: "#0dd091",
            textColor: "#3c3b3b",
            projectImage: GhostJazzImage,
            url: "",
        },

        {
            projectName: "AquaVybes",
            description: "Built an online e-store that sold custom flavored water for introduction to software engineering class using Spring backend and Angular frontend. Used scrum to organize the project and meet deadlines. Responsible for setting up user and admin log in, user feedback, and setting up product data.",
            date: "Jan. 2023 - May 2023",
            backgroundColor: "#ccfffc",
            textColor: "#0195de",
            projectImage: AquaVybesImage,
            url: "",
        },  

        {
            projectName: "BunchNotes",
            description: "Built BunchNotes a note sharing platform for Brickhack 9 at RIT. Responsible for setting up APIs to hook up the database and frontend. Used FastAPI, Postgres, and React.",
            date: "Feb. 2023",
            backgroundColor: "#f7efb2",
            textColor: "#000000",
            projectImage: BunchNotesImage,
            url: "",
        },   

        {
            projectName: "Kalara's Defense",
            description: "Fully release tower defense game built in Unity. I did everything including music composition, 3D modeling, and programming.",
            date: "Sept. 2020 - Apr. 2021",
            backgroundColor: "#ec4242",
            textColor: "#fff5e0",
            projectImage: KalarasImage,
            url: "https://dannytga.itch.io/kalaras-last-defense",
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
                <GalleryProject 
                    key={this.state.activeProjectId}
                    projectData={this.projectData[this.state.activeProjectId]} 
                    slideFunc={(right) => () => this.slide(right)}/>
            </Container>
        );
    }
}