import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Aurora from './components/Aurora';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Aurora />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
