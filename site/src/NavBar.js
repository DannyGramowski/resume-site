import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import github from "./files/github.png";
import linkedin from "./files/linkedin.png";
import itch from "./files/itch.png";

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
            <Container className='menu-bar'>
                    <Row className='menu-bar-item-row '>
                            <Col className='menu-bar-item-container'>
                                <Link to='/' className={this.getClassNames(0)} onClick={() => this.setState({activeItem: 0})}>About</Link>
                            </Col>
                            <Col className='menu-bar-item-container'>
                                <Link to='/projects' className={this.getClassNames(1)} onClick={() => this.setState({activeItem: 1})}>Projects</Link>
                            </Col>
                            <Col className='menu-bar-item-container'>
                                <a href="https://dannytga.itch.io/" className='icon' target='_blank'>
                                    <img src={itch} width={width} height={itchRation * width}/>
                                </a>
                            </Col>
                            <Col className='menu-bar-item-container'>
                                <a href="https://github.com/DannyGramowski" className='icon' target='_blank'>
                                    <img src={github} width={width} height={githubRatio * width}/>
                                </a>
                            </Col>
                            <Col className='menu-bar-item-container'>
                                <a href="https://www.linkedin.com/in/daniel-gramowski-2b8391253/" className='icon' target='_blank'>
                                    <img src={linkedin} width={width} height={linkedinRation * width}/>
                                </a>
                            </Col>
                    </Row>  
            </Container>
        )
    }
}
