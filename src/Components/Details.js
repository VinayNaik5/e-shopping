import React, { useContext } from "react";
import ReactStar from "react-rating-stars-component";

import { useParams } from "react-router-dom";
import productsContext from "../Contexts/Produts_context";

import "./Details.css";

export default function Details() {
  const parms = useParams();
  const prodInd = parms.id;
  const products = useContext(productsContext);
  return (
    <>
      <div className=" p-2 m-1">
        <div className="row align-items-center justify-content-center">
          <div className="col p-3 m-2  col-lg-4 col-md-4 col-sm-12 col-12">
            <img
              src={products[prodInd].images[0]}
              alt=""
              className="float-start img-fluid imgclass"
            />
          </div>
          <div className=" p-3 m-2 col col-lg-5 col-md-5 col-sm-12 col-12">
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
              <span className="text-secondary fs-6 ">
                (-{products[prodInd].discountPercentage}%)
              </span>{" "}
              <span className="text-danger fs-5 fw-bolder">
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
            <div className="fs-6 m-1 text-secondary">
              You save:{" "}
              <span className="text-danger fs-6 fw-bolder">
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
            <div className="fs-7 m-1 text-secondary">
              Description:{" "}
              <span className="text-dark">
                {" "}
                {products[prodInd].description}{" "}
              </span>
            </div>
            <div className="mt-4">
              <div className="accordion accordion-flush" id="offer-accordion">
                <div className="accordion-item">
                  <div className="accoedion-header h5 text-danger">Offers</div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="offer-one">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#offerCollapse-one-body"
                      aria-expanded="false"
                      aria-controls="offerCollapse-one-body"
                    >
                      Offer 1
                    </button>
                  </div>
                  <div
                    className="collapse accordion-collapse p-2"
                    id="offerCollapse-one-body"
                    aria-labelledby="offer-one"
                    data-bs-parent="offer-accordion"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum minima unde, consectetur omnis earum aspernatur, id
                    praesentium libero accusamus sed quidem. Tempora, odit?
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-header" id="offer-two">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#offerCollapse-two-body"
                      aria-expanded="false"
                      aria-controls="offerCollapse-two-body"
                    >
                      Offer 2
                    </button>
                  </div>
                  <div
                    className="collapse accordion-collapse p-2"
                    id="offerCollapse-two-body"
                    aria-labelledby="offer-two"
                    data-bs-parent="offer-accordion"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum minima unde, consectetur omnis earum aspernatur, id
                    praesentium libero accusamus sed quidem. Tempora, odit?
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-header" id="offer-three">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#offerCollapse-three-body"
                      aria-expanded="false"
                      aria-controls="offerCollapse-three-body"
                    >
                      Offer 3
                    </button>
                  </div>
                  <div
                    className="collapse accordion-collapse p-2"
                    id="offerCollapse-three-body"
                    aria-labelledby="offer-three"
                    data-bs-parent="offer-accordion"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum minima unde, consectetur omnis earum aspernatur, id
                    praesentium libero accusamus sed quidem. Tempora, odit?
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 m-1 d-flex justify-content-between text-center">
              <div className="p-2 m-1">
                <i class="bi bi-truck h1 text-primary"></i>
                <p>Delivered by our Partners</p>
              </div>
              <div className="p-2 m-1">
                <i class="bi bi-arrow-return-left h1 text-primary"></i>
                <p>10 Day return</p>
              </div>
              <div className="p-2 m-1">
                <i class="bi bi-cash-coin h1 text-primary"></i>
                <p>Pay on Delivery</p>
              </div>
              <div className="p-2 m-1">
                <i class="bi bi-box-seam h1 text-primary"></i>
                <p>No Contact Delivery</p>
              </div>
            </div>
          </div>

          <div className="col col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="border border-solid rounded-1 p-2">
              {/* <div className="">Buy now and add to cart</div> */}
              <div className="mb-2">
                <span className="fs-5 fw-bolder ">
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
              <div className="fs-6 mb-2">
                FREE delivery by{" "}
                <span className="fw-bolder">Date(No expected date)</span>
              </div>

              <div className="fs-6 mb-2">
                {products[prodInd].stock ? (
                  <div>
                    <div className="">
                      <div className="mb-2">
                        <span className="text-success fs-4">In Stock</span>
                      </div>
                      Quanitity:{" "}
                      <select className="dropdown mb-3">
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                      </select>
                    </div>
                    <div className="d-grid gap-2 mb-2">
                      <button className="btn btn-warning">Add to Cart</button>
                      <button className="btn btn-success" type="">
                        Buy Now
                      </button>
                    </div>
                    <div>
                      <i class="bi bi-shield-lock-fill"></i> Secure Transaction
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="">
                      <span className="text-danger fs-4">Out of Stock</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
