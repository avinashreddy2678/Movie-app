
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './searchcomponenrs/Home';
import Shared from './searchcomponenrs/Shared';
import Search from './searchcomponenrs/Search';
import MovieDetail from './Modalbox/MovieDetail';
import Wishlist from './Wishlist/Wishlist';
function App() {
  return (
    <div className="App">
       <Header/>
       
        <Routes>
          <Route  index element={<Home/>}/>
          <Route path='/movies/:type' element={<Shared/>}></Route> 
          <Route path='/search/:id' element={<Search/>}/>
          <Route path='/movie/:detail' element={<MovieDetail/>}/>
          <Route path='/movie/wishlist' element={<Wishlist/>}/>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
