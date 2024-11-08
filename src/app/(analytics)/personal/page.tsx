export default function PersonalAnalytics() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Personal Analytics</h1>
      <div className="max-w-4xl w-full">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data-Driven Self Improvement</h2>
          <p className="text-lg text-gray-600">
            Exploring personal metrics and insights through data analysis.
          </p>
        </section>
        
        {/* Placeholder for future content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fitness Tracking</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Productivity Analysis</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </div>
    </main>
  )
} 