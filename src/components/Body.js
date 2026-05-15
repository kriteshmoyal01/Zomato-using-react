import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState(resList);

  const [filteredRestaurant, setFilteredRestaurant] =
    useState(resList);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  // Offline Check
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like u are offline, please check your
        network
      </h1>
    );
  }

  // Shimmer UI
  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      {/* Search and Filter Section */}
      <div className="filter">

        <div className="search">

          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filtered = list.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>

        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter(
              (res) => res?.info?.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

      </div>

      {/* Restaurant Cards */}
      <div className="res-container">

        {filteredRestaurant.map((res) => (
          <Link
            key={res?.info?.id}
            to={"/restaurants/" + res?.info?.id}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}

      </div>

    </div>
  );
};

export default Body;

// import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

// const Body = () => {
//   const [list, setList] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   console.log("body rendered");

//   useEffect(() => {
//     fetchData();
//   }, []);
// const fetchData = async () => {
//   try {
//     const data = await fetch(
//       "https://corsproxy.io/?url=https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//     );
//     const json = await data.json();

//     const restaurants =
//       json?.data?.cards          // ✅ fixed: data not info
//         ?.filter((item) => item?.card?.card?.info)
//         ?.map((item) => item?.card?.card) || [];

//     setList(restaurants.length > 0 ? restaurants : resList);
//     setFilteredRestaurant(restaurants.length > 0 ? restaurants : resList);

//   } catch (err) {
//     console.log("API failed, using mockData:", err.message);
//     setList(resList);            // ✅ fixed: pass resList, not undefined
//     setFilteredRestaurant(resList);
//   } finally {
//     setIsLoading(false);         // ✅ always stop shimmer
//   }
// };

//   // Shimmer until API loads
//   if (list.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             onClick={() => {
//               console.log(searchText);
//               const filtered = list.filter((res) =>
//                 res?.info?.name
//                   ?.toLowerCase()
//                   .includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filtered); // ✅ update display state
//             }}
//           >
//             Search
//           </button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = list.filter(
//               (res) => res?.info?.avgRating > 4
//             );
//             setFilteredRestaurant(filteredList); // ✅ update display state
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {filteredRestaurant.map((res) => ( // ✅ render display state
//           <RestaurantCard key={res.info.id} resData={res} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


// import { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [list, setList] = useState(resList);
//   const [filteredRestaurant, setfilteredRestaurant] = useState(resList);
//   const [searchText, setsearchText] = useState("");

//   console.log("body rendered");

//   return list.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => setsearchText(e.target.value)}
//           />
//           <button
//             onClick={() => {
//               console.log(searchText);
//               const filtered = list.filter((res) =>
//                 res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setfilteredRestaurant(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = list.filter(
//               (res) => res?.info?.avgRating > 4
//             );
//             setfilteredRestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {filteredRestaurant.map((res) => (  // ✅ only change
//           <link key={res.info.id} to ={/restaurants" + res.info.id}>< RestaurantCard  resData={res} /><link/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;