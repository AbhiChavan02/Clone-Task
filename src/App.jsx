import React from 'react';
import './style.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Button from './components/Button';


function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Button/>
      <Footer />
      
    </div>
  );
}

export default App;
