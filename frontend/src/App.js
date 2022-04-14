<<<<<<< HEAD
// import './App.css';
=======
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 3dc0ffd200caef32d8c74be159e46a9aea945316

// //components:
// import NavBar from './components/NavBar';

<<<<<<< HEAD
// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth/index.js";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;
=======
//pages:
import Home from './pages/Home';
import Mens from './pages/Men';
import Womens from './pages/Women';

>>>>>>> 3dc0ffd200caef32d8c74be159e46a9aea945316
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
<<<<<<< HEAD
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
=======
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/men" element={<Mens/>}/>
     <Route path="/women" element={<Womens/>}/>
    </Routes>
    </BrowserRouter>
>>>>>>> 3dc0ffd200caef32d8c74be159e46a9aea945316
  );
}

export default App;
