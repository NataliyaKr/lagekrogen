import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
//import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CustomerClub from "./pages/CustomerClub";
import FAQ from "./pages/FAQ";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    //{ path: "/products", element: <Products /> },
    { path: "/", element: <FAQ /> },
    { path: "/customer", element: <CustomerClub /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
