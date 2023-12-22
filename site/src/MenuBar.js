import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
export class MenuBar extends Component {


    resumeRedirect = () => {
     
    }

    projectsRedirect = () => {
        
    }

    render() {
        return (
            <Container className='menu-bar'>
                <nav>
                    <Row className='menu-bar-item-row'>
                        <Col>
                            <Link to='/projects' onClick={() => {
              window.location.href = "/projects";
            }}>Projects</Link>
                            {/* <p className='projects-redirect menu-bar-item' onClick={this.projectsRedirect}>Projects</p> */}
                        </Col>
                        <Col>
                            <Link to='/resume' onClick={() => {
              window.location.href = "/resume";
            }}>Resume</Link>
                        </Col>
                        <Col>
                            <Link to='/' onClick={() => {
              window.location.href = "/";
            }}>About</Link>
                        </Col>
                    </Row>  
                </nav>                    
            </Container>
        )
    }
}