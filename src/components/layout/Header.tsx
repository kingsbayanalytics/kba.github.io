export default function Header() {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Kings Bay Analytics</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/about" className="hover:text-blue-600">About</a>
        </div>
      </nav>
    </header>
  )
} 