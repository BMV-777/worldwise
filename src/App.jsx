import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product/Product";
import Homepage from "./components/pages/Homepage/Homepage";
import Pricing from "./components/pages/Pricing";
import PageNotFound from "./components/pages/PageNotFound";
import AppLayout from "./components/pages/AppLayout/AppLayout";
import Login from "./components/pages/Login/Login";
import CityList from "./components/CityItem/CityList/CityList";

// import { useEffect, useState } from "react";
// // import City from "./components/City/City";
// // import PageNav from "./components/PagNav/PageNav";

// const BASE_URL = "http://localhost:9000";

function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(function () {
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(`${BASE_URL}/cities`);
  //       const date = await res.json();

  //       setCities(date);
  //     } catch {
  //       alert("There was an error loading data...");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCities();
  // }, []);

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
// 17/213 /210
{
  /* rfc */
}
{
  /* csm */
}
