import React from "react";
import { Link } from "react-router-dom";
import PostPageContent from "../components/PostPageContent";
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

export default function PostPage(props) {

  const { data, loading, error } = useQuery(RESOURCES_QUERY);

  

  const postFound = true;

  return (
    <div className="page-container">
      <Link to="/">← Home</Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.resources} />
      )}
    </div>
  );
}
