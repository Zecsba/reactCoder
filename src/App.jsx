import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from "./components/Cart";
import CartContextProvider from "./Context/CartContext";
import LeerDatos from "./subirDatos/LeerDatos";

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
                <Route path="/leerDatos" element={<LeerDatos />}/>
              </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
