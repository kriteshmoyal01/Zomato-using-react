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
    <div className="nav-item">
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
  const { resData } = props;

const {
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla: { deliveryTime },   // ✅ nested destructuring
} = resData?.info;


  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "340645",
      name: "RNR Biryani - Taste of 1953",
      cloudinaryImageId: "jhdven0c7dkmypffoigf",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "South Indian", "Kebabs"],
      avgRating: 4.4,
      sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "769775",
      name: "Nahdi Mandi Restaurant",
      cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/9/28/7d916bb0-430c-41f8-81e3-43705ea677df_a594e0f1-2332-4f29-bf86-183ca449e85d.jpg",
      costForTwo: "₹450 for two",
      cuisines: ["Biryani", "Arabian"],
      avgRating: 4.3,
      sla: { deliveryTime: 34 },
    },
  },
  {
    info: {
      id: "485933",
      name: "Dindigul Thalappakatti - Since 1957",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/f89894cc-4731-432b-96bb-3788b53336c6_485933.JPG",
      costForTwo: "₹500 for two",
      cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
      avgRating: 4.3,
      sla: { deliveryTime: 38 },
    },
  },
  {
    info: {
      id: "1031311",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/49bb331c-3f0e-4f54-9117-2a27a98e3355_1031311.jpg",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "Snacks", "Fast Food", "Biryani"],
      avgRating: 4.3,
      sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "18973",
      name: "Nandhana Palace",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.4,
      sla: { deliveryTime: 25 },
    },
  },
  
  {
    info: {
      id: "42060",
      name: "Sharief Bhai Biryani",
      cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2026/2/16/b81a5589-4f88-4bc7-94e8-250403bb7c92_1990d444-f54d-4b6f-aba3-f9b648d1a0bc.png_compressed",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Kebabs", "Mughlai", "Arabian"],
      avgRating: 4.2,
      sla: { deliveryTime: 36 },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id}resData={res} />
        ))}
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