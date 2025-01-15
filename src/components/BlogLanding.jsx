// Import necessary dependencies from React and other libraries
import React from 'react';
import { Link } from 'react-router-dom';  // For handling navigation between pages
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';  // Icons for UI elements
import logo from '../assets/evolv_log.png';  // Company logo import
import MediumFeed from './MediumFeed';  // Custom component for displaying Medium blog posts

const BlogLanding = () => {
  return (
    // Main container with full height and dark background
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Header Section */}
      <header className="container mx-auto px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo Container */}
          <div className="mb-8">
            <img 
              src={logo}
              alt="Evolv EHS Solutions Logo" 
              className="mx-auto w-96 h-96 object-contain rounded-[25%]"
            />
          </div>
          
          {/* Mission Statement/Quote Banner */}
          <div className="mt-12 mb-16">
            {/* Quote text with custom gold color */}
            <p className="text-2xl font-serif text-[#FFD700] leading-relaxed italic mb-4">
              "I believe the future of safety and compliance lies in integrating AI and data analytics into a single, all-encompassing platform—delivering predictive insights, streamlined processes, and smarter decision-making in one unified solution."
            </p>
            {/* Author attribution with custom mint green color */}
            <p className="text-xl text-[#00FF9D]">- Dana Higgins</p>
            <p className="text-xl text-[#00FF9D]/80 italic">Strategic Safety Consultant</p>
          </div>
        </div>
      </header>

      {/* Featured Categories Section - Grid of navigation cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Industry Trends Card */}
          <Link 
            to="/industry-trends" 
            className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]"
          >
            <BookOpen className="w-12 h-12 text-[#00FF9D] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#00FF9D]">
              Industry Trends
            </h3>
            <p className="text-gray-400">Latest developments and innovations in EHS management</p>
          </Link>

          {/* Best Practices Card */}
          <Link 
            to="/best-practices" 
            className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]"
          >
            <BookOpen className="w-12 h-12 text-[#00FF9D] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#00FF9D]">
              Best Practices
            </h3>
            <p className="text-gray-400">Expert guidelines and implementation strategies</p>
          </Link>

          {/* Case Studies Card */}
          <Link 
            to="/case-studies" 
            className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]"
          >
            <Users className="w-12 h-12 text-[#00FF9D] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#00FF9D]">
              Case Studies
            </h3>
            <p className="text-gray-400">Real-world success stories and lessons learned</p>
          </Link>
        </div>
      </section>

      {/* Articles Feed Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-evolv-cyan">Latest Articles</h2>
        {/* MediumFeed component displays blog posts from Medium */}
        <MediumFeed />
      </section>
    </div>
  );
};

export default BlogLanding;