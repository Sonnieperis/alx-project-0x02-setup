// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow">
      <nav className="flex space-x-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <Link href="/home" className="text-blue-600 hover:underline">
          Home Page
        </Link>

        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
