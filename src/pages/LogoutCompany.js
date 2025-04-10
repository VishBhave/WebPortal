import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutCompany = () => {
  const navigate = useNavigate();

  return (
    // Centered container with gradient background
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-yellow-200">
      {/* Logout message box */}
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You, Partner!</h1>
        
        {/* Logout description */}
        <p className="text-gray-600 mb-6">
          You’ve successfully logged out from your dashboard. We appreciate your support in nurturing talent!
        </p>

        {/* Redirect to home/login */}
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default LogoutCompany;
