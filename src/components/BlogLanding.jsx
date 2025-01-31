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
        <div className="text-center pt-[12vh] px-4 md:pt-[15vh]">
          <div className="mb-[8vh] animate-float">
            <img 
              src={logo} 
              alt="Evolv Safety Solutions" 
              className="w-[50vw] min-w-[200px] max-w-[400px] h-auto rounded-full border-[3px] border-evolv-green/30 mx-auto shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,157,0.2)] transition-all duration-300"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold bg-gradient-to-r from-evolv-green via-evolv-blue to-evolv-red bg-clip-text text-transparent leading-tight font-orbitron py-2">
              Next-Gen Safety Intelligence
            </h1>

            <p className="text-[clamp(1.25rem,3vw,2rem)] font-light mb-[6vh] px-4 text-gray-300 font-rajdhani">
              AI-powered insights for modern workplace safety management
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="container mx-auto px-4 py-[6vh] text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-semi-bold bg-gradient-to-r from-evolv-green via-purple-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Prevent. Predict. Protect.
            </h2>

            <p className="text-[clamp(1.1rem,2.5vw,1.75rem)] leading-relaxed text-gray-300 font-rajdhani">
              A revolutionary AI-powered platform for <strong>incident mitigation & investigation</strong> is on its way.
            </p>
            
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-semi-bold bg-gradient-to-r from-evolv-green via-blue-500 to-evolv-green bg-clip-text text-transparent animate-gradient">
              A New Era for Data-Driven Safety.
            </h2>
            
    <div className="text-[clamp(1.1rem,2.5vw,1.75rem)] text-gray-300 font-rajdhani max-w-4xl mx-auto text-center md:text-left px-6 md:px-12 leading-relaxed">
  <p>
    Powering <strong>workplace safety</strong> with <strong>data analytics</strong> & <strong>automation</strong>.
  </p>
  <p className="block text-center w-full mt-2">
    Are you ready to experience the future?
  </p>
</div>


            {/* Orb Section */}
            <div className="relative flex justify-center mt-[8vh]">
              <p className="text-[clamp(2rem,8vw,5rem)] font-bold font-orbitron tracking-wide relative parallax-hover straight-gradient">
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
          html {
            font-size: clamp(16px, 1.5vw, 20px);
          }

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
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient-shift 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BlogLanding;
