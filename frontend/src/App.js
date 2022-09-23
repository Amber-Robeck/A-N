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
import AdminView from './pages/AdminView';
import AdminUpdate from './pages/AdminUpdate';
import NewProduct from './components/Admin/NewProduct';


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
        <Route path="/admin/create" element={<NewProduct />} />
        <Route path="/admin/view" element={<AdminView />} />
        <Route path="/admin/update/:productId" element={<AdminUpdate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
