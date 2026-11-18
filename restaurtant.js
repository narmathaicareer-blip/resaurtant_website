


const dishImages = {

  // Gravies — chicken
  "Butter Chicken": "https://commons.wikimedia.org/wiki/Special:FilePath/Butter_chicken.jpg",
  "Chicken Tikka Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_tikka_masala.jpg",
  "Chicken Chettinad": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Chettinad.jpg",
  "Chicken Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_curry.jpg",
  "Andhra Chicken Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Andhra_Chicken_Curry_-_WCI-Day0-Dinner.jpg",
  "Kadai Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Kadi.JPG",
  "Chicken Kolhapuri": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Kolhapuri.jpg",
  "Chicken Mughlai": "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_food.JPG",
  "Chicken Do Pyaza": "https://commons.wikimedia.org/wiki/Special:FilePath/Murgh_Do_Pyaza.jpg",
  "Chicken Saagwala": "https://commons.wikimedia.org/wiki/Special:FilePath/Palak_Chicken.jpg",
  "Chicken Handi": "https://commons.wikimedia.org/wiki/Special:FilePath/Murgh_handi.jpg",
  "Chicken Lababdar": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20Lababdar..By%20fatima.jpg",
  "Chicken Korma": "https://commons.wikimedia.org/wiki/Special:FilePath/Corma_chicken.jpg",
  "Chicken Bhuna": "https://commons.wikimedia.org/wiki/Special:FilePath/Bhuna_Tangdi.JPG",

  // Mutton
  "Mutton Rogan Josh": "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton%20Rogan%20Josh%20curry.jpg",
  "Mutton Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Spicy%20mutton%20curry.jpg",
  "Mutton Chettinad": "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton_Chettinad.jpg",
  "Mutton Pepper Gravy": "https://commons.wikimedia.org/wiki/Special:FilePath/Spicy_Pepper_Chicken_Curry.jpg",
  "Mutton Korma": "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton%20Khorma%20-%20Daig%20Style.jpg",
  "Mutton Handi":  "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton%20Curry%201.jpg",
  "Mutton Keema Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Keema_masala.jpg",
  "Mutton Vindaloo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton%20Curry%20%2844786%29.jpg",
  "Mutton Saag": "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton_saag.jpg",

  // Seafood
  "Fish Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20Curry%20%28965863650%29.jpg",
  "Kerala Fish Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/South%20Indian%20Fish%20Curry%20with%20Steamed%20Rice-Chennai-TamilNadu-DSC0001.jpg",
  "Goan Fish Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Fish-curry-rice%2C%20Goan-style%2002.jpg",
  "Prawn Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Prawns%20Masala.jpg",
  "Prawn Coconut Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/COCONUT%20PRAWN%20CURRY.JPG",
  "Crab Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Crab_masala.jpg",

  // Paneer
  "Paneer Butter Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_butter_masala.jpg",
  "Paneer Tikka Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Tikka_Masala.jpg",
  "Palak Paneer": "https://commons.wikimedia.org/wiki/Special:FilePath/Palak%20Paneer.JPG",
  "Kadai Paneer": "https://commons.wikimedia.org/wiki/Special:FilePath/Kadai_Paneer.JPG",
  "Shahi Paneer": "https://commons.wikimedia.org/wiki/Special:FilePath/Shahi_paneer.jpg",
  "Paneer Lababdar": "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer%20Lababdaar.jpg",
  "Paneer Korma": "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer%20Kadhai.jpg",
  "Matar Paneer": "https://commons.wikimedia.org/wiki/Special:FilePath/Matar_paneer.jpg",

  // Vegetarian gravies
  "Navratan Korma": "https://commons.wikimedia.org/wiki/Special:FilePath/Navratan_korma.jpg",
  "Vegetable Kurma": "https://commons.wikimedia.org/wiki/Special:FilePath/Vegetable%20Kurma.JPG",
  "Mixed Vegetable Curry": "https://commons.wikimedia.org/wiki/Special:FilePath/Mixed%20vegetable%20curry%201.jpg",
  "Mushroom Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Mushroom%20gravy.jpg",
  "Chana Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Chana_masala.jpg",
  "Dal Makhani": "https://commons.wikimedia.org/wiki/Special:FilePath/Dal_makhani.jpg",
  "Dal Tadka": "https://commons.wikimedia.org/wiki/Special:FilePath/Dal%20Tadka.jpg",
  "Rajma Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Rajma%20Masala.jpg",
  "Aloo Gobi": "https://commons.wikimedia.org/wiki/Special:FilePath/Aloo_gobi.jpg",
  "Bhindi Masala": "https://commons.wikimedia.org/wiki/Special:FilePath/Bhindi%20Masala.jpg",
  "Baingan Bharta": "https://commons.wikimedia.org/wiki/Special:FilePath/Baigan%20Bharta.jpg",

  
  // Chicken Biryani
  "Chicken Dum Biryani": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20DumBiryani.JPG",
  "Hyderabadi Chicken Biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
  "Ambur Chicken Biryani": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Dindigul Chicken Biryani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  "Thalappakatti Chicken Biryani": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  "Kolkata Chicken Biryani": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
  "Lucknowi Chicken Biryani": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  "Malabar Chicken Biryani": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Chettinad Chicken Biryani": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=85",
  "Andhra Chicken Biryani": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  "Spicy Chicken Biryani": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
  "Chicken 65 Biryani": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=85",
  "Chicken Tikka Biryani": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
"Boneless Chicken Biryani": "https://commons.wikimedia.org/wiki/Special:FilePath/Boneless%20Chicken%20Biryani.JPG",  "Chicken Keema Biryani": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",

  // Egg and Mutton Biryani
  "Egg Biryani": "https://commons.wikimedia.org/wiki/Special:FilePath/Egg%20biryani.JPG",
  "Mutton Dum Biryani": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  "Hyderabadi Mutton Biryani": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Ambur Mutton Biryani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  "Dindigul Mutton Biryani": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  "Lucknowi Mutton Biryani": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
  "Malabar Mutton Biryani": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=85",
  "Mutton Keema Biryani": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",

  // Seafood Biryani
  "Fish Biryani": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
  "Prawn Biryani": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85",
  "Crab Biryani": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85",

  // Vegetarian Biryani
  "Vegetable Dum Biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
  "Paneer Biryani": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  "Mushroom Biryani": "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85",
  "Soya Chunk Biryani": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Baby Corn Biryani": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  "Cauliflower Biryani": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
  "Jackfruit Biryani": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",

  // Regional Biryani
  "Kashmiri Biryani": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Sindhi Biryani": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Bombay Biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
  "Memoni Biryani": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Beef Biryani": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  "Gongura Chicken Biryani": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  "Gongura Mutton Biryani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",

  
  // Fried rice
  "Vegetable Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Egg Fried Rice": "https://commons.wikimedia.org/wiki/Special:FilePath/Egg_fried_rice.jpg",
  "Chicken Fried Rice": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_fried_rice.jpg",

  // Schezwan Fried Rice
  "Schezwan Vegetable Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Schezwan Egg Fried Rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  "Schezwan Chicken Fried Rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  "Mushroom Fried Rice": "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85",
  "Paneer Fried Rice": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  "Mixed Fried Rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  "Triple Schezwan Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Singapore Fried Rice": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Thai Basil Fried Rice": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  "Garlic Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Pepper Chicken Fried Rice": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
  "Prawn Fried Rice": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85",
  "Seafood Fried Rice": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
  "Hong Kong Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "Burnt Garlic Fried Rice": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
  "Chilli Garlic Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Corn Fried Rice": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  "Cashew Fried Rice": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80",
  "Kimchi Fried Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  "Curry Fried Rice": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Pineapple Fried Rice": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  "Tofu Fried Rice": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
  "Basil Chicken Fried Rice": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
  "Spicy Egg Fried Rice": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
  "Dragon Chicken Fried Rice": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=85",
  "Crispy Chicken Fried Rice": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
  "Chilli Paneer Fried Rice": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",


  // Burgers
  "Classic Beef Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Chicken Burger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "Veg Burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  "Cheese Burger": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
  "Double Cheese Burger": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  "Crispy Chicken Burger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "Spicy Chicken Burger": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  "Paneer Burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  "Mushroom Burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
"BBQ Chicken Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Fish Burger": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  "Aloo Tikki Burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",

  // Pizzas
  "Margherita Pizza": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
  "Farmhouse Pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "Pepperoni Pizza": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85",
  "Four Cheese Pizza": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85",
  "BBQ Chicken Pizza": "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=85",
  "Paneer Pizza": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
  "Mexican Pizza": "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=900&q=85",
  "Mushroom Pizza": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85",
  "Tandoori Chicken Pizza": "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=85",
  "Veg Supreme Pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  "Hawaiian Pizza": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
  "Peri Peri Pizza": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",

  // Hot Dogs and Sandwiches
"Classic Hot Dog": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
"Chicken Hot Dog": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Veg Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  "Club Sandwich": "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=900&q=85",
  "Grilled Cheese Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
"Chicken Submarine": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

  // Wraps and Rolls
  "Veg Wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
"Chicken Shawarma": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Paneer Wrap": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "Chicken Kathi Roll": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  "Veg Kathi Roll": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",

  // Tacos and Quesadillas
  "Chicken Tacos": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
  "Veg Tacos": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
  "Chicken Quesadilla": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=900&q=85",

  // Fries and Snacks
  "French Fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  "Peri Peri Fries": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
  "Loaded Cheese Fries": "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=85",
  "Chicken Nuggets": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
  "Chicken Popcorn": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
  "Chicken Wings": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
"Garlic Bread": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
"Cheese Garlic Bread": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",  "Veg Momos": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85",
  "Chilli Chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",

  // Starters
  "Paneer Tikka": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  "Gobi Manchurian": "https://commons.wikimedia.org/wiki/Special:FilePath/Gobi_Manchurian.jpg",
  "Chicken Lollipop": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_lollipop.jpg",
  // Starters — Chicken
"Chicken Tikka": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
"Malai Chicken Tikka": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85",
"Tandoori Chicken": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=85",
"Chicken 65": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
"Dragon Chicken": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
"Pepper Chicken Fry": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=85",
"Chicken Manchurian": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85",

// Vegetarian Starters
"Gobi 65": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
"Paneer 65": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
"Mushroom 65": "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85",
"Chilli Paneer": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
"Chilli Mushroom": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
"Crispy Corn": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85",
"Hara Bhara Kebab": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
"Stuffed Mushrooms": "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85",

// Fish and Seafood
"Fish Fingers": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=85",
"Prawn Fry": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85",
"Apollo Fish": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
"Amritsari Fish": "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=85",

// Kebabs and snacks
"Seekh Kebab": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=85",
"Mutton Kebab": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
"Spring Rolls": "https://images.unsplash.com/photo-1625938145744-e380515399bf?auto=format&fit=crop&w=900&q=80",
"Cheese Balls": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
"Bruschetta": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",

// Soups
"Tomato Soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
"Sweet Corn Soup": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
"Hot and Sour Soup": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",


  // Main Course — separate images for each dish
"Grilled Chicken": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
  "Herb Roasted Chicken": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
"Chicken Alfredo": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
"Creamy Pesto Pasta": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
"Spaghetti Bolognese": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
"Mushroom Risotto": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
"Vegetable Risotto": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
"Grilled Salmon": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",  "Fish and Chips": "https://loremflickr.com/900/700/fish,chips?lock=73110",
  "Fish and Chips": "https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&w=900&q=80",
"Roast Lamb": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
"Beef Steak": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
"Vegetable Steak": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
"Chicken Steak": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
"Paneer Steak": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
"Masala Dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
"Plain Dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
"Ghee Roast Dosa": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80",
  "Idli Sambar": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
  "Pongal": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
"Poori Masala": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
"Chapati and Curry": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
"Butter Naan": "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=900&q=80",
"Garlic Naan": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
"Tandoori Roti": "https://images.unsplash.com/photo-1626500155537-93690c24099e?auto=format&fit=crop&w=900&q=80",
"Parotta and Salna": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
"Vegetable Pulao": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
"Jeera Rice": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80",
"Curd Rice": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",


  // Rice
  "Steamed Rice": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80",
  "Ghee Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "Lemon Rice": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80",
  "Tamarind Rice": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  "Coconut Rice": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=81",
  "Tomato Rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=81",

  // Noodles
  "Vegetable Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
  "Egg Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
  "Chicken Noodles": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
  "Schezwan Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=81",
  "Hakka Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=81",
  "Chilli Garlic Noodles": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=81",
  "Singapore Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=82",
  "Paneer Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=82",
  "Mushroom Noodles": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=82",
  "Prawn Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=83",
  "Mixed Noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=83",
  "Thai Basil Noodles": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=83",


  // Salads
  "Caesar Salad": "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",
  "Greek Salad": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  "Garden Salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  "Grilled Chicken Salad": "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=900&q=80",
"Quinoa Salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",  "Mediterranean Salad": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
  "Cucumber Mint Salad": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=81",
  "Roasted Beetroot Salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82",
  "Corn Pepper Salad": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "Pasta Salad": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  "Chickpea Salad": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=81",
  "Asian Sesame Salad": "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=900&q=81",
  "Apple Walnut Salad": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  "Caprese Salad": "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=900&q=80",
  "Broccoli Almond Salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=83",
  "Sprout Salad": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=82",
  "Mango Salad": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80",
  "Watermelon Salad": "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80",
  "Bean Salad": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=83",


  // Desserts
  "Chocolate Lava Cake": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  "Tiramisu": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
  "New York Cheesecake": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  "Chocolate Brownie": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
  "Vanilla Ice Cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  "Chocolate Ice Cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=81",
  "Strawberry Cheesecake": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  "Apple Pie": "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&w=900&q=80",
"Chocolate Mousse": "https://images.unsplash.com/photo-1530640866372-0ac81d94eea7?auto=format&fit=crop&w=900&q=80",
  "Creme Brulee": "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=900&q=80",
  "Panna Cotta": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  "Red Velvet Cake": "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=80",
  "Caramel Pudding": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
"Gulab Jamun": "https://commons.wikimedia.org/wiki/Special:FilePath/Gulab_Jamun.jpg?width=900",
"Rasmalai": "https://commons.wikimedia.org/wiki/Special:FilePath/Rasmalai_Dessert.jpg?width=900",
  "Chocolate Donut": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=81",
  "Blueberry Muffin": "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=80",
  "Belgian Waffles": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80",
  "Banana Split": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=82",
  "Lemon Tart": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80",
  "Fruit Custard": "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
  "Kulfi": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=83",
"Falooda": "https://commons.wikimedia.org/wiki/Special:FilePath/Falooda.jpg?width=900",
  // Drinks
  "Fresh Lime Soda": "https://commons.wikimedia.org/wiki/Special:FilePath/Fresh_Lime.JPG",
  "Mango Smoothie": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",
  "Strawberry Milkshake": "https://commons.wikimedia.org/wiki/Special:FilePath/Strawberry_Milkshake.jpg",
  "Chocolate Milkshake": "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_milkshake.jpg",
  "Cold Coffee": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  "Fresh Orange Juice": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=85",
  "Watermelon Juice": "https://commons.wikimedia.org/wiki/Special:FilePath/Watermelon_juice.jpg",
  "Pineapple Juice": "https://commons.wikimedia.org/wiki/Special:FilePath/Pineapple_juice.JPG",
  "Virgin Mojito": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=85",
  "Mint Lemonade": "https://commons.wikimedia.org/wiki/Special:FilePath/Lemonade_with_minty.jpg",
  "Fresh Coconut Water": "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut_water.jpg",
   "Cappuccino": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80",
 "Latte": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  "Espresso": "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=80",
  "Masala Chai": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80",
  "Green Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
  "Lemon Iced Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=81",
  "Peach Iced Tea": "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80",
  "Oreo Milkshake": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    "Vanilla Milkshake": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
"Hot Chocolate": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=900&q=80",

};

// Images by category
const categoryImages = {
  Gravies: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
  Biryani: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
  "Fried Rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  "Fast Foods": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  Starters: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  "Main Course": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  Salads: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  Desserts: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
  Drinks: "https://images.unsplash.com/photo-1513558161293-cdad8e7f4b39?auto=format&fit=crop&w=900&q=85",
  "Rice and Noodles": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85"
};

const foodCatalog = {
  
  "Biryani": [
    "Chicken Dum Biryani",
    "Hyderabadi Chicken Biryani",
    "Ambur Chicken Biryani",
    "Dindigul Chicken Biryani",
    "Thalappakatti Chicken Biryani",
    "Kolkata Chicken Biryani",
    "Lucknowi Chicken Biryani",
    "Malabar Chicken Biryani",
    "Chettinad Chicken Biryani",
    "Andhra Chicken Biryani",
    "Spicy Chicken Biryani",
    "Chicken 65 Biryani",
    "Chicken Tikka Biryani",
    "Boneless Chicken Biryani",
    "Chicken Keema Biryani",
    "Egg Biryani",
    "Mutton Dum Biryani",
    "Hyderabadi Mutton Biryani",
    "Ambur Mutton Biryani",
    "Dindigul Mutton Biryani",
    "Lucknowi Mutton Biryani",
    "Malabar Mutton Biryani",
    "Mutton Keema Biryani",
    "Fish Biryani",
    "Prawn Biryani",
    "Crab Biryani",
    "Vegetable Dum Biryani",
    "Paneer Biryani",
    "Mushroom Biryani",
    "Soya Chunk Biryani",
    "Baby Corn Biryani",
    "Cauliflower Biryani",
    "Jackfruit Biryani",
    "Kashmiri Biryani",
    "Sindhi Biryani",
    "Bombay Biryani",
    "Memoni Biryani",
    "Beef Biryani",
    "Gongura Chicken Biryani",
    "Gongura Mutton Biryani"
  ],

  "Fried Rice": [
    "Vegetable Fried Rice",
    "Egg Fried Rice",
    "Chicken Fried Rice"
  ],
  "Drinks": [
    "Fresh Lime Soda",
    "Mango Smoothie",
    "Strawberry Milkshake",
    "Chocolate Milkshake",
    "Cold Coffee",
    "Fresh Orange Juice",
    "Watermelon Juice",
    "Pineapple Juice",
    "Virgin Mojito",
    "Mint Lemonade",
    "Fresh Coconut Water"
  ],
  "Gravies": [
    "Butter Chicken",
    "Paneer Butter Masala",
    "Chicken Chettinad",
    "Mutton Curry"
  ],
  
  
  "Fast Foods": [
    "Classic Beef Burger",
    "Chicken Burger",
    "Veg Burger",
    "Cheese Burger",
    "Double Cheese Burger",
    "Crispy Chicken Burger",
    "Spicy Chicken Burger",
    "Paneer Burger",
    "Mushroom Burger",
    "BBQ Chicken Burger",
    "Fish Burger",
    "Aloo Tikki Burger",
    "Margherita Pizza",
    "Farmhouse Pizza",
    "Pepperoni Pizza",
    "Four Cheese Pizza",
    "BBQ Chicken Pizza",
    "Paneer Pizza",
    "Mexican Pizza",
    "Mushroom Pizza",
    "Tandoori Chicken Pizza",
    "Veg Supreme Pizza",
    "Hawaiian Pizza",
    "Peri Peri Pizza",
    "Classic Hot Dog",
    "Chicken Hot Dog",
    "Veg Sandwich",
    "Club Sandwich",
    "Grilled Cheese Sandwich",
    "Chicken Submarine",
    "Veg Wrap",
    "Chicken Shawarma",
    "Paneer Wrap",
    "Chicken Kathi Roll",
    "Veg Kathi Roll",
    "Chicken Tacos",
    "Veg Tacos",
    "Chicken Quesadilla",
    "French Fries",
    "Peri Peri Fries",
    "Loaded Cheese Fries",
    "Chicken Nuggets",
    "Chicken Popcorn",
    "Chicken Wings",
    "Garlic Bread",
    "Cheese Garlic Bread",
    "Nachos",
    "Chicken Momos",
    "Veg Momos",
    "Chilli Chicken"
  ],

  "Starters": [
    "Chicken 65",
    "Paneer Tikka",
    "Gobi Manchurian",
    "Chicken Lollipop"
  ],
  
  "Main Course": [
    "Grilled Chicken",
    "Herb Roasted Chicken",
    "Chicken Alfredo",
    "Creamy Pesto Pasta",
    "Spaghetti Bolognese",
    "Lasagna",
    "Mushroom Risotto",
    "Vegetable Risotto",
    "Grilled Salmon",
    "Fish and Chips",
    "Roast Lamb",
    "Beef Steak",
    "Vegetable Steak",
    "Chicken Steak",
    "Paneer Steak",
    "Masala Dosa",
    "Plain Dosa",
    "Ghee Roast Dosa",
    "Idli Sambar",
    "Pongal",
    "Poori Masala",
    "Chapati and Curry",
    "Butter Naan",
    "Garlic Naan",
    "Tandoori Roti",
    "Parotta and Salna",
    "Vegetable Pulao",
    "Jeera Rice",
    "Curd Rice"
  ],

  "Salads": [
    "Greek Salad",
    "Caesar Salad",
    "Garden Fresh Salad"
  ],
  "Desserts": [
    "Chocolate Brownie",
    "Chocolate Cake",
    "Vanilla Ice Cream"
  ],
  "Rice and Noodles": [
    "Veg Hakka Noodles",
    "Chicken Hakka Noodles",
    "Schezwan Noodles"
  ]
};
 
function getGravyImage(name) {
  const dish = name.toLowerCase();

  if (/fish|prawn|crab|seafood/.test(dish)) {
    return "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=85";
  }

  if (/mutton|lamb|keema/.test(dish)) {
    return "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=85";
  }

  if (/paneer|matar paneer/.test(dish)) {
    return "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85";
  }

  if (/dal|chana|rajma|aloo gobi|bhindi|baingan|vegetable|mushroom/.test(dish)) {
    return "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85";
  }

  if (/chicken|peri/.test(dish)) {
    return "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85";
  }

  return categoryImages["Gravies"];
}

function getUniqueGravyImage(name) {
  const dish = name.toLowerCase();

  let tags = "indian,chicken,curry";

  if (/fish|prawn|crab|seafood/.test(dish)) {
    tags = "seafood,curry";
  } else if (/mutton|lamb|keema/.test(dish)) {
    tags = "indian,mutton,curry";
  } else if (/paneer/.test(dish)) {
    tags = "indian,paneer,curry";
  } else if (/dal|chana|rajma|aloo gobi|bhindi|baingan|vegetable|mushroom/.test(dish)) {
    tags = "indian,vegetarian,curry";
  }

  const lock = Array.from(name).reduce(
    (hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0,
    7
  );

  return `https://loremflickr.com/900/700/${tags}?lock=${lock}`;
}

function getGravyImageForDish(name) {
  if (dishImages[name]) {
    return dishImages[name];
  }

  const baseName = name.replace(
    /^(Chef's Special|House Special|Classic|Spicy|Special|Family|Royal|Signature|Masala|Pepper)\s+/i,
    ""
  );

  if (dishImages[baseName]) {
    return dishImages[baseName];
  }

  const aliases = {
    "Kadai Chicken": "Kadai Curry",
    "Peri Chicken Gravy": "Chicken Curry"
  };

  if (dishImages[aliases[baseName] || baseName]) {
    return dishImages[aliases[baseName] || baseName];
  }

  return getGravyImage(name);
}

let nextFoodId = 1;

const initialDishes = Object.entries(foodCatalog).flatMap(
  ([category, names]) =>
    names.map((name, index) => ({
      id: nextFoodId++,
      name,
      category,
      price: category === "Drinks"
        ? 79 + (index % 7) * 20
        : category === "Desserts"
        ? 149 + (index % 8) * 25
        : category === "Starters"
        ? 129 + (index % 9) * 25
        : category === "Salads"
        ? 179 + (index % 7) * 30
        : category === "Fast Foods"
        ? 149 + (index % 10) * 30
        : category === "Biryani"
        ? 199 + (index % 10) * 40
        : category === "Fried Rice"
        ? 159 + (index % 8) * 30
        : 199 + (index % 10) * 40,
      description: `Freshly prepared ${name.toLowerCase()} using selected ingredients.`,
      image: dishImages[name]
  || (category === "Gravies" ? getGravyImage(name) : categoryImages[category]),
      rating: (4 + (index % 10) / 10).toFixed(1)
    }))
);

// Use only the original menu items.
// Do not automatically create extra dish variations.
const allDishes = [...initialDishes];

let dishes = (
  JSON.parse(localStorage.getItem("laMaisonDishes") || "null")
  || [...allDishes]
)
.filter(dish => {
  const extras = [
    "Classic", "Spicy", "Special", "Chef's Special",
    "Family", "Royal", "House Special", "Signature",
    "Masala", "Pepper"
  ];

  const gravyNames = [
    "Butter Chicken masala",
    "Chicken Tikka Masala",
    "Chicken Chettinad gravy",
    "Chicken Curry",
    "Andhra Chicken Curry",
    "Peri Chicken Gravy",
    "Kadai Chicken Gravy",
    "Chicken Kolhapuri Gravy",
    "Chicken Mughlai Gravy",
    "Chicken Do Pyaza Gravy",
    "Chicken Saagwala Gravy",
    "Chicken Handi",
    "Chicken Lababdar",
    "Chicken Korma"
  ];

  const name = dish.name.trim();

  const isExtraGravy = gravyNames.some(gravy =>
    extras.some(prefix =>
      name.toLowerCase() ===
      `${prefix} ${gravy}`.toLowerCase()
    )
  );

const isExtraPeriChickenGravy =
  /^(.+\s+)?peri[\s-]*chicken[\s-]+gravy$/i.test(name) &&
  !/^peri[\s-]*chicken[\s-]+gravy$/i.test(name);

if (isExtraPeriChickenGravy) return false;
  return !isExtraGravy;
})
.map(dish => {
  const originalName = dish.name.replace(
    /^(Classic|Spicy|Special|Chef's Special|Family|Royal|House Special|Signature|Masala|Pepper)\s+/,
    ""
  );

  return {
    ...dish,
    image:
      dish.category === "Gravies"
        ? getGravyImageForDish(dish.name)
        : (
            dishImages[dish.name]
            || dishImages[originalName]
            || categoryImages[dish.category]
            || dish.image
            || ""
          )
  };
});

localStorage.setItem("laMaisonDishes", JSON.stringify(dishes));



let cart = new Map();
let orders = [];
let bookings = [];
let nextDishId = nextFoodId;


const $ = selector => document.querySelector(selector);

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

// Show a notification
function notify(message) {
  let toast = $("#toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

// Display menu items

let menuSearchText = "";
let currentMenuFilter = "All";
let menuSelectionMade = false;


function renderMenu(filter = currentMenuFilter) {
  
  currentMenuFilter = filter;

  const foodGrid = document.getElementById("foodGrid");
  if (!foodGrid) {
    console.error("Cannot find #foodGrid in restaurant.html");
    return;
  }

  if (!menuSelectionMade) {
    foodGrid.hidden = true;
    return;
  }

  foodGrid.hidden = false;

  const searchText = menuSearchText.trim().toLowerCase();

  const list = dishes.filter(dish => {
    const matchesCategory =
      filter === "All" ||
      dish.category?.trim().toLowerCase() === filter.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      dish.name.toLowerCase().includes(searchText) ||
      dish.category?.toLowerCase().includes(searchText) ||
      dish.description?.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  foodGrid.innerHTML = list.length
    ? list.map(dish => `
        <article class="food-card">
          <img src="${dish.image || ""}" alt="${dish.name}" loading="lazy">
          <div class="food-info">
            <div class="food-title">
              <h3>${dish.name}</h3>
              <span class="price">${money(dish.price)}</span>
            </div>
            <p class="dish-rating">★ ${dish.rating || "4.5"} / 5</p>
            <p class="dish-description">${dish.description || ""}</p>
            <button class="add-btn" data-add="${dish.id}">
              + Add to order
            </button>
          </div>
        </article>
      `).join("")
    : "<p>No matching dishes found.</p>";
}


 // Hide all dishes when the page first loads


document.getElementById("foodGrid")?.setAttribute("hidden", "");


renderMenu();


const menuSearch = document.getElementById("menuSearch");


// Category buttons: show dishes only after selection
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    menuSelectionMade = true;
    menuSearchText = "";

    if (menuSearch) menuSearch.value = "";

    document.querySelectorAll("[data-filter]").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderMenu(button.dataset.filter);
  });
});

// Show matching dishes when searching
function applyMenuSearch() {
  menuSelectionMade = true;
  menuSearchText = menuSearch?.value || "";
  renderMenu();
}

menuSearchBtn?.addEventListener("click", applyMenuSearch);

menuSearch?.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyMenuSearch();
  }
});

// Clear search and hide dishes again
clearMenuSearch?.addEventListener("click", () => {
  if (menuSearch) menuSearch.value = "";

  menuSearchText = "";
  currentMenuFilter = "All";
  menuSelectionMade = false;

  document.querySelectorAll("[data-filter]").forEach(item => {
    item.classList.remove("active");
  });

  renderMenu();
});



 
function updateCart() {
  const count = countCart();
  const cartCount = document.getElementById("cartCount");
  const cartStatus = document.getElementById("cartStatus");

  console.log("Updating cart display:", count);
  console.log("Cart count element:", cartCount);
  console.log("Cart status element:", cartStatus);

  if (cartCount) {
    cartCount.textContent = count;
  }

  if (cartStatus) {
    cartStatus.textContent = count
      ? `${count} item(s) · ${money(totalCart())}`
      : "Your cart is empty.";
  }
}

function countCart() {
  let count = 0;

  for (const item of cart.values()) {
    count += item.quantity;
  }

  return count;
}


// add to cart //
function addCart(id) {
  const dish = dishes.find(item => item.id === id);

  if (!dish) {
    console.error("Dish not found:", id);
    return;
  }

  const existing = cart.get(id);

  cart.set(id, {
    ...dish,
    quantity: existing ? existing.quantity + 1 : 1
  });

  console.log("Cart contents:", [...cart.values()]);
  console.log("Cart item count:", countCart());

  updateCart();
  renderCart();
  notify(`${dish.name} added to order`);
}
// Display cart items
function renderCart() {
  $("#cartItems").innerHTML = cart.size
    ? [...cart.values()].map(item => `
        <div class="cart-line">
          <div>
            <strong>${item.name}</strong>

            <div class="qty">
              <button
                data-qty="${item.id}"
                data-step="-1"
                aria-label="Remove one"
              >−</button>

              <span>${item.quantity}</span>

              <button
                data-qty="${item.id}"
                data-step="1"
                aria-label="Add one"
              >+</button>
            </div>
          </div>

          <strong>${money(item.price * item.quantity)}</strong>
        </div>
      `).join("")
    : "<p>Your cart is empty.</p>";

  $("#cartTotal").textContent = money(totalCart());
  $("#orderMessage").textContent = "";
}

function totalCart() {
  let total = 0;

  for (const item of cart.values()) {
    total += item.price * item.quantity;
  }

  return total;
}

// Menu button events

const foodGrid = $("#foodGrid");

if (foodGrid) {
  foodGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const dishId = Number(button.dataset.add);
    addCart(dishId);
  });
}
const showCartButton = document.getElementById("showCart");
const cartDialog = document.getElementById("cartDialog");

if (showCartButton && cartDialog) {
  showCartButton.addEventListener("click", function () {
    console.log("View Order clicked");

    renderCart();

    try {
      cartDialog.showModal();
      console.log("Dialog open immediately:", cartDialog.open);
      console.log("Dialog open:", cartDialog.open);
    } catch (error) {
      console.error("Cart dialog error:", error);
    }
  });
}




// Filter menu categories

const filtersContainer = document.querySelector(".filters");

if (filtersContainer) {
  filtersContainer.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    console.log("Clicked category:", button.dataset.filter);

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === button);
    });
menuSelectionMade = true;
    renderMenu(button.dataset.filter);
  });
}



    

  

// Open shopping cart
$("#showCart").addEventListener("click", () => {
  renderCart();
  $("#cartDialog").showModal();
});


$("#closeCart")?.addEventListener("click", () => {
  $("#cartDialog")?.close();
});


// Increase or decrease cart quantity
$("#cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");

  if (!button) return;

  const id = Number(button.dataset.qty);
  const item = cart.get(id);
  const quantity = item.quantity + Number(button.dataset.step);

  if (quantity < 1) {
    cart.delete(id);
  } else {
    cart.set(id, {
      ...item,
      quantity
    });
  }

  renderCart();
  updateCart();
});


 // Place a demo order
$("#placeOrder").addEventListener("click", () => {
  if (!cart.size) {
    $("#orderMessage").textContent =
      "Please add an item to your cart first.";
    return;
  }

  const order = {
    items: [...cart.values()].map(item => ({ ...item })),
    total: totalCart()
  };

  localStorage.setItem("laMaisonPendingOrder", JSON.stringify(order));

  window.location.href = "delivery.html";
});


// Set the minimum booking date
const today = new Date();

$("#bookingDate").min = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().slice(0, 10);

// Submit a reservation request

const bookingForm = document.getElementById("bookingForm");

bookingForm?.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = Object.fromEntries(
    new FormData(bookingForm)
  );

  const savedBookings = JSON.parse(
    localStorage.getItem("laMaisonBookings") || "[]"
  );

  data.id = Date.now();
  data.status = "Pending";

  savedBookings.unshift(data);

  localStorage.setItem(
    "laMaisonBookings",
    JSON.stringify(savedBookings)
  );

  
const bookingMessage = document.getElementById("bookingMessage");

bookingMessage.innerHTML = `
  <div class="booking-success">
    <div class="booking-success-icon">✓</div>
    <h3>Reservation Request Received!</h3>
    <p>Thank you, ${data.name}!</p>
    <p>Your table reservation request has been received.</p>

    <div class="booking-confirmation-details">
      <p><strong>Reservation No:</strong> #${data.id}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Guests:</strong> ${data.guests}</p>
      <p><strong>Status:</strong> Pending confirmation</p>
    </div>

    <p class="booking-note">
      Please wait for the restaurant to confirm your reservation.
    </p>
  </div>
`;


  bookingForm.reset();
});

// Mobile navigation
$("#mobileMenu").addEventListener("click", () => {
  $("#nav").classList.toggle("open");
});

$("#nav").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("#nav").classList.remove("open");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const openAdminButton = document.getElementById("openAdmin");
  const adminPage = document.getElementById("adminPage");
  const closeAdminButton = document.getElementById("closeAdmin");
  const loginForm = document.getElementById("loginForm");
  const adminLogin = document.getElementById("adminLogin");
  const adminContent = document.getElementById("adminContent");
  const statMenu = document.getElementById("statMenu");
  const loginMessage = document.getElementById("loginMessage");
  const logoutButton = document.getElementById("logout");

  // Open Admin page
  openAdminButton?.addEventListener("click", function () {
    adminPage.classList.remove("hidden");
    if (statMenu) {
  statMenu.textContent = dishes.length;
}
    adminLogin.classList.remove("hidden");
    adminContent.classList.add("hidden");
    window.scrollTo(0, 0);
  });

  // Close Admin page
  closeAdminButton?.addEventListener("click", function () {
    adminPage.classList.add("hidden");
  });

  // Admin login
  loginForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username =
      document.getElementById("adminUsername").value.trim();
    const password =
      document.getElementById("adminPassword").value;

    if (username === "admin" && password === "admin123") {
      adminLogin.classList.add("hidden");
      adminContent.classList.remove("hidden");
      loginMessage.textContent = "";
renderAdmin();
renderAdminMenu();
    } else {
      loginMessage.textContent =
        "Incorrect username or password.";
    }
  });

  // Log out
  logoutButton?.addEventListener("click", function () {
    adminContent.classList.add("hidden");
    adminLogin.classList.remove("hidden");
    loginForm.reset();
  });
});

function renderAdmin() {
  const savedOrders = JSON.parse(
    localStorage.getItem("laMaisonOrders") || "[]"
  );

  const ordersCount = document.getElementById("statOrders");
  const salesTotal = document.getElementById("statSales");
  const ordersList = document.getElementById("adminOrders");
  const savedBookings = JSON.parse(
  localStorage.getItem("laMaisonBookings") || "[]"
);

const bookingsCount = document.getElementById("statBookings");
const bookingsList = document.getElementById("adminBookings");

if (bookingsCount) {
  bookingsCount.textContent = savedBookings.length;
}

if (bookingsList) {
  if (savedBookings.length === 0) {
    bookingsList.innerHTML = "<p>No reservations yet.</p>";
  } else {
    bookingsList.innerHTML = savedBookings.map(booking => `
      <article class="admin-order-item">
        <h3>Reservation #${booking.id}</h3>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
         
<p>
  <strong>Status:</strong>
  <select class="booking-status" data-booking-id="${booking.id}">
    <option value="Pending" ${booking.status === "Pending" ? "selected" : ""}>Pending</option>
    <option value="Confirmed" ${booking.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
    <option value="Seated" ${booking.status === "Seated" ? "selected" : ""}>Seated</option>
    <option value="Cancelled" ${booking.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
  </select>
</p>

      </article>
    `).join("");
  }
}

  if (ordersCount) {
    ordersCount.textContent = savedOrders.length;
  }

  if (salesTotal) {
    const totalSales = savedOrders.reduce(
      (sum, order) => sum + Number(order.total || 0),
      0
    );

    salesTotal.textContent =
      "₹" + totalSales.toLocaleString("en-IN");
  }

  if (ordersList) {
    if (savedOrders.length === 0) {
      ordersList.innerHTML = "<p>No customer orders yet.</p>";
    } else {
      ordersList.innerHTML = savedOrders.map(order => `
        <article class="admin-order-item">
          <h3>Order #${order.id}</h3>
          <p><strong>Customer:</strong> ${order.delivery?.name || "Not provided"}</p>
          <p><strong>Phone:</strong> ${order.delivery?.phone || "Not provided"}</p>
          <p><strong>Address:</strong> ${order.delivery?.address || "Not provided"}, ${order.delivery?.city || ""} ${order.delivery?.pincode || ""}</p>
          <p><strong>Items:</strong> ${(order.items || []).map(item =>
            `${item.name} × ${item.quantity}`
          ).join(", ")}</p>
          <p><strong>Total:</strong> ₹${Number(order.total || 0).toLocaleString("en-IN")}</p>
          
<p>
  <strong>Status:</strong>
  <select class="order-status" data-order-id="${order.id}">
    <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
    <option value="Preparing" ${order.status === "Preparing" ? "selected" : ""}>Preparing</option>
    <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
    <option value="Cancelled" ${order.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
  </select>
</p>

          <p><strong>Created:</strong> ${order.created || ""}</p>
        </article>
      `).join("");
    }
  }
}

function renderAdminMenu() {
  const adminMenuList = document.getElementById("adminMenuList");

  if (!adminMenuList) {
    console.error("Admin menu list is missing from restaurtant.html");
    return;
  }

  adminMenuList.innerHTML = dishes.map(dish => `
    <div class="admin-menu-item">
      <h3>${dish.name}</h3>
      <p>Category: ${dish.category}</p>
      <p>Price: ${money(dish.price)}</p>

      <button type="button" data-edit-dish="${dish.id}">
        Edit
      </button>

      <button type="button" data-delete-dish="${dish.id}">
        Delete
      </button>
    </div>
  `).join("");
}

document.getElementById("addMenuForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get("name").trim();
  const price = Number(formData.get("price"));
  const category = formData.get("category").trim();
  const image = formData.get("image").trim();
  const description = formData.get("description").trim();

  if (!name || !category || !description || !Number.isFinite(price) || price <= 0) {
    document.getElementById("menuFormMessage").textContent =
      "Please enter valid details for the dish.";
    return;
  }

  const newDish = {
    id: Date.now(),
    name,
    price,
    category,
    image,
    description
  };

  dishes.push(newDish);

  localStorage.setItem("laMaisonDishes", JSON.stringify(dishes));

  renderAdminMenu();
  renderMenu();

  document.getElementById("menuFormMessage").textContent =
    "Menu item added successfully!";

  form.reset();

  const statMenu = document.getElementById("statMenu");
  if (statMenu) statMenu.textContent = dishes.length;
});


document.getElementById("adminMenuList")?.addEventListener("click", function (event) {
  const editButton = event.target.closest("[data-edit-dish]");
  const deleteButton = event.target.closest("[data-delete-dish]");

  // EDIT MENU ITEM
  if (editButton) {
    const id = Number(editButton.dataset.editDish);
    const dish = dishes.find(item => Number(item.id) === id);

    if (!dish) return;

    const name = prompt("Enter dish name:", dish.name);
    if (name === null) return;

    const priceText = prompt("Enter dish price:", dish.price);
    if (priceText === null) return;

    const category = prompt("Enter category:", dish.category);
    if (category === null) return;

    const price = Number(priceText);

    if (!name.trim() || !category.trim() || !Number.isFinite(price) || price <= 0) {
      alert("Please enter a valid name, category, and positive price.");
      return;
    }

    dish.name = name.trim();
    dish.price = price;
    dish.category = category.trim();
    localStorage.setItem("laMaisonDishes", JSON.stringify(dishes));

    renderAdminMenu();
    renderMenu();
    alert("Menu item updated!");
  }

  // DELETE MENU ITEM
  if (deleteButton) {
    const id = Number(deleteButton.dataset.deleteDish);
    const dish = dishes.find(item => Number(item.id) === id);

    if (!dish) return;

    if (!confirm(`Are you sure you want to delete "${dish.name}"?`)) {
      return;
    }

    dishes = dishes.filter(item => Number(item.id) !== id);
    localStorage.setItem("laMaisonDishes", JSON.stringify(dishes));

    renderAdminMenu();
    renderMenu();

    const statMenu = document.getElementById("statMenu");
    if (statMenu) statMenu.textContent = dishes.length;

    alert("Menu item deleted!");
  }
});


document.getElementById("adminOrders")?.addEventListener("change", function (event) {
  if (!event.target.matches(".order-status")) return;

  const orderId = Number(event.target.dataset.orderId);
  const newStatus = event.target.value;

  const savedOrders = JSON.parse(
    localStorage.getItem("laMaisonOrders") || "[]"
  );

  const order = savedOrders.find(item => item.id === orderId);

  if (order) {
    order.status = newStatus;

    localStorage.setItem(
      "laMaisonOrders",
      JSON.stringify(savedOrders)
    );

    renderAdmin();
  }
});

document.addEventListener("change", function (event) {
  if (!event.target.matches(".booking-status")) return;

  const bookingId = Number(event.target.dataset.bookingId);
  const newStatus = event.target.value;

  const savedBookings = JSON.parse(
    localStorage.getItem("laMaisonBookings") || "[]"
  );

  const booking = savedBookings.find(
    item => Number(item.id) === bookingId
  );

  if (!booking) {
    console.error("Reservation not found:", bookingId);
    return;
  }

  booking.status = newStatus;

  localStorage.setItem(
    "laMaisonBookings",
    JSON.stringify(savedBookings)
  );

  console.log("Saved reservation status:", newStatus);
});


