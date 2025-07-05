import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  Home,
  Clock,
  DollarSign,
  Target,
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Zap,
  CheckCircle,
  User,
  AtSign,
} from "lucide-react";
import { saveLeadData } from "./firebase";

const StamfordSellersGuide = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToMarketing: false,
  });
  const [animatedStats, setAnimatedStats] = useState({
    appreciation: 0,
    aboveAsking: 0,
    multipleOffers: 0,
    daysOnMarket: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        appreciation: 14.9,
        aboveAsking: 69,
        multipleOffers: 68,
        daysOnMarket: 30,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.agreeToMarketing) {
      alert('Please fill in all required fields and agree to the marketing communications.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    console.log('=== STARTING FIREBASE SAVE PROCESS ===');

    try {
      // Save lead data to Firebase
      const leadData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined
      };

      console.log('About to call saveLeadData with:', leadData);
      const docId = await saveLeadData(leadData);
      console.log('=== FIREBASE SAVE SUCCESSFUL ===');
      console.log('Lead successfully saved with ID:', docId);
      
      // Show success message and proceed to main app
      setShowForm(false);
    } catch (error) {
      console.error('=== FIREBASE SAVE FAILED ===');
      console.error('Error saving lead data:', error);
      alert('There was an error saving your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const neighborhoodData = [
    {
      name: "North Stamford",
      median: 1057500,
      appreciation: 25.9,
      aboveAsking: 69,
    },
    {
      name: "Shippan Point",
      median: 1353017,
      appreciation: 18.5,
      aboveAsking: 45,
    },
    {
      name: "Turn of River (06905)",
      median: 894042,
      appreciation: 15.2,
      aboveAsking: 52,
    },
    { name: "Springdale", median: 535000, appreciation: 20.1, aboveAsking: 38 },
    { name: "Downtown", median: 303587, appreciation: 12.8, aboveAsking: 35 },
  ];

  const marketTimingData = [
    { month: "Jan", sales: 98, inventory: 245 },
    { month: "Feb", sales: 105, inventory: 220 },
    { month: "Mar", sales: 118, inventory: 215 },
    { month: "Apr", sales: 125, inventory: 198 },
    { month: "May", sales: 114, inventory: 232 },
    { month: "Jun", sales: 108, inventory: 267 },
  ];

  const costBreakdownData = [
    { category: "Commission", percentage: 5.45, amount: 38913 },
    { category: "Transfer Taxes", percentage: 1.1, amount: 7854 },
    { category: "Attorney Fees", percentage: 0.14, amount: 1000 },
    { category: "Other Costs", percentage: 1.31, amount: 9353 },
  ];

  const COLORS = ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

  const StatCard = ({ icon: Icon, title, value, subtitle, trend }: {
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle: string;
    trend?: number;
  }) => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        {trend && (
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+{trend}%</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );

  // Lead Capture Form Component
  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img 
                src="/jmx-logo-white.png" 
                alt="JMX Realty Group" 
                className="h-16 mx-auto mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'block';
                  }
                }}
              />
              <div className="hidden text-2xl font-bold text-blue-900">
                JMX Realty Group
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Access Your Exclusive Stamford Market Report
            </h1>
            <p className="text-gray-600">
              Get strategic insights from 2,500+ local transactions
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(optional - for faster response)"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeToMarketing"
                checked={formData.agreeToMarketing}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700 leading-relaxed">
                I agree to receive marketing communications from JMX Realty Group via email and, if provided, phone/text. I understand I can unsubscribe at any time. By submitting this form, I acknowledge I have read and agree to the Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Saving...' : 'Access Market Report'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section with Glass Morphism */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center">
            {/* Centered Content */}
            <div className="max-w-4xl space-y-8">
              {/* Main Title Glass Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-center">
                  Sell Your Stamford Home at{" "}
                  <span className="text-blue-300">Peak Market Value</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed text-center">
                  Strategic insights from 2,500+ local transactions reveal why now
                  is the perfect time to sell.
                </p>
              </div>

              {/* CTA Glass Card */}
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white text-center">
                  Discover Your Home's Hidden Value
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed text-center">
                  Get a free, video-based, fully personalized comparative market
                  analysis revealing your property's true potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:203-548-7339"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600/80 backdrop-blur-sm hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 border border-blue-400/50"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Jonathan: 203-548-7339
                  </a>
                  <a
                    href="mailto:info@jmxrealtygroup.com"
                    className="flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Explore Market Insights
          </h2>
          <p className="text-gray-600">
            Click any section below to dive deeper into Stamford's market
            dynamics
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "overview", label: "Market Overview", icon: Home },
            { id: "neighborhoods", label: "Neighborhood Intel", icon: MapPin },
            { id: "timing", label: "Perfect Timing", icon: Calendar },
            { id: "costs", label: "Cost Analysis", icon: DollarSign },
            { id: "strategy", label: "Winning Strategy", icon: Award },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              <tab.icon
                className={`h-5 w-5 mr-2 ${
                  activeTab === tab.id ? "animate-pulse" : ""
                }`}
              />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Market Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Stamford's Market Favors Sellers
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Unprecedented Seller Advantages
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          Homes sell at 106.3% of list price
                          <sup className="text-blue-600">¹</sup>
                        </p>
                        <p className="text-sm text-gray-600">
                          Strategic pricing triggers competitive bidding
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          Only 232 homes available vs 114 sold monthly
                          <sup className="text-blue-600">²</sup>
                        </p>
                        <p className="text-sm text-gray-600">
                          2:1 inventory shortage creates urgency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          First 14 days critical for maximum buyer attention
                          <sup className="text-blue-600">³</sup>
                        </p>
                        <p className="text-sm text-gray-600">
                          Professional presentation pays immediate dividends
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Market Timing Insights
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={marketTimingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="sales"
                        stackId="1"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.7}
                      />
                      <Area
                        type="monotone"
                        dataKey="inventory"
                        stackId="2"
                        stroke="#60a5fa"
                        fill="#60a5fa"
                        fillOpacity={0.7}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                The Emotional Reality for Sellers
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                In today's market, sellers aren't just selling a house—they're
                capitalizing on a once-in-a-decade opportunity. With 73% of
                markets being less competitive than Stamford
                <sup className="text-blue-100">⁴</sup>, your home represents a
                premium asset in a scarcity-driven economy.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    $714,000<sup className="text-blue-200">⁵</sup>
                  </div>
                  <div className="text-blue-200">Median sale price</div>
                  <div className="text-sm text-blue-300">
                    75% higher than national average
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    $374<sup className="text-blue-200">⁶</sup>
                  </div>
                  <div className="text-blue-200">Price per square foot</div>
                  <div className="text-sm text-blue-300">
                    Up 11.6% year-over-year
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    98.3%<sup className="text-blue-200">⁷</sup>
                  </div>
                  <div className="text-blue-200">
                    Metro-North on-time performance
                  </div>
                  <div className="text-sm text-blue-300">
                    Record high reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Neighborhood Intelligence */}
        {activeTab === "neighborhoods" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Neighborhood-Specific Market Intelligence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Extreme variations in appreciation rates across Stamford's
                neighborhoods create strategic opportunities for informed
                sellers.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Median Home Values by Neighborhood
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={neighborhoodData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis
                        tickFormatter={(value) =>
                          `${(value / 1000).toFixed(0)}K`
                        }
                      />
                      <Tooltip
                        formatter={(value) => [
                          `${value.toLocaleString()}`,
                          "Median Value",
                        ]}
                      />
                      <Bar dataKey="median" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Percentage Selling Above Asking
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={neighborhoodData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, aboveAsking }) =>
                          `${name}: ${aboveAsking}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="aboveAsking"
                      >
                        {neighborhoodData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  🏆 North Stamford Winner
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Median Price:</span>
                    <span className="font-bold text-blue-900">
                      $1,057,500<sup className="text-blue-600">⁸</sup>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Above Asking:</span>
                    <span className="font-bold text-green-600">
                      69%<sup className="text-blue-600">⁹</sup>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Price/SqFt Growth:</span>
                    <span className="font-bold text-green-600">
                      +25.9%<sup className="text-blue-600">¹⁰</sup>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    International buyers, particularly Europeans, drive this
                    luxury market seeking privacy and NYC proximity.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-3">
                  Hidden Gem: Turn of River
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Median Price:</span>
                    <span className="font-bold text-purple-900">
                      $894,042<sup className="text-purple-600">¹¹</sup>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Income Premium:</span>
                    <span className="font-bold text-purple-600">
                      93.8% above US avg
                      <sup className="text-purple-600">¹²</sup>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">CT Ranking:</span>
                    <span className="font-bold text-purple-600">Top 1%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Ultra-luxury enclave (ZIP 06905) with $6,240 average rents
                    <sup className="text-purple-600">¹³</sup> creating
                    self-reinforcing value cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Perfect Timing */}
        {activeTab === "timing" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Timing Advantages
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    The 14-Day Critical Window
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <Zap className="h-8 w-8 text-blue-600 mr-3" />
                      <span className="text-2xl font-bold text-blue-900">
                        First 14 Days
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Properties capturing early attention perform significantly
                      better than those that don't. With Stamford's 30-day
                      average market time, the initial two weeks determine
                      success.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">
                          Professional photography during optimal lighting
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">
                          Comprehensive online marketing launch
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">
                          Open houses within first week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Seasonal Market Dynamics
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={marketTimingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#3b82f6"
                        strokeWidth={3}
                      />
                      <Line
                        type="monotone"
                        dataKey="inventory"
                        stroke="#60a5fa"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-600 mt-2">
                    Spring market (February-May) shows strongest buyer activity
                    with peak opportunity in April.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Development-Driven Value Creation
              </h3>
              <p className="text-lg mb-6 text-green-100">
                Over 1,500 units under construction and 1,174 planned
                <sup className="text-green-200">¹⁴</sup> are creating lasting
                value catalysts. This historic transformation makes
                single-family homes increasingly scarce premium assets.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">
                    Major Development Projects
                  </h4>
                  <ul className="space-y-2 text-green-100">
                    <li>
                      • 800 Long Ridge Road: 354 units
                      <sup className="text-green-200">¹⁵</sup> (former Xerox HQ)
                    </li>
                    <li>• 900 Long Ridge Road: 463 units</li>
                    <li>
                      • Stamford Transportation Center master plan
                      <sup className="text-green-200">¹⁶</sup>
                    </li>
                    <li>
                      • 1,000+ downtown apartments delivered in 2024
                      <sup className="text-green-200">¹⁷</sup>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">
                    Impact on Single-Family Values
                  </h4>
                  <ul className="space-y-2 text-green-100">
                    <li>
                      • Absorbs rental demand while maintaining ownership
                      scarcity
                    </li>
                    <li>
                      • Creates new residential nodes enhancing nearby values
                    </li>
                    <li>• Generates tax revenue supporting infrastructure</li>
                    <li>
                      • Stamford becomes majority-renter (51%) for first time
                      <sup className="text-green-200">¹⁸</sup>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cost Analysis */}
        {activeTab === "costs" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Cost Analysis
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                While Connecticut's 8-10% total selling costs are substantial
                <sup className="text-gray-500">¹⁹</sup>, Stamford's exceptional
                market performance often results in net proceeds exceeding
                lower-cost markets.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Cost Breakdown on $714,000 Home
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={costBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, percentage }) =>
                          `${category}: ${percentage}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                      >
                        {costBreakdownData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name) => [
                          `${value}% ($${costBreakdownData
                            .find((d) => d.category === name)
                            ?.amount?.toLocaleString()})`,
                          "Cost",
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Net Proceeds Reality
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Typical Seller Nets:
                      </h4>
                      <div className="text-2xl font-bold text-blue-900">
                        90-92%
                      </div>
                      <p className="text-sm text-gray-600">
                        of sale price after all costs
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span>Sale Price:</span>
                        <span className="font-semibold">
                          $714,000<sup className="text-gray-500">⁵</sup>
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>Total Costs:</span>
                        <span className="font-semibold text-red-600">
                          -$57,120<sup className="text-gray-500">¹⁹</sup>
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>Net Proceeds:</span>
                        <span className="font-semibold text-green-600">
                          $656,880
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        *Before mortgage payoff and buyer concessions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  North Stamford Premium
                </h3>
                <div className="text-2xl font-bold text-blue-900 mb-2">
                  $1,057,500
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Median sale price
                </div>
                <div className="text-lg font-semibold text-green-600">
                  $970,000+
                </div>
                <div className="text-sm text-gray-600">
                  Typical net proceeds
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-3">
                  Market Advantage
                </h3>
                <div className="text-2xl font-bold text-green-900 mb-2">
                  106.3%
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Of list price average
                </div>
                <div className="text-lg font-semibold text-green-600">
                  +$45,000
                </div>
                <div className="text-sm text-gray-600">
                  Above asking typical
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-3">
                  Speed Advantage
                </h3>
                <div className="text-2xl font-bold text-purple-900 mb-2">
                  30 Days
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Average market time
                </div>
                <div className="text-lg font-semibold text-purple-600">
                  -$2,400
                </div>
                <div className="text-sm text-gray-600">
                  Carrying cost savings
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Winning Strategy */}
        {activeTab === "strategy" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                JMX Realty's Winning Strategy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Advanced negotiation psychology combined with deep market
                intelligence delivers superior results for our sellers.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Proven Results
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-900">
                          15% Higher Final Sale Prices
                          <sup className="text-green-600">²⁰</sup>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Using advanced negotiation tactics vs. traditional
                        methods
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-900">
                          40% Faster Closings
                          <sup className="text-blue-600">²¹</sup>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Due to reduced back-and-forth negotiations
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-purple-900">
                          85% Success Rate
                          <sup className="text-purple-600">²²</sup>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Of offers result in successful contracts
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Strategic Advantages
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Off-Market Luxury Network</p>
                        <p className="text-sm text-gray-600">
                          Access to 20-30% of luxury transactions
                          <sup className="text-gray-500">²³</sup> that occur
                          privately
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          International Buyer Connections
                        </p>
                        <p className="text-sm text-gray-600">
                          Direct relationships with European buyers seeking
                          North Stamford estates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          Psychological Negotiation Mastery
                        </p>
                        <p className="text-sm text-gray-600">
                          Advanced tactics that turn engaged buyers into
                          competitive bidders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          Hyper-Local Market Intelligence
                        </p>
                        <p className="text-sm text-gray-600">
                          Street-level pricing data most agents don't have
                          access to
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Emotional Edge</h3>
              <p className="text-lg mb-6 text-blue-100">
                Selling your home isn't just a transaction—it's a life-changing
                decision. Our approach recognizes that behind every sale is a
                family's future, dreams, and financial security.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">
                    What This Means for You:
                  </h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>
                      • Peace of mind knowing you're maximizing your investment
                    </li>
                    <li>
                      • Confidence in a strategy backed by 2,500+ transactions
                    </li>
                    <li>• Access to buyer networks others don't have</li>
                    <li>
                      • A partner who understands the emotional weight of this
                      decision
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Your Next Steps:</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>
                      • Free personalized video CMA revealing your home's true
                      value
                    </li>
                    <li>
                      • Strategic positioning plan for your specific
                      neighborhood
                    </li>
                    <li>• Professional photography and marketing launch</li>
                    <li>• Negotiation support from contract to closing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sources Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Data Sources & Citations
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Citations:</h4>
              <ol className="space-y-1 list-decimal list-inside">
                <li>
                  Redfin Stamford Housing Market, May 2025 (106.3% of list
                  price)
                </li>
                <li>
                  Zillow Market Data, May 2025 (232 homes available vs 114 sold)
                </li>
                <li>
                  JMX Realty Market Analysis, 2025 (14-day critical window)
                </li>
                <li>
                  Redfin Competitive Market Analysis, 2025 (73% less
                  competitive)
                </li>
                <li>
                  Redfin Stamford Market Report, May 2025 ($714,000 median)
                </li>
                <li>Redfin Price per Square Foot Analysis, 2025 ($374/sqft)</li>
                <li>Governor Hochul Metro-North Performance Report, 2024</li>
                <li>Rocket Homes North Stamford Report, April 2025</li>
                <li>
                  Rocket Homes North Stamford Market Data, 2025 (69% above
                  asking)
                </li>
                <li>
                  Redfin North Stamford Analysis, 2025 (25.9% price growth)
                </li>
                <li>NeighborhoodScout Turn of River Profile, 2025</li>
                <li>
                  NeighborhoodScout Income Analysis, 2025 (93.8% above US avg)
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                Additional Sources:
              </h4>
              <ol className="space-y-1 list-decimal list-inside" start={13}>
                <li>NeighborhoodScout Rental Data, 2025 ($6,240 avg rent)</li>
                <li>Foundation for Fair Contracting CT, 2025 (1,500+ units)</li>
                <li>NewsTimes BLT Development Report, 2024 (354 units)</li>
                <li>Stamford Transportation Center Master Plan, 2025</li>
                <li>
                  Foundation for Fair Contracting CT, 2025 (1,000+ apartments)
                </li>
                <li>
                  Brookings Institution Housing Analysis, 2025 (51% renter)
                </li>
                <li>JMX Realty Cost Analysis, 2025 (8-10% total costs)</li>
                <li>JMX Realty Results Analysis, 2025 (15% higher prices)</li>
                <li>JMX Realty Performance Data, 2025 (40% faster closings)</li>
                <li>
                  JMX Realty Success Rate Analysis, 2025 (85% success rate)
                </li>
                <li>Strategic Insider Analysis, 2025 (20-30% off-market)</li>
              </ol>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            All statistics current as of publication date. Market conditions
            subject to change. Consult with JMX Realty for most current data and
            personalized market analysis.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Unlock Your Home's Maximum Value?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't leave money on the table. Get your free personalized market
              analysis today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:203-548-7339"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Jonathan: 203-548-7339
              </a>
              <a
                href="mailto:info@jmxrealtygroup.com"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Your Free CMA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StamfordSellersGuide;