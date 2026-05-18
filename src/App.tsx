import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';

function App() {
  // Controls whether the loading splash is displayed
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading splash — unmounted once onComplete fires */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} duration={2800} />
      )}

      {/* Main application shell */}
      <Router>
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/"             element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/packages"     element={<Packages />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
