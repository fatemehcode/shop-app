import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Testp from './components/test';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        
        {/*<Testp id="4"/> */}
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route to="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
