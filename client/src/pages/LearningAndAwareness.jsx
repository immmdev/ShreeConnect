import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Video, FileText, Lightbulb, TrendingUp, Users, ArrowRight, Rss, Mic, Package, Sprout, Award, DollarSign, Smartphone } from 'lucide-react';

// Color Palette
const colors = {
  primary: '#547C3E',
  accent: '#B3CF8C',
  background: '#FFFDA1',
  text: '#013220',
};

// Mock Data - Trending Stories
const trendingStories = [
  { id: 1, title: 'Record Kharif Millet Procurement Announced', date: 'Oct 20, 2025', category: 'Policy', icon: Award, excerpt: 'Government announces historic procurement prices for millets across major producing states.' },
  { id: 2, title: 'New AI Model for Quality Grading is Live!', date: 'Oct 19, 2025', category: 'Technology', icon: Smartphone, excerpt: 'Revolutionary AI tool helps farmers grade their produce instantly using smartphone cameras.' },
  { id: 3, title: 'Sorghum Market Price Hits 6-Month High', date: 'Oct 18, 2025', category: 'Market', icon: TrendingUp, excerpt: 'Rising demand from urban markets drives sorghum prices to unprecedented levels.' },
  { id: 4, title: 'SHG Triples Profit with New Packaging', date: 'Oct 17, 2025', category: 'Success Story', icon: Package, excerpt: 'Women-led group in Maharashtra shares their journey from farm to premium retail shelves.' },
  { id: 5, title: 'Sustainable Farming Expo in Pune', date: 'Oct 16, 2025', category: 'Events', icon: Sprout, excerpt: 'National conference to showcase latest climate-resilient farming innovations next month.' },
  { id: 6, title: 'FPO Collective Secures ₹2Cr Export Deal', date: 'Oct 15, 2025', category: 'Business', icon: DollarSign, excerpt: 'First-time exporters share tips on international market entry and documentation.' },
];

// Enhanced Learning Content by Category
const learningContent = {
  farmers: [
    { id: 1, type: 'Video', format: 'video', title: 'Water-Efficient Irrigation for Bajra', duration: '8 min', topic: 'Sustainable Farming', level: 'Beginner', description: 'Learn drip irrigation techniques that reduce water use by 40%' },
    { id: 2, type: 'Audio', format: 'audio', title: 'Organic Pest Management Stories', duration: '12 min', topic: 'Farming Practices', level: 'Intermediate', description: 'Real farmers share their natural pest control successes' },
    { id: 3, type: 'Article', format: 'article', title: 'Soil Health Testing Guide', duration: '5 min read', topic: 'Soil Management', level: 'Beginner', description: 'Step-by-step process to test and improve your soil quality' },
    { id: 4, type: 'Video', format: 'video', title: 'Intercropping Success Patterns', duration: '10 min', topic: 'Advanced Farming', level: 'Advanced', description: 'Maximize yield with scientifically proven crop combinations' },
    { id: 5, type: 'Audio', format: 'audio', title: 'Weather Forecasting for Farmers', duration: '15 min', topic: 'Technology', level: 'Beginner', description: 'Use mobile apps to predict rain and plan your farming calendar' },
  ],
  
  startups: [
    { id: 6, type: 'Video', format: 'video', title: 'Branding Millet Products for Urban Markets', duration: '12 min', topic: 'Marketing & Branding', level: 'Intermediate', description: 'Create compelling brand stories that resonate with health-conscious consumers' },
    { id: 7, type: 'Article', format: 'article', title: 'E-commerce Setup for Agri Products', duration: '10 min read', topic: 'Digital Business', level: 'Beginner', description: 'Complete guide to selling agricultural products online' },
    { id: 8, type: 'Video', format: 'video', title: 'Food Processing License Requirements', duration: '9 min', topic: 'Legal & Compliance', level: 'Intermediate', description: 'Navigate FSSAI licensing and safety standards effortlessly' },
    { id: 9, type: 'Audio', format: 'audio', title: 'Pitch Perfect: Startup Funding Stories', duration: '18 min', topic: 'Funding & Finance', level: 'Advanced', description: 'Successful founders share their investor pitch strategies' },
    { id: 10, type: 'Article', format: 'article', title: 'Sustainable Packaging Innovations', duration: '7 min read', topic: 'Product Development', level: 'Intermediate', description: 'Eco-friendly packaging solutions that customers love' },
  ],
  
  shgs: [
    { id: 11, type: 'Video', format: 'video', title: 'SHG to Brand: Complete Journey', duration: '15 min', topic: 'Entrepreneurship', level: 'Beginner', description: 'From small group to recognized brand - a step-by-step guide' },
    { id: 12, type: 'Audio', format: 'audio', title: 'Financial Literacy Conversations', duration: '14 min', topic: 'Money Management', level: 'Beginner', description: 'Essential banking, savings, and investment knowledge for groups' },
    { id: 13, type: 'Article', format: 'article', title: 'Accessing NRLM Benefits', duration: '6 min read', topic: 'Government Schemes', level: 'Beginner', description: 'How to apply for and utilize National Rural Livelihood Mission support' },
    { id: 14, type: 'Video', format: 'video', title: 'Collective Marketing Strategies', duration: '11 min', topic: 'Sales & Marketing', level: 'Intermediate', description: 'Pool resources and negotiate better prices as a group' },
    { id: 15, type: 'Audio', format: 'audio', title: 'Women Entrepreneur Success Stories', duration: '20 min', topic: 'Inspiration', level: 'All Levels', description: 'Inspiring journeys of rural women who built thriving businesses' },
  ],
  
  fpos: [
    { id: 16, type: 'Video', format: 'video', title: 'FPO Formation & Registration', duration: '16 min', topic: 'Legal Framework', level: 'Beginner', description: 'Complete legal and regulatory requirements for starting an FPO' },
    { id: 17, type: 'Article', format: 'article', title: 'PM-FME Subsidy Application Guide', duration: '8 min read', topic: 'Government Schemes', level: 'Intermediate', description: 'Detailed walkthrough of subsidy forms and documentation' },
    { id: 18, type: 'Video', format: 'video', title: 'Procurement & Storage Infrastructure', duration: '13 min', topic: 'Operations', level: 'Advanced', description: 'Build cost-effective cold storage and warehouse facilities' },
    { id: 19, type: 'Audio', format: 'audio', title: 'AGMARK Quality Standards Explained', duration: '16 min', topic: 'Quality Control', level: 'Intermediate', description: 'Meet national quality standards for better market access' },
    { id: 20, type: 'Article', format: 'article', title: 'Bulk Procurement Negotiation Tactics', duration: '9 min read', topic: 'Business Strategy', level: 'Advanced', description: 'Leverage collective buying power for maximum savings' },
  ],
};

// Content Type Icons
const getContentIcon = (format) => {
  switch(format) {
    case 'video': return Video;
    case 'audio': return Mic;
    case 'article': return FileText;
    default: return FileText;
  }
};

// Story Card Component with Click to Expand
const StoryCard = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const StoryIcon = story.icon;

  return (
    <>
      <div
        onClick={() => setIsExpanded(true)}
        className="w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#547C3E] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <StoryIcon className="w-5 h-5 text-[#547C3E] mr-2" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#013220]/70">
              {story.category}
            </span>
          </div>
          <span className="text-xs text-gray-500">{story.date}</span>
        </div>
        
        <h3 className="text-lg font-bold text-[#013220] mb-2 leading-tight group-hover:text-[#547C3E] transition-colors">
          {story.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{story.excerpt}</p>
        
        <div className="flex items-center text-[#547C3E] font-semibold text-sm">
          Read Full Story <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Full Story Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center">
                <StoryIcon className="w-8 h-8 text-[#547C3E] mr-3" />
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#013220]/70 block">
                    {story.category}
                  </span>
                  <span className="text-xs text-gray-500">{story.date}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#013220] mb-4">{story.title}</h1>
              
              <div className="prose prose-lg max-w-none text-[#013220]">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">{story.excerpt}</p>
                
                <p className="mb-4">
                  This groundbreaking development marks a significant milestone in the Shree Anna ecosystem. Industry experts have been closely monitoring these trends, and the implications for farmers, FPOs, and agri-entrepreneurs are substantial.
                </p>
                
                <h2 className="text-2xl font-bold text-[#547C3E] mt-8 mb-4">Key Highlights</h2>
                <ul className="space-y-2 mb-6">
                  <li>Market dynamics showing unprecedented growth in millet demand</li>
                  <li>Government policy support strengthening the supply chain infrastructure</li>
                  <li>Technology integration enabling better quality control and traceability</li>
                  <li>Success stories inspiring more stakeholders to enter the market</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-[#547C3E] mt-8 mb-4">What This Means For You</h2>
                <p className="mb-4">
                  Whether you're a smallholder farmer, part of a Self-Help Group, managing an FPO, or running an agri-tech startup, this development opens new opportunities for growth and sustainability. The convergence of policy support, market demand, and technological innovation creates a perfect environment for scaling operations.
                </p>
                
                <p className="mb-4">
                  Stakeholders are encouraged to leverage available resources, participate in training programs, and explore collaborative opportunities to maximize benefits from this evolving landscape.
                </p>
                
                <div className="bg-[#FFFDA1] border-l-4 border-[#547C3E] p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-bold text-[#013220] mb-2">📌 Action Steps</h3>
                  <p className="text-sm text-[#013220]/80">
                    Connect with your local agricultural office, attend upcoming workshops, and join ShreeConnect community forums to stay updated on implementation details and support programs.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4">
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="flex-1 bg-[#547C3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#013220] transition-colors duration-200"
                >
                  Close Article
                </button>
                <button className="flex-1 bg-[#B3CF8C] text-[#013220] px-6 py-3 rounded-xl font-semibold hover:bg-[#547C3E] hover:text-white transition-colors duration-200">
                  Share Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Learning Content Card
const LearningCard = ({ content, category }) => {
  const ContentIcon = getContentIcon(content.format);
  
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800',
    'All Levels': 'bg-gray-100 text-gray-800',
  };

  return (
    <a
      href={`/learning/${category}/${content.id}`}
      className="w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#B3CF8C] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-[#FFFDA1] text-[#547C3E] shadow-md">
          <ContentIcon className="w-6 h-6" />
        </div>
        <div className="text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#547C3E] bg-[#B3CF8C]/30 px-3 py-1 rounded-full">
            {content.type}
          </span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-[#013220] mb-2 leading-tight group-hover:text-[#547C3E] transition-colors">
        {content.title}
      </h3>
      
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{content.topic}</p>
      <p className="text-sm text-gray-600 mb-4">{content.description}</p>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className={`text-xs font-semibold px-2 py-1 rounded ${levelColors[content.level]}`}>
          {content.level}
        </span>
        <span className="text-sm font-semibold text-[#013220]">
          {content.duration}
        </span>
      </div>
    </a>
  );
};

// Auto-Scroll Carousel
const AutoScrollCarousel = ({ items, type = 'learning', category = '' }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ scrollBehavior: 'smooth' }}
    >
      {items.map(item => (
        type === 'story' ? 
          <StoryCard key={item.id} story={item} /> :
          <LearningCard key={item.id} content={item} category={category} />
      ))}
    </div>
  );
};

// Category Section with Header
const CategorySection = ({ title, icon: Icon, items, category, viewAllLink }) => (
  <section className="mb-16">
    <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-[#B3CF8C]">
      <div className="flex items-center">
        <div className="p-3 rounded-xl bg-[#547C3E] text-white mr-3 shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-[#013220]">{title}</h2>
      </div>
      <a 
        href={viewAllLink}
        className="flex items-center text-[#547C3E] font-semibold hover:text-[#013220] transition-colors group"
      >
        See All Content
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    <AutoScrollCarousel items={items} type="learning" category={category} />
  </section>
);

// Main Component
const LearningAndAwareness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDA1] to-[#B3CF8C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-white rounded-full shadow-xl mb-6">
            <BookOpen className="w-16 h-16 text-[#547C3E]" />
          </div>
          <h1 className="text-6xl font-extrabold text-[#013220] mb-4 tracking-tight">
            ShreeConnect Learning Hub
          </h1>
          <p className="text-xl text-[#547C3E] font-medium max-w-3xl mx-auto leading-relaxed">
            Comprehensive training, market intelligence, and success stories for the Shree Anna ecosystem
          </p>
        </header>

        {/* Top Stories Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-[#547C3E]">
            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-[#013220] text-white mr-3 shadow-lg">
                <Rss className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#013220]">Latest News & Updates</h2>
                <p className="text-sm text-gray-600 mt-1">Stay informed with trending stories from the millet industry</p>
              </div>
            </div>
            <a 
              href="/all-stories"
              className="flex items-center bg-[#547C3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#013220] transition-all shadow-lg hover:shadow-xl group"
            >
              View All Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <AutoScrollCarousel items={trendingStories} type="story" />
        </section>

        {/* Learning Categories */}
        <div className="space-y-16">
          <CategorySection 
            title="For Farmers"
            icon={Sprout}
            items={learningContent.farmers}
            category="farmers"
            viewAllLink="/learning/farmers"
          />
          
          <CategorySection 
            title="For Startups & Entrepreneurs"
            icon={TrendingUp}
            items={learningContent.startups}
            category="startups"
            viewAllLink="/learning/startups"
          />
          
          <CategorySection 
            title="For Self-Help Groups (SHGs)"
            icon={Users}
            items={learningContent.shgs}
            category="shgs"
            viewAllLink="/learning/shgs"
          />
          
          <CategorySection 
            title="For Farmer Producer Organizations (FPOs)"
            icon={Award}
            items={learningContent.fpos}
            category="fpos"
            viewAllLink="/learning/fpos"
          />
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-white rounded-3xl shadow-2xl p-12">
          <Lightbulb className="w-16 h-16 text-[#547C3E] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#013220] mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Access our complete library of training modules, expert guidance, and community support
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/all-training"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-[#547C3E] rounded-xl shadow-xl hover:bg-[#013220] hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Browse All Training
            </a>
            <a 
              href="/community"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-[#013220] bg-[#B3CF8C] rounded-xl shadow-xl hover:bg-[#547C3E] hover:text-white transition-all transform hover:-translate-y-1"
            >
              <Users className="w-6 h-6 mr-3" />
              Join Community
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LearningAndAwareness;