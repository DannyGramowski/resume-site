import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom";
export class NavBar extends Component {
    render() {
        return (
            <Container className='menu-bar'>
                <Row className='menu-bar-item-row'>
                    <Col>
                        <Link to='/projects' className='menu-bar-item'>Projects</Link>
                        {/* <p className='projects-redirect menu-bar-item' onClick={this.projectsRedirect}>Projects</p> */}
                    </Col>
                    <Col>
                        <Link to='/resume' className='menu-bar-item'>Resume</Link>
                    </Col>
                    <Col>
                        <Link to='/' className='menu-bar-item'>About</Link>
                    </Col>
                </Row>  
            </Container>
        )
    }
}
