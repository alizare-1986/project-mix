import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import ProductList from "./components/ProductList";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path="/cart" element={<ShopCart/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/products" element={<ProductList />} />
          <Route path="/" element={<Navigate to={"/products"} />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
