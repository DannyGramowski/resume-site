import './App.scss';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { Projects } from './Projects';
import { GhostJazzPage } from './Projects/GhostJazz';
import { AquaVybesPage } from './Projects/AquaVybes';
import { BunchNotesPage } from './Projects/BunchNotes';
import { NutriAppPage } from './Projects/Nutriapp'
import { KalarasLastDefensePage } from './Projects/KalarasLastDefense';
import { Component } from 'react';
import { Experience } from './Experience';

export class App extends Component {

  componentDidMount() {
    document.title = "Danny Gramowski"
  }

  render () {
    return (
      // <Button onClick={()=>console.log('hi')}>Hi</Button>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/resume-site" element={<MainPage />} />
          <Route path="/experience" element={<Experience />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/ghost-jazz" element={<GhostJazzPage /> }/>
          <Route path="/aqua-vybes" element={<AquaVybesPage /> }/>
          <Route path="/bunch-notes" element={<BunchNotesPage /> }/>
          <Route path="/nutri-app" element={<NutriAppPage /> }/>
          <Route path="/kalaras" element={<KalarasLastDefensePage /> }/>
        </Routes>
      </BrowserRouter>
    );
  } 
}


export default App;
