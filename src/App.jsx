import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLanding from "./components/BlogLanding.jsx";
import IndustryTrends from "./components/IndustryTrends.jsx";
import BestPractices from "./components/BestPractices.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import AIinEHSPost from './components/posts/industry-trends/AIinEHSPost';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogLanding />} />
        <Route path="/industry-trends" element={<IndustryTrends />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/industry-trends/ai-in-ehs" element={<AIinEHSPost />} />
      </Routes>
    </Router>
  );
}

export default App;