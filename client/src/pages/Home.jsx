import React from 'react';
import { ShoppingCart, Zap, MessageCircle, Newspaper, Leaf, TrendingUp, Scan, BookOpen, ShieldCheck, Cpu, LocateFixed } from 'lucide-react';

// Color Palette:
// Primary: #547C3E (Medium Green) - Buttons, strong elements
// Accent: #B3CF8C (Light Green) - Secondary areas, highlights
// Background: #FFFDA1 (Light Yellow) - Page background, soft cards
// Text: #013220 (Dark Green) - Main text, headers

// --- Components & Data for the Enhanced Home Page ---

// Mock Data for Core Value Pillars (Reflecting the SOA Modules)
const corePillars = [
  {
    title: 'Unified Digital Commerce',
    icon: ShoppingCart,
    description: 'A dedicated marketplace connecting Farmers, FPOs, Processors, and Buyers directly. Facilitate transparent trading, secure payments, and direct market access.',
    features: ['AI Smart Matchmaking', 'Secure Razorpay Integration', 'Real-time Inventory'],
    color: 'bg-[#B3CF8C]', // Light Green
    textColor: 'text-[#013220]'
  },
  {
    title: 'AI Intelligence & Insights',
    icon: Cpu,
    description: 'Leverage Gemini-powered data models for smarter decisions. Get accurate price predictions, quality grading via image analysis, and personalized recommendations.',
    features: ['Price Prediction Model', 'Quality Grading (CNN)', 'Multilingual Chatbot'],
    color: 'bg-[#FFFDA1]', // Light Yellow
    textColor: 'text-[#013220]'
  },
  {
    title: 'Trust & Traceability',
    icon: LocateFixed,
    description: 'Establish trust with QR-based, farm-to-fork tracking. Verify quality certifications, view lab reports, and see the complete product lifecycle story.',
    features: ['QR-Code Traceability', 'Digital Certification Hub', 'Policy & Scheme Integration'],
    color: 'bg-[#547C3E]', // Medium Green
    textColor: 'text-white'
  }
];

// Mock Data for Impact Metrics
const impactMetrics = [
  { value: '40%+', label: 'Expected Farmer Income Increase' },
  { value: '100%', label: 'Product Traceability' },
  { value: '7+', label: 'Regional Languages Supported' },
  { value: '5K+', label: 'Metric Tons Traded (Projected)' }
];

// Mock Data for Top Stories (Keep existing)
const mockStories = [
  { id: 1, title: "Rollout of New Millet Subsidy Scheme", date: "Oct 18, 2025", summary: "Increased financial support for ragi and bajra cultivation. Check eligibility directly in our Policy Hub." },
  { id: 2, title: "AI Matchmaking boosts FPO Sales by 40%", date: "Oct 15, 2025", summary: "A case study on how ShreeConnect's AI connected regional buyers, driving record sales volumes." },
  { id: 3, title: "Sustainable Packaging for Pulses Training Video", date: "Oct 10, 2025", summary: "Expert guidance is now available in the Learning Hub to help improve product quality and branding." },
];


const Home = () => {
  const sectionTitleClass = "text-4xl sm:text-5xl font-extrabold text-[#013220] mb-3";
  const sectionSubtitleClass = "text-lg text-[#547C3E] font-medium uppercase tracking-wider mb-10";

  // Primary CTA Button Style
  const primaryButtonClass = "flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-[#547C3E] rounded-xl transition-all duration-300 shadow-xl hover:bg-[#013220] hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#B3CF8C]";

  // Secondary CTA Button Style
  const secondaryButtonClass = "flex items-center justify-center px-8 py-4 text-xl font-bold text-[#013220] border-2 border-[#547C3E] bg-[#FFFDA1] rounded-xl transition-all duration-300 shadow-md hover:bg-[#B3CF8C] hover:border-[#013220] transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#547C3E]";

  return (
    <div className="min-h-screen bg-[#FFFDA1]">

      {/* 1. HERO SECTION: The Intelligent Marketplace */}
      <section className="bg-[#FFFDA1] pt-12 md:pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

            {/* Content Area */}
            <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-left">
              <p className="text-sm font-bold text-[#547C3E] uppercase tracking-widest mb-4">
                Powered by AI, Traceability, and Digital Trust
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#013220] leading-tight mb-6">
                ShreeConnect: The <span className="text-[#547C3E]">Intelligent Hub</span> for Millets & Pulses.
              </h1>
              <p className="mt-6 text-xl text-[#013220]/80 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                <h1 className='text-xl'>Digitally empowering</h1> the entire Shree Anna value chain—from smallholder farmers and FPOs to global consumers. Experience fair pricing, assured quality, and 100% farm-to-fork visibility.
              </p>

              {/* CTA Buttons - Larger and bolder */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/marketplace" className={primaryButtonClass}>
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Start Trading Millets Now
                </a>
                <a href="/chatbot" className={secondaryButtonClass}>
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Ask the AI Assistant (Voice-Enabled)
                </a>
              </div>
            </div>

            {/* Image/Illustration Area (Placeholder) */}
            <div className="lg:col-span-6 xl:col-span-5 mt-12 lg:mt-0 relative mx-auto">
              <img className='relative h-80 w-140 bg-[#B3CF8C] rounded-[3rem] shadow-2xl border-4 border-[#547C3E] transform transition duration-500 hover:rotate-1 hover:scale-[1.01] ' src='/hero.png' alt='farmer->shg->consumer->startup'></img>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* 2. THE THREE CORE PILLARS SECTION */}
        <section>
          <div className="text-center">
            <h2 className={sectionTitleClass}>Building the Future of Agri-Trade</h2>
            <p className={sectionSubtitleClass}>Our Solution: Three Pillars of the ShreeConnect Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {corePillars.map(pillar => (
              <div
                key={pillar.title}
                className={`${pillar.color} ${pillar.textColor} p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 border-b-8 border-[#013220]/20`}
              >
                <div className={`p-4 inline-block rounded-full bg-[#013220] text-white mb-6 shadow-xl`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">{pillar.title}</h3>
                <p className={`text-base leading-relaxed ${pillar.textColor === 'text-white' ? 'text-white/90' : 'text-[#013220]/80'} mb-6`}>
                  {pillar.description}
                </p>

                <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-80">Key Features:</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm font-medium">
                  {pillar.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* 3. MISSION & IMPACT METRICS */}
        <section>
          <div className="bg-[#B3CF8C] p-8 md:p-16 rounded-[2rem] shadow-2xl border-4 border-[#547C3E] flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Leaf className="w-16 h-16 text-[#013220] flex-shrink-0 p-3 bg-[#FFFDA1] rounded-full shadow-lg mb-6 mx-auto lg:mx-0" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#013220] mb-4">
                Cultivating Change: ShreeConnect's Expected Impact
              </h2>
              <p className="text-xl text-[#013220]/90 leading-relaxed">
                Our mission is to empower rural economies, improve nutritional security, and foster **technological adoption** among farmers and SHGs, creating a sustainable, future-ready agricultural sector.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="bg-white p-6 rounded-xl text-center shadow-lg border-b-4 border-[#547C3E] transition-transform duration-300 hover:scale-[1.05]">
                  <p className="text-4xl font-extrabold text-[#547C3E] mb-1">{metric.value}</p>
                  <p className="text-sm font-semibold text-[#013220] uppercase">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 4. TOP STORIES / AWARENESS HUB (Refined) */}
        <section>
          <div className="text-center">
            <h2 className={sectionTitleClass}>Latest from the Farm & Hub</h2>
            <p className={sectionSubtitleClass}>Knowledge, Policy, and Market Intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {mockStories.map(story => (
              <a
                key={story.id}
                href="#"
                className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-[#B3CF8C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Newspaper className="w-8 h-8 text-[#547C3E] mb-4" />
                <h3 className="text-xl font-bold text-[#013220] mb-2 group-hover:text-[#547C3E] transition-colors duration-200">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{story.date}</p>
                <p className="text-base text-[#013220]/80">{story.summary}</p>
                <span className="mt-4 text-[#547C3E] font-semibold text-sm block">Read More &rarr;</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
