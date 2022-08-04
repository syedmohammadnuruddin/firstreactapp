import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products/Products';
import Stories from './components/Stories/Stories';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
