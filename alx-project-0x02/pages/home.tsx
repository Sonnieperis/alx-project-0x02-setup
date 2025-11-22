import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <Card
        title="Card One"
        content="This is the first reusable card component."
      />

      <Card
        title="Card Two"
        content="This card demonstrates dynamic props."
      />

      <Card
        title="Card Three"
        content="You can now reuse this component anywhere."
      />
    </div>
  );
}
