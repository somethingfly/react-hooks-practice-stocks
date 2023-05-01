import React from "react";

function Stock({ stock, togglePortfolio }) {
  return (
    <div>
      <div className="card" onClick={() => togglePortfolio(stock)} >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

/*
import React from "react";

function Stock() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Compant Name"}</h5>
          <p className="card-text">{"Stock Price"}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
*/