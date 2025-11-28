import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import History from './pages/History';
import { User, QuizResult } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  // Load user and history from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('hsc_app_user');
    const storedHistory = localStorage.getItem('hsc_app_history');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
    setLoading(false);
  }, []);

  const handleLogin = (name: string) => {
    const newUser: User = {
      id: name.toLowerCase().replace(/\s/g, '_'),
      name: name
    };
    localStorage.setItem('hsc_app_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('hsc_app_user');
    setUser(null);
  };

  const saveResult = (result: QuizResult) => {
    const updatedHistory = [...history, result];
    setHistory(updatedHistory);
    localStorage.setItem('hsc_app_history', JSON.stringify(updatedHistory));
  };

  if (loading) return null;

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route 
            path="/login" 
            element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/" 
            element={user ? <Dashboard /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/quiz" 
            element={user ? <Quiz user={user} saveResult={saveResult} /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/history" 
            element={user ? <History user={user} history={history} /> : <Navigate to="/login" replace />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
