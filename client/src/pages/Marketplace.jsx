import React, { useState } from 'react';
import { Filter, Search, Grid, List, Droplet, Clock, DollarSign, LocateFixed, Zap, ShieldCheck, User, Store, Tag } from 'lucide-react';

// Color Palette:
// Primary: #547C3E (Medium Green)
// Accent: #B3CF8C (Light Green)
// Background: #FFFDA1 (Light Yellow)
// Text: #013220 (Dark Green)

const mockProducts = [
    { id: 1, name: "Finger Millet (Ragi)", type: "Millet", quantity: "500 kg", price: 35.50, location: "Pune, MH", grade: "AGMARK Standard", traceId: "RAGI-001", sellerType: "FPO", brandName: "Western Ghat Grains", isWholesale: true },
    { id: 2, name: "Toor Dal (Split Pigeon Pea)", type: "Pulses", quantity: "1000 kg", price: 85.00, location: "Mysore, KA", grade: "FSSAI Compliant", traceId: "TOOR-002", sellerType: "Startup", brandName: "Millet Munchies", isWholesale: false },
    { id: 3, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "200 kg", price: 42.00, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "FOX-003", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true },
    { id: 4, name: "Lentil (Masoor)", type: "Pulses", quantity: "750 kg", price: 78.90, location: "Bhopal, MP", grade: "AGMARK Standard", traceId: "LENT-004", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 5, name: "Little Millet (Kutki)", type: "Millet", quantity: "5 kg", price: 95.00, location: "Chennai, TN", grade: "FSSAI Compliant", traceId: "KUTKI-005", sellerType: "Startup", brandName: "Daily Shree Anna", isWholesale: false },
    { id: 6, name: "Barnyard Millet (Sanwa)", type: "Millet", quantity: "50 kg", price: 60.00, location: "Nagpur, MH", grade: "Organic Certified", traceId: "BARN-006", sellerType: "FPO", brandName: "Green Harvest", isWholesale: true },
    { id: 7, name: "Chickpea (Kabuli Chana)", type: "Pulses", quantity: "500 kg", price: 70.00, location: "Jaipur, RJ", grade: "FSSAI Compliant", traceId: "CHICK-007", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 8, name: "Kodo Millet (Kodri)", type: "Millet", quantity: "100 kg", price: 55.50, location: "Raipur, CG", grade: "AGMARK Standard", traceId: "KODO-008", sellerType: "SHG", brandName: "Satvik Organics", isWholesale: true },
    { id: 9, name: "Green Gram (Moong Dal)", type: "Pulses", quantity: "800 kg", price: 90.00, location: "Surat, GJ", grade: "FSSAI Compliant", traceId: "MOONG-009", sellerType: "Startup", brandName: "Dal Delight", isWholesale: false },
    { id: 10, name: "Proso Millet (Chena)", type: "Millet", quantity: "60 kg", price: 65.00, location: "Bhubaneswar, OD", grade: "Organic Certified", traceId: "PROSO-010", sellerType: "FPO", brandName: "Healthy Grains Co.", isWholesale: true },
    { id: 11, name: "Black Gram (Urad Dal)", type: "Pulses", quantity: "400 kg", price: 82.00, location: "Hyderabad, TS", grade: "AGMARK Standard", traceId: "URAD-011", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 12, name: "Pearl Millet (Bajra)", type: "Millet", quantity: "1200 kg", price: 30.00, location: "Indore, MP", grade: "FSSAI Compliant", traceId: "BAJRA-012", sellerType: "FPO", brandName: "Bajra Pride", isWholesale: true },
    { id: 13, name: "Sorghum (Jowar)", type: "Millet", quantity: "900 kg", price: 28.50, location: "Solapur, MH", grade: "AGMARK Standard", traceId: "JOWAR-013", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 14, name: "Red Lentil (Masoor Dal)", type: "Pulses", quantity: "300 kg", price: 95.00, location: "Lucknow, UP", grade: "Organic Certified", traceId: "REDL-014", sellerType: "Startup", brandName: "Dal Factory", isWholesale: false },
    { id: 15, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "180 kg", price: 43.00, location: "Nagpur, MH", grade: "FSSAI Compliant", traceId: "FOX-015", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true },
    { id: 16, name: "Split Pigeon Pea (Toor Dal)", type: "Pulses", quantity: "600 kg", price: 87.50, location: "Bangalore, KA", grade: "AGMARK Standard", traceId: "TOOR-016", sellerType: "FPO", brandName: "Millet Munchies", isWholesale: true },
    { id: 17, name: "Little Millet (Kutki)", type: "Millet", quantity: "8 kg", price: 100.00, location: "Coimbatore, TN", grade: "Organic Certified", traceId: "KUTKI-017", sellerType: "Startup", brandName: "Daily Shree Anna", isWholesale: false },
    { id: 18, name: "Chickpea (Kabuli Chana)", type: "Pulses", quantity: "550 kg", price: 73.50, location: "Ajmer, RJ", grade: "FSSAI Compliant", traceId: "CHICK-018", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 19, name: "Kodo Millet (Kodri)", type: "Millet", quantity: "90 kg", price: 58.00, location: "Raipur, CG", grade: "AGMARK Standard", traceId: "KODO-019", sellerType: "SHG", brandName: "Satvik Organics", isWholesale: true },
    { id: 20, name: "Green Gram (Moong Dal)", type: "Pulses", quantity: "750 kg", price: 88.00, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "MOONG-020", sellerType: "Startup", brandName: "Dal Delight", isWholesale: false },
    { id: 21, name: "Pearl Millet (Bajra)", type: "Millet", quantity: "1100 kg", price: 32.00, location: "Indore, MP", grade: "FSSAI Compliant", traceId: "BAJRA-021", sellerType: "FPO", brandName: "Bajra Pride", isWholesale: true },
    { id: 22, name: "Black Gram (Urad Dal)", type: "Pulses", quantity: "450 kg", price: 80.00, location: "Hyderabad, TS", grade: "AGMARK Standard", traceId: "URAD-022", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 23, name: "Sorghum (Jowar)", type: "Millet", quantity: "850 kg", price: 29.00, location: "Solapur, MH", grade: "FSSAI Compliant", traceId: "JOWAR-023", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 24, name: "Red Lentil (Masoor Dal)", type: "Pulses", quantity: "320 kg", price: 97.00, location: "Lucknow, UP", grade: "Organic Certified", traceId: "REDL-024", sellerType: "Startup", brandName: "Dal Factory", isWholesale: false },
    { id: 25, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "190 kg", price: 44.00, location: "Nagpur, MH", grade: "FSSAI Compliant", traceId: "FOX-025", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true },
    { id: 26, name: "Split Pigeon Pea (Toor Dal)", type: "Pulses", quantity: "620 kg", price: 89.00, location: "Bangalore, KA", grade: "AGMARK Standard", traceId: "TOOR-026", sellerType: "FPO", brandName: "Millet Munchies", isWholesale: true },
    { id: 27, name: "Little Millet (Kutki)", type: "Millet", quantity: "10 kg", price: 105.00, location: "Coimbatore, TN", grade: "Organic Certified", traceId: "KUTKI-027", sellerType: "Startup", brandName: "Daily Shree Anna", isWholesale: false },
    { id: 28, name: "Chickpea (Kabuli Chana)", type: "Pulses", quantity: "580 kg", price: 75.00, location: "Ajmer, RJ", grade: "FSSAI Compliant", traceId: "CHICK-028", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 29, name: "Kodo Millet (Kodri)", type: "Millet", quantity: "100 kg", price: 60.00, location: "Raipur, CG", grade: "AGMARK Standard", traceId: "KODO-029", sellerType: "SHG", brandName: "Satvik Organics", isWholesale: true },
    { id: 30, name: "Green Gram (Moong Dal)", type: "Pulses", quantity: "780 kg", price: 90.50, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "MOONG-030", sellerType: "Startup", brandName: "Dal Delight", isWholesale: false },
    { id: 31, name: "Pearl Millet (Bajra)", type: "Millet", quantity: "1150 kg", price: 33.00, location: "Indore, MP", grade: "FSSAI Compliant", traceId: "BAJRA-031", sellerType: "FPO", brandName: "Bajra Pride", isWholesale: true },
    { id: 32, name: "Black Gram (Urad Dal)", type: "Pulses", quantity: "470 kg", price: 82.50, location: "Hyderabad, TS", grade: "AGMARK Standard", traceId: "URAD-032", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 33, name: "Sorghum (Jowar)", type: "Millet", quantity: "870 kg", price: 30.00, location: "Solapur, MH", grade: "FSSAI Compliant", traceId: "JOWAR-033", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 34, name: "Red Lentil (Masoor Dal)", type: "Pulses", quantity: "350 kg", price: 99.00, location: "Lucknow, UP", grade: "Organic Certified", traceId: "REDL-034", sellerType: "Startup", brandName: "Dal Factory", isWholesale: false },
    { id: 35, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "200 kg", price: 45.00, location: "Nagpur, MH", grade: "FSSAI Compliant", traceId: "FOX-035", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true },
    { id: 36, name: "Split Pigeon Pea (Toor Dal)", type: "Pulses", quantity: "650 kg", price: 90.00, location: "Bangalore, KA", grade: "AGMARK Standard", traceId: "TOOR-036", sellerType: "FPO", brandName: "Millet Munchies", isWholesale: true },
    { id: 37, name: "Little Millet (Kutki)", type: "Millet", quantity: "12 kg", price: 110.00, location: "Coimbatore, TN", grade: "Organic Certified", traceId: "KUTKI-037", sellerType: "Startup", brandName: "Daily Shree Anna", isWholesale: false },
    { id: 38, name: "Chickpea (Kabuli Chana)", type: "Pulses", quantity: "600 kg", price: 77.50, location: "Ajmer, RJ", grade: "FSSAI Compliant", traceId: "CHICK-038", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 39, name: "Kodo Millet (Kodri)", type: "Millet", quantity: "120 kg", price: 62.00, location: "Raipur, CG", grade: "AGMARK Standard", traceId: "KODO-039", sellerType: "SHG", brandName: "Satvik Organics", isWholesale: true },
    { id: 40, name: "Green Gram (Moong Dal)", type: "Pulses", quantity: "800 kg", price: 92.00, location: "Ahmedabad, GJ", grade: "Organic Certified", traceId: "MOONG-040", sellerType: "Startup", brandName: "Dal Delight", isWholesale: false },
    { id: 41, name: "Pearl Millet (Bajra)", type: "Millet", quantity: "1200 kg", price: 34.00, location: "Indore, MP", grade: "FSSAI Compliant", traceId: "BAJRA-041", sellerType: "FPO", brandName: "Bajra Pride", isWholesale: true },
    { id: 42, name: "Black Gram (Urad Dal)", type: "Pulses", quantity: "500 kg", price: 85.00, location: "Hyderabad, TS", grade: "AGMARK Standard", traceId: "URAD-042", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 43, name: "Sorghum (Jowar)", type: "Millet", quantity: "900 kg", price: 31.00, location: "Solapur, MH", grade: "FSSAI Compliant", traceId: "JOWAR-043", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 44, name: "Red Lentil (Masoor Dal)", type: "Pulses", quantity: "370 kg", price: 101.00, location: "Lucknow, UP", grade: "Organic Certified", traceId: "REDL-044", sellerType: "Startup", brandName: "Dal Factory", isWholesale: false },
    { id: 45, name: "Foxtail Millet (Kangni)", type: "Millet", quantity: "210 kg", price: 46.00, location: "Nagpur, MH", grade: "FSSAI Compliant", traceId: "FOX-045", sellerType: "SHG", brandName: "Purna Shakti", isWholesale: true },
    { id: 46, name: "Split Pigeon Pea (Toor Dal)", type: "Pulses", quantity: "670 kg", price: 92.00, location: "Bangalore, KA", grade: "AGMARK Standard", traceId: "TOOR-046", sellerType: "FPO", brandName: "Millet Munchies", isWholesale: true },
    { id: 47, name: "Little Millet (Kutki)", type: "Millet", quantity: "15 kg", price: 115.00, location: "Coimbatore, TN", grade: "Organic Certified", traceId: "KUTKI-047", sellerType: "Startup", brandName: "Daily Shree Anna", isWholesale: false },
    { id: 48, name: "Chickpea (Kabuli Chana)", type: "Pulses", quantity: "620 kg", price: 80.00, location: "Ajmer, RJ", grade: "FSSAI Compliant", traceId: "CHICK-048", sellerType: "Farmer", brandName: null, isWholesale: true },
    { id: 49, name: "Kodo Millet (Kodri)", type: "Millet", quantity: "130 kg", price: 65.00, location: "Raipur, CG", grade: "AGMARK Standard", traceId: "KODO-049", sellerType: "SHG", brandName: "Satvik Organics", isWholesale: true },
    ]

const Marketplace = () => {
    const [products, setProducts] = useState(mockProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // --- Utility Components ---
    
    const ProductCard = ({ product }) => (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#B3CF8C] transition-all duration-300 transform hover:shadow-2xl hover:border-[#547C3E]">
            
            {/* 1. HEADER: Name and Type */}
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-extrabold text-[#013220]">{product.name}</h3>
                <p className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${product.isWholesale ? 'bg-[#547C3E] text-white' : 'bg-[#FFFDA1] text-[#547C3E] border border-[#547C3E]'}`}>
                    {product.isWholesale ? 'Wholesale' : 'Retail'}
                </p>
            </div>
            
            {/* 2. CORE DETAILS: Price and Quantity */}
            <div className="space-y-2 mb-4 text-[#013220] py-2 border-b border-[#B3CF8C]">
                <p className="flex items-center text-xl font-extrabold text-[#547C3E]">
                    <DollarSign className="w-6 h-6 mr-2" />
                    ₹{product.price} <span className="text-base font-semibold ml-1">/ kg</span>
                </p>
                <p className="flex items-center text-base font-medium">
                    <Droplet className="w-5 h-5 mr-2 text-[#547C3E]" />
                    Available Stock: <span className="font-bold ml-1">{product.quantity}</span>
                </p>
            </div>

            {/* 3. SELLER INFORMATION (New Section) */}
            <div className="flex flex-col gap-2 text-sm text-[#013220] mb-4 p-2 bg-[#FFFDA1] rounded-lg border border-[#B3CF8C]">
                <span className="flex items-center font-bold">
                    <User className="w-4 h-4 mr-2 text-[#547C3E]" /> 
                    Seller Type: <span className="ml-1 font-extrabold text-[#013220]">{product.sellerType}</span>
                </span>
                {product.brandName && (
                    <span className="flex items-center font-medium">
                        <Store className="w-4 h-4 mr-2 text-[#547C3E]" />
                        Brand: <span className="ml-1 font-semibold">{product.brandName}</span>
                    </span>
                )}
            </div>

            {/* 4. AI & TRACEABILITY STATUS */}
            <div className="flex flex-col gap-2 text-sm text-[#013220] mb-4">
                {/* Quality Grading with visual accent */}
                <span className="flex items-center font-bold px-3 py-1 rounded-md bg-[#B3CF8C] text-[#013220]">
                    <ShieldCheck className="w-4 h-4 mr-2 text-[#547C3E]" /> 
                    Quality Status: <span className="ml-1 font-extrabold">{product.grade}</span>
                </span>
                
                {/* Trace ID and Location */}
                <span className="flex items-center font-medium">
                    <LocateFixed className="w-4 h-4 mr-2 text-[#547C3E]" />
                    Sourcing Location: <span className="ml-1 font-semibold">{product.location}</span>
                </span>
                <span className="flex items-center font-medium text-xs text-[#013220]/70">
                    <Zap className="w-4 h-4 mr-2 text-[#547C3E]" /> 
                    Trace ID: {product.traceId}
                </span>
            </div>
            
            <button className="w-full mt-4 py-3 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-colors duration-300 shadow-lg">
                View Details & Connect
            </button>
        </div>
    );

    // Simple Search handler (Client-side mock)
    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = mockProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filtered);
    };


    return (
        <div className="min-h-screen bg-[#FFFDA1] pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-[#013220]">
                        Digital Millet & Pulses Marketplace
                    </h1>
                    <p className="text-xl text-[#547C3E] mt-3">
                        Source Verified, AI-Graded Shree Anna from FPOs and Farmers.
                    </p>
                </header>

                {/* Search and Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 bg-white rounded-xl shadow-lg border border-[#B3CF8C]">
                    
                    <form onSubmit={handleSearch} className="flex flex-grow items-center">
                        <Search className="w-6 h-6 text-[#547C3E] ml-4 mr-3" />
                        <input
                            type="text"
                            placeholder="Search by Millet/Pulses name or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow p-3 text-lg border-none focus:ring-0 bg-transparent text-[#013220] placeholder-[#013220]/50"
                        />
                        <button 
                            type="submit" 
                            className="px-6 py-3 bg-[#547C3E] text-white font-semibold rounded-lg hover:bg-[#013220] transition-colors duration-300"
                        >
                            Search
                        </button>
                    </form>

                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center justify-center px-6 py-3 border border-[#547C3E] text-[#013220] font-semibold rounded-xl bg-[#B3CF8C] hover:bg-[#547C3E] hover:text-white transition-colors duration-300 md:w-auto w-full"
                    >
                        <Filter className="w-5 h-5 mr-2" />
                        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                {/* Filter Dropdown Area (Simple mock) */}
                {isFilterOpen && (
                    <div className="mb-10 p-6 bg-white rounded-xl shadow-inner border border-[#547C3E]">
                        <h4 className="text-xl font-bold text-[#013220] mb-4">Advanced Filters</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Filter 1: Product Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Type</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-[#FFFDA1]">
                                    <option>All</option>
                                    <option>Millet</option>
                                    <option>Pulses</option>
                                </select>
                            </div>
                            {/* Filter 2: Seller Type (New) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Seller Type</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-[#FFFDA1]">
                                    <option>All Sellers</option>
                                    <option>Farmer</option>
                                    <option>SHG</option>
                                    <option>FPO</option>
                                    <option>Startup</option>
                                </select>
                            </div>
                            {/* Filter 3: Quality Grade (Updated Options) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Min. Certification</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-[#FFFDA1]">
                                    <option>Any</option>
                                    <option>Organic Certified</option>
                                    <option>AGMARK Standard</option>
                                    <option>FSSAI Compliant</option>
                                </select>
                            </div>
                            {/* Filter 4: Sales Format */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Sales Format</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-[#FFFDA1]">
                                    <option>Any</option>
                                    <option>Wholesale</option>
                                    <option>Retail</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.length > 0 ? (
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <div className="col-span-full text-center p-12 bg-white rounded-xl shadow-lg">
                            <p className="text-2xl text-[#013220] font-semibold">No products found matching your criteria.</p>
                            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Marketplace;
