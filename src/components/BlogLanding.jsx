// src/components/BlogLanding.jsx
import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/evolv_log.png';

const BlogLanding = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const orbRef = useRef(null);

  // Handle video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [isVideoLoaded]);

  // Mobile fallback for autoplay
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }
      document.removeEventListener('click', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[140vh] w-full bg-gray-900 text-white overflow-visible">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={(e) => console.error('Video error:', e)}
        className="absolute inset-0 w-full h-full object-cover z-0"
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
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-16 h-16 border-4 border-evolv-green rounded-full animate-spin border-t-transparent" />
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
              className="w-80 h-80 rounded-full border-[3px] border-evolv-green/30 mx-auto shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,157,0.2)] transition-all duration-300"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-evolv-green via-evolv-blue to-evolv-red bg-clip-text text-transparent leading-tight font-orbitron py-2">
  Next-Gen Safety Intelligence
</h1>

            <p className="text-2xl font-light mb-12 px-4 py- text-evolv-gold font-rajdhani">
              AI-powered insights for modern workplace safety management
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-semi-bold bg-gradient-to-r from-evolv-green via-purple-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Prevent. Predict. Protect.
            </h2>

            <p className="text-2xl leading-relaxed text-evolv-gold font-rajdhani">
              A revolutionary AI-powered platform for <strong>incident mitigation & investigation</strong> is on its way.
            </p>
            
            <h2 className="text-5xl md:text-6xl font-semi-bold bg-gradient-to-r from-evolv-green via-blue-500 to-evolv-green bg-clip-text text-transparent animate-gradient">
              A New Era for Data-Driven Safety.
            </h2>
            
            <p className="text-2xl text-evolv-gold font-rajdhani">
              Harnessing the power of <strong>data analytics & automation</strong> to transform workplace safety.  
              <br />Are you ready to experience the future?
            </p>

            {/* Orb Section */}
            <div className="relative flex justify-center mt-16">
              <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-evolv-green via-evolv-red to-evolv-red bg-clip-text text-transparent animate-gradient py-5">
                Evolving Soon...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900/90 z-10" />

      {/* Styles */}
      <style>
        {`
          @keyframes neonGlow {
            0% { text-shadow: 0 0 3px rgba(0, 255, 255, 0.5); }
            50% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.8); }
            100% { text-shadow: 0 0 3px rgba(0, 255, 255, 0.5); }
          }

          .neon-text {
            animation: neonGlow 2s ease-in-out infinite;
          }

          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .parallax-hover {
            animation: floatUpDown 3s ease-in-out infinite;
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 5s ease infinite;
          }

          .straight-gradient {
            background: linear-gradient(to right, #00FF9D, #00F2FF, #FF1E00);
            background-size: 200% 200%;
            animation: gradient-shift 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BlogLanding;
