// src/pages/Marketplace.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, Droplet, DollarSign, LocateFixed, ShieldCheck, User, ShoppingCart } from 'lucide-react';

// --- MOCK DATA ---
const mockProducts = [
    { id: 1, name: "Finger Millet (Ragi)", type: "Millet", quantity: "500 kg", price: 35.50, location: "Pune, MH", grade: "AGMARK Standard", traceId: "RAGI-001", sellerType: "FPO", brandName: "Western Ghat Grains", isWholesale: true, aiPrice: 36.50, deliveryTime: "4-6 days", stock: 500, minOrder: 50, nutrinationalInfo: "High in Calcium and Fiber.", sellerContact: "fpo.west@connect.in" },
    { id: 2, name: "Toor Dal (Split Pigeon Pea)", type: "Pulses", quantity: "1000 kg", price: 85.00, location: "Mysore, KA", grade: "FSSAI Compliant", traceId: "TOOR-002", sellerType: "Startup", brandName: "Millet Munchies", isWholesale: false, aiPrice: 88.00, deliveryTime: "2-3 days", stock: 1000, minOrder: 1, nutrinationalInfo: "Rich source of protein.", sellerContact: "support@milletmunchies.com" },
    { id: 3, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "200 kg", price: 42.00, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "FOX-003", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true, aiPrice: 40.50, deliveryTime: "5-7 days", stock: 200, minOrder: 20, nutrinationalInfo: "Source of Iron and carbohydrates.", sellerContact: "shg.purna@connect.in" },
    { id: 4, name: "Lentil (Masoor)", type: "Pulses", quantity: "750 kg", price: 78.90, location: "Bhopal, MP", grade: "AGMARK Standard", traceId: "LENT-004", sellerType: "Farmer", brandName: null, isWholesale: true, aiPrice: 79.50, deliveryTime: "3-5 days", stock: 750, minOrder: 100, nutrinationalInfo: "Good source of protein.", sellerContact: "farmer.bhopal@connect.in" },
];

const Marketplace = () => {
    const [products, setProducts] = useState(mockProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cartCount] = useState(0);
    const navigate = useNavigate();

    const primaryText = 'text-[#013220]';
    const primaryAccent = 'text-[#547C3E]';
    const accentBackground = 'bg-[#B3CF8C]';
    const mainBackground = 'bg-[#FFFDA1]';

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = mockProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filtered);
    };

    const ProductCard = ({ product }) => (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#B3CF8C] transition-all duration-300 hover:shadow-2xl hover:border-[#547C3E]">
            <div className="flex justify-between items-start mb-3">
                <h3 className={`text-xl font-extrabold ${primaryText}`}>{product.name}</h3>
                <p className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${product.isWholesale ? `bg-[#547C3E] text-white` : `bg-[#FFFDA1] ${primaryAccent} border border-[#547C3E]`}`}>
                    {product.isWholesale ? 'Wholesale' : 'Retail'}
                </p>
            </div>

            <div className={`space-y-2 mb-4 ${primaryText} py-2 border-b border-[#B3CF8C]`}>
                <p className={`flex items-center text-2xl font-extrabold ${primaryAccent}`}>
                    <DollarSign className="w-6 h-6 mr-2" />
                    ₹{product.price.toFixed(2)} <span className="text-base font-semibold ml-1">/ kg</span>
                </p>
                <p className="flex items-center text-sm font-medium">
                    <Droplet className={`w-4 h-4 mr-2 ${primaryAccent}`} />
                    Stock: <span className="font-bold ml-1">{product.quantity}</span>
                </p>
            </div>

            <div className={`flex flex-col gap-2 text-sm ${primaryText} mb-4`}>
                <span className={`flex items-center font-bold px-3 py-1 rounded-md ${accentBackground}/80 ${primaryText}`}>
                    <ShieldCheck className={`w-4 h-4 mr-2 ${primaryAccent}`} /> 
                    Grade: <span className="ml-1 font-extrabold">{product.grade}</span>
                </span>
                <span className="flex items-center font-medium mt-1">
                    <User className={`w-4 h-4 mr-2 ${primaryAccent}`} /> 
                    Seller: <span className="ml-1 font-semibold">{product.sellerType}</span>
                </span>
                <span className="flex items-center font-medium">
                    <LocateFixed className={`w-4 h-4 mr-2 ${primaryAccent}`} />
                    Location: <span className="ml-1 font-semibold">{product.location.split(',')[0]}</span>
                </span>
            </div>
            
            {/* ✅ Updated Navigation */}
            <button 
                onClick={() => navigate(`/marketplace/${product.id}`, { state: product })}
                className="w-full mt-4 py-3 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-colors duration-300 shadow-lg"
            >
                View Details & Connect
            </button>
        </div>
    );

    return (
        <div className={`min-h-screen ${mainBackground} pt-10 pb-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="flex justify-between items-center mb-12">
                    <div className="text-left">
                        <h1 className={`text-4xl font-extrabold ${primaryText}`}>Digital Millet & Pulses Marketplace</h1>
                        <p className={`text-xl ${primaryAccent} mt-1`}>Source Verified, AI-Graded Shree Anna.</p>
                    </div>
                    <button className="relative p-3 rounded-full bg-white border border-[#547C3E] text-[#547C3E] shadow-md hover:bg-[#547C3E] hover:text-white transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </header>

                {/* Search bar and products remain same */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
