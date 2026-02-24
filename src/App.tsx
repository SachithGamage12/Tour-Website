import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages - to be created
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
