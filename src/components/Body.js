import { useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState(resList);

useEffect(() => {
  fetchData();
},[]);

const fetchData = async() =>{
  const data = await fetch (
    "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
  );

  const json = await data.json();
  console.log(json);

 // setList(json.data.cards);\

};

if (list.length ===0){
  return <Shimmer/>
}

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter(
              (res) => res.info.avgRating > 4
            );
            setList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {list.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;   