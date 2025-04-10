import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to XYZ Web Portal</h1>
      <p className="text-lg text-gray-600 mb-8">Connecting Companies and Students Seamlessly</p>
      <div className="flex gap-6">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Home;
