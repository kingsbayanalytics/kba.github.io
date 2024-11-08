import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Kings Bay Analytics
        </Link>
        <div className="space-x-6">
          <Link href="/personal" className="hover:text-blue-600">Personal</Link>
          <Link href="/sports" className="hover:text-blue-600">Sports</Link>
          <Link href="/financial" className="hover:text-blue-600">Financial</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </div>
      </nav>
    </header>
  )
} 