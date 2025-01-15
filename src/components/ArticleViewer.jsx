import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, ExternalLink } from 'lucide-react';

const ArticleViewer = ({ isOpen, onClose, article }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      if (article?.path) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danahiggins2nd`
          );
          const data = await response.json();
          const fullArticle = data.items.find(
            (item) => item.link === article.path
          );
          setContent(fullArticle?.content || 'Content could not be loaded');
        } catch (error) {
          setContent('Error loading article content');
        }
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchContent();
    }
  }, [isOpen, article]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <Dialog.Title className="text-xl font-semibold text-white">
              {article?.title}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-700 rounded w-1/2" />
                <div className="h-4 bg-gray-700 rounded w-5/6" />
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                <div
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="mt-8 pt-4 border-t border-gray-700">
                  <a
                    href={article?.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    Read full article on Medium
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ArticleViewer;
