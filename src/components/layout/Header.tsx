import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full p-4 bg-black shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Kings Bay Analytics
        </Link>
        <div className="space-x-6">
          <Link href="/personal" className="text-white hover:text-gray-300 transition-colors">Personal</Link>
          <Link href="/sports" className="text-white hover:text-gray-300 transition-colors">Sports</Link>
          <Link href="/financial" className="text-white hover:text-gray-300 transition-colors">Financial</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
        </div>
      </nav>
    </header>
  )
} 