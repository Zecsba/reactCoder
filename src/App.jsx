import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className='mainContainer flex'>
      <NavBar/>
      <ItemListContainer
      title="Desde el app hacia el Item List container"
      />
    </div>
  );
}

export default App;
