import React from "react";

export function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 border border-gray-200/20 shadow-lg flex items-center gap-8">
        <div className="font-all-round-gothic text-xl font-extrabold tracking-tight" style={{ fontWeight: 800 }}>
          flowapt
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm hover:text-spektr-cyan-50 transition-colors">Home</a>
          <a href="#" className="text-sm hover:text-spektr-cyan-50 transition-colors">Features</a>
          <a href="#" className="text-sm hover:text-spektr-cyan-50 transition-colors">Pricing</a>
          <a href="#" className="text-sm hover:text-spektr-cyan-50 transition-colors">About</a>
        </nav>
        <div className="ml-auto">
          <button className="bg-gradient-to-r from-[#94609a] to-[#ee3a5b] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition-opacity">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
} 