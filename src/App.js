import { Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Users from './pages/User';
import LearnStorage from './pages/LearnStorage';
import CounterRedux from './pages/CounterRedux';
import ProductRedux from './pages/ProductRedux';
import ProduxPage from './pages/ProduxPage';
import Cart from './pages/Cart';
import LearnForm from './pages/LearnForm';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/user' element={<Users />} />
        <Route path='/learn-form' element={<LearnForm />} />
        <Route path='/learn-storage' element={<LearnStorage />} />
        <Route path='/counter-redux' element={<CounterRedux />} />
        <Route path='/product-redux' element={<ProductRedux />} />
        <Route path='/product/:id' element={<ProduxPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
