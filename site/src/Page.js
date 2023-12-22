import { Component } from 'react';
import { Container } from 'reactstrap';
import { MenuBar } from './MenuBar';
import { MainPage } from './MainPage';

export class Page extends Component {
    render() {
        //homepage
        //resume
        //contact
        return (
            <Container>
                <MainPage />
            </Container>
        )
    }
}