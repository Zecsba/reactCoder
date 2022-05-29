import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className='flex'>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:idcategory' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
           
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
