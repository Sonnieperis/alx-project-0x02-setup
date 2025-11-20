import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">ALX Project 2</div>
        <nav className="flex gap-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/posts"><a className="hover:underline">Posts</a></Link>
          <Link href="/users"><a className="hover:underline">Users</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
