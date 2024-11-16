import ClientTradingViewWrapper from '@/components/ClientTradingViewWrapper';

export default function FinancialAnalytics() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Financial Analytics</h1>
      <div className="max-w-6xl w-full">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Market Analysis</h2>
          <div className="w-full h-[600px] border rounded-lg shadow-sm overflow-hidden">
            <ClientTradingViewWrapper />
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Portfolio Analytics</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </div>
    </main>
  );
} 