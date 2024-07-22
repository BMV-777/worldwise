import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Product from "./components/pages/Product/Product";
import Homepage from "./components/pages/Homepage/Homepage";
import Pricing from "./components/pages/Pricing";
import PageNotFound from "./components/pages/PageNotFound";
import AppLayout from "./components/pages/AppLayout/AppLayout";
import Login from "./components/pages/Login/Login";
import CityList from "./components/CityItem/CityList/CityList";
import CountryList from "./components/CountryItem/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

// // import City from "./components/City/City";
// // import PageNav from "./components/PagNav/PageNav";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const date = await res.json();

        setCities(date);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to={"cities"} />} />
          {/* <Route
            index
            element={
              <CityList cities={cities} isLoading={isLoading} key={cities.id} />
            }
          /> */}
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading} key={cities.id} />
            }
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 17/214
{
  /* rfc */
}
{
  /* csm */
}
