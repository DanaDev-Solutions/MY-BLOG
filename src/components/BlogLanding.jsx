// src/components/BlogLanding.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, ArrowRight } from 'lucide-react';
import logo from '../assets/evolv_log.png';
import MediumFeed from './MediumFeed';

const BlogLanding = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover ${!isVideoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        <source 
          src="https://res.cloudinary.com/df2ltfcb6/video/upload/f_auto,q_auto/v1737503768/safety_video_fw5kbk.webm" 
          type="video/webm" 
        />
        <source 
          src="https://res.cloudinary.com/df2ltfcb6/video/upload/f_auto,q_auto/v1737503768/safety_video_fw5kbk.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Loading Spinner */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 border-4 border-[#00FF9D] rounded-full animate-spin border-t-transparent" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="text-center pt-24 px-4">
          <div className="mb-16 animate-float">
            <img 
              src={logo} 
              alt="Evolv Safety Solutions" 
              className="w-64 h-64 rounded-full border-[3px] border-[#00FF9D]/30 mx-auto shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,157,0.2)] transition-all duration-300"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00FF9D] to-emerald-300 bg-clip-text text-transparent leading-tight">
              Next-Gen Safety Intelligence
            </h1>
            <p className="text-xl text-gray-300/90 font-light mb-12 px-4">
              AI-powered insights for modern workplace safety management
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Industry Trends */}
            <Link
              to="/industry-trends"
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg border border-[#00FF9D]/10 p-8 rounded-3xl hover:border-[#00FF9D]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-1 bg-[#00FF9D]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <BookOpen className="w-14 h-14 text-[#00FF9D] transform group-hover:rotate-12 transition-transform" />
                  <span className="text-xs text-[#00FF9D]/60 uppercase tracking-widest">Trend Analysis</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Trends</h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Machine learning-driven analysis of emerging safety protocols and regulatory changes
                </p>
              </div>
            </Link>

            {/* Best Practices */}
            <Link
              to="/best-practices"
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg border border-[#00FF9D]/10 p-8 rounded-3xl hover:border-[#00FF9D]/30 transition-all duration-300 hover:-translate-y-2 lg:mt-12"
            >
              <div className="absolute -inset-1 bg-[#00FF9D]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <BookOpen className="w-14 h-14 text-[#00FF9D] transform group-hover:rotate-12 transition-transform" />
                  <span className="text-xs text-[#00FF9D]/60 uppercase tracking-widest">Implementation Guide</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Best Practices</h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Cutting-edge strategies for deploying AI-driven safety systems
                </p>
              </div>
            </Link>

            {/* Case Studies */}
            <Link
              to="/case-studies"
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg border border-[#00FF9D]/10 p-8 rounded-3xl hover:border-[#00FF9D]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-1 bg-[#00FF9D]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <Users className="w-14 h-14 text-[#00FF9D] transform group-hover:rotate-12 transition-transform" />
                  <span className="text-xs text-[#00FF9D]/60 uppercase tracking-widest">Field Research</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
                <p className="text-gray-300/80 leading-relaxed">
                  Real-world implementations with measurable safety improvements
                </p>
              </div>
            </Link>
          </div>

          {/* Latest Research Section */}
          <section className="mt-32 relative">
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00FF9D]/5 blur-3xl rounded-full" />
            
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Latest <span className="text-[#00FF9D]">Research</span>
                <span className="block mt-4 text-xl text-gray-400 font-normal">
                  Cutting-edge insights shaping safety management
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Featured Article */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg border border-[#00FF9D]/10 p-8 rounded-3xl hover:border-[#00FF9D]/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 bg-[#00FF9D] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#00FF9D] uppercase tracking-widest">Leadership Series</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Building Leaders Through Safety Innovation</h3>
                  <p className="text-gray-300/80 mb-6">
                    How next-generation safety protocols are redefining organizational leadership
                  </p>
                  <div className="flex items-center gap-3 text-[#00FF9D]/90 hover:text-[#00FF9D] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                    <span className="font-medium">Read Case Study</span>
                  </div>
                </div>

                {/* Medium Feed Integration */}
                <MediumFeed />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Global Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900/90 z-10" />
    </div>
  );
};

export default BlogLanding;