import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample programming languages with default topics
const programming_languages = [
  {
    name: 'JavaScript',
    topics: Array.from({ length: 10 }, (_, i) => ({
      name: `JS Topic ${i + 1}`,
      description: `Description for JS Topic ${i + 1}`,
      example: `Example for JS Topic ${i + 1}`,
      question: `Question for JS Topic ${i + 1}`,
      file: null,
      status: 'not_done',
    })),
  },
  {
    name: 'Python',
    topics: Array.from({ length: 10 }, (_, i) => ({
      name: `Python Topic ${i + 1}`,
      description: `Description for Python Topic ${i + 1}`,
      example: `Example for Python Topic ${i + 1}`,
      question: `Question for Python Topic ${i + 1}`,
      file: null,
      status: 'not_done',
    })),
  },
  {
    name: 'React Js',
    topics: Array.from({ length: 10 }, (_, i) => ({
      name: `React Js Topic ${i + 1}`,
      description: `Description for React Js Topic ${i + 1}`,
      example: `Example for React Js Topic ${i + 1}`,
      question: `Question for React Js Topic ${i + 1}`,
      file: null,
      status: 'not_done',
    })),
  },
];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState({}); // store topic progress
  const studentName = 'Raj Agarwal';

  // Update topic field (file/status) for a specific language and topic
  const updateStatus = (lang, topicIndex, field, value) => {
    setProgress((prev) => {
      const updatedLang = [...(prev[lang] || programming_languages.find(l => l.name === lang).topics)];
      updatedLang[topicIndex] = {
        ...updatedLang[topicIndex],
        [field]: value,
      };
      return {
        ...prev,
        [lang]: updatedLang,
      };
    });
  };

  // Return color class based on status
  const statusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header with welcome message */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Student Dashboard</h2>
        <div className="text-right text-lg font-medium text-gray-700">Welcome, {studentName}</div>
      </div>

      {/* Language cards with topics */}
      <div className="space-y-6">
        {programming_languages.sort((a, b) => a.name.localeCompare(b.name)).map(({ name, topics }) => (
          <div key={name} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">{name}</h3>
            <ul className="space-y-4">
              {(progress[name] || topics).map((topic, index) => (
                <li key={topic.name} className="p-4 border rounded-md bg-gray-50">
                  {/* Topic Info */}
                  <div className={`font-semibold ${statusColor(topic.status)}`}>{topic.name}</div>
                  <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                  <p className="text-sm text-gray-600">Example: {topic.example}</p>
                  <p className="text-sm text-gray-600 mb-2">Question: {topic.question}</p>

                  {/* File upload */}
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="file"
                      onChange={(e) => updateStatus(name, index, 'file', e.target.files[0])}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {topic.file && <span className="text-sm text-gray-600">Uploaded: {topic.file.name}</span>}
                  </div>

                  {/* Status controls */}
                  <div className="flex space-x-2">
                    <select
                      value={topic.status}
                      onChange={(e) => updateStatus(name, index, 'status', e.target.value)}
                      className="p-1 border rounded-md text-sm"
                    >
                      <option value="not_done">Not Done</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>

                    {/* Reset buttons */}
                    <button
                      onClick={() => updateStatus(name, index, 'file', null)}
                      className="text-red-500 text-sm underline"
                    >
                      Delete File
                    </button>
                    <button
                      onClick={() => updateStatus(name, index, 'status', 'not_done')}
                      className="text-blue-500 text-sm underline"
                    >
                      Reset
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/studentlogout')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
