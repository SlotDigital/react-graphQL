import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostCard({ post }) {
  const {
    title,
    date,
    slug,
    featuredImage
  } = post;

  return (
    <div className="post-card">
    
      <Link to={`/resources/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <div className="metadata">
        <p>
          <span className="text-bold">Date:</span> {formatDate(date)}
        </p>
        <p>
          <span className="text-bold">Author:</span> 
        </p>
      </div>
    </div>
  );
}
