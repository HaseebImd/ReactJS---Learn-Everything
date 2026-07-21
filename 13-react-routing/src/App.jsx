import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import MenCollection from "./components/MenCollection";
import WomenCollection from "./components/WomenCollection";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          {/* Nested Routing */}
          <Route path="men" element={<MenCollection />}></Route>
          <Route path="women" element={<WomenCollection />}></Route>
          {/* Dynamic Routing */}
          <Route path=":id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
