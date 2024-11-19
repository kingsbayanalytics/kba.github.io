 'use client';
import { useState } from 'react';
import TradingViewWidget from '@/components/TradingViewWidget';
import TradeImport from '@/components/TradeImport';
import TradesTable from '@/components/TradesTable';

export default function TradingJournalPage() {
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trading Journal</h1>
        <button 
          onClick={() => setShowImport(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Import Trades
        </button>
      </div>

      {/* TradingView Chart */}
      <div className="h-[600px] border rounded-lg overflow-hidden">
        <TradingViewWidget />
      </div>

      {/* Trade Table */}
      <div className="border rounded-lg">
        <TradesTable />
      </div>

      {/* Import Modal */}
      {showImport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-xl font-bold mb-4">Import Trades</h2>
            <TradeImport onComplete={() => setShowImport(false)} />
          </div>
        </div>
      )}
    </div>
  );
}