'use client';
import ClientTradingViewWrapper from '@/components/ClientTradingViewWrapper';
import Link from 'next/link';

export default function FinancialAnalytics() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Financial Analytics</h1>
      <div className="w-full max-w-6xl">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Market Analysis</h2>
            <Link 
              href="/financial/trade-journal" 
              className="text-blue-500 hover:text-blue-600"
            >
              View Trading Journal →
            </Link>
          </div>
          <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
            <ClientTradingViewWrapper />
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 md:p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Portfolio Analytics</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
          <div className="p-4 md:p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </div>
    </main>
  );
} 