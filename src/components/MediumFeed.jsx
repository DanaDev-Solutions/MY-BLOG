import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ProxyArticleModal from './ProxyArticleModal';


const MediumFeed = ({ categoryFilter }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Category mapping from Medium tags to our categories
  const CATEGORY_MAPPING = {
    'industry-trends': ['trends', 'technology', 'innovation', 'industry trends', 'Industry Trends'],
    'best-practices': ['safety', 'best-practices', 'implementation', 'best practice', 'Best Practice'],
    'case-studies': ['case-study', 'success-story', 'outcomes']
  };

  const determineCategory = (mediumCategories = []) => {
    // Convert categories to lowercase for comparison
    const normalizedCategories = mediumCategories.map(cat => cat.toLowerCase());
    
    // Check each of our category types
    for (const [category, keywords] of Object.entries(CATEGORY_MAPPING)) {
      if (keywords.some(keyword => normalizedCategories.includes(keyword))) {
        return category;
      }
    }
    
    // Default to industry-trends if "trends" is in categories
    if (normalizedCategories.includes('trends')) {
      return 'industry-trends';
    }
    
    return null;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('Fetching articles for category:', categoryFilter);
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danahiggins2nd'
        );
        const data = await response.json();
        
        // Process articles to include categories
        const processedArticles = (data.items || []).map(article => {
          const category = determineCategory(article.categories);
          console.log(`Article "${article.title}" has Medium categories:`, article.categories);
          console.log(`Mapped to our category:`, category);
          
          return {
            ...article,
            categories: category ? [category] : []
          };
        });

        setArticles(processedArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryFilter]);

  // Filter articles based on category if provided
  const filteredArticles = categoryFilter
    ? articles.filter(article => article.categories.includes(categoryFilter))
    : articles;

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-800/40 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredArticles.length === 0 ? (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-400 text-lg">
              No articles found in {categoryFilter}.
              <br />
              <span className="text-sm mt-2 block">
                Add appropriate tags to your Medium article:
                {categoryFilter === 'industry-trends' && ' trends, technology, innovation. Industry Trends'}
                {categoryFilter === 'best-practices' && ' safety, best-practices, implementation'}
                {categoryFilter === 'case-studies' && ' case-study, success-story, outcomes, case study, Case Study'}
              </span>
            </p>
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <div 
              key={index}
              onClick={() => handleArticleClick(article)}
              className="bg-gray-800/40 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="p-6">
                <div className="text-green-400 text-sm mb-2">
                  {new Date(article.pubDate).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {article.title}
                </h3>
                <div className="flex items-center text-green-400 hover:text-green-300">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <ProxyArticleModal 
          article={selectedArticle}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default MediumFeed;