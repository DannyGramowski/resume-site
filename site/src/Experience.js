import { Component } from 'react';
import { Container, Row, Col, Strong} from 'reactstrap';
import './Experience.scss'
import AuroraIcon from './files/aurora-machine-logo.png'
import RITIcon from './files/rit-logo.png'

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
                                Skills:&nbsp;
                            </strong>
                            <span>
                                Python, JavaScript, Odoo
                            </span>
                        </Row>
                        <div className='company-work-text'>
                            Working with a team to migrate the company ERP to Odoo. Also enhancing odoo by providing custom modules to 
                            better suit the needs of the company. Responsible for the projects from requirements gathering, through development into deployment.
                            Also training new co-ops on the system as well as providing leadership within the development team.

                        </div>
                    </Container>

                    <Container className='company-card'>
                        <Row className='company-name-row'>
                            <img src={RITIcon} />
                            <strong className='company-name'>
                                Rochester Institute of Technology
                            </strong>
                            <span className='spacer'></span>
                        </Row>
                        <Row className='company-position-row'>
                            <strong className='company-position-name'>
                                Supplemental Instruction Leader
                            </strong>
                            <span className='company-date'>
                                Jan. 2023 - May 2024
                            </span>
                        </Row>
                        {/* skills used row */}
                        <Row className='company-skills-row'>
                            <strong >
                                Skills:&nbsp;
                            </strong>
                            <span>
                                Teaching, Marketing, Organization
                            </span>
                        </Row>
                        <div className='company-work-text'>
                            Planned and led weekly review sessions for Software Development 1 and 2. Drove student collaboration with interactive
                            activities and peer programming instead of lecturing. Used Socratic teaching method to provide deeper understanding,
                            increase engagement and build community.
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}