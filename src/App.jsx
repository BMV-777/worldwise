import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product/Product";
import Homepage from "./components/pages/Homepage/Homepage";
import Pricing from "./components/pages/Pricing";
import PageNotFound from "./components/pages/PageNotFound";
import AppLayout from "./components/pages/AppLayout/AppLayout";
import Login from "./components/pages/Login/Login";
import CityList from "./components/CityItem/CityList";
// import City from "./components/City/City";
// import PageNav from "./components/PagNav/PageNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 17/213
{
  /* rfc */
}
{
  /* csm */
}
