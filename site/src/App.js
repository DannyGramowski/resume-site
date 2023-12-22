import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/projects" element={<div>projects</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
