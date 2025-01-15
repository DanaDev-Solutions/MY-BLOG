import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, ExternalLink, ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import evolvLogo from '@/assets/evolv_log.png';

const ProxyArticleModal = ({ article, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(article.link);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0B1121]/90 flex flex-col z-50">
      {/* Single, Larger Header */}
      <header className="bg-[#0F172A] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={onClose}>
                <img 
                  src={evolvLogo} 
                  alt="Evolv EHS Solutions" 
                  className="h-12 w-12"
                />
                <span className="ml-3 text-white text-xl font-semibold">
                  Evolv EHS Solutions
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <Link 
                  to="/industry-trends" 
                  className="text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Industry Trends
                </Link>
                <Link 
                  to="/best-practices" 
                  className="text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Best Practices
                </Link>
                <Link 
                  to="/case-studies" 
                  className="text-white hover:text-green-400 transition-colors"
                  onClick={onClose}
                >
                  Case Studies
                </Link>
              </nav>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors ml-4"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="flex items-center text-green-400 hover:text-green-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>

          {!article && (
            <Alert variant="destructive">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle>Error Loading Article</AlertTitle>
              <AlertDescription>
                Failed to load article content
              </AlertDescription>
            </Alert>
          )}

          {article && (
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-white mb-6">
                {article.title}
              </h1>
              <div className="mb-8 text-base text-gray-400">
                Published on {new Date(article.pubDate).toLocaleDateString()}
              </div>
              <div
                className="text-gray-300 
                  [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-4
                  [&_a]:text-green-400 [&_a]:no-underline [&_a:hover]:text-green-300
                  [&_img]:max-w-xl [&_img]:w-3/4 [&_img]:h-auto [&_img]:object-cover 
                  [&_img]:mx-auto [&_img]:my-8 [&_img]:rounded-lg 
                  [&_figure]:mx-auto [&_figure]:text-center [&_figure]:max-w-xl [&_figure]:w-3/4
                  [&_figcaption]:text-sm [&_figcaption]:text-gray-400 [&_figcaption]:mt-2
                  [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_li]:mb-2 [&_li]:text-lg
                  [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Sharing and Read More Section */}
              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex items-center space-x-4">
                    {/* Share buttons remain the same */}
                    {/* ... previous share button code ... */}
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Read full article on Medium
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProxyArticleModal;