import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { Projects } from './Projects';
import { Resume } from './Resume';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
