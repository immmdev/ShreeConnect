// src/pages/Community.jsx
import React, { useState, useMemo } from 'react';
import { Users, TrendingUp, MessageCircle, ThumbsUp, Eye, Search, Plus, Award, Bookmark, Layers, Factory, Zap } from 'lucide-react';

// --- MOCK DATA ---
// NOTE: Emojis are replaced with Lucide icons or standardized avatars where appropriate
const mockPosts = [
    {
        id: 1,
        category: 'farmer',
        author: 'Ramesh Kumar',
        authorType: 'Farmer',
        location: 'Madhya Pradesh',
        avatar: 'user', // Standardized avatar representation
        title: 'Best practices for Ragi cultivation in monsoon season',
        content: 'I have been growing Ragi for 5 years now. Here are my key learnings about monsoon cultivation that increased my yield by 40%...',
        tags: ['ragi', 'cultivation', 'monsoon', 'best-practices'],
        likes: 145,
        replies: 23,
        views: 890,
        timestamp: '2 hours ago',
        isTrending: true,
        isVerified: true
    },
    {
        id: 2,
        category: 'shg',
        author: 'Lakshmi SHG Group',
        authorType: 'SHG',
        location: 'Karnataka',
        avatar: 'group',
        title: 'How we increased our millet product sales by 200% through digital marketing',
        content: 'Our SHG successfully leveraged social media and e-commerce platforms. Here\'s our complete journey and strategies...',
        tags: ['marketing', 'sales', 'success-story', 'digital'],
        likes: 289,
        replies: 67,
        views: 1520,
        timestamp: '5 hours ago',
        isTrending: true,
        isVerified: true
    },
    {
        id: 3,
        category: 'fpo',
        author: 'Green Valley FPO',
        authorType: 'FPO',
        location: 'Uttar Pradesh',
        avatar: 'org',
        title: 'Seeking collaboration: Export quality Bajra procurement for 2025',
        content: 'We are looking to partner with farmers for export-grade Bajra. We offer fair pricing, advance payment, and quality certification support...',
        tags: ['collaboration', 'bajra', 'export', 'procurement'],
        likes: 78,
        replies: 34,
        views: 456,
        timestamp: '1 day ago',
        isTrending: false,
        isVerified: true
    },
    {
        id: 4,
        category: 'startup',
        author: 'MilletWorks Innovation',
        authorType: 'Startup',
        location: 'Bangalore',
        avatar: 'startup',
        title: 'New millet-based protein bar recipe - Looking for feedback from processors',
        content: 'We have developed a high-protein millet bar formula. Seeking feedback on taste, packaging, and market positioning from experienced processors...',
        tags: ['innovation', 'product-development', 'feedback', 'protein'],
        likes: 156,
        replies: 45,
        views: 789,
        timestamp: '3 hours ago',
        isTrending: true,
        isVerified: false
    },
];

// Map categories to appropriate Lucide icons and colors
const categories = [
    { key: 'all', label: 'All Discussions', icon: Layers, color: 'text-[#013220]', bgColor: 'bg-[#B3CF8C]' },
    { key: 'farmer', label: 'Farmers Forum', icon: Users, color: 'text-[#013220]', bgColor: 'bg-green-100' },
    { key: 'shg', label: 'SHG Network', icon: Factory, color: 'text-[#013220]', bgColor: 'bg-purple-100' },
    { key: 'fpo', label: 'FPO Collaboration', icon: Award, color: 'text-[#013220]', bgColor: 'bg-blue-100' },
    { key: 'startup', label: 'Startup Hub', icon: Zap, color: 'text-[#013220]', bgColor: 'bg-orange-100' },
];

const getAvatarIcon = (avatarType) => {
    switch (avatarType) {
        case 'user': return <Users className="w-8 h-8 text-[#547C3E]" />;
        case 'group': return <Factory className="w-8 h-8 text-purple-600" />;
        case 'org': return <Award className="w-8 h-8 text-blue-600" />;
        case 'startup': return <Zap className="w-8 h-8 text-orange-600" />;
        default: return <Users className="w-8 h-8 text-[#547C3E]" />;
    }
}

// --- COMPONENT: PostCard ---
const PostCard = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [localLikes, setLocalLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLocalLikes(prev => prev - 1);
        } else {
            setLocalLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <article className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#547C3E] transition-all duration-300 hover:shadow-2xl hover:border-l-8 hover:scale-[1.01] cursor-pointer">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFDA1] mr-2">
                        {getAvatarIcon(post.avatar)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-[#013220]">{post.author}</h3>
                            {post.isVerified && (
                                <Award className="w-4 h-4 text-[#547C3E] fill-[#547C3E]" title="Verified User" />
                            )}
                        </div>
                        <p className="text-xs text-[#013220]/70">
                            {post.authorType} • {post.location}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {post.isTrending && (
                        <span className="px-3 py-1 bg-[#FFFDA1] text-[#547C3E] text-xs font-bold rounded-full flex items-center gap-1 border border-[#547C3E]">
                            <TrendingUp className="w-3 h-3 text-[#547C3E]" />
                            Trending
                        </span>
                    )}
                    <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className="p-2 rounded-lg transition-colors hover:bg-[#B3CF8C]/50"
                        aria-label="Bookmark post"
                    >
                        <Bookmark className={`w-5 h-5 transition-colors ${isBookmarked ? 'fill-[#547C3E] text-[#547C3E]' : 'text-[#013220]/40 hover:text-[#547C3E]'}`} />
                    </button>
                </div>
            </div>

            {/* Title & Content */}
            <h2 className="text-xl font-bold text-[#013220] mb-3 leading-tight hover:text-[#547C3E] transition-colors">
                {post.title}
            </h2>
            <p className="text-[#013220]/80 mb-4 leading-relaxed text-sm">
                {isExpanded ? post.content : `${post.content.substring(0, 150)}${post.content.length > 150 ? '...' : ''}`}
                {post.content.length > 150 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#547C3E] font-semibold ml-2 hover:underline text-xs"
                    >
                        {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                )}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 bg-[#B3CF8C]/50 text-[#013220] text-xs font-semibold rounded-full hover:bg-[#B3CF8C] transition-colors cursor-pointer"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Footer Stats & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#B3CF8C]">
                <div className="flex items-center gap-6 text-sm text-[#013220]/60">
                    <button
                        onClick={handleLike}
                        className="flex items-center gap-2 hover:text-[#547C3E] transition-colors group"
                    >
                        <ThumbsUp className={`w-4 h-4 transition-all ${isLiked ? 'fill-[#547C3E] text-[#547C3E] scale-110' : 'group-hover:scale-110'}`} />
                        <span className={isLiked ? 'text-[#547C3E] font-semibold' : ''}>{localLikes}</span>
                    </button>
                    <div className="flex items-center gap-2 hover:text-[#547C3E] transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                    </div>
                </div>
                <span className="text-xs text-[#013220]/50">{post.timestamp}</span>
            </div>
        </article>
    );
};

// --- PAGE: CommunityHub ---
const Community = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('trending');

    // Logic for filtering, searching, and sorting
    const filteredPosts = useMemo(() => {
        let posts = activeCategory === 'all'
            ? mockPosts
            : mockPosts.filter(post => post.category === activeCategory);

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            posts = posts.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.content.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.includes(query)) ||
                post.author.toLowerCase().includes(query)
            );
        }

        switch (sortBy) {
            case 'trending':
                posts = [...posts].sort((a, b) => {
                    if (a.isTrending && !b.isTrending) return -1;
                    if (!a.isTrending && b.isTrending) return 1;
                    return b.likes - a.likes;
                });
                break;
            case 'recent':
                // In a real app, you'd sort by a date object, but here we keep mock order
                break;
            case 'popular':
                posts = [...posts].sort((a, b) => b.likes - a.likes);
                break;
            default:
                break;
        }

        return posts;
    }, [activeCategory, searchQuery, sortBy]);

    const categoryStats = useMemo(() => {
        return categories.map(cat => ({
            ...cat,
            count: cat.key === 'all'
                ? mockPosts.length
                : mockPosts.filter(p => p.category === cat.key).length
        }));
    }, []);

    return (
        <div className="min-h-screen bg-[#FFFDA1] pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#013220] leading-tight mb-4">
                        ShreeConnect Community Hub
                    </h1>
                    <p className="text-lg text-[#013220]/80 max-w-3xl mx-auto">
                        Connect, collaborate, and grow with verified Farmers, SHGs, FPOs, and Startups across the millet ecosystem.
                    </p>
                </header>

                {/* Create Post Button */}
                <div className="mb-8 flex justify-center">
                    <button 
                        className="inline-flex items-center gap-3 px-8 py-3 bg-[#547C3E] text-white font-bold rounded-xl shadow-xl hover:bg-[#013220] transition-all duration-300 hover:scale-[1.03]"
                    >
                        <Plus className="w-5 h-5" />
                        Start a Discussion
                    </button>
                </div>

                {/* Search and Filter Bar */}
                <div className="mb-10 flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-lg border-2 border-[#B3CF8C]">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#547C3E]" />
                        <input
                            type="text"
                            placeholder="Search posts, tags, or users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 text-[#013220] rounded-lg border-2 border-[#B3CF8C] focus:outline-none focus:ring-4 focus:ring-[#547C3E] transition-all duration-300"
                        />
                    </div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-6 py-3 text-[#013220] font-semibold rounded-lg border-2 border-[#B3CF8C] focus:outline-none focus:ring-2 focus:ring-[#547C3E] transition-all cursor-pointer md:w-auto"
                    >
                        <option value="trending">Trending First</option>
                        <option value="recent">Most Recent</option>
                        <option value="popular">Most Popular</option>
                    </select>
                </div>

                {/* Category Tabs */}
                {/* Corrected: Added overflow-x-auto for better mobile handling of many tabs */}
                <div className="mb-10 flex overflow-x-auto justify-start md:justify-center gap-3 md:gap-4 pb-2">
                    {categoryStats.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.key;
                        return (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`flex items-center gap-2 px-4 py-2 flex-shrink-0 font-semibold rounded-full transition-all duration-300 ${
                                    isActive
                                        ? `bg-[#547C3E] text-white shadow-md scale-100`
                                        : 'bg-white text-[#013220]/70 hover:bg-[#B3CF8C]/50'
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                {cat.label}
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? 'bg-[#FFFDA1] text-[#547C3E]' : 'bg-[#B3CF8C] text-[#013220]'}`}>
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Posts Grid */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-[#013220]">
                            {activeCategory === 'all' ? 'All Posts' : categoryStats.find(c => c.key === activeCategory)?.label}
                        </h2>
                        <span className="text-sm font-semibold text-[#547C3E]">
                            {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredPosts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                            <MessageCircle className="w-16 h-16 mx-auto text-[#B3CF8C] mb-4" />
                            <h3 className="text-2xl font-bold text-[#013220] mb-2">No posts found</h3>
                            <p className="text-[#013220]/70 mb-4">Try adjusting your search or filters</p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="px-6 py-2 bg-[#B3CF8C] text-[#013220] font-semibold rounded-lg hover:bg-[#547C3E] hover:text-white transition-colors"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Community Guidelines CTA
                <div className="mt-16 p-8 bg-gradient-to-r from-[#B3CF8C] to-[#547C3E] rounded-2xl shadow-xl text-white">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Build a stronger millet community together</h3>
                            <p className="text-white/90">Share knowledge, ask questions, and collaborate with peers across India</p>
                        </div>
                        <button className="px-8 py-3 bg-white text-[#547C3E] font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300">
                            View Guidelines
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Community;