import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { GhostJazzPage } from './Projects/GhostJazz';
import { AquaVybesPage } from './Projects/AquaVybes';
import { BunchNotesPage } from './Projects/BunchNotes';
import { NutriAppPage } from './Projects/NutriApp'
import { KalarasLastDefensePage } from './Projects/KalarasLastDefense';

function App() {
  return (
    // <Button onClick={()=>console.log('hi')}>Hi</Button>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ghost-jazz" element={<GhostJazzPage /> }/>
        <Route path="/aqua-vybes" element={<AquaVybesPage /> }/>
        <Route path="/bunch-notes" element={<BunchNotesPage /> }/>
        <Route path="/nutri-app" element={<NutriAppPage /> }/>
        <Route path="/kalaras" element={<KalarasLastDefensePage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
