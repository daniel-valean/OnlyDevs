import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import Forms from './pages/Forms/Forms.jsx'
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/forms/:formType' element={<Forms />} />
            <Route path='/project-display' element={<ProjectDisplay />} />
            <Route path='*' element={<h1>Wrong page!</h1>} />
          </Routes>
        </ChakraProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
