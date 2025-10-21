import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Mail, Phone, ArrowRight, Sprout } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const primaryText = 'text-[#013220]';
  const primaryAccent = 'text-[#547C3E]';
  const accentBackground = 'bg-[#B3CF8C]';
  const mainBackground = 'bg-[#FFFDA1]';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen ${mainBackground} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding & Welcome */}
        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-16 h-16 ${accentBackground} rounded-full flex items-center justify-center`}>
                <Sprout className={`w-8 h-8 ${primaryAccent}`} />
              </div>
              <div>
                <h1 className={`text-4xl font-extrabold ${primaryText}`}>ShreeConnect</h1>
                <p className={`${primaryAccent} font-medium`}>Empowering Millet Trade</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <h2 className={`text-3xl font-bold ${primaryText}`}>
                Welcome Back to the<br />Millet Marketplace
              </h2>
              <p className={`text-lg ${primaryText}/80`}>
                Connect with farmers, discover quality products, and be part of India's agricultural revolution.
              </p>
            </div>

            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-[#547C3E]`}></div>
                <p className={`${primaryText}/80`}>Direct connection with verified farmers</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-[#547C3E]`}></div>
                <p className={`${primaryText}/80`}>Transparent pricing and quality assurance</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-[#547C3E]`}></div>
                <p className={`${primaryText}/80`}>Support rural communities and SHGs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            
            {/* Mobile Header */}
            <div className="md:hidden mb-6 text-center">
              <div className={`w-12 h-12 ${accentBackground} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Sprout className={`w-6 h-6 ${primaryAccent}`} />
              </div>
              <h1 className={`text-2xl font-bold ${primaryText}`}>ShreeConnect</h1>
            </div>

            <div className="mb-8">
              <h2 className={`text-3xl font-bold ${primaryText} mb-2`}>Sign In</h2>
              <p className={`${primaryText}/70`}>Enter your credentials to access your account</p>
            </div>

            {/* Login Method Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  loginMethod === 'email'
                    ? `bg-[#547C3E] text-white shadow-md`
                    : `bg-gray-100 ${primaryText}/70 hover:bg-gray-200`
                }`}
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  loginMethod === 'phone'
                    ? `bg-[#547C3E] text-white shadow-md`
                    : `bg-gray-100 ${primaryText}/70 hover:bg-gray-200`
                }`}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Phone
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email/Phone Input */}
              {loginMethod === 'email' ? (
                <div>
                  <label className={`block text-sm font-medium ${primaryText} mb-2`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${primaryText}/40`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#547C3E] focus:outline-none transition-colors ${primaryText}`}
                      required
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className={`block text-sm font-medium ${primaryText} mb-2`}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${primaryText}/40`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#547C3E] focus:outline-none transition-colors ${primaryText}`}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Password Input */}
              <div>
                <label className={`block text-sm font-medium ${primaryText} mb-2`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${primaryText}/40`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-[#547C3E] focus:outline-none transition-colors ${primaryText}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${primaryText}/40 hover:${primaryText}/70 transition-colors`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#547C3E] border-gray-300 rounded focus:ring-[#547C3E]"
                  />
                  <span className={`ml-2 text-sm ${primaryText}/70`}>Remember me</span>
                </label>
                <a href="#" className={`text-sm ${primaryAccent} hover:underline font-medium`}>
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#547C3E] to-[#013220] text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-4 bg-white ${primaryText}/60`}>or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <button
                type="button"
                className="w-full border-2 border-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className={primaryText}>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <p className={`text-center text-sm ${primaryText}/70 mt-6`}>
                Don't have an account?{' '}
                <a href="#" className={`${primaryAccent} hover:underline font-bold`}>
                  Create Account
                </a>
              </p>
            </form>
          </div>

          {/* Help Text */}
          <p className={`text-center text-sm ${primaryText}/60 mt-6`}>
            Need help? Contact our support team at{' '}
            <a href="mailto:support@shreeconnect.com" className={`${primaryAccent} hover:underline`}>
              support@shreeconnect.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;