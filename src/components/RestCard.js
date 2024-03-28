import { CDN_URL } from "../utils/constant";

export const RestCard = (props) => {
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resObj?.info;

  return (
    <div className="rest-card">
      <div className="rest-card-img">
        <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="rest-card-items">
        <li className="card-items-name">{name}</li>
        <li className="card-items-avgRating">{avgRating}</li>
        <li className="card-items-cuisines">{cuisines.join(",")}</li>
        <li className="card-items-costForTwo">{costForTwo}</li>
      </div>
    </div>
  );
};
export default RestCard;
