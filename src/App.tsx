import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Home from './pages/Home';
import About from './pages/About';
import NewConstruction from './pages/NewConstruction';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';
import './styles/colors.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
