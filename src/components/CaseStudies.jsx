import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MediumFeed from './MediumFeed';
import logo from '../assets/evolv_log.png';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-[#00FFF0] hover:text-[#00FFF0]/80">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-5xl font-bold text-white mb-8 mt-4">Case Studies</h1>
        
        {/* Using MediumFeed with category filter */}
        <MediumFeed categoryFilter="case-studies" />

        {/* Logo Section */}
        <div className="flex justify-center mt-32 mb-24">
          <img 
            src={logo}
            alt="Evolv EHS Solutions Logo"
            className="w-96 h-96 object-contain rounded-[25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;