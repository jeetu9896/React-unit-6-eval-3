
import './App.css';
import { Login } from './Login';
import { Home } from './Component/Home';
import {Cart} from './Component/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      {/* <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element= {<Home />} />
      <Route path ="/cart" element= {<Cart />} />
      </Routes> */}
  
      <Home />
      {/* <Cart /> */} 
      {/* <Product /> */}
    </div>
  );
}

export default App;
