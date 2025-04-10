import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const [user_type, set_user_type] = useState('student'); // track user type selection
  const navigate = useNavigate();

  // handle form submission
  const handle_signup = (e) => {
    e.preventDefault();
    navigate(user_type === 'student' ? '/login' : '/login'); // redirect after signup
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handle_signup} className="space-y-4">
        {/* User type dropdown */}
        <select
          value={user_type}
          onChange={(e) => set_user_type(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>

        {/* Conditional form fields based on user type */}
        {user_type === 'student' ? (
          <>
            <input placeholder="Email" required className="w-full p-2 border rounded" />
            <input placeholder="Password" required type="password" className="w-full p-2 border rounded" />
            <input placeholder="Username" required className="w-full p-2 border rounded" />
            <input placeholder="Date of Birth" required type="date" className="w-full p-2 border rounded" />

            {/* Gender dropdown */}
            <select required className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input placeholder="School Name" required className="w-full p-2 border rounded" />
          </>
        ) : (
          <>
            <input placeholder="Email" required className="w-full p-2 border rounded" />
            <input placeholder="Password" required type="password" className="w-full p-2 border rounded" />
            <input placeholder="Username" required className="w-full p-2 border rounded" />
            <input placeholder="Company Name" required className="w-full p-2 border rounded" />
            <input placeholder="Contact Number" required className="w-full p-2 border rounded" />
          </>
        )}

        {/* Submit button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
