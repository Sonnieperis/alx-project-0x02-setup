import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-700 text-white p-4">
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/home">Home Page</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
