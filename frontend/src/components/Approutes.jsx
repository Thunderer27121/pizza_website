import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Menu from "./Menu"
import Products from "./Products"
import Items from "./Items"
import Cart from "./Cart"
import SearchedItems from "./SearchedItems"
const Approutes = () => {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/products/:category" element={<Products/>}/>
            <Route path="/products/:category/:item" element={<Items/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:item" element={<SearchedItems/>}/>

       </Routes>
  )
}

export default Approutes