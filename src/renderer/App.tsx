import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Navbar, Sidebar } from './exporter'
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
