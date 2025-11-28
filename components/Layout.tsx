import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  const isActive = (path: string) => location.pathname === path 
    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50';

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navigate('/')}>
                <div className="h-8 w-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-2 shadow-sm group-hover:shadow-md transition-all">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">HSC Genius</span>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
                <button
                  onClick={() => navigate('/')}
                  className={`${isActive('/')} inline-flex items-center px-4 pt-1 text-sm font-medium h-full border-b-2 border-transparent transition-colors duration-200`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate('/history')}
                  className={`${isActive('/history')} inline-flex items-center px-4 pt-1 text-sm font-medium h-full border-b-2 border-transparent transition-colors duration-200`}
                >
                  History
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex flex-col items-end mr-2">
                <span className="text-sm font-medium text-gray-900">{user.name}</span>
                <span className="text-xs text-gray-500">Student</span>
              </div>
              <button
                onClick={onLogout}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="sm:hidden border-t border-gray-200 flex justify-around py-3 bg-white">
            <button
                onClick={() => navigate('/')}
                className={`flex-1 text-center ${location.pathname === '/' ? 'text-indigo-600 font-semibold' : 'text-gray-500'} text-sm p-2`}
            >
                Quiz
            </button>
            <button
                onClick={() => navigate('/history')}
                className={`flex-1 text-center ${location.pathname === '/history' ? 'text-indigo-600 font-semibold' : 'text-gray-500'} text-sm p-2`}
            >
                History
            </button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default Layout;