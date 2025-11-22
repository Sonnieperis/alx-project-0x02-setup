import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Page</h1>
      </main>

const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>

      <div className="flex gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
