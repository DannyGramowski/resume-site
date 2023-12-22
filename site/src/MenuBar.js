import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useNavigate } from "react-router-dom";

export class MenuBar extends Component {


    resumeRedirect = () => {
        let navigate = useNavigate();
        navigate('')
    }

    projectsRedirect = () => {
        
    }

    render() {
        return (
            <Container className='menu-bar'>
                <Row className='menu-bar-item-row'>
                    <Col>
                        <p className='projects-redirect menu-bar-item' onClick={this.projectsRedirect}>Projects</p>
                    </Col>
                    <Col>
                        <p className='menu-bar-item' onClick={this.resumeRedirect}>Resume</p> 
                    </Col>
                </Row>                      
            </Container>
        )
    }
}