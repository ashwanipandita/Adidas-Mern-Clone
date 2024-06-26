// import logo from './logo.svg';
import './App.css';

import{Routes,Route} from 'react-router-dom';

import Homepage from './components/Home/Homepage';
import Login from './components/Log/Login';
import Register from './components/Reg/Register';
import Loginn from './components/Reg/Loginn';
import AuthContextProvider from './Context/AuthContext';
import FakeStoreAllProducts from './components/FakeStoreAPI/FakeStoreAllProducts';
import AllProducts from './components/FakeStoreAPI/AllProducts';
import FakeStoreSingleProducts from './components/FakeSingle/FakeStoreSingleProducts';
import Render from './components/FakeSingle/Render';





function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <Routes>
        <Route path='/Homepage' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/loginn' element={<Loginn/>} />
        <Route path='/AuthContextProvider' element={<AuthContextProvider/>} />
        <Route path='/Homepage' element={<Homepage />} /> {/* Add this route */}
        <Route path="/AllProducts" element={<AllProducts awdiz={AllProducts} />}/>
        <Route path="/" element={<FakeStoreAllProducts/>} />
        <Route path="/fake-single-product/:id" element={<FakeStoreSingleProducts />} />

        <Route path="/Render" element={<Render />} />


    {/* <Route path='/single-product' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} /> */}
     </Routes>
     </AuthContextProvider>
    </div>
  );
}

export default App;
