const products = [
  // --- HOMEPAGE HOT PICKS (Original Favorites) ---
  {
    id: 1,
    name: "Black Blazer",
    category: "clothing",
    price: 4999,
    images: [
      "https://i.pinimg.com/736x/4e/d2/1a/4ed21a690eccfbb963b9e69cfbee5e09.jpg",
      "https://image.hm.com/assets/hm/90/af/90af6493ddba5df593d3ae753cddb925e8d4a2d5.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/c1/4b/c14bd7227fe3875d166b318a93d6d60376d9e2a5.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/a8/68/a8683d5f3a6f36b8f57a12d090579c9d365d8519.jpg?imwidth=1260"
    ],
    hoverImage: "https://image.hm.com/assets/hm/c1/4b/c14bd7227fe3875d166b318a93d6d60376d9e2a5.jpg?imwidth=1260",
    description: "Tailored black blazer for timeless style."
  },
  {
    id: 2,
    name: "White Shirt",
    category: "shirts",
    price: 2999,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/96ccfe535c25bea74286e6cf14951303.jpg?v=1734528400&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4f750f85290ddce44ff74af0980d53cb.jpg?v=1734528400&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/c075c96d2f75d44a433441d4dd6aa210.jpg?v=1734528400&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/de8e7f740d72a9d63727372f62674aef.jpg?v=1734528400&quality=80"
    ],
    hoverImage: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4f750f85290ddce44ff74af0980d53cb.jpg?v=1734528400&quality=80",
    description: "Minimal white shirt with premium cotton."
  },
  {
    id: 3,
    name: "Hoodie For Men",
    category: "t-shirts",
    price: 1999,
    images: [
      "https://i.pinimg.com/736x/9f/ec/a5/9feca5e22b880642ce289111a1f6292d.jpg",
      "https://image.hm.com/assets/hm/3a/3a/3a3aa0dd3d8675e32fe22359a1990932ea321d24.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/87/f1/87f1e12d660f152c5af3abb4809566f2f6ec5e9b.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/13/34/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg?imwidth=1260"
    ],
    hoverImage: "https://image.hm.com/assets/hm/3a/3a/3a3aa0dd3d8675e32fe22359a1990932ea321d24.jpg?imwidth=1260",
    description: "Comfortable hoodie for everyday wear."
  },

  // --- EXTENDED CATALOG ---
  // --- SHIRTS ---
  {
    id: 4,
    name: "Classic Navy blue",
    category: "shirts",
    price: 2499,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mcr1002-05-m-42.jpg?v=1735299410&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mcr1002-05-m-43.jpg?v=1735299410&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop",
    description: "A crisp white shirt essential for every wardrobe. Premium cotton blend."
  },
  {
    id: 5,
    name: "Orange Slim Fit Linen Blend Shirt",
    category: "shirts",
    price: 2999,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3976-05_1_d226e7c8-159c-4cf9-a632-03d8ceef1a95.jpg?v=1742393529&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3976-05_5_ffbfa2be-bab7-4ed7-ac82-288acf9d7216.jpg?v=1742393529&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2670&auto=format&fit=crop",
    description: "Timeless orange oxford shirt, perfect for both casual and formal settings."
  },
  {
    id: 6,
    name: "Striped Linen Breeze",
    category: "shirts",
    price: 3499,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4258-02_1_739fd251-4012-4e37-9880-d169df81c23e.jpg?v=1751269625&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4258-02_5_7a800cb2-ff9f-4b37-8fb7-7427e34f954a.jpg?v=1751269625&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1556303259-251c5b8e9680?q=80&w=2670&auto=format&fit=crop",
    description: "Lightweight linen shirt with subtle stripes for summer comfort."
  },
  {
    id: 7,
    name: "Midnight Black Formal",
    category: "shirts",
    price: 2799,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3828-07_1_45240af3-de3e-4e98-807f-55b9a8d5cf77.jpg?v=1740577136&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3828-07_6_6dc0ced3-3179-4eed-b46c-e5be67851651.jpg?v=1740577136&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1603252109303-27514432f5e3?q=80&w=2670&auto=format&fit=crop",
    description: "Sleek black shirt for evening events and sharp office looks."
  },

  // --- PANTS ---
  {
    id: 8,
    name: "Martino Hazelnut Plain Relaxed Fit Trousers",
    category: "pants",
    price: 1999,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5163-03-3236.jpg?v=1722674308&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5163-03-3211.jpg?v=1722674308&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2574&auto=format&fit=crop",
    description: "Versatile beige chinos that pair well with everything."
  },
  {
    id: 9,
    name: "Washed Baggy Jeans",
    category: "pants",
    price: 3299,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4026-01_1.jpg?v=1756310461&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4026-01_4.jpg?v=1756310461&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2574&auto=format&fit=crop",
    description: "Sharp navy trousers tailored for a modern silhouette."
  },
  {
    id: 10,
    name: "Relaxed Fit Stretch DrawstringTrousers",
    category: "pants",
    price: 2499,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msr5319-04_1.jpg?v=1754884430&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msr5319-04_4.jpg?v=1753807140&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1552253043-911e263d95eb?q=80&w=2200&auto=format&fit=crop",
    description: "Functional and stylish cargo joggers for street-smart looks."
  },
  {
    id: 11,
    name: "Raw Denim Jeans",
    category: "pants",
    price: 3999,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_e76a83c3-3e8a-4a57-8794-760bbf375a11.jpg?v=1765303105&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4_03bc1592-a1cd-4eb7-97c6-03f4b3bf0dd6.jpg?v=1765303105&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1542272617-0858607c2242?q=80&w=2574&auto=format&fit=crop",
    description: "High-quality raw denim that molds to your fit over time."
  },

  // --- T-SHIRTS ---
  {
    id: 12,
    name: "100% Cotton Oversized T-Shirt",
    category: "t-shirts",
    price: 999,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst3073-01_1.jpg?v=1758041244&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst3073-01_4.jpg?v=1758041244&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop",
    description: "Soft cotton crew neck t-shirt, a daily staple."
  },
  {
    id: 13,
    name: "Vintage Graphic Tee",
    category: "t-shirts",
    price: 1499,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2864-01_2_3aff4d1b-fc4f-40a2-9eaa-a14546caf39d.jpg?v=1754552743&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2864-01_1_f3c9c529-6fa6-4af3-8fa6-a4946b720fec.jpg?v=1754993811&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2727&auto=format&fit=crop",
    description: "Retro-inspired graphic tee with a relaxed fit."
  },
  {
    id: 14,
    name: "Cosmispire Black Oversized T-Shirt",
    category: "t-shirts",
    price: 1899,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/b89f0df2a4460dcf798e8b5854e5c8d5_b7e2701c-ec2c-4dbe-adef-f44d6e636680.webp?v=1717489368&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1bc0493e0464955efd559796dd4597ca_fd404a28-73f9-48af-9120-e4ffae636f58.webp?v=1717517974&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1625910515337-f273b0631627?q=80&w=2574&auto=format&fit=crop",
    description: "Smart-casual polo shirt with distinct textured fabric."
  },
  {
    id: 15,
    name: "Effortless White Oversized T-Shirt",
    category: "t-shirts",
    price: 1599,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/525eebd82dd31d96fd518e97e5234fe0_78eb7754-39e4-4adc-b66c-acbaa089bfe7.webp?v=1719553990&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1b98f08670b90bc03ef771042d0efd48_fabe7dc7-350f-4555-9765-beca2ef70fe1.webp?v=1719553990&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1503342394128-c104d54dba92?q=80&w=2574&auto=format&fit=crop",
    description: "Trendy oversized fit for ultimate comfort and style."
  },

  // --- SHOES ---
  {
    id: 16,
    name: "Minimalist Leather Sneakers",
    category: "shoes",
    price: 4999,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/06/sv01/fnd/IND/fmt/png/Palermo-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/06/sv02/fnd/IND/fmt/png/Palermo-Sneakers"
    ],
    hoverImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2564&auto=format&fit=crop",
    description: "Clean, white leather sneakers for a polished casual look."
  },
  {
    id: 17,
    name: "Chelsea Boots - Black",
    category: "shoes",
    price: 6499,
    images: [
      "https://m.media-amazon.com/images/I/61gVWRrka0L._SX695_.jpg",
      "https://m.media-amazon.com/images/I/615AUcNdegL._SX535_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1621066063543-a609c1223e76?q=80&w=2574&auto=format&fit=crop",
    description: "Classic Chelsea boots that elevate any outfit."
  },
  {
    id: 18,
    name: "Performance Running Shoes",
    category: "shoes",
    price: 5499,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312292/01/fnd/IND/fmt/png/Deviate-NITRO-Elite-3-HYROX-Women's-Lightweight-Running-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312292/01/sv02/fnd/IND/fmt/png/Deviate-NITRO-Elite-3-HYROX-Women's-Lightweight-Running-Shoes"
    ],
    hoverImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2564&auto=format&fit=crop",
    description: "Lightweight and breathable for active days."
  },
  {
    id: 19,
    name: "Palermo Sneakers",
    category: "shoes",
    price: 5999,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396463/42/fnd/IND/fmt/png/Palermo-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396463/42/mod01/fnd/IND/fmt/png/Palermo-Sneakers"
    ],
    hoverImage: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=2670&auto=format&fit=crop",
    description: "Timeless black oxfords for formal perfection."
  },

  // --- ACCESSORIES ---
  {
    id: 20,
    name: "V69 Ultra Smart Watch (Grey)",
    category: "accessories",
    price: 8999,
    images: [
      "https://m.media-amazon.com/images/I/71OO6oeLJ7L._SX425_.jpg",
      "https://m.media-amazon.com/images/I/71eySIAHWRL._SX425_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2588&auto=format&fit=crop",
    description: "Statement timepiece with precision movement."
  },
  {
    id: 21,
    name: "Leather Belt - Cognac",
    category: "accessories",
    price: 1499,
    images: [
      "https://m.media-amazon.com/images/I/71aplh5AFZL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/7171XLICtQL._SX679_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2670&auto=format&fit=crop",
    description: "Genuine leather belt to complete your formal attire."
  },
  {
    id: 22,
    name: "Aviator Sunglasses",
    category: "accessories",
    price: 2299,
    images: [
      "https://m.media-amazon.com/images/I/418Zz6zuieL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51X4zX5Ss3L._SX679_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2580&auto=format&fit=crop",
    description: "Classic aviators with UV protection."
  },
  {
    id: 23,
    name: "Minimalist Wallet",
    category: "accessories",
    price: 1299,
    images: [
      "https://m.media-amazon.com/images/I/31Chn8WOUEL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/91uAu1g4xhL._SX679_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1601053070736-613b2c2c3104?q=80&w=2670&auto=format&fit=crop",
    description: "Slim profile wallet made from premium leather."
  },

  // --- NEW ADDITIONS ---

  // EXTRA SHIRTS
  {
    id: 24,
    name: "Checkered Flannel Shirt",
    category: "shirts",
    price: 2199,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4616-01_2.jpg?v=1765535614&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4616-01_5.jpg?v=1765535613&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1551488852-0801464c8c71?q=80&w=2670&auto=format&fit=crop",
    description: "Comfortable flannel shirt for casual outings."
  },
  {
    id: 25,
    name: "Denim Shirt - Light Blue",
    category: "shirts",
    price: 2699,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MCR1012-02_1_589fc346-c0a2-4697-9867-c08b8232ebaf.jpg?v=1750094826&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MCR1012-02_5_50b4fdd5-e503-48f1-a364-a585b2575891.jpg?v=1750094826&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=2564&auto=format&fit=crop",
    description: "Rugged denim shirt that gets better with age."
  },
  {
    id: 26,
    name: "Stripehaven Blue Striped Shirt",
    category: "shirts",
    price: 2399,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/bc161cbb32c4dad863baf0449e9f32f7.webp?v=1716314944&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/6938d6598b74a63b525f479b5665bae0.webp?v=1716314944&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1605218427368-35b8095d909b?q=80&w=2580&auto=format&fit=crop",
    description: "Modern mandarin collar shirt for a sharp, clean look."
  },
  {
    id: 27,
    name: "Printed Resort Shirt",
    category: "shirts",
    price: 1899,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4543-04-m_1.jpg?v=1765303121&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4543-04-m_6.jpg?v=1765303121&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1549439602-43ebca23d7e9?q=80&w=2670&auto=format&fit=crop",
    description: "Vibrant printed shirt for vacations and weekends."
  },

  // EXTRA PANTS
  {
    id: 28,
    name: "Athleisure Joggers - Grey",
    category: "pants",
    price: 1799,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5252-02_4_6ccc16fe-38dc-4005-bec0-18f0515fe997.jpg?v=1739344742&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5252-02_3_41a333f0-81ad-4f5b-a6a6-6fe08fecc486.jpg?v=1739344742&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    description: "Soft joggers perfect for gym or lounging."
  },
  {
    id: 29,
    name: "Pleated Dress Trousers",
    category: "pants",
    price: 3499,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/6bd8da8b7adc339d7ffc850352afa524.webp?v=1717399055&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/7337724795561f13c476dfea2913fc4c.webp?v=1717399055&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2000&auto=format&fit=crop",
    description: "Elegant pleated trousers for formal occasions."
  },
  {
    id: 30,
    name: "Olive Cargo Pants",
    category: "pants",
    price: 2599,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4087-02_1.jpg?v=1761844373&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4087-02_5.jpg?v=1761844374&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1514311721092-ee8b97e70396?q=80&w=2000&auto=format&fit=crop",
    description: "Utilitarian olive cargo pants with ample pockets."
  },
  {
    id: 31,
    name: "Light Wash Jeans",
    category: "pants",
    price: 3199,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4081-02_1.jpg?v=1764006455&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4081-02_2.jpg?v=1764006455&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=2000&auto=format&fit=crop",
    description: "Relaxed light wash jeans for summer vibes."
  },

  // EXTRA T-SHIRTS
  {
    id: 32,
    name: "V-Neck Tee - Navy",
    category: "t-shirts",
    price: 1199,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4fda8f37c891e9ea80d3ae29aa9427f9.png?v=1713336732&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/db4fa549974f0ad1ff1a6cb5c734fae3.png?v=1713336732&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop",
    description: "Classic V-neck tee in a deep navy shade."
  },
  {
    id: 33,
    name: "Striped Sailor Tee",
    category: "t-shirts",
    price: 1399,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Mollick5381.jpg?v=1679335563&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Mollick5401.jpg?v=1679335564&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1503342394128-c104d54dba92?q=80&w=2574&auto=format&fit=crop",
    description: "Nautical striped tee for a breezy look."
  },
  {
    id: 34,
    name: "Long Sleeve Henley - Black",
    category: "t-shirts",
    price: 1699,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/9d4791f5a022834a0d3c4a34773d2dc8.webp?v=1716795238&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/aff85a8b5f27e6bb646bd074291376ee.webp?v=1716795238&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop",
    description: "Stylish long sleeve Henley with button detailing."
  },
  {
    id: 35,
    name: "Pocket Tee - Olive",
    category: "t-shirts",
    price: 1299,
    images: [
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst2531-01-m-26.jpg?v=1735625686&quality=80",
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst2531-01-m-29.jpg?v=1735625686&quality=80"
    ],
    hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop",
    description: "Casual pocket tee in a trendy earth tone."
  },

  // EXTRA SHOES
  {
    id: 36,
    name: "Club Kayzer Superior Cushioning Casual Shoes",
    category: "shoes",
    price: 3999,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/02/fnd/IND/fmt/png/Club-Kayzer-Superior-Cushioning-Casual-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/02/sv02/fnd/IND/fmt/png/Club-Kayzer-Superior-Cushioning-Casual-Shoes"
    ],
    hoverImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2598&auto=format&fit=crop",
    description: "Retro-inspired high tops for street style."
  },
  {
    id: 37,
    name: "BMW M Motorsport A3rokart Mid Sneakers",
    category: "shoes",
    price: 15499,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308235/04/fnd/IND/fmt/png/BMW-M-Motorsport-A3rokart-Mid-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308235/04/sv02/fnd/IND/fmt/png/BMW-M-Motorsport-A3rokart-Mid-Sneakers"
    ],
    hoverImage: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=2564&auto=format&fit=crop",
    description: "Luxurious suede loafers for semi-formal wear."
  },
  {
    id: 38,
    name: "Future Rider Twofold Sneakers",
    category: "shoes",
    price: 2499,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/380591/07/fnd/IND/fmt/png/Future-Rider-Twofold-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/380591/07/sv01/fnd/IND/fmt/png/Future-Rider-Twofold-Sneakers"
    ],
    hoverImage: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2670&auto=format&fit=crop",
    description: "Easy-to-wear slip-ons for everyday comfort."
  },
  {
    id: 39,
    name: "Scuderia Ferrari Neo Cat 2.0 Driving Shoes",
    category: "shoes",
    price: 16999,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308062/04/sv01/fnd/IND/fmt/png/Scuderia-Ferrari-Neo-Cat-2.0-Driving-Shoes",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308062/04/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-Neo-Cat-2.0-Driving-Shoes"
    ],
    hoverImage: "https://images.unsplash.com/photo-1608256246200-53e635b5b69f?q=80&w=2574&auto=format&fit=crop",
    description: "Durable hiking boots for outdoor adventures."
  },

  // EXTRA ACCESSORIES
  {
    id: 40,
    name: "Casio Vintage A-158WA-1Q Digital Grey",
    category: "accessories",
    price: 1999,
    images: [
      "https://m.media-amazon.com/images/I/61ybeKQto8L._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61MWAunga8L._SY679_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1534844093959-1e3556f8fde0?q=80&w=2000&auto=format&fit=crop",
    description: "Iconic Wayfarer style sunglasses."
  },
  {
    id: 41,
    name: "Leather Messenger Bag",
    category: "accessories",
    price: 5999,
    images: [
      "https://m.media-amazon.com/images/I/818G1ErGG+L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wEAUfhVpL._SX679_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop",
    description: "Premium leather bag for work and travel."
  },
  {
    id: 42,
    name: "Beanie Hat - Black",
    category: "accessories",
    price: 799,
    images: [
      "https://m.media-amazon.com/images/I/61BdYFnS+UL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/71-FIAYZg-L._SX569_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2574&auto=format&fit=crop",
    description: "Warm and stylish beanie for colder days."
  },
  {
    id: 43,
    name: "Silver Chain for men",
    category: "accessories",
    price: 189,
    images: [
      "https://m.media-amazon.com/images/I/41yrg3WY58L._SY695_.jpg",
      "https://m.media-amazon.com/images/I/51pNyRbc6dL._SY535_.jpg"
    ],
    hoverImage: "https://images.unsplash.com/photo-1596950275817-bddc8e441444?q=80&w=2000&auto=format&fit=crop",
    description: "Elegant silver cufflinks to add a touch of class."
  }

];

export default products;
