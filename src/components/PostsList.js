import React from "react";
import PostCard from "../components/PostCard";
import { useQuery, gql } from "@apollo/client";

const RESOURCES_QUERY = gql`
  {
    resources {
      nodes {
      id
      title
      date
      slug
      }
    }
  }
`;

export default function PostsList() {
  const { data, loading, error } = useQuery(RESOURCES_QUERY);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;

  const postsFound = Boolean(data?.resources.nodes.length);
  if (!postsFound) {
    return <p>No matching posts found.</p>;
  }

  console.log(data);

  return (
    <div className="posts-list">
      {data.resources.nodes.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
