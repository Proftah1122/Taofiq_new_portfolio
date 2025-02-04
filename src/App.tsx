import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileSummary />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;