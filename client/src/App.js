import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import Forms from './pages/Forms/Forms.jsx';
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/forms/:formType' element={<Forms/>}/>
          <Route path='/project-display' element={<ProjectDisplay/>}/>
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
