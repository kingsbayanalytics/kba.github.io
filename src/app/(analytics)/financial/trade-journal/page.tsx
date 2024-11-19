'use client';
import { useState } from 'react';
import TradingViewWidget from '@/components/TradingViewWidget';
import TradeImport from '@/components/TradeImport';
import TradesTable from '@/components/TradesTable';
import { Button } from '@/components/ui/button';

export default function TradingJournalPage() {
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trading Journal</h1>
        <Button 
          onClick={() => setShowImport(true)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Import Trades
        </Button>
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Import Trades</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowImport(false)}
              >
                ✕
              </Button>
            </div>
            <TradeImport onComplete={() => setShowImport(false)} />
          </div>
        </div>
      )}
    </div>
  );
} 