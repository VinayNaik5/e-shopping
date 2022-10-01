import React, { useEffect, useState } from "react";
import axios from "axios";

import ReactStar from "react-rating-stars-component";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/products");
        await setProducts(resp.data.products);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="container p-3 m-2 justify-content-center ">
          <div className="row g-4 ">
            {products.map((prod, ind) => {
              return (
                <div
                  className=" col col-lg-3 col-md-4 col-sm-6 col-12"
                  key={ind}
                >
                  <div className="card card-border h-100 pb-2 ">
                    <img
                      src={prod.images[0]}
                      alt=""
                      className="card-img-top img-fluid img-thumbnail rounded imagecardclass "
                      width={200}
                      height={200}
                    />
                    <div className="card-body">
                      <div className="card-title fw-bold  text-capitalize">
                        {prod.title}
                      </div>
                      <div className=" pb-1">
                        <ReactStar value={prod.rating} size={18}></ReactStar>
                      </div>
                      <div className=" card-text">
                        <span className="fw-bold">&#8377;</span>{" "}
                        <span className="h5 ">
                          {(
                            prod.price -
                            (prod.price * prod.discountPercentage) / 100
                          ).toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                        {"  "}
                        <span className="light">
                          <s>&#8377;{prod.price}</s>
                        </span>{" "}
                        ({prod.discountPercentage}%off)
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
