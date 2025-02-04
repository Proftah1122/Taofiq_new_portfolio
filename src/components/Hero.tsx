import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-light/10 to-secondary-light/10 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block">Atoyebi Taofiq Olajide</span>
              <span className="block text-primary">(ATO)</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600">
              Business Development Expert | Consultant | Strategic Thinker
            </h2>
            <p className="text-gray-600 max-w-xl">
              A seasoned professional with nearly a decade of experience in transforming businesses 
              through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark 
                         transition-all duration-300 flex items-center space-x-2 shadow-lg 
                         hover:shadow-primary/30"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full 
                          blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/df7a0vgug/image/upload/v1734305251/DSC_3897_transcpr_vsjaiw.jpg" 
                alt="ATO Profile" 
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-8 
                         border-white shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;