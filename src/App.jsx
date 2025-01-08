import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CartPage from './pages/CartPage';
const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  // const toggleDrawerCartPanel = (newOpen) => () => {
  //   setOpenCartPanel(newOpen);
  // };
  const value = {
    isLogin,
    setIsLogin,
    openCartPanel,
    setOpenCartPanel

  };




  return (
    // Use the correct casing and the `.Provider` syntax for context
    <>
      <MyContext.Provider value={value}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />

        </BrowserRouter>





      </MyContext.Provider>
    </>

  );
}

export default App;
export { MyContext };
