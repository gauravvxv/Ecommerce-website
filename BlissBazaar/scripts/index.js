const data = [
  {
    id: 1,
    name: "Men",
    price: 1990,
    email: "tleathers1@twitpic.com",
    gender: "Male",
    description: "Slim fit shirt made of a high-stretch crease-resistant fabric. Featuring a spread collar, long sleeves with buttoned cuffs and a button-up front.",
    category: "shirt",
    image: "https://static.zara.net/photos///2022/I/0/2/p/7545/403/250/2/w/850/7545403250_1_1_1.jpg?ts=1657284809513",
    discount: "STRETCH SHIRT"
  },
  {
    id: 2,
    name: "men",
    price: 1990,
    email: "tleathers1@twitpic.com",
    gender: "Male",
    description: "Slim fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    category: "shirt",
    image: "https://static.zara.net/assets/public/e65f/543f/71274d16a479/e85de5c989c9/07545416104-a1/07545416104-a1.jpg?ts=1705659332596&w=315",
    discount: "EASY CARE TEXTURED SHIRT"
  },
  {
    id: 3,
    name: "men",
    price: 2900,
    email: "ctantrum2@elpais.com",
    gender: "Male",
    description: "Slim fit shirt made of a high-stretch fabric. Spread collar and long sleeves with buttoned cuffs. Button-up front.",
    category: "shirt",
    image: "https://static.zara.net/assets/public/ffb4/72f3/8d664721b0fe/52aef91f3504/04408474800-a1/04408474800-a1.jpg?ts=1706111332663&w=315",
    discount: "STRETCH SHIRT"
  },
]

data.map(function (elem, ind) {
  let parent = document.querySelector(".child-container");
  let child = document.createElement("div");
  let image = document.createElement("img");
  let info = document.createElement("div");
  info.className = "info";
  let name = document.createElement("p");
  let price = document.createElement("p");


  image.src = elem.image;
  name.textContent = elem.discount;
  price.textContent = "Price : " + elem.price;
  info.append(name, price);

  child.append(image, info);
  parent.append(child);

})


const data2 = [
  {
    id: 201,
    name: "women",
    price: 2990,
    email: "hvennard5k@163.com",
    gender: "Male",
    description: "High-waist Bermuda shorts with front darts. Front zip fly, interior button and metal hook fastening.",
    category: "shorts",
    image: "https://static.zara.net/photos///2022/I/0/1/p/4387/328/620/2/w/750/4387328620_2_1_1.jpg?ts=1667903195297",
    discount: "BERMUDA SHORTS WITH DARTS AND SEQUINS"
  },
  {
    id: 202,
    name: "women",
    price: 1460,
    email: "tduell5l@ameblo.jp",
    gender: "Male",
    description: "High-waist Bermuda shorts with front pockets. Flared hems. Front zip fly, interior button and metal hook fastening.",
    category: "shorts",
    image: "https://static.zara.net/photos///2022/I/0/1/p/8073/279/830/3/w/750/8073279830_2_1_1.jpg?ts=1667825636056",
    discount: "GOLDEN JACQUARD FLARED BERMUDA SHORTS"
  },
  {
    "id": 168,
    "name": "men",
    "price": 499,
    "email": "tfortye4n@wix.com",
    "gender": "Male",
    "description": "T-shirt with a round neckline and short sleeves. Contrast prints on the front and back.",
    "category": "tshirt",
    "image": "https://static.zara.net/photos///2022/I/0/2/p/6917/388/250/2/w/850/6917388250_2_1_1.jpg?ts=1660291163233",
    "discount": "TEXTURED T-SHIRT"
  },
  {
    "id": 169,
    "name": "men",
    "price": 401,
    "email": "gkilgannon4o@tamu.edu",
    "gender": "Male",
    "description": "T-shirt with a round neckline and short sleeves. Featuring a contrast print on the front.",
    "category": "tshirt",
    "image": "https://static.zara.net/photos///2022/I/0/2/p/1165/300/250/2/w/850/1165300250_2_1_1.jpg?ts=1660722848553",
    "discount": "ANIMAL PRINT T-SHIRT"
  },
  {
    "id": 193,
    "name": "men",
    "price": 1599,
    "email": "cgallehawk5c@livejournal.com",
    "gender": "Male",
    "description": "Loose-fitting T-shirt made of compact cotton. Round neckline and long sleeves. Ribbed trims.",
    "category": "tshirt",
    "image": "https://static.zara.net/photos///2022/I/0/2/p/0977/320/060/2/w/850/0977320060_2_1_1.jpg?ts=1663931367884",
    "discount": "STRIPED OVERSIZE T-SHIRT"
  },
  {
    "id": 58,
    "name": "men",
    "price": 2799,
    "email": "mparmley1l@sina.com.cn",
    "gender": "Male",
    "description": "Wide fit jeans. Five pockets. Faded effect. Button-up front.",
    "category": "jeans",
    "image": "https://static.zara.net/photos///2022/I/0/2/p/8727/420/427/2/w/850/8727420427_6_1_1.jpg?ts=1661931614566",
    "discount": "WIDE-FIT JEANS"
  },
]

data2.map(function (elem, ind) {
  let parent = document.querySelector(".child-container2");
  let child = document.createElement("div");
  let image = document.createElement("img");
  let info = document.createElement("div");
  info.className = "info";
  let name = document.createElement("p");
  let price = document.createElement("p");


  image.src = elem.image;
  name.textContent = elem.discount;
  price.textContent = "Price : " + elem.price;
  info.append(name, price);

  child.append(image, info);
  parent.append(child);

})


