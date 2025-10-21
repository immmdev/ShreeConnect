// src/pages/ProductDetails.jsx
import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Droplet, DollarSign, LocateFixed, Timer, Mail, User } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const { state: product } = useLocation();
    const navigate = useNavigate();

    const primaryText = 'text-[#013220]';
    const primaryAccent = 'text-[#547C3E]';
    const accentBackground = 'bg-[#B3CF8C]';
    const mainBackground = 'bg-[#FFFDA1]';

    if (!product) {
        return (
            <div className={`${mainBackground} min-h-screen flex flex-col items-center justify-center`}>
                <p className="text-2xl text-gray-600 mb-4">No product data found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-[#547C3E] text-white font-semibold rounded-xl hover:bg-[#013220] transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className={`${mainBackground} min-h-screen py-10`}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-[#B3CF8C]">
                
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center mb-6 text-[#547C3E] font-semibold hover:text-[#013220]"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Marketplace
                </button>

                <h1 className={`text-3xl font-extrabold mb-4 ${primaryText}`}>{product.name}</h1>
                <p className={`text-lg mb-2 ${primaryAccent}`}>Type: {product.type}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                        <p className="flex items-center text-lg font-bold">
                            <DollarSign className={`w-5 h-5 mr-2 ${primaryAccent}`} /> 
                            ₹{product.price.toFixed(2)} / kg
                        </p>
                        <p className="flex items-center text-sm">
                            <Droplet className={`w-4 h-4 mr-2 ${primaryAccent}`} /> Stock: {product.stock} kg
                        </p>
                        <p className="flex items-center text-sm">
                            <LocateFixed className={`w-4 h-4 mr-2 ${primaryAccent}`} /> Location: {product.location}
                        </p>
                        <p className="flex items-center text-sm">
                            <Timer className={`w-4 h-4 mr-2 ${primaryAccent}`} /> Delivery: {product.deliveryTime}
                        </p>
                        <p className="flex items-center text-sm">
                            <ShieldCheck className={`w-4 h-4 mr-2 ${primaryAccent}`} /> Grade: {product.grade}
                        </p>
                    </div>

                    <div className={`rounded-xl p-4 ${accentBackground}`}>
                        <p className="text-lg font-bold mb-2">Seller Details</p>
                        <p><User className={`inline w-4 h-4 mr-2 ${primaryAccent}`} /> {product.sellerType}</p>
                        {product.brandName && <p>Brand: {product.brandName}</p>}
                        <p>Journey of product: <a href='/jorney' className="text-blue-600 underline">My journey</a></p>
                        <p>Contact: <a href={`mailto:${product.sellerContact}`} className="text-blue-600 underline">{product.sellerContact}</a></p>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-[#FFFDA1]/50 rounded-xl">
                    <h3 className={`text-xl font-bold mb-2 ${primaryText}`}>Nutritional Info</h3>
                    <p className={`${primaryAccent}`}>{product.nutrinationalInfo}</p>
                </div>
                <div className='flex gap-4'>
                <button className="mt-8 w-full py-4 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-colors duration-300 shadow-lg">
                    Connect with Seller
                </button>
                <button className="mt-8 w-full py-4 bg-[#547C3E] text-white font-bold rounded-xl hover:bg-[#013220] transition-colors duration-300 shadow-lg">
                    Add to cart
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
