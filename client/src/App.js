import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Homepage/>
    </ChakraProvider>
  );
}

export default App;
