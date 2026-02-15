import './App.css'
import Header from './components/header/topheader/Header'
import Botomheader from './components/header/botomheader/Botomheader'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/pages/home/Home.jsx";
import Category from "./components/pages/Category/Category.jsx";
import Productdetels from './components/pages/Productdetels/Productdetels.jsx'
import Cart from './components/pages/cart/Cart.jsx'

function App() {

  return (
    <>
      <Header />
      <Botomheader />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:id" element={<Productdetels />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>




      <Footer />
    </>
  )
}

export default App
