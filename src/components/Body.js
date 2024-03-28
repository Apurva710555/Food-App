import RestCard from "./RestCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [RestList, SetRestList] = useState([]);
  const [searchInput, SetsearchInput] = useState("");
  const [filteredList, SetFilteredList] = useState("");
  const [showFilter, SetShowFilter] = useState(false);
  const [checked, SetChecked] = useState("");

  const extractInt = (str) => {
    // Input string
    const inputString = str;

    // Regular expression pattern to match numbers
    const pattern = /\d+/;

    // Using match() to extract the first number from the string
    const match = inputString.match(pattern);

    // Extracted integer
    const extractedInteger = match ? parseInt(match[0]) : null;

    // Logging the extracted integer
    console.log(extractedInteger);
    return extractedInteger;
  };

  const handleFilter = () => {
    let sortedListed = [...filteredList];
    if (checked === "rating") {
      sortedListed = sortedListed.sort(
        (a, b) => b.info.avgRating - a.info.avgRating
      );
    }

    if (checked === "priceLH") {
      sortedListed = sortedListed.sort(
        (a, b) => extractInt(a.info.costForTwo) - extractInt(b.info.costForTwo)
      );
    }

    if (checked === "priceHL") {
      sortedListed = sortedListed.sort(
        (a, b) => extractInt(b.info.costForTwo) - extractInt(a.info.costForTwo)
      );
    }

    SetFilteredList(sortedListed);
  };

  toggleFilter = () => {
    !showFilter ? SetShowFilter(true) : SetShowFilter(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await api.json();
    console.log(json);

    SetRestList(
      json.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants
    );

    SetFilteredList(
      json.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (RestList.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  return (
    <div className="body">
      <div className="body-items">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={searchInput}
            onChange={(e) => {
              SetsearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searched = RestList.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              SetFilteredList(searched);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-dropdown">
          <button className="filter-items" onClick={toggleFilter}>
            filter-by
          </button>
          {showFilter && (
            <div className="filter-nav-items">
              <div className="option">
                <input
                  type="checkbox"
                  checked={checked === "rating"}
                  onChange={(e) => {
                    SetChecked("rating");
                  }}
                />
                By Rating
              </div>
              <div className="option">
                <input
                  type="checkbox"
                  checked={checked === "priceLH"}
                  onChange={(e) => {
                    SetChecked("priceLH");
                  }}
                />
                By Price(Low to High)
              </div>
              <div className="option">
                <input
                  type="checkbox"
                  checked={checked === "priceHL"}
                  onChange={(e) => {
                    SetChecked("priceHL");
                  }}
                />
                By Price(High to Low)
              </div>
              <button className="filter-select" onClick={handleFilter}>
                Apply
              </button>
            </div>
          )}
        </div>
        {/* <div className="filter-btn">
          <button
            className="btn"
            onClick={() => {
              // const listed1 = RestList.filter(
              //   (item) => item.info.avgRating > 4.5
              // );
              const listed = RestList.sort(
                (a, b) => b.info.avgRating - a.info.avgRating
              );
              console.log(listed);
              // console.log(listed1);
              SetFilteredList(listed);
            }}
          >
            filter
          </button>
        </div> */}
      </div>
      {filteredList.length === 0 ? (
        <h1>Search something else...</h1>
      ) : (
        <div className="body-card">
          {filteredList.map((resObj) => (
            <RestCard key={resObj.info.id} resObj={resObj} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
