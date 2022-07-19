import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AddClass, Navbar, Sidebar } from './exporter'
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-class" element={<AddClass />} />
        </Routes>
      </Router>
    </>
  );
}
