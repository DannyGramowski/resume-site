import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import github from "./files/github.png";
import linkedin from "./files/linkedin.png";
import itch from "./files/itch.png";
import resume from "./files/Danny_Resume.pdf";

export class NavBar extends Component {
    state = {activeItem: 0}

    getClassNames =  (num) => {
        return num === this.state.activeItem ? 'menu-bar-item active-bar-item' : 'menu-bar-item'; 
    }

    render() {
        let width = 30;
        let githubRatio = 0.941;
        let linkedinRation = 1.0787;
        let itchRation = 1;

        return (
        <Container className='menu-bar-container'>
            <Container className='menu-bar'>
                    <Row className='menu-bar-item-row '>
                        <Col className='menu-bar-item-container'>
                            <Link to='/' className={this.getClassNames(0)} onClick={() => this.setState({activeItem: 0})}>About</Link>
                        </Col>
                        <Col className='menu-bar-item-container'>
                            <Link to='/projects' className={this.getClassNames(1)} onClick={() => this.setState({activeItem: 1})}>Projects</Link>
                        </Col>
                        <Col className='menu-bar-item-container'>
                            <a href={resume} download="Danny_Resume.pdf" className="menu-bar-item">
                                <div>
                                    Resume
                                </div>
                            </a>
                        </Col>
                        <Col className='menu-bar-item-container'>
                            <a href="https://dannytga.itch.io/" className='icon' target='_blank' rel="noreferrer">
                                <img src={itch} width={width} height={itchRation * width} alt="itch.io"/>
                            </a>
                        </Col>
                        <Col className='menu-bar-item-container'>
                            <a href="https://github.com/DannyGramowski" className='icon' target='_blank' rel="noreferrer">
                                <img src={github} width={width} height={githubRatio * width} alt="github"/>
                            </a>
                        </Col>
                        <Col className='menu-bar-item-container'>
                            <a href="https://www.linkedin.com/in/daniel-gramowski-2b8391253/" 
                            className='icon' target='_blank' rel="noreferrer">
                                <img src={linkedin} width={width} height={linkedinRation * width} alt='linkedin'/>
                            </a>
                        </Col>
                    </Row>  
            </Container>
            <Container className='menu-bar-divider' />
        </Container>
        )
    }
}
