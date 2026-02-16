import { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import './GalleryProject.scss'

export class GalleryProject extends Component {
    
    render() {
        const {projectName, description, date, backgroundColor, textColor, projectImage, url} = this.props.projectData;
        console.log(this.props.projectData)
        //image gallery here and each project has their own page. make it a square
        return(
            <Container className="gallery-project" style={{backgroundColor: backgroundColor, color: textColor}}>
                
                <Col className="slide-button-container justify-content-start">
                    <Button className="slide-button" onClick={this.props.slideFunc(false)} style={{backgroundColor: backgroundColor, color: textColor}}>&lt;</Button>
                </Col>
                
                <Col className="middle-col">
                    <Container>

                        <Row className="header-row">
                            <img src={projectImage} alt=""/>
                            <span className="project-name">
                                {projectName}
                            </span>
                        </Row>
                        <Row className="description-row">
                            <span className="description-text">
                                {description}
                            </span>
                        </Row>
                    </Container>
                    {url && url !== "" && (
                        <a className="view-project" href={url} target="_blank" rel="noopener noreferrer">View Project</a>
                    )}                    
                    <Container className="date-text">
                        <span>Project Date:&#160;</span>{date}
                    </Container>
                    
                </Col>
                
                <Col className="slide-button-container justify-content-end">
                    <Button className="slide-button" onClick={this.props.slideFunc(true)} style={{backgroundColor: backgroundColor, color: textColor}}>&gt;</Button>

                </Col>
            </Container>
        );
    }
}