import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <header className="bg-secondary py-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              AI Website Builder
            </Link>
            <nav className="flex items-center space-x-6">
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="bg-secondary py-6 mt-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Website Builder. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;