import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>

        {posts.length === 0 && <p>No posts yet.</p>}

        <div className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
