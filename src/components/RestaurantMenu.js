import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

const [resInfo , setResInfo] = useState(null);

  useEffect (() => {
    fetchMenu();
    },[]);  //use empty dependency for not rendering again and again



const fetchMenu = async () => {
  const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
  );
  const json = await data.json();
  console.log(json);
};
 

  return resInfo === null ? (
<Shimmer/>
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>

      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;