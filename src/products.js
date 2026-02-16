const products = [
  {
    id: 1,
    name: "Running Shoes",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Casual Sneakers",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80"
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
  },
  {
    id: 6,
    name: "Formal Shoes",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80"
  },
  {
    id: 7,
    name: "Sports Backpack",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&q=80"
  },
  {
    id: 8,
    name: "Office Laptop Bag",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    name: "Denim Jacket",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&q=80"
  },
  {
  id: 11,
  name: "Denim Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&q=80"
},
{
  id: 12,
  name: "Formal Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80"
},
{
  id: 13,
  name: "Trail Running Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80"
},
{
  id: 14,
  name: "Wireless Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 15,
  name: "Digital Camera",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1541766066774-c86dcf76dff2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 16,
  name: "Leather Wallet",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 17,
  name: "Sunglasses",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80"
},
{
  id: 18,
  name: "Hoodie Sweatshirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
},
{
  id: 19,
  name: "Sports Watch",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
},
{
  id: 20,
  name: "Office Shoes",
  category: "Footwear",
  image: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 21,
  name: "Gym Training Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 22,
  name: "Casual Loafers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&q=80"
},
{
  id: 23,
  name: "Winter Boots",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80"
},
{
  id: 24,
  name: "Noise Cancelling Headphones",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80"
},
{
  id: 25,
  name: "Wireless Earbuds",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 26,
  name: "Smart Fitness Band",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80"
},
{
  id: 27,
  name: "Gaming Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80"
},
{
  id: 28,
  name: "Gaming Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80"
},
{
  id: 29,
  name: "Travel Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&q=80"
},
{
  id: 30,
  name: "Leather Belt",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 31,
  name: "Stylish Wrist Watch",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1573261821759-fdd1b36d9ca5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 32,
  name: "Laptop Sleeve",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1689757855413-9e366c2011f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 33,
  name: "Sports Cap",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1720534490358-bc2ad29d51d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 34,
  name: "Cotton T-Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 35,
  name: "Printed Casual Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80"
},
{
  id: 36,
  name: "Slim Fit Jeans",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80"
},
{
  id: 37,
  name: "Formal Trousers",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1734571163197-fa5b73967647?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 38,
  name: "Winter Sweater",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&q=80"
},
{
  id: 39,
  name: "Sports Shorts",
  category: "Clothing",
  image: "https://plus.unsplash.com/premium_photo-1663013269392-1fc1caad312e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 40,
  name: "Yoga Pants",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80"
},
{
  id: 41,
  name: "Smartphone Tripod",
  category: "Electronics",
  image: "https://plus.unsplash.com/premium_photo-1679362665746-616b9adba66c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 42,
  name: "Portable Power Bank",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 43,
  name: "USB Charging Cable",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1639675960002-2f414c58ed79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 44,
  name: "Bluetooth Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80"
},
{
  id: 45,
  name: "Office Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&q=80"
},
{
  id: 46,
  name: "Printed Casual Shirts",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=400&q=80"
},
{
  id: 47,
  name: "Formal Shirt",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80"
},
{
  id: 48,
  name: "Formal T-Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&q=80"
},
{
  id: 49,
  name: "Rain Jacket",
  category: "Clothing",
  image: "https://plus.unsplash.com/premium_photo-1664360970485-99ec77c55787?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 50,
  name: "Sports Running Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
},
{
  id: 51,
  name: "Canvas Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 52,
  name: "Leather Boots",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80"
},
{
  id: 53,
  name: "Slip-On Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80"
},
{
  id: 54,
  name: "Running Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 55,
  name: "High-Top Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&q=80"
},

{
  id: 56,
  name: "Leather Sling Bag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
},
{
  id: 57,
  name: "Travel Tote Bag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
},
{
  id: 58,
  name: "Office Handbag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
},
{
  id: 59,
  name: "Minimal Wallet",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1614330316567-11d8e572db16?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 60,
  name: "Travel Passport Holder",
  category: "Accessories",
  image: "https://plus.unsplash.com/premium_photo-1684407617295-b9324ba41413?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
  id: 61,
  name: "Plain White Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
},
{
  id: 62,
  name: "Checked Casual Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80"
},
{
  id: 63,
  name: "Blue Denim Jeans",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80"
},
{
  id: 64,
  name: "Black Hoodie",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
},
{
  id: 65,
  name: "Formal Blazer",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&q=80"
},

{
  id: 66,
  name: "Smart LED Watch",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
},
{
  id: 67,
  name: "Noise Cancelling Earphones",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80"
},
{
  id: 68,
  name: "Wireless Charging Pad",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?w=400&q=80"
},
{
  id: 69,
  name: "Portable Bluetooth Speaker",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=400&q=80"
},
{
  id: 70,
  name: "DSLR Camera",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1541766066774-c86dcf76dff2?w=400&q=80"
},

{
  id: 71,
  name: "Running Shorts",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1554139844-af2fc8ad3a3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 72,
  name: "Yoga Leggings",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80"
},
{
  id: 73,
  name: "Winter Coat",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&q=80"
},
{
  id: 74,
  name: "Casual Polo T-Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&q=80"
},
{
  id: 75,
  name: "Rainproof Jacket",
  category: "Clothing",
  image: "https://plus.unsplash.com/premium_photo-1664360970485-99ec77c55787?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
  id: 76,
  name: "Office Laptop Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&q=80"
},
{
  id: 77,
  name: "Shopping Shirts",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=400&q=80"
},
{
  id: 78,
  name: "Leather Key Holder",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1675582090584-4ae9400f7326?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 79,
  name: "Classic Sunglasses",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80"
},
{
  id: 80,
  name: "Sports Cap",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1720534490358-bc2ad29d51d5?w=400&q=80"
},

{
  id: 81,
  name: "Mechanical Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80"
},
{
  id: 82,
  name: "Gaming Headset",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
},
{
  id: 83,
  name: "Wireless Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=400&q=80"
},
{
  id: 84,
  name: "USB-C Hub",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1639675960002-2f414c58ed79?w=400&q=80"
},
{
  id: 85,
  name: "Power Bank 20000mAh",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?w=400&q=80"
},
{
  id: 101,
  name: "Slim Fit Jeans",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
  attributes: ["pant", "jeans", "lowerwear", "casual"]
},
{
  id: 102,
  name: "Formal Shirts",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
  attributes: ["pant", "formal", "lowerwear", "dark"]
},
{
  id: 103,
  name: "White Casual Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400",
  attributes: ["shirt", "upperwear", "casual", "light"]
},
{
  id: 104,
  name: "Denim Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["jacket", "upperwear", "denim", "dark"]
},
{
  id: 105,
  name: "Hoodie Sweatshirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1738486260590-23c954cf29b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["hoodie", "upperwear", "casual"]
},
{
  id: 201,
  name: "Running Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
  attributes: ["shoe", "sport", "running"]
},
{
  id: 202,
  name: "Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  attributes: ["shoe", "sneaker", "casual"]
},
{
  id: 203,
  name: "Black Formal Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
  attributes: ["shoe", "formal", "leather"]
},
{
  id: 301,
  name: "Leather Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["bag", "backpack", "leather"]
},
{
  id: 302,
  name: "Travel Duffel Bag",
  category: "Accessories",
  image: "https://plus.unsplash.com/premium_photo-1680371258078-348a156edc10?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["bag", "travel"]
},
{
  id: 401,
  name: "Smart Phone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  attributes: ["watch", "digital"]
},
{
  id: 402,
  name: "Wireless Headphones",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  attributes: ["headphone", "audio"]
},
{
  id: 901,
  name: "Random Street Scene",
  category: "Other",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  attributes: ["street", "outdoor", "random"]
},
{
  id: 902,
  name: "City Road View",
  category: "Other",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  attributes: ["road", "city", "outdoor"]
},
{
  id: 903,
  name: "Nature Landscape",
  category: "Other",
  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
  attributes: ["nature", "trees", "landscape"]
},
{
  id: 904,
  name: "Urban Walking Street",
  category: "Other",
  image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400",
  attributes: ["street", "urban"]
},
{
  id: 905,
  name: "Highway View",
  category: "Other",
  image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400",
  attributes: ["road", "highway", "outdoor"]
},

{
  id: 906,
  name: "Person Selfie Portrait",
  category: "Other",
  image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
  attributes: ["person", "selfie", "face"]
},
{
  id: 907,
  name: "Smiling Person Photo",
  category: "Other",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  attributes: ["person", "portrait"]
},
{
  id: 908,
  name: "Casual Human Portrait",
  category: "Other",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  attributes: ["human", "face"]
},
{
  id: 909,
  name: "Indoor Selfie",
  category: "Other",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  attributes: ["selfie", "person", "indoor"]
},
{
  id: 910,
  name: "Profile Portrait",
  category: "Other",
  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  attributes: ["portrait", "human"]
},

{
  id: 911,
  name: "Empty Room Interior",
  category: "Other",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400",
  attributes: ["room", "interior"]
},
{
  id: 912,
  name: "Wall and Sofa Room",
  category: "Other",
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400",
  attributes: ["wall", "interior"]
},
{
  id: 913,
  name: "Living Room Setup",
  category: "Other",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
  attributes: ["livingroom", "interior"]
},
{
  id: 914,
  name: "Bedroom Interior",
  category: "Other",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
  attributes: ["bedroom", "room"]
},
{
  id: 915,
  name: "A Person",
  category: "Other",
  image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400",
  attributes: ["wall", "room", "empty"]
},

{
  id: 916,
  name: "Wooden Chair",
  category: "Other",
  image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400",
  attributes: ["chair", "furniture"]
},
{
  id: 917,
  name: "Indoor Plant",
  category: "Other",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  attributes: ["plant", "indoor"]
},
{
  id: 918,
  name: "Office Desk Object",
  category: "Other",
  image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400",
  attributes: ["desk", "object"]
},
{
  id: 919,
  name: "Random Household Item",
  category: "Other",
  image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
  attributes: ["object", "random"]
},
{
  id: 920,
  name: "A Person",
  category: "Other",
  image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400",
  attributes: ["home", "decor"]
},
{
  id: 921,
  name: "Watch",
  category: "Other",
  image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400",
  attributes: ["street", "crowd", "outdoor"]
},
{
  id: 922,
  name: "City Buildings Skyline",
  category: "Other",
  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400",
  attributes: ["city", "buildings", "skyline"]
},
{
  id: 923,
  name: "Night Street Lights",
  category: "Other",
  image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400",
  attributes: ["night", "street", "lights"]
},
{
  id: 924,
  name: "Open Road Landscape",
  category: "Other",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  attributes: ["road", "landscape"]
},
{
  id: 925,
  name: "Cloudy Sky",
  category: "Other",
  image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["sky", "clouds"]
},

{
  id: 926,
  name: "Blurred Human Portrait",
  category: "Other",
  image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
  attributes: ["person", "blur", "face"]
},
{
  id: 927,
  name: "Group of People",
  category: "Other",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400",
  attributes: ["people", "group"]
},
{
  id: 928,
  name: "Casual Outdoor Portrait",
  category: "Other",
  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
  attributes: ["person", "outdoor"]
},
{
  id: 929,
  name: "Human Side Profile",
  category: "Other",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  attributes: ["person", "profile"]
},
{
  id: 930,
  name: "Indoor Human Selfie",
  category: "Other",
  image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400",
  attributes: ["selfie", "indoor"]
},

{
  id: 931,
  name: "Minimalist White Wall",
  category: "Other",
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400",
  attributes: ["wall", "minimal"]
},
{
  id: 932,
  name: "Empty Office Room",
  category: "Other",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
  attributes: ["office", "room"]
},
{
  id: 933,
  name: "Indoor Ceiling View",
  category: "Other",
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
  attributes: ["ceiling", "interior"]
},
{
  id: 934,
  name: "Window Light Room",
  category: "Other",
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400",
  attributes: ["window", "room"]
},
{
  id: 935,
  name: "Hallway Interior",
  category: "Other",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
  attributes: ["hallway", "interior"]
},

{
  id: 936,
  name: "Bungalow",
  category: "Other",
  image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400",
  attributes: ["chair", "office"]
},
{
  id: 937,
  name: "Table with Random Items",
  category: "Other",
  image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400",
  attributes: ["table", "objects"]
},
{
  id: 938,
  name: "Green Indoor Plant",
  category: "Other",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  attributes: ["plant", "green"]
},
{
  id: 939,
  name: "Bookshelf Objects",
  category: "Other",
  image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
  attributes: ["bookshelf", "objects"]
},
{
  id: 940,
  name: "A Person",
  category: "Other",
  image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400",
  attributes: ["decor", "home"]
},
{
  id: 941,
  name: "White Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
  attributes: ["sneakers", "white", "casual"]
},
{
  id: 942,
  name: "Black Leather Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
  attributes: ["jacket", "leather", "black"]
},
{
  id: 943,
  name: "Denim Jeans",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
  attributes: ["jeans", "denim", "blue"]
},
{
  id: 944,
  name: "Running Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400",
  attributes: ["running", "sports", "shoes"]
},
{
  id: 945,
  name: "Smart Watch",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400",
  attributes: ["watch", "smart", "electronics"]
},
{
  id: 946,
  name: "Wireless Headphones",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400",
  attributes: ["headphones", "audio", "wireless"]
},
{
  id: 947,
  name: "Laptop Computer",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  attributes: ["laptop", "computer", "tech"]
},
{
  id: 948,
  name: "Brown Leather Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400",
  attributes: ["formal", "shoes", "leather"]
},
{
  id: 949,
  name: "Casual T-Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  attributes: ["tshirt", "casual"]
},
{
  id: 950,
  name: "Backpack Bag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400",
  attributes: ["bag", "backpack"]
},
{
  id: 951,
  name: "Sunglasses",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
  attributes: ["sunglasses"]
},
{
  id: 952,
  name: "Formal Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
  attributes: ["shirt", "formal"]
},
{
  id: 953,
  name: "Gaming Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1727417453138-7d8efdd70fb3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["mouse", "gaming"]
},
{
  id: 954,
  name: "Mechanical Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  attributes: ["keyboard"]
},
{
  id: 955,
  name: "High Heels",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
  attributes: ["heels"]
},
{
  id: 956,
  name: "Handbag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
  attributes: ["bag"]
},
{
  id: 957,
  name: "Beanie Cap",
  category: "Accessories",
  image: "https://plus.unsplash.com/premium_photo-1724296696865-7de76f2377b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["cap"]
},
{
  id: 958,
  name: "Winter Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=400",
  attributes: ["jacket"]
},
{
  id: 959,
  name: "Bluetooth Speaker",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["speaker"]
},
{
  id: 960,
  name: "A happy face",
  category: "Other",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  attributes: ["chair"]
},
{
  id: 961,
  name: "Desk Lamp",
  category: "Other",
  image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  attributes: ["lamp"]
},
{
  id: 962,
  name: "Coffee Mug",
  category: "Other",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  attributes: ["mug"]
},
{
  id: 963,
  name: "Smartphone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  attributes: ["phone"]
},
{
  id: 964,
  name: "Tablet Device",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400",
  attributes: ["tablet"]
},
{
  id: 965,
  name: "Flip Flops",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
  attributes: ["flipflops"]
},
{
  id: 966,
  name: "Wallet",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
  attributes: ["wallet"]
},
{
  id: 967,
  name: "Tie",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400",
  attributes: ["tie"]
},
{
  id: 968,
  name: "Hoodie",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
  attributes: ["hoodie"]
},
{
  id: 969,
  name: "Sandals",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400",
  attributes: ["sandals"]
},
{
  id: 970,
  name: "Table Clock",
  category: "Other",
  image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400",
  attributes: ["clock"]
},
{
  id: 1001,
  name: "Laptop",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  attributes: ["laptop", "computer"]
},
{
  id: 1002,
  name: "Smartphone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  attributes: ["phone", "mobile"]
},
{
  id: 1003,
  name: "Headphones",
  category: "Electronics",
  image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["headphones"]
},
{
  id: 1004,
  name: "Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
  attributes: ["shoes"]
},
{
  id: 1005,
  name: "Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400",
  attributes: ["bag"]
},
{
  id: 1006,
  name: "Watch",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  attributes: ["watch"]
},
{
  id: 1007,
  name: "Chair",
  category: "Other",
  image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
  attributes: ["chair"]
},
{
  id: 1008,
  name: "Desk Lamp",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  attributes: ["lamp"]
},
{
  id: 1009,
  name: "Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
  attributes: ["keyboard"]
},
{
  id: 1010,
  name: "Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
  attributes: ["mouse"]
},
{
  id: 1011,
  name: "Coffee Mug",
  category: "Other",
  image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  attributes: ["mug"]
},
{
  id: 1012,
  name: "Water Bottle",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400",
  attributes: ["bottle"]
},
{
  id: 1013,
  name: "Sunglasses",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
  attributes: ["glasses"]
},
{
  id: 1014,
  name: "T-Shirt",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  attributes: ["shirt"]
},
{
  id: 1015,
  name: "Jeans",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
  attributes: ["jeans"]
},
{
  id: 1016,
  name: "Camera",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
  attributes: ["camera"]
},
{
  id: 1017,
  name: "Television",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
  attributes: ["tv"]
},
{
  id: 1018,
  name: "Yoga mate",
  category: "Other",
  image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400",
  attributes: ["desk"]
},
{
  id: 1019,
  name: "Night scenery",
  category: "Other",
  image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
  attributes: ["scene"]
},
{
  id: 1020,
  name: "Pen",
  category: "Other",
  image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["pen"]
},
{
  id: 1021,
  name: "Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  attributes: ["shoes"]
},
{
  id: 1022,
  name: "Tablet",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400",
  attributes: ["tablet"]
},
{
  id: 1023,
  name: "Bluetooth Speaker",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
  attributes: ["speaker"]
},
{
  id: 1024,
  name: "Smart Phone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=400",
  attributes: ["controller"]
},
{
  id: 1025,
  name: "Cap",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",
  attributes: ["cap"]
},
{
  id: 1026,
  name: "Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["jacket"]
},
{
  id: 1027,
  name: "Handbag",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
  attributes: ["bag"]
},
{
  id: 1028,
  name: "Desk Plant",
  category: "Other",
  image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
  attributes: ["plant"]
},
{
  id: 1029,
  name: "Office Chair",
  category: "Other",
  image: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["chair"]
},
{
  id: 1030,
  name: "Monitor",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
  attributes: ["monitor"]
},
{
  id: 1031,
  name: "iPhone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
  attributes: ["phone", "iphone"]
},
{
  id: 1032,
  name: "Android Phone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
  attributes: ["phone", "android"]
},
{
  id: 1033,
  name: "White Sneakers",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
  attributes: ["shoes", "sneakers"]
},
{
  id: 1034,
  name: "Running Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400",
  attributes: ["running", "shoes"]
},
{
  id: 1035,
  name: "Gaming Laptop",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
  attributes: ["laptop", "gaming"]
},
{
  id: 1036,
  name: "MacBook",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  attributes: ["laptop", "macbook"]
},
{
  id: 1037,
  name: "Perfume",
  category: "Other",
  image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
  attributes: ["perfume"]
},
{
  id: 1038,
  name: "Office Desk Setup",
  category: "Other",
  image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400",
  attributes: ["desk", "setup"]
},
{
  id: 1039,
  name: "Gaming Mouse",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400",
  attributes: ["mouse", "gaming"]
},
{
  id: 1040,
  name: "Mechanical Keyboard",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
  attributes: ["keyboard"]
},
{
  id: 1041,
  name: "Denim Jacket",
  category: "Clothing",
  image: "https://images.unsplash.com/photo-1618393649689-c997c7455ef5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["jacket"]
},
{
  id: 1042,
  name: "Formal Shoes",
  category: "Footwear",
  image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
  attributes: ["formal", "shoes"]
},
{
  id: 1043,
  name: "Office Backpack",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
  attributes: ["bag"]
},
{
  id: 1044,
  name: "Smart Watch",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400",
  attributes: ["watch", "smartwatch"]
},
{
  id: 1045,
  name: "Desk Phone",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400",
  attributes: ["Phone"]
},
{
  id: 1046,
  name: "Coffee Cup",
  category: "Other",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  attributes: ["cup"]
},
{
  id: 1047,
  name: "Office Chair Modern",
  category: "Other",
  image: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["chair"]
},
{
  id: 1048,
  name: "Desk Monitor",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400",
  attributes: ["monitor"]
},
{
  id: 1049,
  name: "Bluetooth Headphones",
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  attributes: ["headphones"]
},
{
  id: 1050,
  name: "Water Bottle Steel",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  attributes: ["bottle"]
},

];

export default products;
