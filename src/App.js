import "./App.css";
import Products from "./Components/Products";
import Header from "./Components/Header";
import Details from "./Components/Details";

import productsContext from "./Contexts/Produts_context";

import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(
          "https://dummyjson.com/products/?limit=100"
        );
        await setProducts(resp.data.products);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <productsContext.Provider value={products}>
        <Header />
        <RouterProvider router={routes} />
      </productsContext.Provider>
    </div>
  );
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

export default App;
