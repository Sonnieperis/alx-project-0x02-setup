import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-gray-700">This page demonstrates the reusable Button component.</p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
        <div className="flex items-center space-x-2">
          <span className="w-36">Small / rounded-sm</span>
          <Button title="Small" size="small" shape="rounded-sm" />
        </div>

        <div className="flex items-center space-x-2">
          <span className="w-36">Medium / rounded-md</span>
          <Button title="Medium" size="medium" shape="rounded-md" />
        </div>

        <div className="flex items-center space-x-2">
          <span className="w-36">Large / rounded-full</span>
          <Button title="Large" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
}
