import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BackgroundAnimation from './components/BackgroundAnimation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';

export default function App() {
  // Page Routing State: 'home' | 'login' | 'signup'
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'login' || hash === 'signup') return hash;
    return 'home';
  });

  // Dark/Light Theme State - Default to 'light' as requested
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('shailesh_portfolio_theme') || 'light';
  });

  // Global Toast Notification State
  const [toast, setToast] = useState(null);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shailesh_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Synchronize hash in URL for back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'login' || hash === 'signup' || hash === 'home') {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="app-wrapper">
      {/* Subtle Restrained Background Depth Canvas */}
      <BackgroundAnimation />

      {/* Dynamic Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={navigateToPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Page View */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={navigateToPage} 
            onShowToast={showToast} 
          />
        )}

        {currentPage === 'login' && (
          <LoginPage 
            setCurrentPage={navigateToPage} 
            onShowToast={showToast} 
          />
        )}

        {currentPage === 'signup' && (
          <SignupPage 
            setCurrentPage={navigateToPage} 
            onShowToast={showToast} 
          />
        )}
      </main>

      {/* Modern Footer */}
      <Footer 
        setCurrentPage={navigateToPage} 
        onShowToast={showToast} 
      />

      {/* Global Interactive Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}
