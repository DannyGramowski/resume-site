import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Button } from 'reactstrap';
import { GhostJazzPage } from './Projects/GhostJazz';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
