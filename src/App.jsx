import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";
import CartContextProvider from "./Context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='flex'>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:idcategory' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart />}/> 
              </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
