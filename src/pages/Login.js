import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const navigate = useNavigate();

  // Handle login and redirect based on user type
  const handleLogin = () => {
    if (userType === 'student') navigate('/dashboard/student');
    else navigate('/dashboard/company');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Select user type */}
        <div className="mb-4">
          <label className="block text-gray-700">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="student">Student</option>
            <option value="company">Company</option>
          </select>
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
