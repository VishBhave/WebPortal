import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Goodbye, Student!</h1>
        <p className="text-gray-600 mb-6">
          You've successfully logged out of your learning journey. Keep pushing forward and come back soon!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default LogoutStudent;
