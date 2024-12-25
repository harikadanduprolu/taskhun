import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Tasks } from './pages/Tasks';
import { Teams } from './pages/Teams';
import { Settings } from './pages/Settings';
import { HomePage } from './pages/HomePage';

// Simulate authentication state
const isLoggedIn = true; // Change this to true to test the logged-in flow

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page without layout */}
        <Route path="/" element={<HomePage />} />

        {/* Routes that require authentication and layout */}
        {isLoggedIn ? (
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </Layout>
            }
          />
        ) : (
          // Redirect to home if not logged in
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
