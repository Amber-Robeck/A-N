import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// //components:
import NavBar from './components/NavBar';


//pages:
import Home from './pages/Home';
import Mens from './pages/Men';
import Womens from './pages/Women';
import Footer from './components/Footer';
import Gifting from './pages/Gifting';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Admin from './pages/Admin';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/men/:productId" element={<SingleProduct />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
