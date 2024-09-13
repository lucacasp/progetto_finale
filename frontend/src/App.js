import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import eyewear_banner from "./Components/Assets/eyewear_banner.png";
import glassify_banner_sunglasses_cropped2 from "./Components/Assets/glassify_banner_sunglasses_cropped2.png";
import LoginSignup from "./Pages/LoginSignup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const backend_url = 'hhttps://glassyecommerce.herokuapp.com/';
export const currency = '$';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/sunglasses" element={<ShopCategory banner={glassify_banner_sunglasses_cropped2} category="sunglasses" />} />
          <Route path="/eyewear" element={<ShopCategory banner={eyewear_banner} category="eyewear" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
