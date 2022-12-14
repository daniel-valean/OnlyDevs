import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import Forms from './pages/Forms/Forms.jsx'
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay'
import AllProjects from './pages/AllProjects/AllProjects'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Account from './pages/Account/Account';
import DonationProcessed from './pages/DonationProcessed/DonationProcessed';



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
      <HashRouter>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/forms/:formType' element={<Forms />} />
            <Route path='/project-display/:projectId' element={<ProjectDisplay />} />
            <Route path='/all-projects' element={<AllProjects/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/donation-processed/:projectId' element={<DonationProcessed/>} />
            <Route path='*' element={<h1>Wrong page!</h1>} />
          </Routes>
        </ChakraProvider>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
