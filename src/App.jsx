import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import AddFuel from './pages/AddFuel';
import FuelCycles from './pages/FuelCycles';
import History from './pages/History';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import { fetchFuelRecords } from './services/fuelRecords';
import { fetchFuelCycles, autoSyncCycles } from './services/fuelCycles';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState('$');
  const [records, setRecords] = useState([]);
  const [cycles, setCycles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const recs = await fetchFuelRecords();
    setRecords(recs);
    const cycs = await autoSyncCycles(recs);
    setCycles(cycs);
    setLoading(false);
  };

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      currency={currency}
      setCurrency={setCurrency}
    >
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div>
          {activeTab === 'dashboard' && (
            <Dashboard
              records={records}
              cycles={cycles}
              currency={currency}
              onNavigateToAddFuel={() => setActiveTab('add-fuel')}
              onNavigateToCycles={() => setActiveTab('cycles')}
            />
          )}

          {activeTab === 'add-fuel' && (
            <AddFuel
              currency={currency}
              onRecordAdded={() => {
                loadData();
                setActiveTab('dashboard');
              }}
            />
          )}

          {activeTab === 'cycles' && (
            <FuelCycles
              cycles={cycles}
              records={records}
              currency={currency}
              onCycleUpdated={loadData}
            />
          )}

          {activeTab === 'history' && (
            <History
              records={records}
              currency={currency}
              onRecordDeleted={loadData}
            />
          )}

          {activeTab === 'analytics' && (
            <Analytics
              cycles={cycles}
              records={records}
              currency={currency}
            />
          )}

          {activeTab === 'reports' && (
            <Reports
              records={records}
              cycles={cycles}
              currency={currency}
            />
          )}
        </div>
      )}
    </Layout>
  );
}
