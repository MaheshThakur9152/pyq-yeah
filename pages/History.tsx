import React from 'react';
import { QuizResult, User } from '../types';

interface HistoryProps {
  user: User;
  history: QuizResult[];
}

const History: React.FC<HistoryProps> = ({ user, history }) => {
  const userHistory = history
    .filter(h => h.userId === user.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (userHistory.length === 0) {
    return (
      <div className="text-center py-24 bg-white shadow-sm rounded-2xl border border-gray-100">
        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">No quizzes taken yet</h3>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto">Your learning journey starts here. Take your first quiz to see your progress.</p>
        <a href="/" className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline">Go to Dashboard &rarr;</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Attempt History</h1>
        <div className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wide">
            {userHistory.length} Attempts
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Subject & Topic
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {userHistory.map((record) => {
                const percentage = (record.score / record.totalQuestions) * 100;
                return (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{record.subject}</div>
                      {record.topic && <div className="text-xs text-gray-500 mt-1 flex items-center"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>{record.topic}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-900 mr-1">{record.score}</span>
                          <span className="text-xs text-gray-500">/{record.totalQuestions}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(record.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      <span className="text-gray-400 mx-1">•</span>
                      {new Date(record.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${
                        percentage >= 80 ? 'bg-green-50 text-green-700 border-green-200' : 
                        percentage >= 50 ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                        'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {percentage >= 80 ? 'Excellent' : percentage >= 50 ? 'Good' : 'Review Needed'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;