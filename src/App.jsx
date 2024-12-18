import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Shipping from "./components/shipping/Shipping";
import Products from "./pages/products/Products";
import FAQ from "./pages/faq/FAQ";
import CustomerClub from "./pages/customer/CustomerClub";
import Footer from "./components/footer/Footer";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/customer", element: <CustomerClub /> },
  ]);

  return (
    <div className="app">
      <Shipping />
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
