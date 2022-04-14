import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// //components:
// import NavBar from './components/NavBar';

//pages:
import Home from './pages/Home';
import Mens from './pages/Men';
import Womens from './pages/Women';

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
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Womens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
