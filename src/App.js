
import './App.css';
import Application from './Components/Application';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
     
     <BrowserRouter>

     <Routes>
      <Route path='/' element={<Application></Application>}>

      </Route>
     </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
