import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, togglePortfolio } ) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          togglePortfolio={togglePortfolio}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;

/*
import React from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
*/
