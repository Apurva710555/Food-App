import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShimmerRec } from "./Shimmer";

const RestMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  const { resID } = useParams();
  console.log(resID);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resID}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    setRestMenu(json?.data);
  };

  if (!restMenu || !restMenu.cards) {
    return <ShimmerRec />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restMenu.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    restMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="rest-menu">
      <h1 className="menu-name">{name}</h1>
      <div className="menu-container">
        <h3 className="menu-rating">
          Rating : {avgRating} ({totalRatingsString}) {costForTwoMessage}
        </h3>
        <h3 className="menu-cuisines">{cuisines?.join(",")}</h3>
        <h3 className="menu-outlet">
          <strong>Outlet</strong> {areaName}
        </h3>
        <h3 className="delivery-time">{sla.deliveryTime} mins</h3>
      </div>

      <h2>
        <strong>Recommended</strong>
      </h2>
      <div className="menu-items">
        {itemCards.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-items-sub">
              <h2 className="item-name">{item.card.info.name}</h2>
              <p className="item-description">{item.card.info.description}</p>
              <p className="item-price">
                Price : Rs.
                {item.card.info.price ? item.card.info.price / 100 : "N.A"}
              </p>
              <p className="item-rating">
                Ratings:{" "}
                {item.card.info.ratings.aggregatedRating.rating
                  ? item.card.info.ratings.aggregatedRating.rating
                  : "NA"}
              </p>
            </div>
            <img
              className="item-image"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestMenu;
