import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product";
import Homepage from "./components/pages/Homepoges/Homepage";
import Pricing from "./components/pages/Pricing";
import PageNotFound from "./components/pages/PageNotFound";
import AppLayout from "./components/pages/AppLayout";
// import PageNav from "./components/PagNav/PageNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 17/211
