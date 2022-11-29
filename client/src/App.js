import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import Forms from './pages/Forms/Forms.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Homepage/>
      {/* <Forms/> */}
    </ChakraProvider>
  );
}

export default App;
