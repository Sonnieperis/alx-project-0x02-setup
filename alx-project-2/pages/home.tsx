import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-blue-700 text-white rounded"
      >
        Add Post
      </button>

      {/* Existing static cards */}
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

      {/* Newly added dynamic posts */}
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {/* Modal */}
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
}
