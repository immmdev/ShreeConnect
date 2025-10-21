import React from 'react';
import { Heart, Users, TrendingUp, ShoppingBag, Award, Globe, Sprout, HandHeart } from 'lucide-react';

const problemPoints = [
  "Farmers struggle to find fair prices and trustworthy buyers for their millet harvest",
  "Consumers cannot verify the quality and origin of millet products they purchase",
  "Small producer groups lack visibility and direct market access",
  "Government schemes and support often don't reach the intended beneficiaries"
];

const beneficiaries = [
  { 
    icon: Sprout, 
    title: "For Farmers & Self-Help Groups", 
    benefits: [
      "Get fair prices through direct connection with buyers",
      "Access real-time market demand and pricing information",
      "Receive guidance on government schemes and subsidies",
      "Build trust through quality certification and ratings"
    ]
  },
  { 
    icon: ShoppingBag, 
    title: "For Consumers & Health-Conscious Buyers", 
    benefits: [
      "Buy authentic, traceable millet products with confidence",
      "Know exactly where your food comes from - farm to your table",
      "Discover nutritional benefits and recipes for millet-based meals",
      "Support small farmers and rural communities directly"
    ]
  },
  { 
    icon: Users, 
    title: "For Processors & Small Businesses", 
    benefits: [
      "Source quality raw materials directly from verified farmers",
      "Expand your customer reach through our marketplace",
      "Showcase your processed millet products to health-conscious buyers",
      "Streamline logistics and delivery management"
    ]
  },
  { 
    icon: Award, 
    title: "For Government & Policy Makers", 
    benefits: [
      "Track millet trade and market trends across regions",
      "Ensure subsidies and schemes reach the right beneficiaries",
      "Monitor the impact of agricultural policies in real-time",
      "Support data-driven decision making for rural development"
    ]
  }
];

const impactMetrics = [
  { icon: Heart, label: "Empowering Rural Communities", desc: "Connecting farmers directly to markets, eliminating middlemen exploitation" },
  { icon: TrendingUp, label: "Fair Income for Farmers", desc: "AI-guided pricing ensures farmers get the value they deserve" },
  { icon: Globe, label: "Trust Through Transparency", desc: "Every product traceable from farm to your home with QR codes" },
  { icon: HandHeart, label: "Women Empowerment", desc: "Supporting SHGs and women-led farming initiatives" }
];

const AboutUs = () => {
  const primaryText = 'text-[#013220]';
  const primaryAccent = 'text-[#547C3E]';
  const accentBackground = 'bg-[#B3CF8C]';
  const mainBackground = 'bg-[#FFFDA1]';

  return (
    <div className={`min-h-screen pt-12 pb-20 ${mainBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-extrabold ${primaryText} leading-tight mb-6`}>
            Empowering India's <span className={primaryAccent}>Millet Revolution</span>
          </h1>
          <p className={`text-2xl ${primaryText}/80 max-w-4xl mx-auto font-medium mb-4`}>
            Connecting farmers, consumers, and communities to celebrate "Shree Anna" - our ancient superfoods
          </p>
          <p className={`text-lg ${primaryText}/70 max-w-3xl mx-auto`}>
            ShreeConnect bridges the gap between those who grow nutritious millets and those who seek them, creating a fair, transparent, and empowering marketplace for all.
          </p>
        </header>

        {/* The Challenge We're Solving */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold ${primaryText} mb-8 text-center`}>
              Why ShreeConnect Matters
            </h2>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full ${accentBackground} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`${primaryAccent} font-bold`}>{index + 1}</span>
                    </div>
                    <p className={`text-lg ${primaryText}/90`}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-20">
          <h2 className={`text-4xl font-bold text-center ${primaryText} mb-12`}>
            How We Help Everyone in the Millet Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficiaries.map((beneficiary, index) => {
              const Icon = beneficiary.icon;
              return (
                <div 
                  key={index} 
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-full ${accentBackground}`}>
                      <Icon className={`w-7 h-7 ${primaryAccent}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${primaryText}`}>{beneficiary.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {beneficiary.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`${primaryAccent} mt-1`}>✓</span>
                        <span className={`${primaryText}/80`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <div className="p-10 bg-gradient-to-br from-white to-[#B3CF8C]/30 rounded-2xl shadow-xl">
            <h2 className={`text-3xl font-bold ${primaryText} mb-8 text-center`}>
              Our Simple Yet Powerful Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`w-16 h-16 ${accentBackground} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-3xl font-bold ${primaryAccent}`}>1</span>
                </div>
                <h3 className={`text-xl font-bold ${primaryText} mb-3`}>Connect</h3>
                <p className={`${primaryText}/80`}>
                  Bring farmers, processors, and consumers together on one trusted platform
                </p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 ${accentBackground} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-3xl font-bold ${primaryAccent}`}>2</span>
                </div>
                <h3 className={`text-xl font-bold ${primaryText} mb-3`}>Verify</h3>
                <p className={`${primaryText}/80`}>
                  Ensure quality and authenticity through certification and traceability
                </p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 ${accentBackground} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-3xl font-bold ${primaryAccent}`}>3</span>
                </div>
                <h3 className={`text-xl font-bold ${primaryText} mb-3`}>Empower</h3>
                <p className={`${primaryText}/80`}>
                  Provide tools, knowledge, and fair opportunities for everyone to thrive
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Vision */}
        <section className="mb-20">
          <h2 className={`text-4xl font-bold text-center ${primaryText} mb-12`}>
            The Impact We're Creating Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl shadow-md border-l-4 border-[#547C3E] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${accentBackground} flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${primaryAccent}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${primaryText} mb-2`}>{metric.label}</h3>
                      <p className={`${primaryText}/70`}>{metric.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 p-12 bg-gradient-to-r from-[#547C3E] to-[#013220] rounded-2xl shadow-2xl text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Millet Movement Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Whether you're a farmer seeking better prices, a consumer wanting healthy food, or a supporter of rural development - ShreeConnect welcomes you to be part of India's agricultural transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-[#FFFDA1] text-[#013220] font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Trading
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;