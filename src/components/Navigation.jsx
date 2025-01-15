import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'C:/Users/danle/Desktop/my-blog/src/assets/evolv_log.png';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-800 py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Evolv Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">Evolv EHS Solutions</span>
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/industry-trends" 
              className={`text-white hover:text-green-400 ${
                location.pathname === '/industry-trends' ? 'text-green-400' : ''
              }`}
            >
              Industry Trends
            </Link>
            <Link 
              to="/best-practices"
              className={`text-white hover:text-green-400 ${
                location.pathname === '/best-practices' ? 'text-green-400' : ''
              }`}
            >
              Best Practices
            </Link>
            <Link 
              to="/case-studies"
              className={`text-white hover:text-green-400 ${
                location.pathname === '/case-studies' ? 'text-green-400' : ''
              }`}
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;