import React from "react";

const Solistack = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8 px-2 md:px-0">
      {/* Header Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-xs text-red-600 font-bold tracking-widest mb-2">BUSINESS</h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Solistack Business Solutions</h1>
        <p className="text-gray-700 text-sm md:text-base mb-2">Solistack Business Solutions offers a comprehensive suite of tools designed to streamline your business operations. From automated planning to real-time tracking and analytics, Solistack empowers your team to achieve more with less effort.</p>
        <p className="text-gray-700 text-sm md:text-base">Experience seamless integration, robust analytics, and a user-friendly interface that adapts to your business needs.</p>
      </div>
      {/* Main Image */}
      <div className="mb-12 flex justify-center">
        <img src="/public/solistack.svg" alt="Solistack Dashboard" className="w-[400px] h-auto rounded-xl shadow-lg" />
      </div>
      {/* Offerings Section */}
      <div className="w-full max-w-3xl">
        <h3 className="text-lg font-semibold text-center mb-8">Solistack's Transformative Service Offerings</h3>
        <div className="space-y-12">
          {/* Automated Planning */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/automated-planning.svg" alt="Automated Planning" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Automated Planning</h4>
              <p className="text-gray-600 text-sm">Automate your business planning with Solistack's intelligent algorithms, saving time and reducing manual errors.</p>
            </div>
          </div>
          {/* One Click Order Scheduling */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/order-scheduling.svg" alt="Order Scheduling" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">One Click Order Scheduling</h4>
              <p className="text-gray-600 text-sm">Easily schedule orders with a single click, optimizing your workflow and improving efficiency.</p>
            </div>
          </div>
          {/* Live Tracking & ETA */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/live-tracking.svg" alt="Live Tracking" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Live Tracking & ETA</h4>
              <p className="text-gray-600 text-sm">Monitor your fleet in real-time and provide accurate ETAs to your customers.</p>
            </div>
          </div>
          {/* Proof of Delivery */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/proof-of-delivery.svg" alt="Proof of Delivery" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Proof of Delivery</h4>
              <p className="text-gray-600 text-sm">Capture and store proof of delivery with ease, ensuring accountability and transparency.</p>
            </div>
          </div>
          {/* Analytics */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/analytics.svg" alt="Analytics" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Analytics</h4>
              <p className="text-gray-600 text-sm">Gain actionable insights from your data to drive better business decisions.</p>
            </div>
          </div>
          {/* Driver Mobile App */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/driver-app.svg" alt="Driver Mobile App" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Driver Mobile App</h4>
              <p className="text-gray-600 text-sm">Empower your drivers with a dedicated mobile app for seamless communication and task management.</p>
            </div>
          </div>
          {/* Dark Mode Light Mode */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/public/dark-light-mode.svg" alt="Dark Mode Light Mode" className="w-48 h-auto mb-4 md:mb-0" />
            <div>
              <h4 className="font-bold text-base mb-1">Dark Mode Light Mode</h4>
              <p className="text-gray-600 text-sm">Switch between dark and light modes for a comfortable viewing experience anytime.</p>
            </div>
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

export default Solistack; 