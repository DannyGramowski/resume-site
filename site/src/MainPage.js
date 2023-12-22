import { Component } from 'react';
import { Container } from 'reactstrap';
import { MenuBar } from './MenuBar';

export class MainPage extends Component {

    render() {
        return (
            <Container className='main-page'>
                <MenuBar />
            </Container>
        )
    }
}