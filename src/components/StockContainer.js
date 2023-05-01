import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, togglePortfolio }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          togglePortfolio={togglePortfolio}
        />
      ))}
    </div>
  );
}

export default StockContainer;

/*
import React from "react";
import Stock from "./Stock";

function StockContainer() {
  return (
    <div>
      <h2>Stocks</h2>
      {** render stock list here**}
      </div>
      );
    }
    
    export default StockContainer;
*/    