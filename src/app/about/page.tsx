export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="max-w-4xl w-full">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kings Bay Analytics</h2>
          <p className="text-lg text-gray-600">
            A data science portfolio showcasing analytics projects across various domains.
          </p>
        </section>
        
        <section className="prose lg:prose-xl">
          <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
          <p className="text-gray-600 mb-4">
            We combine cutting-edge data science techniques with domain expertise to derive meaningful insights.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Python for Data Analysis</li>
            <li>Machine Learning</li>
            <li>Statistical Modeling</li>
            <li>Data Visualization</li>
          </ul>
        </section>
      </div>
    </main>
  )
} 