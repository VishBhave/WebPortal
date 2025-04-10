import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const [user_type, set_user_type] = useState('student');
  const navigate = useNavigate();

  const handle_signup = (e) => {
    e.preventDefault();
    navigate(user_type === 'student' ? '/login' : '/login');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handle_signup} className="space-y-4">
        <select value={user_type} onChange={(e) => set_user_type(e.target.value)} className="w-full p-2 border rounded">
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>

        {user_type === 'student' ? (
          <>
            <input placeholder="Email" required className="w-full p-2 border rounded" />
            <input placeholder="Password" required type="password" className="w-full p-2 border rounded" />
            <input placeholder="Username" required className="w-full p-2 border rounded" />
            <input placeholder="Date of Birth" required type="date" className="w-full p-2 border rounded" />
            <input placeholder="Gender" required className="w-full p-2 border rounded" />
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}