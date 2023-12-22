import { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import { MenuBar } from './MenuBar';
import { Projects } from './Projects';
import { MainPage } from './MainPage';
import { Resume } from './Resume';
import {
  BrowserRouter as Router,
  Route, 
  Link,
  Routes,
} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <p>wa wa wa</p>,
//     }, 
//     // {
//     //     path: "/projects",
//     //     element: <Projects />,
//     // },
// ])


function Page() {
        return (
            <Router>
                <Container>
                    <Routes>
                        <Route path="/" element={<div>hi</div>}></Route>
                        {/* <Route path="resume"><Resume /></Route>
                        <Route path="projects"><Projects /></Route> */}
                    </Routes>
                </Container>
            </Router>
        );
    
};

export default Page;
