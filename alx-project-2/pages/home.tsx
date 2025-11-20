import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <Card
        title="Welcome"
        content="This is a reusable card component created for Task 3."
      />

      <Card
        title="Next.js Project"
        content="We are learning how to build reusable UI components using TypeScript."
      />

      <Card
        title="ALX Frontend"
        content="This project helps you practice Components, Routing, and Props."
      />
    </div>
  );
}
