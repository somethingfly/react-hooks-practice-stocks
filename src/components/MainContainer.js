import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [formatData, setFormatData] = useState({
    sortAlphabetically: false,
    sortPrice: false,
    filter: "Tech",
  });

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => (r.json()))
      .then((stocks) => setStocks(stocks))
    },[]);

  let sortedStocks = stocks;
  sortedStocks = formatData.sortAlphabetically ? sortedStocks.toSorted((a, b) => a.name.localeCompare(b.name)) : sortedStocks;
  sortedStocks = formatData.sortPrice ? sortedStocks.toSorted((a, b) => a.price - b.price) : sortedStocks;
  
  const filteredSortedStocks = sortedStocks.filter((stock) => stock.type === formatData.filter);

  function addPortfolio(stock) {
    if (portfolio.indexOf(stock) === -1) {
      const newPortfolio = [...portfolio, stock];
      setPortfolio(newPortfolio); 
    }
  }

  function removePortfolio(stock) {
    const newPortfolio = portfolio.filter((pStock) => pStock !== stock);
    setPortfolio(newPortfolio);
  }

  function onFormat(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setFormatData({
      ...formatData,
      [name]: value,
    });
  }

  return (
    <div>
      <SearchBar 
        formatData={formatData}
        onFormat={onFormat}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredSortedStocks}
            togglePortfolio={addPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            togglePortfolio={removePortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

/*
import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
*/