import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom";
export class NavBar extends Component {


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
                        <Link to='/projects'>Projects</Link>
                        {/* <p className='projects-redirect menu-bar-item' onClick={this.projectsRedirect}>Projects</p> */}
                    </Col>
                    <Col>
                        <Link to='/resume'>Resume</Link>
                    </Col>
                    <Col>
                        <Link to='/'>About</Link>
                    </Col>
                </Row>  
            </Container>
        )
    }
}
