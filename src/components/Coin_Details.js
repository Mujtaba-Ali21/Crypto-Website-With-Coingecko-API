import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Coin_Details() {
  const [coin, setCoin] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <div className="grey-bg container">
        <section id="minimal-statistics">
          <div className="row">
            <div className="col-12 mt-3">
              <Link to="/">
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: "#393939" }}
                >
                  Back To Homepage
                </button>
              </Link>
            </div>
          </div>
          <>
            <div className="row mt-3">
              <div className="col-12 mt-3">
                {coin.image && (
                  <img
                    className="img-fluid mt-2 h-1"
                    src={coin.image.large}
                    alt="Coin Logo"
                  />
                )}

                <span className="text-success m-3 h1">{coin.name}</span>
                <a
                  href={coin.links && coin.links.homepage[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="btn btn-success border-0 text-success m-3"
                    style={{ backgroundColor: "#393939" }}
                  >
                    Official Website
                  </button>
                </a>
              </div>
            </div>
            <div className="row container d-flex flex-wrap mx-5 my-5">
              <div className="col-xl-5 col-sm-6 col-12 mb-5 me-5 ms-5">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="fa-solid fa-chart fa-2x"></i>
                        </div>
                        <div className="text-right mx-4">
                          <h3>Current Renk</h3>
                        </div>
                        <div className="mx-auto">
                          <span className="h3 ms-5">
                            {coin.market_cap_rank}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6 col-12">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="fa-solid fa-wallet fa-2x"></i>
                        </div>
                        <div className="text-right mx-4">
                          <h3>Current Price</h3>
                        </div>
                        {coin.market_data && (
                          <div className="mx-auto">
                            <span className="h3">
                              $ {coin.market_data.current_price.usd}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6 col-12 mb-5 me-5 ms-5">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="fa-solid fa-chart-line fa-2x"></i>
                        </div>
                        <div className="text-right mx-4">
                          <h4>Price Change In 1 Day</h4>
                        </div>
                        {coin.market_data && (
                          <div className="mx-auto">
                            <span className="h4">
                              ${" "}
                              {
                                coin.market_data
                                  .price_change_percentage_24h_in_currency.usd
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6 col-12">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4 ">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="fa-solid fa-chart-line fa-2x"></i>
                        </div>
                        <div className="text-right mx-3">
                          <h4>Price Change In 7 Days</h4>
                        </div>
                        {coin.market_data && (
                          <div className="mx-auto">
                            <span className="h4">
                              $ {
                                coin.market_data
                                  .price_change_percentage_7d_in_currency.usd
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6 col-12 me-5 ms-5">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                          <i className="fa-solid fa-chart-line fa-2x"></i>
                        </div>
                        <div className="text-right mx-2">
                          <h4>Price Change In 1 Year</h4>
                        </div>

                        {coin.market_data && (
                          <div className="mx-auto">
                            <span className="h4">
                              ${" "}
                              {
                                coin.market_data
                                  .price_change_percentage_1y_in_currency.usd
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-sm-6 col-12">
                <div className="card bg-dark text-success">
                  <div className="card-content m-4 ">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="align-self-center">
                        </div>
                        <div className="text-right mx-3">
                          <h3>Liquidity Score</h3>
                        </div>
                        <div className="mx-auto">
                          <span className="h2 ms-5">{coin.liquidity_score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </section>
      </div>
    </>
  );
}

export default Coin_Details;
