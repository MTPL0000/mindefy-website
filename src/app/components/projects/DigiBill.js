import React from "react";

const DigiBill = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8 px-2 md:px-0">
      {/* Header Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-xs text-green-600 font-bold tracking-widest mb-2">DIGITAL BILLING</h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">DigiBill: A Sustainable Solution for Digital Billing Management</h1>
        <p className="text-gray-700 text-sm md:text-base mb-2">DigiBill is a powerful platform designed to streamline your billing process, offering real-time analytics, multi-branch management, and a seamless digital experience for both businesses and shoppers.</p>
      </div>
      {/* Main Image */}
      <div className="mb-12 flex justify-center">
        <img src="/public/digibill.svg" alt="DigiBill Dashboard" className="w-[400px] h-auto rounded-xl shadow-lg" />
      </div>
      {/* Key Functionality Section */}
      <div className="w-full max-w-3xl">
        <h3 className="text-lg font-semibold text-center mb-8">Highlighting The Key Functionality of Our Merchant App</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <img src="/public/transaction-history.svg" alt="Transaction History" className="w-24 h-24 mb-2" />
            <h4 className="font-bold text-base mb-1">Transaction History</h4>
            <p className="text-gray-600 text-sm text-center">View and manage all your transactions in one place for easy reconciliation.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/public/live-tracking.svg" alt="Live Tracking" className="w-24 h-24 mb-2" />
            <h4 className="font-bold text-base mb-1">Live Tracking</h4>
            <p className="text-gray-600 text-sm text-center">Track your sales and inventory in real-time for better business decisions.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/public/customer-feedback.svg" alt="Customer Feedback" className="w-24 h-24 mb-2" />
            <h4 className="font-bold text-base mb-1">Customer Feedback</h4>
            <p className="text-gray-600 text-sm text-center">Collect and analyze customer feedback to improve your services.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/public/loyalty-rewards.svg" alt="Loyalty Rewards" className="w-24 h-24 mb-2" />
            <h4 className="font-bold text-base mb-1">Loyalty Rewards</h4>
            <p className="text-gray-600 text-sm text-center">Reward your loyal customers and encourage repeat business.</p>
          </div>
        </div>
        {/* Multi-Branch Management */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-4">Simplify Multi-Branch Management With DigiBill</h3>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="/public/multi-branch.svg" alt="Multi-Branch Management" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <p className="text-gray-600 text-sm">Easily manage multiple branches from a single dashboard, ensuring consistency and control across your business.</p>
            </div>
          </div>
        </div>
        {/* Centralized Dashboard */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-4">Centralized Dashboard</h3>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="/public/centralized-dashboard.svg" alt="Centralized Dashboard" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <p className="text-gray-600 text-sm">Monitor all your business metrics in one place with DigiBill's centralized dashboard.</p>
            </div>
          </div>
        </div>
        {/* Digital Bill Feature */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-4">Empower Shoppers With Convenient Digital Bill Feature</h3>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img src="/public/digital-bill.svg" alt="Digital Bill Feature" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <p className="text-gray-600 text-sm">Provide your shoppers with digital bills for a seamless and eco-friendly experience.</p>
            </div>
          </div>
        </div>
        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <img src="/public/secure-payments.svg" alt="Secure Payments" className="w-8 h-8" />
            <span className="text-gray-700 text-sm">Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/public/real-time-analytics.svg" alt="Real-Time Analytics" className="w-8 h-8" />
            <span className="text-gray-700 text-sm">Real-Time Analytics</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/public/inventory-management.svg" alt="Inventory Management" className="w-8 h-8" />
            <span className="text-gray-700 text-sm">Inventory Management</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/public/loyalty-program.svg" alt="Loyalty Program" className="w-8 h-8" />
            <span className="text-gray-700 text-sm">Loyalty Program</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-16 text-center">
        <h4 className="text-lg font-semibold">Lets Get in Touch</h4>
      </div>
    </div>
  );
};

export default DigiBill; 