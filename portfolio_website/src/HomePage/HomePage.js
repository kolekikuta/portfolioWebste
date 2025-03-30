import React from "react";
import './HomePage.css';

export default function HomePage () {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col items-center px-6">
      {/* Hero Section */}
      <header className="w-full text-center py-20">
        <h1 className="text-5xl font-bold">Stephanie Liu</h1>
        <p className="text-lg text-gray-600 mt-4">Designer & Developer</p>
      </header>

      {/* Portfolio Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="h-48 bg-gray-300 rounded-lg"></div>
            <h2 className="mt-4 text-xl font-semibold">Project {item}</h2>
            <p className="text-gray-500">Description of the project.</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-500 text-sm text-center w-full mt-10">
        &copy; 2025 Stephanie Liu. All rights reserved.
      </footer>
    </div>
  );
}
