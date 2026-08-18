import React from 'react';
import Header from './Header';

export default function Layout({ children, activeTab, setActiveTab, darkMode, setDarkMode, currency, setCurrency }) {
  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 ${darkMode ? 'dark' : ''}`}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currency={currency}
        setCurrency={setCurrency}
      />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="py-6 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>Fuel Meter Web • Minimalist Fuel & Odometer Analytics</p>
      </footer>
    </div>
  );
}
