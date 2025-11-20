import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-semibold mb-4">Welcome to alx-project-2</h1>
        <p className="text-gray-700">
          This project was scaffolded with TypeScript and Tailwind CSS. Use this
          space to build pages, components, and practice Next.js basics.
        </p>
      </main>
    </div>
  );
};

export default Home;
