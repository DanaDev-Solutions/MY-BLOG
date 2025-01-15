import React from 'react';
import Navigation from '../../Navigation';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AIinEHSPost = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Link to="/industry-trends" className="flex items-center text-green-400 hover:text-green-300">
          <ArrowLeft className="mr-2" />
          Back to Industry Trends
        </Link>

        <article className="mt-8 text-white">
          <h1 className="text-4xl font-bold mb-4">AI in EHS Management</h1>
          <div className="text-green-400 mb-8">Published: December 27, 2024</div>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="mb-4 text-gray-300">
              Artificial Intelligence is revolutionizing how we approach workplace safety and compliance. 
              In this article, we'll explore how AI is transforming Environmental Health and Safety management 
              and what this means for safety professionals.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits of AI in EHS</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Predictive Analytics for Accident Prevention</li>
              <li>Automated Compliance Monitoring</li>
              <li>Real-time Risk Assessment</li>
              <li>Smart Personal Protective Equipment</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AIinEHSPost;