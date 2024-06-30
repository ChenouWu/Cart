// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import HomePage from './HomePage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
           <Route path='/' element={<HomePage/>}/> 
           <Route path='/container' element={<CartContainer/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
