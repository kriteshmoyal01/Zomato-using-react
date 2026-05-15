import { CDN_URL } from "../utils/constant";

const getRatingClass = (rating) => {
  if (rating >= 4.0) return "rating-pill";
  if (rating >= 3.5) return "rating-pill mid";
  return "rating-pill low";
};

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    aggregatedDiscountInfoV3,
  } = resData?.info;

  const offer = aggregatedDiscountInfoV3
    ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
    : null;

  return (
    <div className="res-card">
      <div className="res-card__img-wrap">
        <img
          className="res-logo"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
        {offer && <div className="res-card__offer">{offer}</div>}
      </div>

      <div className="res-card__body">
        <div className="res-card__name">{name}</div>
        <div className="res-card__cuisines">{cuisines.join(", ")}</div>
        <div className="res-card__meta">
          <span className={getRatingClass(avgRating)}>
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            {avgRating}
          </span>
          <span className="res-card__meta-dot"></span>
          <span>{deliveryTime} mins</span>
          <span className="res-card__meta-dot"></span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;







































// import { CDN_URL } from "../utils/constant";

// const styleCard = { backgroundColor: "#ece4e4" };

// const RestaurantCard = ({ resData }) => {  // ✅ destructure directly
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     sla: { deliveryTime },
//   } = resData?.info;

//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };

// export default RestaurantCard;