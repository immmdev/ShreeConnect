import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, Droplet, DollarSign, LocateFixed, ShieldCheck, User, ShoppingCart, TrendingUp, Award, Clock } from 'lucide-react';

// --- MOCK DATA ---
const mockProducts = [
    { id: 1, name: "Finger Millet (Ragi)", type: "Millet", quantity: "500 kg", price: 35.50, location: "Pune, MH", grade: "AGMARK Standard", traceId: "RAGI-001", sellerType: "FPO", brandName: "Western Ghat Grains", isWholesale: true, aiPrice: 36.50, deliveryTime: "4-6 days", stock: 500, minOrder: 50, nutritionalInfo: "Per 100g: Protein 7.3g, Fat 1.3g, Fiber 3.6g, Calcium 344mg, Iron 3.9mg", sellerContact: "fpo.west@connect.in" },
  { id: 2, name: "Toor Dal (Split Pigeon Pea)", type: "Pulses", quantity: "1000 kg", price: 85.00, location: "Mysore, KA", grade: "FSSAI Compliant", traceId: "TOOR-002", sellerType: "Startup", brandName: "Millet Munchies", isWholesale: false, aiPrice: 88.00, deliveryTime: "2-3 days", stock: 1000, minOrder: 1, nutritionalInfo: "Per 100g: Protein 22g, Fat 1.7g, Fiber 6g, Iron 2.7mg, Carbs 62g", sellerContact: "support@milletmunchies.com" },
  { id: 3, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "200 kg", price: 42.00, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "FOX-003", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true, aiPrice: 40.50, deliveryTime: "5-7 days", stock: 200, minOrder: 20, nutritionalInfo: "Per 100g: Protein 12.3g, Fat 4g, Fiber 8g, Iron 2.8mg, Carbs 60g", sellerContact: "shg.purna@connect.in" },
  { id: 4, name: "Lentil (Masoor)", type: "Pulses", quantity: "750 kg", price: 78.90, location: "Bhopal, MP", grade: "AGMARK Standard", traceId: "LENT-004", sellerType: "Farmer", brandName: "Rural Fresh", isWholesale: true, aiPrice: 79.50, deliveryTime: "3-5 days", stock: 750, minOrder: 100, nutritionalInfo: "Per 100g: Protein 25g, Fat 1.1g, Fiber 11g, Iron 3.3mg, Carbs 60g", sellerContact: "farmer.bhopal@connect.in" },
  { id: 5, name: "Pearl Millet (Bajra)", type: "Millet", quantity: "600 kg", price: 38.00, location: "Jaipur, RJ", grade: "AGMARK Standard", traceId: "BAJRA-005", sellerType: "FPO", brandName: "Desert Grains Co.", isWholesale: true, aiPrice: 39.00, deliveryTime: "3-5 days", stock: 600, minOrder: 50, nutritionalInfo: "Per 100g: Protein 11.8g, Fat 5g, Fiber 8.5g, Iron 8mg, Carbs 61g", sellerContact: "fpo.desert@connect.in" },
  { id: 6, name: "Moong Dal (Green Gram)", type: "Pulses", quantity: "800 kg", price: 92.00, location: "Indore, MP", grade: "FSSAI Compliant", traceId: "MOONG-006", sellerType: "Startup", brandName: "Green Valley Foods", isWholesale: false, aiPrice: 94.50, deliveryTime: "2-4 days", stock: 800, minOrder: 1, nutritionalInfo: "Per 100g: Protein 24g, Fat 1.2g, Fiber 8g, Iron 3.5mg, Carbs 63g", sellerContact: "support@greenvalley.com" },
  { id: 7, name: "Barnyard Millet (Sanwa)", type: "Millet", quantity: "300 kg", price: 46.00, location: "Varanasi, UP", grade: "Organic Certified", traceId: "BARN-007", sellerType: "FPO", brandName: "Kashi Naturals", isWholesale: true, aiPrice: 47.20, deliveryTime: "4-6 days", stock: 300, minOrder: 30, nutritionalInfo: "Per 100g: Protein 11.2g, Fat 3.9g, Fiber 10g, Iron 18mg, Carbs 65g", sellerContact: "info@kashinaturals.in" },
  { id: 8, name: "Black Gram (Urad Dal)", type: "Pulses", quantity: "900 kg", price: 95.00, location: "Nagpur, MH", grade: "AGMARK Standard", traceId: "URAD-008", sellerType: "Farmer", brandName: "AgriPure", isWholesale: true, aiPrice: 96.50, deliveryTime: "3-5 days", stock: 900, minOrder: 50, nutritionalInfo: "Per 100g: Protein 24g, Fat 1.6g, Fiber 7g, Iron 4.4mg, Carbs 59g", sellerContact: "agripure.nagpur@connect.in" },
  { id: 9, name: "Little Millet (Kutki)", type: "Millet", quantity: "250 kg", price: 40.00, location: "Raipur, CG", grade: "Organic Certified", traceId: "KUTK-009", sellerType: "SHG", brandName: "Tribal Roots", isWholesale: true, aiPrice: 41.00, deliveryTime: "5-7 days", stock: 250, minOrder: 25, nutritionalInfo: "Per 100g: Protein 9.7g, Fat 4.5g, Fiber 7.6g, Iron 9.3mg, Carbs 67g", sellerContact: "roots.tribal@connect.in" },
  { id: 10, name: "Chickpeas (Chana)", type: "Pulses", quantity: "1000 kg", price: 82.00, location: "Kota, RJ", grade: "FSSAI Compliant", traceId: "CHANA-010", sellerType: "Startup", brandName: "NutriPulse Foods", isWholesale: false, aiPrice: 84.00, deliveryTime: "2-4 days", stock: 1000, minOrder: 5, nutritionalInfo: "Per 100g: Protein 19g, Fat 6g, Fiber 12g, Iron 4.3mg, Carbs 61g", sellerContact: "support@nutripulse.in" },
  { id: 11, name: "Kodo Millet", type: "Millet", quantity: "400 kg", price: 44.00, location: "Satna, MP", grade: "Organic Certified", traceId: "KODO-011", sellerType: "FPO", brandName: "Bundelkhand Organics", isWholesale: true, aiPrice: 45.20, deliveryTime: "3-5 days", stock: 400, minOrder: 40, nutritionalInfo: "Per 100g: Protein 8.3g, Fat 3.6g, Fiber 9g, Iron 1.7mg, Carbs 66g", sellerContact: "fpo.bundel@connect.in" },
  { id: 12, name: "Black Lentil (Whole Urad)", type: "Pulses", quantity: "600 kg", price: 89.00, location: "Lucknow, UP", grade: "AGMARK Standard", traceId: "URADW-012", sellerType: "Farmer", brandName: "Rural Choice", isWholesale: true, aiPrice: 90.00, deliveryTime: "3-5 days", stock: 600, minOrder: 50, nutritionalInfo: "Per 100g: Protein 25g, Fat 1.4g, Fiber 10g, Iron 4.8mg, Carbs 59g", sellerContact: "rural.choice@connect.in" },
  { id: 13, name: "Proso Millet (Chena)", type: "Millet", quantity: "350 kg", price: 39.00, location: "Bhubaneswar, OD", grade: "Organic Certified", traceId: "CHEN-013", sellerType: "SHG", brandName: "GramSakhi", isWholesale: true, aiPrice: 40.00, deliveryTime: "5-7 days", stock: 350, minOrder: 30, nutritionalInfo: "Per 100g: Protein 12.5g, Fat 4g, Fiber 7g, Iron 2.9mg, Carbs 70g", sellerContact: "info@gramsakhi.in" },
  { id: 14, name: "Kidney Beans (Rajma)", type: "Pulses", quantity: "700 kg", price: 98.00, location: "Dehradun, UK", grade: "FSSAI Compliant", traceId: "RAJMA-014", sellerType: "Startup", brandName: "Himalayan Harvest", isWholesale: false, aiPrice: 100.00, deliveryTime: "2-4 days", stock: 700, minOrder: 5, nutritionalInfo: "Per 100g: Protein 24g, Fat 1.1g, Fiber 13g, Iron 5.1mg, Carbs 60g", sellerContact: "info@himalayanharvest.in" },
  { id: 15, name: "Sorghum (Jowar)", type: "Millet", quantity: "900 kg", price: 34.00, location: "Aurangabad, MH", grade: "AGMARK Standard", traceId: "JOWAR-015", sellerType: "Farmer", brandName: "AgriSoul", isWholesale: true, aiPrice: 35.00, deliveryTime: "4-6 days", stock: 900, minOrder: 100, nutritionalInfo: "Per 100g: Protein 10.4g, Fat 3g, Fiber 6.7g, Iron 4.1mg, Carbs 72g", sellerContact: "agrisoul.aurangabad@connect.in" },
  { id: 16, name: "Horse Gram (Kulthi)", type: "Pulses", quantity: "400 kg", price: 68.00, location: "Hassan, KA", grade: "FSSAI Compliant", traceId: "KULTHI-016", sellerType: "FPO", brandName: "Malnad Naturals", isWholesale: true, aiPrice: 70.00, deliveryTime: "3-5 days", stock: 400, minOrder: 50, nutritionalInfo: "Per 100g: Protein 22g, Fat 0.5g, Fiber 5g, Iron 7.6mg, Carbs 60g", sellerContact: "malnad.fpo@connect.in" },
  { id: 17, name: "Ridge Gourd Millet Mix", type: "Millet", quantity: "150 kg", price: 50.00, location: "Coimbatore, TN", grade: "Organic Certified", traceId: "RGMM-017", sellerType: "SHG", brandName: "Annapurna Mixes", isWholesale: true, aiPrice: 51.00, deliveryTime: "5-7 days", stock: 150, minOrder: 20, nutritionalInfo: "Per 100g: Protein 10g, Fat 3g, Fiber 9g, Iron 2.3mg, Carbs 65g", sellerContact: "annapurna@connect.in" },
  { id: 18, name: "Masoor Malka (Red Lentil Split)", type: "Pulses", quantity: "850 kg", price: 84.00, location: "Patna, BR", grade: "FSSAI Compliant", traceId: "MMLK-018", sellerType: "Startup", brandName: "Bihar Agro Foods", isWholesale: false, aiPrice: 85.00, deliveryTime: "2-3 days", stock: 850, minOrder: 5, nutritionalInfo: "Per 100g: Protein 25.1g, Fat 1.3g, Fiber 10g, Iron 3.5mg, Carbs 61g", sellerContact: "info@biharagrofoods.in" },
  { id: 19, name: "Brown Top Millet", type: "Millet", quantity: "220 kg", price: 43.00, location: "Chitradurga, KA", grade: "Organic Certified", traceId: "BTOP-019", sellerType: "FPO", brandName: "EcoGrain Farms", isWholesale: true, aiPrice: 44.20, deliveryTime: "4-6 days", stock: 220, minOrder: 25, nutritionalInfo: "Per 100g: Protein 11g, Fat 3.5g, Fiber 8g, Iron 3.2mg, Carbs 68g", sellerContact: "ecograin@connect.in" },
  { id: 20, name: "Bengal Gram (Chana Dal)", type: "Pulses", quantity: "950 kg", price: 88.00, location: "Kanpur, UP", grade: "AGMARK Standard", traceId: "CHDAL-020", sellerType: "Farmer", brandName: "PureHarvest", isWholesale: true, aiPrice: 89.00, deliveryTime: "3-5 days", stock: 950, minOrder: 100, nutritionalInfo: "Per 100g: Protein 20g, Fat 5g, Fiber 10g, Iron 2.8mg, Carbs 65g", sellerContact: "pureharvest.up@connect.in" }
];

const Marketplace = () => {
    const [products, setProducts] = useState(mockProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cartCount] = useState(0);
    const [selectedType, setSelectedType] = useState('All');
    const [selectedSeller, setSelectedSeller] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [sortBy, setSortBy] = useState('name');
    const navigate = useNavigate();

    const primaryText = 'text-[#013220]';
    const primaryAccent = 'text-[#547C3E]';
    const accentBackground = 'bg-[#B3CF8C]';
    const mainBackground = 'bg-[#FFFDA1]';

    const applyFilters = () => {
        let filtered = mockProducts.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.type.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'All' || p.type === selectedType;
            const matchesSeller = selectedSeller === 'All' || p.sellerType === selectedSeller;
            const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
            return matchesSearch && matchesType && matchesSeller && matchesPrice;
        });

        // Sort products
        filtered.sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'stock') return b.stock - a.stock;
            return a.name.localeCompare(b.name);
        });

        setProducts(filtered);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedType('All');
        setSelectedSeller('All');
        setPriceRange([0, 100]);
        setSortBy('name');
        setProducts(mockProducts);
    };

    React.useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedType, selectedSeller, priceRange, sortBy]);

    const ProductCard = ({ product }) => (
        <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-[#B3CF8C] transition-all duration-300 hover:shadow-2xl hover:border-[#547C3E] hover:-translate-y-1">
            {/* Product Header */}
            <div className="flex justify-between items-start mb-3">
                <h3 className={`text-xl font-extrabold ${primaryText} line-clamp-2`}>{product.name}</h3>
                <div className="flex flex-col gap-1">
                    <p className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${product.isWholesale ? `bg-[#547C3E] text-white` : `bg-[#FFFDA1] ${primaryAccent} border border-[#547C3E]`}`}>
                        {product.isWholesale ? 'Wholesale' : 'Retail'}
                    </p>
                </div>
            </div>

            {/* Brand Badge */}
            {product.brandName && (
                <div className={`mb-3 flex items-center gap-2 ${primaryAccent}`}>
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">{product.brandName}</span>
                </div>
            )}

            {/* Price Section */}
            <div className={`space-y-2 mb-4 ${primaryText} py-3 border-y-2 border-[#B3CF8C]`}>
                <p className={`flex items-center text-3xl font-extrabold ${primaryAccent}`}>
                    <DollarSign className="w-7 h-7 mr-2" />
                    ₹{product.price.toFixed(2)} <span className="text-base font-semibold ml-1">/ kg</span>
                </p>
                <div className="flex justify-between items-center">
                    <p className="flex items-center text-sm font-medium">
                        <Droplet className={`w-4 h-4 mr-2 ${primaryAccent}`} />
                        Stock: <span className="font-bold ml-1">{product.stock} kg</span>
                    </p>
                    <p className="flex items-center text-sm font-medium">
                        <Clock className={`w-4 h-4 mr-2 ${primaryAccent}`} />
                        <span className="font-bold">{product.deliveryTime}</span>
                    </p>
                </div>
            </div>

            {/* Product Details */}
            <div className={`flex flex-col gap-2 text-sm ${primaryText} mb-4`}>
                <span className={`flex items-center font-bold px-3 py-2 rounded-lg ${accentBackground}/80 ${primaryText}`}>
                    <ShieldCheck className={`w-4 h-4 mr-2 ${primaryAccent}`} /> 
                    Grade: <span className="ml-1 font-extrabold">{product.grade}</span>
                </span>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <span className="flex items-center font-medium">
                        <User className={`w-4 h-4 mr-2 ${primaryAccent}`} /> 
                        <span className="text-xs">{product.sellerType}</span>
                    </span>
                    <span className="flex items-center font-medium">
                        <LocateFixed className={`w-4 h-4 mr-2 ${primaryAccent}`} />
                        <span className="text-xs">{product.location.split(',')[0]}</span>
                    </span>
                </div>
                <div className={`mt-2 px-3 py-2 ${accentBackground}/40 rounded-lg`}>
                    <p className="text-xs font-medium">Min Order: <span className="font-bold">{product.minOrder} kg</span></p>
                </div>
            </div>

            {/* AI Price Indicator */}
            {product.aiPrice !== product.price && (
                <div className={`mb-3 flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50 border border-blue-200`}>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-600">AI Market Price</span>
                    </div>
                    <span className="text-sm font-bold text-blue-700">₹{product.aiPrice.toFixed(2)}/kg</span>
                </div>
            )}
            
            {/* Action Button */}
            <button 
                onClick={() => navigate(`/marketplace/${product.id}`, { state: product })}
                className="w-full mt-4 py-3 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                View Details & Connect
            </button>
        </div>
    );

    return (
        <div className={`min-h-screen ${mainBackground} pt-10 pb-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-left">
                            <h1 className={`text-4xl lg:text-5xl font-extrabold ${primaryText}`}>Digital Millet & Pulses Marketplace</h1>
                            <p className={`text-xl ${primaryAccent} mt-1`}>Source Verified, "Shree Anna" Brand.</p>
                        </div>
                        <button className="relative p-3 rounded-full bg-white border-2 border-[#547C3E] text-[#547C3E] shadow-lg hover:bg-[#547C3E] hover:text-white transition-all duration-300 hover:scale-110">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Enhanced Search Bar */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#B3CF8C]">
                        <div className="flex gap-4 items-center mb-4 flex-col sm:flex-row">
                            <div className="flex-1 w-full relative">
                                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${primaryAccent}`} />
                                <input
                                    type="text"
                                    placeholder="Search by product name, location, or type..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3 border-2 border-[#B3CF8C] rounded-xl focus:border-[#547C3E] focus:outline-none focus:ring-2 focus:ring-[#B3CF8C] ${primaryText} font-medium text-lg transition-all`}
                                />
                            </div>
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${isFilterOpen ? 'bg-[#547C3E] text-white shadow-lg' : 'bg-white border-2 border-[#547C3E] text-[#547C3E] hover:bg-[#B3CF8C]'}`}
                            >
                                <Filter className="w-5 h-5" />
                                Filters
                            </button>
                        </div>

                        {/* Filter Panel */}
                        {isFilterOpen && (
                            <div className={`border-t-2 border-[#B3CF8C] pt-4 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 animate-fadeIn`}>
                                <div>
                                    <label className={`block text-sm font-bold ${primaryText} mb-2`}>Product Type</label>
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className={`w-full px-3 py-2 border-2 border-[#B3CF8C] rounded-lg focus:border-[#547C3E] focus:outline-none ${primaryText} font-medium`}
                                    >
                                        <option value="All">All Types</option>
                                        <option value="Millet">Millet</option>
                                        <option value="Pulses">Pulses</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={`block text-sm font-bold ${primaryText} mb-2`}>Seller Type</label>
                                    <select
                                        value={selectedSeller}
                                        onChange={(e) => setSelectedSeller(e.target.value)}
                                        className={`w-full px-3 py-2 border-2 border-[#B3CF8C] rounded-lg focus:border-[#547C3E] focus:outline-none ${primaryText} font-medium`}
                                    >
                                        <option value="All">All Sellers</option>
                                        <option value="FPO">FPO</option>
                                        <option value="Startup">Startup</option>
                                        <option value="SHG">SHG</option>
                                        <option value="Farmer">Farmer</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={`block text-sm font-bold ${primaryText} mb-2`}>Sort By</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className={`w-full px-3 py-2 border-2 border-[#B3CF8C] rounded-lg focus:border-[#547C3E] focus:outline-none ${primaryText} font-medium`}
                                    >
                                        <option value="name">Name (A-Z)</option>
                                        <option value="price-low">Price (Low to High)</option>
                                        <option value="price-high">Price (High to Low)</option>
                                        <option value="stock">Stock (High to Low)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={`block text-sm font-bold ${primaryText} mb-2`}>Price Range (₹/kg)</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                            className={`w-20 px-2 py-2 border-2 border-[#B3CF8C] rounded-lg focus:border-[#547C3E] focus:outline-none ${primaryText} font-medium`}
                                            placeholder="Min"
                                        />
                                        <span className={`${primaryText} font-bold`}>-</span>
                                        <input
                                            type="number"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                            className={`w-20 px-2 py-2 border-2 border-[#B3CF8C] rounded-lg focus:border-[#547C3E] focus:outline-none ${primaryText} font-medium`}
                                            placeholder="Max"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-4 flex justify-end">
                                    <button
                                        onClick={resetFilters}
                                        className={`px-6 py-2 rounded-lg font-bold border-2 border-[#547C3E] ${primaryAccent} hover:bg-[#B3CF8C] transition-all duration-300`}
                                    >
                                        Reset All Filters
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Results Count */}
                        <div className={`mt-4 flex justify-between items-center ${primaryText} flex-wrap gap-2`}>
                            <p className="font-semibold">
                                Showing <span className="font-extrabold text-[#547C3E] text-lg">{products.length}</span> of {mockProducts.length} products
                            </p>
                            {products.length === 0 && (
                                <p className="text-red-600 font-semibold">No products found. Try adjusting your filters.</p>
                            )}
                        </div>
                    </div>
                </header>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className={`inline-block p-8 rounded-2xl bg-white border-2 border-[#B3CF8C] shadow-xl`}>
                            <Search className={`w-16 h-16 mx-auto mb-4 ${primaryAccent}`} />
                            <h3 className={`text-2xl font-bold ${primaryText} mb-2`}>No Products Found</h3>
                            <p className={`${primaryAccent} mb-4`}>Try adjusting your search or filters</p>
                            <button
                                onClick={resetFilters}
                                className="px-6 py-3 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;