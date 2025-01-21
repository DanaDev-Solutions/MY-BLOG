// src/components/BlogLanding.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users } from 'lucide-react';
import safetyVideo from '../assets/safety_video.mp4'; // Correct path
import logo from '../assets/evolv_log.png'; // Correct path
import MediumFeed from './MediumFeed';

const BlogLanding = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={safetyVideo} type="video/mp4" />
        Your browser does not support video playback.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Logo */}
      <div className="relative z-10 p-8">
        <img 
          src={logo} 
          alt="Evolv Logo"
          className="w-32 h-32 rounded-full border-4 border-[#D4AF37]/30 shadow-xl"
        />
      </div>

      {/* Content Sections */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Industry Trends Card */}
          <Link
            to="/industry-trends"
            className="group bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-700/90 transition-all"
          >
            <BookOpen className="w-12 h-12 text-[#00FF9D] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2 text-[#00FF9D]">
              Industry Trends
            </h3>
            <p className="text-gray-200 text-center">
              Latest developments in EHS management
            </p>
          </Link>

          {/* Best Practices Card */}
          <Link
            to="/best-practices"
            className="group bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-700/90 transition-all"
          >
            <BookOpen className="w-12 h-12 text-[#00FF9D] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2 text-[#00FF9D]">
              Best Practices
            </h3>
            <p className="text-gray-200 text-center">
              Expert implementation strategies
            </p>
          </Link>

          {/* Case Studies Card */}
          <Link
            to="/case-studies"
            className="group bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-700/90 transition-all"
          >
            <Users className="w-12 h-12 text-[#00FF9D] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2 text-[#00FF9D]">
              Case Studies
            </h3>
            <p className="text-gray-200 text-center">
              Real-world success stories
            </p>
          </Link>
        </div>

        {/* Articles Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#00FF9D]">
            Latest Articles
          </h2>
          <MediumFeed />
        </section>
      </div>
    </div>
  );
};

export default BlogLanding; // Proper default export