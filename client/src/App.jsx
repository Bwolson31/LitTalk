import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  // Check if the current path is /login or /signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* Conditionally render the Header */}
        {!isAuthPage && <Header />}
        
        <Navbar /> {/* Navbar can now use the context for authentication */}

        <Container className="main-content">
          <div className="container">
            <Outlet /> {/* Used for rendering child components */}
          </div>
        </Container>

        <Footer />
      </div>
    </ApolloProvider>
  );
}



export default App;