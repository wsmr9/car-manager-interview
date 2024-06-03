import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

/**
 * Main application component that assembles the basic page layout.
 * This component acts as the root of the page structure, including
 * the header, main content area (home), and footer.
 */
function App() {
  return (
    <div className="App">
      <Header />   {/* Top header section of the application */}
      <Home />     {/* Main content area of the application */}
      <Footer />   {/* Footer section of the application */}
    </div>
  );
}

export default App;
