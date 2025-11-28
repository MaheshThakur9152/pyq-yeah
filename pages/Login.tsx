import React, { useState } from 'react';
import Button from '../components/Button';

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    onLogin(name.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl rounded-2xl sm:px-12 backdrop-blur-xl bg-opacity-95">
          <div className="text-center mb-8">
             <div className="mx-auto h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-3xl">H</span>
             </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">HSC Genius</h2>
            <p className="mt-2 text-sm text-gray-500">
              Master Physics, Chemistry & Math with AI
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-1">
                Student Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                  placeholder="e.g. Alex Doe"
                  value={name}
                  onChange={(e) => {
                      setName(e.target.value);
                      setError('');
                  }}
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600 pl-1">{error}</p>}
            </div>

            <div>
              <Button type="submit" className="w-full text-base py-3 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5">
                Start Learning Journey
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
             <p className="text-xs text-gray-400">By continuing, you're ready to ace your exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;