import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../utils/Heroo.png';

// Simulated student data: completed subtopics count
const programming_languages = [
  {
    name: 'JavaScript',
    students: [
      { name: 'Raj', completedTopics: 8 },
      { name: 'Rahul', completedTopics: 6 },
      { name: 'Rohan', completedTopics: 9 },
    ],
  },
  {
    name: 'Python',
    students: [
      { name: 'Raj', completedTopics: 7 },
      { name: 'Kunal', completedTopics: 5 },
      { name: 'Akshay', completedTopics: 10 },
    ],
  },
  {
    name: 'Ruby',
    students: [
      { name: 'Sid', completedTopics: 6 },
      { name: 'Bob', completedTopics: 4 },
      { name: 'Vivor', completedTopics: 8 },
    ],
  },
];

const CompanyDashboard = () => {
  const navigate = useNavigate();

  // Convert completed topics into score percentage (10% per topic)
  const calculateScore = (completedTopics) => completedTopics * 10;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Company Dashboard</h2>

      <div className="space-y-8">
        {programming_languages
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, students }) => (
            <div key={name} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">{name}</h3>
              <ul className="space-y-3">
                {students
                  .sort((a, b) => calculateScore(b.completedTopics) - calculateScore(a.completedTopics))
                  .map((student, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={profilePic}
                          alt={student.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="text-lg font-medium">{student.name}</span>
                      </div>
                      <span className="text-blue-600 font-bold">{calculateScore(student.completedTopics)}%</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/companylogout')}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default CompanyDashboard;
