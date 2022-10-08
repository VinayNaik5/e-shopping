import React, { useContext } from "react";

import ReactStar from "react-rating-stars-component";

import { Link } from "react-router-dom";

import "./Products.css";
import productsContext from "../Contexts/Produts_context";

const Products = () => {
  const products = useContext(productsContext);

  // const handleProductClick = (ind) => {
  //   console.log("Hello", ind);
  //   setShowProductPage(true);
  //   setProdInd(ind);
  // };
  // const handleProductDetailsClick = () => {
  //   setShowProductPage(false);
  // };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="container p-3 m-2 justify-content-center ">
          <div className="row g-4 align-items-center justify-content-center">
            {products.map((prod, ind) => {
              return (
                <div
                  className=" col col-lg-3 col-md-4 col-sm-6 col-9"
                  key={ind}
                >
                  <div
                    className="card card-border h-100 pb-2 "
                    // onClick={() => handleProductClick(ind)}
                  >
                    <Link to={"details/" + ind}>
                      <img
                        src={prod.images[0]}
                        alt=""
                        className="card-img-top img-fluid img-thumbnail rounded imagecardclass "
                      />
                    </Link>

                    <div className="card-body">
                      <Link to={"details/" + ind} className="link">
                        <div className="card-title fw-bold  text-capitalize">
                          {prod.title}
                        </div>
                      </Link>
                      <div className=" pb-1">
                        <ReactStar
                          value={prod.rating}
                          size={18}
                          edit={false}
                        ></ReactStar>
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
