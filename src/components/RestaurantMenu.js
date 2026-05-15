import { useParams } from "react-router-dom";
import resMock from "../utils/resmockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  //const resInfo = useRestaurantMenu(resId);

  const restaurant = resMock.find(
    (res) => res.id === resId
  );

  if (!restaurant) {
    return <h1>Restaurant not found</h1>;
  }

  const {
    name,
    cuisines,
    costForTwo,
    itemCards,
  } = restaurant;

  return (
    <div className="menu">

      <h1>{name}</h1>

      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹
            {(item?.card?.info?.price ||
              item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RestaurantMenu;
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import resMock from "../utils/resmockData";
// import { Link } from "react-router-dom";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(resMock);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//     );

//     const json = await data.json();
//     console.log(json);

//     setResInfo(json);
//   };

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

//   const itemCards =
//     resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
//       ?.cards?.[1]?.card?.card?.itemCards;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>

//       <p>{cuisines?.join(", ")}</p>

//       <p>{costForTwoMessage}</p>

//       <h2>Menu</h2>

//       <ul>
//         {itemCards?.map((item) => (
//           <li key={item?.card?.info?.id}>
//             {item?.card?.info?.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;