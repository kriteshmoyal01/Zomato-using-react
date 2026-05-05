const resList = [
  {
    info: {
      id: "409544",
      name: "Madras Meal Company",
      cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/11/12/70b8b399-878b-482d-8e2e-d391f9a74062_c9e54f05-1ce7-4cd2-8604-76d8d1f800cd.jpg",
      costForTwo: "₹250 for two",
      cuisines: ["Chettinad", "South Indian"],
      avgRating: 3.4,
      sla: { deliveryTime: 23 },
    },
  },
  {
    info: {
      id: "1013620",
      name: "Big Bowl",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/cf06adc4-a816-4170-b023-83a41f36db89_1013620.jpg",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 3.4,
      sla: { deliveryTime: 20 },
    },
  },
  {
    info: {
      id: "375041",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2026/1/22/21a1673e-0145-470c-8d54-f9348aa43566_fd050d86-e1b4-4373-b295-f009d3844fad.jpg",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.5,
      sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "340645",
      name: "RNR Biryani - Taste of 1953",
      cloudinaryImageId: "jhdven0c7dkmypffoigf",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "South Indian", "Kebabs"],
      avgRating: 4.4,
      sla: { deliveryTime: 21 },
    },
  },
  {
    info: {
      id: "115918",
      name: "Oottupura",
      cloudinaryImageId: "erfmzrfq4daulyf4opkv",
      costForTwo: "₹268 for two",
      cuisines: ["Kerala", "South Indian"],
      avgRating: 3.3,
      sla: { deliveryTime: 29 },
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
      sla: { deliveryTime: 32 },
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
      sla: { deliveryTime: 21 },
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
      name: "Burger Singh",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/49bb331c-3f0e-4f54-9117-2a27a98e3355_1031311.jpg",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "Snacks", "Fast Food", "Biryani"],
      avgRating: 4.3,
      sla: { deliveryTime: 35 },
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

  {
    info: {
      id: "1087169",
      name: "Mealy - Your Everyday Meal",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/29/c3f3ea1a-ce72-4671-8ebb-4012734c1faa_1087169.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Street Food", "Beverages"],
      avgRating: 4.0,
      sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "66864",
      name: "Homely",
      cloudinaryImageId: "q5mkhqubf3fkun1gc41v",
      costForTwo: "₹200 for two",
      cuisines: ["Home Food", "South Indian", "Beverages", "Desserts"],
      avgRating: 4.0,
      sla: { deliveryTime: 41 },
    },
  },
  {
    info: {
      id: "10820",
      name: "California Burrito",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
      costForTwo: "₹250 for two",
      cuisines: ["Mexican", "American", "Healthy Food"],
      avgRating: 4.6,
      sla: { deliveryTime: 16 },
    },
  },
  {
    info: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      sla: { deliveryTime: 18 },
    },
  },
  {
    info: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/c977fb20-70ec-45cd-8e46-e738e6cd562a_671928.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      sla: { deliveryTime: 18 },
    },
  },
  {
    info: {
      id: "337335",
      name: "Kannur Food Kitchen",
      cloudinaryImageId: "watevctlyqwgjz0qkbr7",
      costForTwo: "₹200 for two",
      cuisines: ["Kerala", "Biryani", "Beverages"],
      avgRating: 4.2,
      sla: { deliveryTime: 31 },
    },
  },
  {
    info: {
      id: "769776",
      name: "Paradise Biryani",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 3.3,
      sla: { deliveryTime: 30 },
    },
  },
  {
    info: {
      id: "769777",
      name: "Truffles",
      cloudinaryImageId: "jhdven0c7dkmypffoigf",
      costForTwo: "₹600 for two",
      cuisines: ["American", "Burgers", "Desserts"],
      avgRating: 4.5,
      sla: { deliveryTime: 28 },
    },
  },
  {
    info: {
      id: "769778",
      name: "Subway",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/49bb331c-3f0e-4f54-9117-2a27a98e3355_1031311.jpg",
      costForTwo: "₹350 for two",
      cuisines: ["Sandwich", "Healthy", "Fast Food"],
      avgRating: 4.0,
      sla: { deliveryTime: 20 },
    },
  },
  {
    info: {
      id: "769779",
      name: "Pizza Hut",
      cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2026/2/16/b81a5589-4f88-4bc7-94e8-250403bb7c92_1990d444-f54d-4b6f-aba3-f9b648d1a0bc.png_compressed",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Pasta"],
      avgRating: 3.2,
      sla: { deliveryTime: 30 },
    },
  },
];

export default resList;