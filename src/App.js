import React from "react";
import { Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";



import "./styles.css";


const App = () => {
  const client = new ApolloClient({
    uri: "https://content.rdux.co.uk/graphql/",
    cache: new InMemoryCache()
  });
  
    return (
    <ApolloProvider client={client}>
        <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/resources/:slug" component={PostPage} />
      </Switch>
      </ApolloProvider>
    )

}

export default App;
