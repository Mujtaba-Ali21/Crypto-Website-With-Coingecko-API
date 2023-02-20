import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/")
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <br />
      <br />
      <div className="bg-image h-100 mt-5">
        <div className="container-fluid">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong border-0">
                  <div className="card-body p-0">
                    <div
                      className="table-responsive table-scroll"
                      data-mdb-perfect-scrollbar="true"
                      style={{ position: "relative", height: "700px" }}
                    >
                      <table className="table table-dark mb-0">
                        <thead style={{ backgroundColor: "#393939" }}>
                          <tr className="text-uppercase text-success">
                            <th scope="col">Coin Logo</th>
                            <th scope="col">Coin Name</th>
                            <th scope="col">Coin Symbol</th>
                            <th scope="col">Current Graph</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {coins.map((item, index) => {
                            return (
                              <tr key={item.id}>
                                <td>
                                  {
                                    <img
                                      src={item.image.small}
                                      className="img-fluid"
                                      alt="Coin Logo"
                                    />
                                  }
                                </td>
                                <td>{item.name}</td>
                                <td>{item.symbol}</td>
                                <td>
                                  {
                                    <img
                                      src={`https://www.coingecko.com/coins/${
                                        index + 1
                                      }/sparkline`}
                                      className="img-fluid"
                                      alt="Coin's Current Graph"
                                    />
                                  }
                                </td>
                                <td>
                                  {
                                    <Link to={`/CoinDetails/${item.id}`}>
                                      <button
                                        className="btn btn-success"
                                        style={{ backgroundColor: "#393939" }}
                                      >
                                        More Details
                                      </button>
                                    </Link>
                                  }
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
