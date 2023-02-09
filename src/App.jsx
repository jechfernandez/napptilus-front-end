import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollTop from "./components/ScrollTop";
import { CartContext } from "./context/CartContext";
import useCart from "./hooks/useCart";
import "./styles/App.scss";
import Breadcrumb from "./components/layout/Breadcrumb";

const App = () => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/product/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
};

export default App;

const Layout = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="bg-gray-50 h-screen py-6 lg:py-8">
        <Outlet />
      </main>
      <ScrollTop />
      <Footer />
    </>
  );
};
