import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, DollarSign, BarChart3, Users, Leaf, Cpu, Globe, Zap, LocateFixed } from 'lucide-react';
// Import Recharts for data visualization
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Color Palette:
// Primary: #547C3E (Medium Green)
// Accent: #B3CF8C (Light Green)
// Background: #FFFDA1 (Light Yellow)
// Text: #013220 (Dark Green)

// --- Mock Data (Updated for Personalization) ---

const mockProfile = {
    userName: 'Savitri Devi',
    userRole: 'SHG Leader (Purna Shakti)',
    location: 'Pune, Maharashtra',
    description: 'Specializes in climate-resilient Finger Millet cultivation and value-added Ragi flour processing.',
    innovation: {
        title: 'New Bio-Enriched Ragi Flour',
        detail: 'Developed a new process using natural fermentation to enhance protein content by 15% in Ragi flour. Listed on the marketplace.',
        link: '#innovation-details'
    }
};

const dashboardNav = [
    { name: 'Overview', icon: LayoutDashboard, link: '#overview', active: true },
    { name: 'Your Gains', icon: DollarSign, link: '#sales' },
    { name: 'Your Contribution', icon: Leaf, link: '#production' },
    { name: 'AI Price Forecast', icon: TrendingUp, link: '#forecast' },
    { name: 'Policy Utilization', icon: Users, link: '#policy' },
];

const mockStats = [
    { title: 'Your Total Revenue (Gain)', value: '₹ 8,75,400', trend: '+18.5%', color: 'bg-[#547C3E]', icon: DollarSign, text: 'text-white' }, 
    { title: 'Millets Contributed (MT)', value: '145.2', trend: '+5.1%', color: 'bg-[#B3CF8C]', icon: Leaf, text: 'text-[#013220]' },
    { title: 'AI Price Accuracy', value: '92%', trend: 'Avg. Forecast', color: 'bg-[#FFFDA1]', icon: Cpu, text: 'text-[#013220]' },
    { title: 'Connected Buyers', value: '34', trend: 'New This Q', color: 'bg-white', icon: Users, text: 'text-[#013220]' },
];

const mockInsights = [
    { title: 'Q4 Sales Forecast', detail: 'Demand for Ragi and Bajra projected to increase by 25% in the South Indian market.', status: 'Actionable', icon: TrendingUp },
    { title: 'Subsidy Deadline Alert', detail: 'PM-FME application window closes in 15 days. Complete your profile documentation now.', status: 'Urgent', icon: Users },
];

// Mock data for Recharts (Last 12 months Price per Kg)
const mockPriceData = [
    { month: 'Jan', Ragi: 28, Bajra: 21 },
    { month: 'Feb', Ragi: 29, Bajra: 20 },
    { month: 'Mar', Ragi: 30, Bajra: 22 },
    { month: 'Apr', Ragi: 32, Bajra: 25 },
    { month: 'May', Ragi: 31, Bajra: 24 },
    { month: 'Jun', Ragi: 34, Bajra: 26 },
    { month: 'Jul', Ragi: 33, Bajra: 27 },
    { month: 'Aug', Ragi: 35, Bajra: 28 },
    { month: 'Sep', Ragi: 36, Bajra: 29 },
    { month: 'Oct', Ragi: 38, Bajra: 31 },
    { month: 'Nov', Ragi: 37, Bajra: 30 },
    { month: 'Dec', Ragi: 39, Bajra: 32 },
];


// --- Reusable Components ---

const ProfileHeader = ({ profile }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl border-l-8 border-[#547C3E] mb-10">
        <div className="flex items-center space-x-5">
            <div className="flex-shrink-0 w-16 h-16 bg-[#B3CF8C] rounded-full flex items-center justify-center text-[#013220] text-3xl font-bold border-2 border-[#547C3E]">
                {profile.userName.charAt(0)}
            </div>
            <div>
                <h2 className="text-2xl font-extrabold text-[#013220]">{profile.userName}</h2>
                <p className="text-base text-[#547C3E] font-semibold uppercase tracking-wider">{profile.userRole}</p>
                <p className="text-sm text-[#013220]/70">{profile.location} | {profile.description}</p>
            </div>
        </div>
    </div>
);

const StatCard = ({ stat }) => (
    <div 
        className={`${stat.color} ${stat.text} p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] border-b-4 border-r-4 ${stat.color === 'bg-white' ? 'border-[#B3CF8C]' : 'border-[#013220]/20'}`}
    >
        <div className="flex items-center justify-between mb-4">
            <stat.icon className={`w-8 h-8 ${stat.color === 'bg-[#547C3E]' ? 'text-white' : 'text-[#547C3E]'}`} />
            <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{stat.title}</span>
        </div>
        <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
        <p className={`text-sm font-medium ${stat.color === 'bg-[#547C3E]' ? 'text-white/80' : 'text-[#547C3E]'}`}>
            {stat.trend}
        </p>
    </div>
);

const InsightCard = ({ insight }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#547C3E]">
        <div className="flex items-start">
            <insight.icon className="w-6 h-6 text-[#547C3E] mr-3 mt-1 flex-shrink-0" />
            <div>
                <h3 className="text-lg font-bold text-[#013220] mb-1">{insight.title}</h3>
                <p className="text-sm text-[#013220]/80">{insight.detail}</p>
            </div>
            <span className={`ml-auto text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${insight.status === 'Urgent' ? 'bg-red-200 text-red-800' : 'bg-[#B3CF8C] text-[#013220]'}`}>
                {insight.status}
            </span>
        </div>
    </div>
);

// --- Main Component ---

const AnalyticsDashboard = () => {
    const [currentView, setCurrentView] = useState('Overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#FFFDA1] flex">
            
            {/* Mobile Sidebar Toggle Button */}
            <button 
                className="lg:hidden fixed bottom-6 right-6 z-40 p-3 bg-[#547C3E] text-white rounded-full shadow-2xl hover:bg-[#013220] transition-colors duration-300"
                onClick={toggleSidebar}
            >
                <LayoutDashboard className="w-6 h-6" />
            </button>

            {/* Sidebar (Fixed on Desktop, Modal on Mobile) */}
            <aside 
                className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-2xl lg:shadow-none p-6 pt-20 lg:pt-6 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <h2 className="text-2xl font-extrabold text-[#013220] mb-8 border-b border-[#B3CF8C] pb-2">
                    ShreeConnect
                </h2>
                
                <nav className="space-y-2">
                    {dashboardNav.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className={`flex items-center p-3 rounded-xl transition-colors duration-200 ${item.name === currentView ? 'bg-[#B3CF8C] text-[#013220] font-bold shadow-md' : 'text-[#013220]/80 hover:bg-[#B3CF8C]/50'}`}
                            onClick={() => {
                                setCurrentView(item.name);
                                setIsSidebarOpen(false); // Close on selection in mobile
                            }}
                        >
                            <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                            {item.name}
                        </a>
                    ))}
                </nav>
                
                <div className="mt-12 pt-6 border-t border-[#B3CF8C]">
                    <h3 className="text-sm font-bold text-[#547C3E] uppercase tracking-wider mb-3">Role Selector (Mock)</h3>
                    <button className="flex items-center w-full p-3 rounded-xl bg-[#547C3E] text-white font-semibold hover:bg-[#013220] transition-colors duration-200">
                        <Users className="w-5 h-5 mr-3" />
                        Switch to Processor 
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-8 lg:p-10">
                <h1 className="text-4xl font-extrabold text-[#013220] mb-6">
                    {currentView}
                </h1>
                
                {/* User Profile Header */}
                <ProfileHeader profile={mockProfile} />

                {/* 1. Contribution & Gain (Statistics Cards) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#013220] mb-6 border-b border-[#B3CF8C] pb-2">
                        Your Contribution & Gains
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockStats.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                </section>
                
                {/* 2. Innovation Highlight (New Section) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#013220] mb-6 border-b border-[#B3CF8C] pb-2">
                        Your Innovation in Millets
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#B3CF8C]">
                        <div className="flex items-start space-x-6">
                            <Zap className="w-10 h-10 text-[#547C3E] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-[#013220] mb-2">{mockProfile.innovation.title}</h3>
                                <p className="text-base text-[#013220]/80 mb-4">{mockProfile.innovation.detail}</p>
                                <a 
                                    href={mockProfile.innovation.link} 
                                    className="text-[#547C3E] font-semibold hover:underline flex items-center text-sm"
                                >
                                    View Innovation Profile &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Key Insights and Alerts */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#013220] mb-6 border-b border-[#B3CF8C] pb-2">
                        AI Insights & Alerts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockInsights.map((insight, index) => (
                            <InsightCard key={index} insight={insight} />
                        ))}
                    </div>
                </section>

                {/* 4. Price Trend Visualization (Recharts) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#013220] mb-6 border-b border-[#B3CF8C] pb-2">
                        Price Trend Visualization (Avg. Market Price per Kg)
                    </h2>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-[#B3CF8C] h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart 
                                data={mockPriceData} 
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#B3CF8C" />
                                <XAxis dataKey="month" stroke="#013220" />
                                <YAxis unit="₹" stroke="#013220" />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#FFFDA1', border: '1px solid #547C3E', borderRadius: '8px' }}
                                    labelStyle={{ color: '#013220', fontWeight: 'bold' }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="Ragi" 
                                    stroke="#547C3E" 
                                    activeDot={{ r: 8 }} 
                                    strokeWidth={3}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="Bajra" 
                                    stroke="#B3CF8C" 
                                    activeDot={{ r: 8 }} 
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </section>
                
                {/* 5. Regional Demand Heatmap (Mock Google Maps API) */}
                <section>
                    <h2 className="text-2xl font-bold text-[#013220] mb-6 border-b border-[#B3CF8C] pb-2">
                        Regional Demand Heatmap (Next Quarter)
                    </h2>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-[#B3CF8C] h-96 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-300 opacity-50 flex items-center justify-center">
                            {/* Mock Map Background - A stylized representation of a regional map */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 opacity-70"></div>
                        </div>
                        
                        {/* Mock Heatmap Hotspots */}
                        <div className="absolute inset-0 z-10 p-10 flex flex-col justify-around">
                            <MapHotspot location="Mumbai (High Demand)" color="bg-red-500" top="10%" left="30%" />
                            <MapHotspot location="Bengaluru (Medium Demand)" color="bg-yellow-500" top="60%" right="20%" />
                            <MapHotspot location="Delhi (Low Demand)" color="bg-green-500" bottom="15%" left="50%" />
                        </div>

                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4 bg-[#FFFDA1]/70 rounded-xl border border-[#547C3E] shadow-lg">
                            <LocateFixed className="w-12 h-12 text-[#547C3E] mb-3" />
                            <p className="text-xl font-bold text-[#013220]">
                                Dynamic Regional Demand Map
                            </p>
                            <p className="text-sm text-[#013220]/80 mt-2">
                                Data is simulated. In the production app, this visualization uses the Google Maps API to display real-time buyer locations and demand hotspots.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

// Simple Component to render the mock hotspots on the map
const MapHotspot = ({ location, color, top, left, right, bottom }) => (
    <div 
        className={`absolute ${top} ${left} ${right} ${bottom} w-4 h-4 rounded-full ${color} animate-pulse shadow-2xl transition-all duration-300 transform hover:scale-[2.0]`}
        title={location}
    ></div>
);


export default AnalyticsDashboard;
