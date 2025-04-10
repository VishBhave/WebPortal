import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to XYZ Web Portal</h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-8">Connecting Companies and Students Seamlessly</p>

      {/* Navigation Buttons */}
      <div className="flex gap-6">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate('/signup')} // Navigate to Sign Up
        >
          Sign Up
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate('/login')} // Navigate to Log In
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Home;
