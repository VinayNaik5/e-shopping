import React, { useEffect, useState } from "react";
import axios from "axios";
// import Details from "./Details";

import ReactStar from "react-rating-stars-component";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showProductPage, setShowProductPage] = useState(false);
  const [prodInd, setProdInd] = useState(0);

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

  const handleProductClick = (ind) => {
    console.log("Hello", ind);
    setShowProductPage(true);
    setProdInd(ind);
  };
  const handleProductDetailsClick = () => {
    setShowProductPage(false);
  };
  return (
    <>
      {showProductPage ? (
        <div className="">
          <button
            className="btn btn-primary mt-2 ms-3"
            onClick={() => handleProductDetailsClick()}
          >
            Go Back to Product List
          </button>
          <div className="row align-items-center justify-content-center ">
            <div className="col p-3 m-2 justify-content-center ">
              <div className="float-start">
                <img
                  src={products[prodInd].images[0]}
                  alt=""
                  className="float-start img-fluid"
                />
              </div>
            </div>
            <div className=" p-3 m-2 col ">
              <div className="h2 fw-bold">{products[prodInd].title}</div>
              <div className=" pb-1">
                <ReactStar
                  value={products[prodInd].rating}
                  size={24}
                  edit={false}
                ></ReactStar>
              </div>
              <hr></hr>
              <div className="fs-6 m-1 text-secondary">
                MRP: <s className="text-dark">&#8377;{products[prodInd].price}</s>
              </div>
              <div className="fs-6 m-1 text-secondary">
                Deal of the Day:{" "}
                <span className="text-danger fs-5 fw-bolder">
                  &#8377;
                  {(
                    products[prodInd].price -
                    (products[prodInd].price -
                      (products[prodInd].price *
                        products[prodInd].discountPercentage) /
                        100)
                  ).toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="fs-6 m-1 text-secondary">
                You save:{" "}
                <span className="text-danger fs-6 fw-bolder">
                  &#8377;
                  {(
                    products[prodInd].price -
                    (products[prodInd].price *
                      products[prodInd].discountPercentage) /
                      100
                  ).toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="fs-7 m-1 text-secondary">
                Description:{" "}
                <span className="text-dark">
                  {" "}
                  {products[prodInd].description}{" "}
                </span>
              </div>
            </div>
            <div className="col col-2 ">
              <div className="">Buy now and add to cart</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <div className="container p-3 m-2 justify-content-center ">
            <div className="row g-4 ">
              {products.map((prod, ind) => {
                return (
                  <div
                    className=" col col-lg-3 col-md-4 col-sm-6 col-12"
                    key={ind}
                  >
                    <div
                      className="card card-border h-100 pb-2 "
                      onClick={() => handleProductClick(ind)}
                    >
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
      )}
    </>
  );
};

export default Products;
