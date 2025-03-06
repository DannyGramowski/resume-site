import { Component } from 'react';
import { Container, Row, Col, Strong} from 'reactstrap';
import './Experience.scss'
import AuroraIcon from './files/aurora-machine-logo.svg'

export class Experience extends Component {
    render() {
        return (
            <div>
                <strong className='experience-text'>
                    Experience
                </strong>
                <div className='company-list'>
                    <Container className='company-card'>
                        <Row className='company-name-row'>
                            <img src={AuroraIcon} />
                            <strong className='company-name'>
                                Aurora Machine
                            </strong>
                            <span className='spacer'></span>
                        </Row>
                        <Row className='company-position-row'>
                            <strong className='company-position-name'>
                                Software Engineering Intern
                            </strong>
                            <span className='company-date'>
                                May 2024 - Present
                            </span>
                        </Row>
                        {/* skills used row */}
                        <Row className='company-skills-row'>
                            <strong >
                                Skills:
                            </strong>
                            <span>
                                Python, JavaScript, Odoo
                            </span>
                        </Row>
                        <div className='company-work-text'>
                            I am responsible for the companies ERP migration to Odoo. This includes sanitizing and migrating 
                            all company data, developing new workflows for all departments,and creating new custom modules. I 
                            also created reports and customer facing documents as well as completing miscellaneous automation and IT tasks 
                            to improve company efficiency. The biggest project of the migration was a complete rewrite of the shop floor UI. 
                            I started by gathering requirements for all impacted departments, then designed a UI to meet gathered requirements, before finally 
                            developing it. This was followed by testing then company wide module release.
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}