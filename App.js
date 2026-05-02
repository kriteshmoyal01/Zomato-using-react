import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => (
  <div className="header">
    <div className="logo_container">
      <img
        className="logo"
        src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
        alt="logo"
      />
    </div>
    <div className="nav_item">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const resData = props.resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resobj = [
  {
    info: {
      id: "671928",
      name: "KFC",
      locality: "7th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      sla: {
        deliveryTime: 18,
      },
      isOpen: true,
    },
  },
  {
    info: {
      id: "10820",
      name: "California Burrito",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Mexican", "American", "Fast Food"],
      avgRating: 4.6,
      sla: {
        deliveryTime: 16,
      },
      isOpen: true,
    },
  },
  {
    info: {
      id: "23678",
      name: "McDonald's",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Cafe"],
      avgRating: 4.4,
      sla: {
        deliveryTime: 18,
      },
      isOpen: true,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />   {/* single object, no map */}
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const Header = () => (
//   <div className="header">
//     <div className="logo_container">
//       <img
//         className="logo"
//         src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
//       />
//     </div>
//     <div className="nav_item">
//       <ul>
//         <li>home</li>
//         <li>about us</li>
//         <li>Contact us</li>
//         <li>cart</li>
//       </ul>
//     </div>
//   </div>
// );

// const styleCard = {
//   backgroundColor: "#f0f0f0"
// };

// const RestaurantCard = (props) => {
//   console.log(props);

//   return (
//     <div className="res_card" style={styleCard}>
//       <h3>{props.resName}</h3>
//       <h4>{props.cuisine}</h4>
//       <h4>{props.star}</h4>
//       <h4>{props.time}</h4>
//     </div>
//   );
// };

// const resobj = [
//   {},
//   {
//     info: {
//       id: "671928",
//       name: "KFC",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/c977fb20-70ec-45cd-8e46-e738e6cd562a_671928.JPG",
//       locality: "7th Block",
//       areaName: "Koramangla",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//       avgRating: 4.1,
//       parentId: "547",
//       avgRatingString: "4.1",
//       totalRatingsString: "7.1K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 1.2,
//         serviceability: "SERVICEABLE",
//         slaString: "15-20 mins",
//         lastMileTravelString: "1.2 km",
//         iconType: "ICON_TYPE_EMPTY"
//       },
//       availability: {
//         nextCloseTime: "2026-05-03 03:00:00",
//         opened: true
//       },
//       isOpen: true,
//       type: "F"
//     }
//   },
//   {
//     info: {
//       id: "10820",
//       name: "California Burrito",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
//       locality: "Koramangala",
//       areaName: "Koramangala",
//       costForTwo: "₹250 for two",
//       cuisines: ["Mexican", "American", "Fast Food"],
//       avgRating: 4.6,
//       parentId: "1252",
//       sla: {
//         deliveryTime: 16
//       },
//       isOpen: true
//     }
//   },
//   {
//     info: {
//       id: "23678",
//       name: "McDonald's",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
//       locality: "5th Block",
//       areaName: "Koramangala",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Cafe"],
//       avgRating: 4.4,
//       parentId: "630",
//       sla: {
//         deliveryTime: 18
//       },
//       isOpen: true
//     }
//   },
//   {}
// ];
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>

//       <div className="res-container">
//         <RestaurantCard resData={resobj[1]} />
//       </div>
//     </div>
//   );
// };
// const AppLayout = () => (
//   <div className="app">
//     <Header />
//     <Body />
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);