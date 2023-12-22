import { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

export class ProjectsPage extends Component {

//     -trained terrain
// -nutribunch
// -model viewer
// -ghost jazz
// -kalaras last defense
    render() {
        return (
            <Container>
                <Container>
                    Trained Terrain
                </Container>

                <Container>
                    Model Viewer
                </Container>

                <Container>
                    Ghost Jazz
                </Container>

                <Container>
                    Nutribunch
                </Container>

                <Container>
                    Bunch Notes
                </Container>

                <Container>
                    Kalaras Last Defense
                </Container>
            </Container>
        )
    }
}
