import React, { useState, useMemo } from 'react';
import { Shield, TrendingUp, CheckCircle, Clock, Users, Zap, Briefcase, DollarSign, Search, Filter, ArrowRight } from 'lucide-react';

// Mock Data - Indian Government Schemes
const mockSchemes = [
 { id: 1, category: 'eligible', title: "PM-FME Scheme for Millets", icon: Briefcase, eligibility: "FPOs, SHGs, and startups producing millets.", benefits: "35% subsidy (max ₹10 lakh) for millet processing units.", statusDetail: "You meet 4 of 5 criteria. Documents needed: Udyam Registration.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['subsidy', 'millet', 'processing'] },
  { id: 2, category: 'eligible', title: "Millet Value Chain Development Program", icon: Zap, eligibility: "FPOs and startups involved in millet marketing.", benefits: "Support for storage, packaging, and marketing of millet products.", statusDetail: "Eligible; apply before Dec 2025.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['millet', 'marketing', 'infrastructure'] },
  { id: 3, category: 'new', title: "Millet Export Promotion Policy 2025", icon: TrendingUp, eligibility: "Registered exporters and FPOs targeting international markets.", benefits: "Financial assistance for trade fairs, branding, and market access.", statusDetail: "New policy; check compliance guidelines.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['export', 'millet', 'international'] },
  { id: 4, category: 'eligible', title: "Organic Millet Certification Subsidy", icon: Briefcase, eligibility: "Farmers and FPOs cultivating organic millets.", benefits: "50% subsidy on organic certification fees.", statusDetail: "Pending application; documents needed.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['organic', 'millet', 'certification'] },
  { id: 5, category: 'benefited', title: "Millet Marketing Assistance Scheme", icon: DollarSign, eligibility: "FPOs and startups selling millets.", benefits: "Financial support for branding, packaging, and promotion.", statusDetail: "Benefited FY 2024-25; ₹2 lakh support received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['millet', 'marketing', 'promotion'] },
  { id: 6, category: 'new', title: "National Millet Research Grant 2025", icon: TrendingUp, eligibility: "Research institutions, FPOs, and startups.", benefits: "Grants for innovation, product development, and market studies.", statusDetail: "Application opens Jan 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['research', 'millet', 'grant'] },
  { id: 7, category: 'eligible', title: "Millet Seed Subsidy Program", icon: Briefcase, eligibility: "Farmers and SHGs cultivating millets.", benefits: "Subsidy for certified high-yield millet seeds.", statusDetail: "Eligible; submit seed purchase invoices.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['seed', 'millet', 'subsidy'] },
  { id: 8, category: 'eligible', title: "Cold Storage Support for Millets", icon: Zap, eligibility: "FPOs and startups with millet inventory.", benefits: "50% subsidy on cold storage construction and maintenance.", statusDetail: "Pending documents for approval.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['millet', 'cold-storage', 'subsidy'] },
  { id: 9, category: 'new', title: "Millet Training & Capacity Building Program", icon: Clock, eligibility: "Farmers, FPOs, and SHGs.", benefits: "Free training for improved millet farming and processing techniques.", statusDetail: "Sessions start next month in your district.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['training', 'millet', 'capacity-building'] },
  { id: 10, category: 'benefited', title: "Millet Farmer Group Incentive", icon: DollarSign, eligibility: "Registered FPOs and SHGs.", benefits: "Cash incentive for production of 500+ kg millets per season.", statusDetail: "Benefited FY 2024-25; ₹1 lakh received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['millet', 'farmer', 'incentive'] },
  { id: 11, category: 'eligible', title: "Millet Processing Unit Loan Scheme", icon: Briefcase, eligibility: "FPOs and startups setting up millet processing units.", benefits: "Low-interest loan up to ₹1 crore.", statusDetail: "Eligible; submit business plan.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['loan', 'millet', 'processing'] },
  { id: 12, category: 'new', title: "Millet Export Training Program", icon: Clock, eligibility: "FPOs and exporters.", benefits: "Workshops on export compliance, documentation, and quality standards.", statusDetail: "Next session in Feb 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['training', 'millet', 'export'] },
  { id: 13, category: 'eligible', title: "Millet Value Addition Grant", icon: Zap, eligibility: "Startups and FPOs.", benefits: "Financial support for packaging, branding, and small-scale processing.", statusDetail: "Eligible; max ₹5 lakh grant.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['millet', 'value-add', 'grant'] },
  { id: 14, category: 'benefited', title: "Millet FPO Development Scheme", icon: CheckCircle, eligibility: "FPOs registered under FSSAI.", benefits: "Support for cluster development and marketing.", statusDetail: "Benefited; ₹2.5 lakh support received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['millet', 'fpo', 'cluster'] },
  { id: 15, category: 'new', title: "National Millet Promotion Campaign", icon: TrendingUp, eligibility: "All millet stakeholders.", benefits: "Subsidy for participation in promotional events and media campaigns.", statusDetail: "Campaign starts next quarter.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['millet', 'promotion', 'campaign'] },
  { id: 16, category: 'eligible', title: "Millet Storage & Logistics Support", icon: Zap, eligibility: "FPOs, cooperatives, and startups.", benefits: "Financial assistance for transport and warehouse setup.", statusDetail: "Pending warehouse document verification.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['millet', 'logistics', 'subsidy'] },
  { id: 17, category: 'new', title: "Millet Farmer Digital Platform", icon: Clock, eligibility: "Farmers and FPOs.", benefits: "Digital marketplace access and technical assistance.", statusDetail: "Platform launch in Jan 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['millet', 'digital', 'platform'] },
  { id: 18, category: 'benefited', title: "Millet Organic Input Subsidy", icon: DollarSign, eligibility: "Farmers adopting organic millet farming.", benefits: "50% subsidy on organic fertilizers and inputs.", statusDetail: "Benefited FY 2024-25; ₹50,000 received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['millet', 'organic', 'input'] },
  { id: 19, category: 'eligible', title: "Millet Export Subsidy Scheme", icon: Briefcase, eligibility: "FPOs and exporters.", benefits: "Reimbursement of export-related expenses.", statusDetail: "Eligible; submit export plan.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['millet', 'export', 'subsidy'] },
  { id: 20, category: 'new', title: "Millet Innovation & Startup Grant", icon: TrendingUp, eligibility: "Startups working on millet-based products.", benefits: "Grant for product innovation and pilot projects.", statusDetail: "Applications open till Mar 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['millet', 'startup', 'innovation'] },
    { id: 21, category: 'eligible', title: "PM-FME Scheme for Pulses", icon: Briefcase, eligibility: "FPOs, SHGs, and startups producing pulses.", benefits: "35% subsidy (max ₹10 lakh) for pulses processing units.", statusDetail: "You meet 4 of 5 criteria. Documents needed: Udyam Registration.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['subsidy', 'pulses', 'processing'] },
  { id: 22, category: 'eligible', title: "Pulses Value Chain Development Program", icon: Zap, eligibility: "FPOs and startups involved in pulses marketing.", benefits: "Support for storage, packaging, and marketing of pulses products.", statusDetail: "Eligible; apply before Dec 2025.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['pulses', 'marketing', 'infrastructure'] },
  { id: 23, category: 'new', title: "Pulses Export Promotion Policy 2025", icon: TrendingUp, eligibility: "Registered exporters and FPOs targeting international markets.", benefits: "Financial assistance for trade fairs, branding, and market access.", statusDetail: "New policy; check compliance guidelines.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['export', 'pulses', 'international'] },
  { id: 24, category: 'eligible', title: "Organic Pulses Certification Subsidy", icon: Briefcase, eligibility: "Farmers and FPOs cultivating organic pulses.", benefits: "50% subsidy on organic certification fees.", statusDetail: "Pending application; documents needed.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['organic', 'pulses', 'certification'] },
  { id: 25, category: 'benefited', title: "Pulses Marketing Assistance Scheme", icon: DollarSign, eligibility: "FPOs and startups selling pulses.", benefits: "Financial support for branding, packaging, and promotion.", statusDetail: "Benefited FY 2024-25; ₹2 lakh support received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['pulses', 'marketing', 'promotion'] },
  { id: 26, category: 'new', title: "National Pulses Research Grant 2025", icon: TrendingUp, eligibility: "Research institutions, FPOs, and startups.", benefits: "Grants for innovation, product development, and market studies.", statusDetail: "Application opens Jan 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['research', 'pulses', 'grant'] },
  { id: 27, category: 'eligible', title: "Pulses Seed Subsidy Program", icon: Briefcase, eligibility: "Farmers and SHGs cultivating pulses.", benefits: "Subsidy for certified high-yield pulses seeds.", statusDetail: "Eligible; submit seed purchase invoices.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['seed', 'pulses', 'subsidy'] },
  { id: 28, category: 'eligible', title: "Cold Storage Support for Pulses", icon: Zap, eligibility: "FPOs and startups with pulses inventory.", benefits: "50% subsidy on cold storage construction and maintenance.", statusDetail: "Pending documents for approval.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['pulses', 'cold-storage', 'subsidy'] },
  { id: 29, category: 'new', title: "Pulses Training & Capacity Building Program", icon: Clock, eligibility: "Farmers, FPOs, and SHGs.", benefits: "Free training for improved pulses farming and processing techniques.", statusDetail: "Sessions start next month in your district.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['training', 'pulses', 'capacity-building'] },
  { id: 30, category: 'benefited', title: "Pulses Farmer Group Incentive", icon: DollarSign, eligibility: "Registered FPOs and SHGs.", benefits: "Cash incentive for production of 500+ kg pulses per season.", statusDetail: "Benefited FY 2024-25; ₹1 lakh received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['pulses', 'farmer', 'incentive'] },
  { id: 31, category: 'eligible', title: "Pulses Processing Unit Loan Scheme", icon: Briefcase, eligibility: "FPOs and startups setting up pulses processing units.", benefits: "Low-interest loan up to ₹1 crore.", statusDetail: "Eligible; submit business plan.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['loan', 'pulses', 'processing'] },
  { id: 32, category: 'new', title: "Pulses Export Training Program", icon: Clock, eligibility: "FPOs and exporters.", benefits: "Workshops on export compliance, documentation, and quality standards.", statusDetail: "Next session in Feb 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['training', 'pulses', 'export'] },
  { id: 33, category: 'eligible', title: "Pulses Value Addition Grant", icon: Zap, eligibility: "Startups and FPOs.", benefits: "Financial support for packaging, branding, and small-scale processing.", statusDetail: "Eligible; max ₹5 lakh grant.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['pulses', 'value-add', 'grant'] },
  { id: 34, category: 'benefited', title: "Pulses FPO Development Scheme", icon: CheckCircle, eligibility: "FPOs registered under FSSAI.", benefits: "Support for cluster development and marketing.", statusDetail: "Benefited; ₹2.5 lakh support received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['pulses', 'fpo', 'cluster'] },
  { id: 35, category: 'new', title: "National Pulses Promotion Campaign", icon: TrendingUp, eligibility: "All pulses stakeholders.", benefits: "Subsidy for participation in promotional events and media campaigns.", statusDetail: "Campaign starts next quarter.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['pulses', 'promotion', 'campaign'] },
  { id: 36, category: 'eligible', title: "Pulses Storage & Logistics Support", icon: Zap, eligibility: "FPOs, cooperatives, and startups.", benefits: "Financial assistance for transport and warehouse setup.", statusDetail: "Pending warehouse document verification.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['pulses', 'logistics', 'subsidy'] },
  { id: 37, category: 'new', title: "Pulses Farmer Digital Platform", icon: Clock, eligibility: "Farmers and FPOs.", benefits: "Digital marketplace access and technical assistance.", statusDetail: "Platform launch in Jan 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['pulses', 'digital', 'platform'] },
  { id: 38, category: 'benefited', title: "Pulses Organic Input Subsidy", icon: DollarSign, eligibility: "Farmers adopting organic pulses farming.", benefits: "50% subsidy on organic fertilizers and inputs.", statusDetail: "Benefited FY 2024-25; ₹50,000 received.", color: 'bg-blue-100/70 text-blue-800 border-blue-400', tags: ['pulses', 'organic', 'input'] },
  { id: 39, category: 'eligible', title: "Pulses Export Subsidy Scheme", icon: Briefcase, eligibility: "FPOs and exporters.", benefits: "Reimbursement of export-related expenses.", statusDetail: "Eligible; submit export plan.", color: 'bg-green-100/70 text-green-800 border-green-400', tags: ['pulses', 'export', 'subsidy'] },
  { id: 40, category: 'new', title: "Pulses Innovation & Startup Grant", icon: TrendingUp, eligibility: "Startups working on pulses-based products.", benefits: "Grant for product innovation and pilot projects.", statusDetail: "Applications open till Mar 2026.", color: 'bg-yellow-100/70 text-yellow-800 border-yellow-400', tags: ['pulses', 'startup', 'innovation'] },
];

const categories = [
    { key: 'eligible', label: 'Schemes You Are Eligible For', icon: Shield, color: 'text-green-600' },
    { key: 'new', label: 'New Schemes & Policies', icon: TrendingUp, color: 'text-yellow-600' },
    { key: 'benefited', label: 'Enrolled In / Benefited By', icon: CheckCircle, color: 'text-blue-600' },
];

const SchemeCard = ({ scheme }) => {
    const Icon = scheme.icon;
    
    return (
        <article className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-[#547C3E] transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:border-[#013220]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold text-[#013220] leading-tight">{scheme.title}</h3>
                <Icon className="w-7 h-7 text-[#547C3E] flex-shrink-0" />
            </div>
            
            <div className="mb-3">
                <h4 className="text-sm font-bold text-[#547C3E] uppercase tracking-wider mb-1">Eligibility:</h4>
                <p className="text-sm text-[#013220]/80 leading-relaxed">{scheme.eligibility}</p>
            </div>

            <div className="mb-4">
                <h4 className="text-sm font-bold text-[#547C3E] uppercase tracking-wider mb-1">Key Benefits:</h4>
                <p className="text-sm font-semibold text-[#013220] leading-relaxed">{scheme.benefits}</p>
            </div>

            <div className={`mt-4 p-3 rounded-xl border-l-4 font-medium ${scheme.color}`}>
                <p className="text-xs font-bold uppercase mb-1">
                    {scheme.category === 'eligible' ? 'Status: Check Eligibility' : 
                     scheme.category === 'new' ? 'Action: View Details' : 'Status: Active'}
                </p>
                <p className="text-sm">{scheme.statusDetail}</p>
            </div>

            <button className="w-full mt-5 py-3 bg-[#B3CF8C] text-[#013220] font-bold rounded-xl hover:bg-[#547C3E] hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
            </button>
        </article>
    );
};

const SchemesAndPolicy = () => {
    const [activeTab, setActiveTab] = useState('eligible');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSchemes = useMemo(() => {
        let schemes = mockSchemes.filter(scheme => scheme.category === activeTab);
        
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            schemes = schemes.filter(scheme => 
                scheme.title.toLowerCase().includes(query) ||
                scheme.eligibility.toLowerCase().includes(query) ||
                scheme.benefits.toLowerCase().includes(query) ||
                scheme.tags.some(tag => tag.includes(query))
            );
        }
        
        return schemes;
    }, [activeTab, searchQuery]);

    const schemeCount = useMemo(() => {
        return {
            eligible: mockSchemes.filter(s => s.category === 'eligible').length,
            new: mockSchemes.filter(s => s.category === 'new').length,
            benefited: mockSchemes.filter(s => s.category === 'benefited').length,
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#FFFDA1] pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-[#013220] leading-tight">
                        Government Schemes & Policies Hub
                    </h1>
                    <p className="text-xl text-[#547C3E] mt-3 max-w-3xl mx-auto">
                        Your direct connection to subsidies, grants, and support for the millet value chain.
                    </p>
                </header>

                {/* Search Bar */}
                <div className="mb-8 max-w-2xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#547C3E]" />
                        <input
                            type="text"
                            placeholder="Search schemes by name, benefits, or keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 text-[#013220] bg-white rounded-xl shadow-lg border-2 border-[#B3CF8C] focus:outline-none focus:ring-4 focus:ring-[#547C3E]/30 focus:border-[#547C3E] transition-all duration-300"
                            aria-label="Search schemes"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#013220]/50 hover:text-[#547C3E] transition-colors"
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex  flex-wrap justify-between mb-10 p-2 px-4 bg-white rounded-xl shadow-lg border border-[#B3CF8C] gap-2">
                    {categories.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 border-b-4 ${
                                activeTab === tab.key
                                    ? 'bg-[#B3CF8C] text-[#013220] border-[#547C3E] shadow-inner scale-105'
                                    : 'bg-transparent text-[#013220]/70 border-transparent hover:bg-[#B3CF8C]/50 hover:scale-102'
                            }`}
                            aria-label={`View ${tab.label}`}
                            aria-pressed={activeTab === tab.key}
                        >
                            <tab.icon className={`w-5 h-5 mr-3 ${tab.color}`} />
                            <span className="hidden sm:inline">{tab.label}</span>
                            <span className="inline sm:hidden">{tab.label.split(' ')[0]}</span>
                            <span className="ml-2 px-2 py-0.5 bg-white rounded-full text-xs font-bold">
                                {schemeCount[tab.key]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Schemes Grid */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-6 border-b-2 border-[#547C3E] pb-2">
                        <h2 className="text-3xl font-extrabold text-[#013220]">
                            {categories.find(c => c.key === activeTab).label}
                        </h2>
                        <span className="text-sm font-semibold text-[#547C3E]">
                            {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {filteredSchemes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredSchemes.map(scheme => (
                                <SchemeCard key={scheme.id} scheme={scheme} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                            <Filter className="w-16 h-16 mx-auto text-[#B3CF8C] mb-4" />
                            <h3 className="text-2xl font-bold text-[#013220] mb-2">No schemes found</h3>
                            <p className="text-[#013220]/70">Try adjusting your search criteria</p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-4 px-6 py-2 bg-[#B3CF8C] text-[#013220] font-semibold rounded-lg hover:bg-[#547C3E] hover:text-white transition-colors"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center p-8 bg-[#B3CF8C] rounded-2xl shadow-xl border-4 border-[#547C3E]">
                    <h3 className="text-2xl font-bold text-[#013220] mb-3">Need help with applications?</h3>
                    <p className="text-lg text-[#013220]/90 mb-6 max-w-2xl mx-auto">
                        Use the <strong>AI Chatbot</strong> to find exact eligibility criteria, required documents, and application links for any scheme listed above.
                    </p>
                    <a 
                        href="/ai" 
                        className="inline-flex items-center gap-2 px-8 py-3 text-lg font-bold text-white bg-[#547C3E] rounded-xl transition-all duration-300 shadow-xl hover:bg-[#013220] hover:shadow-2xl hover:scale-105 active:scale-95"
                    >
                        Go to AI Chatbot
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SchemesAndPolicy;