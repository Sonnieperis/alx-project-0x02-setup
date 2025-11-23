import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PostProps[] = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
    </div>
  );
}
