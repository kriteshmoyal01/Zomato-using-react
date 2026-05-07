import { useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  //what is local state variable - super powerful variable
  const [list, setList] = useState([]);

  const [filteredresturant , setfilteredresturant] = useState([]);

  const [searchText , setsearchText] = useState("");
  // "" empty string , not [] array - because we call .toLowerCase() on it

  //whenever state variable change , react triggers a reconciliation cycle (re-render the components)
  console.log("body rendered")

  useEffect(() => {
    fetchData();
  },[]);


  // we are using the live data in this , by using api
  const fetchData = async() =>{
    const data = await fetch (
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();
    console.log(json);
    // what is optional rendering ? this can be change once again

    // cards[3] is only ONE restaurant — we need to filter ALL cards that have .card.card.info
    // cards[0]=masthead, cards[1]=filter widget, cards[2]=grid — these don't have .info
    const restaurants = json?.data?.cards?.filter(
      (c) => c?.card?.card?.info
    );
    setList(restaurants);
    setfilteredresturant(restaurants);

  };
  // what is conditional rendering ? and termintor operator

  // if (list.length ===0){
  //  return <Shimmer/>
  //  }

  return  list.length === 0? (
    <Shimmer/> 
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }}/>
          <button onClick={() =>{
            //filter the restraunt card and update the ui
            //searchtext
            console.log(searchText);

            const filteredRestaurant = list.filter(
              (res) => res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredresturant(filteredRestaurant);
          }}
          >search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
            // setList was wrong here — it would destroy source of truth
            setfilteredresturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredresturant.map((res) => (
          <RestaurantCard key={res?.card?.card?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// import { useState , useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   //what is local state variable - super powerful variable
//   const [list, setList] = useState(resList);

// const [filteredresturant , setfilteredresturant] = useState([]);

//   const [searchText , setsearchText] = useState([]);

  

//   //whenever state variable change , react triggers a reconciliation cycle (re-render the components)
// console.log("body rendered")

// useEffect(() => {
//   fetchData();
// },[]);


// // we are using the live data in this , by using api
// const fetchData = async() =>{
//   const data = await fetch (
//     "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//   );

//   const json = await data.json();
//   console.log(json);
// // what is optional rendering ? this can be change once again
//   setList(json?.data?.cards[3]?.card?.card?.info);
//   setfilteredresturant(json?.data?.cards[3]?.card?.card?.info);

// };
// // what is conditional rendering ? and termintor operator

// // if (list.length ===0){
// //  return <Shimmer/>
// //  }

//   return  list.length === 0? (
//     <Shimmer/> 
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input type="text" className="search-box" value={searchText} onChange={(e) => {
//             setsearchText(e.target.value);
//           }}/>
//           <button onClick={() =>{
//             //filter the restraunt card and update he ui
//             //searchtext
//             console.log(searchText);

//             const filteredRestaurant = list.filter(
//               (res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
//             );
//             setfilteredresturant(filteredRestaurant);
//           }}
//           >search</button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = list.filter(
//               (res) => res.info.avgRating > 4
//             );
//             setList(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {filteredresturant.map((res) => (
//           <RestaurantCard key={res.info.id} resData={res} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;   