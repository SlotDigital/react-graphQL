import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostPageContent({ post }) {
  const { date, title, content, author, categories } = post;

  const searchQuery = window.location.pathname.split('/')[2];

  

  const SINGLE_RESOURCE = gql`
  {
    resource(id: "${searchQuery}", idType: SLUG) {
      id
      databaseId
      title
      uri
    }
  }
  `;
  
 



  const { data, loading, error } = useQuery(SINGLE_RESOURCE);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;



  console.log(data.resource.title);

  return (
    <article>
      <h1>{data.resource.title}</h1>
      <p className="post-meta">
        <span role="img" aria-label="writing hand">
          ✍️
        </span>{" "}
         on {formatDate(date)}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
        <div className="categories-list">
          <h2>Categorized As</h2>
          
        </div>
      
    </article>
  );
}
