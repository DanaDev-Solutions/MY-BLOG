// api/proxy-article.jsx
import express from 'express';
import fetch from 'node-fetch';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const router = express.Router();

router.get('/api/proxy-article', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'Article URL is required' });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch article content' });
    }

    const html = await response.text();
    const { window } = new JSDOM(html);
    const sanitizedHTML = DOMPurify.sanitize(window.document.documentElement.innerHTML);

    res.json({ content: sanitizedHTML });
  } catch (error) {
    console.error('Error in proxy endpoint:', error);
    res.status(500).json({ error: 'Error fetching article content' });
  }
});

export default router;