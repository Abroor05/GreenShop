import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Shop from "./pages/shop/Shop";
import ShoppingCards from "./pages/shoppingCards/ShoppingCards";

function App() {
  const [footerData, setFooterData] = useState([
    {
      id: 0,
      img: "/imgs/foter1.png",
      title: "Garden Care",
      info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },

    {
      id: 0,
      img: "/imgs/foter2.png",
      title: "Plant Renovation",
      info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },

    {
      id: 0,
      img: "/imgs/foter3.png",
      title: "Watering Graden",
      info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
  ]);

  const [homeData, setHomeData] = useState([
    {
      id: 0,
      img: "/imgs/card1.png",
      title: "Barberton Daisy",
      price: "$119.00",
      imgs: [
        "/imgs/card1.png",
        "https://www.australianplantsonline.com.au/media/catalog/product/g/e/gerbera-white-pot.jpg?optimize=medium&fit=bounds&height=720&width=720",
        "https://previews.123rf.com/images/mindstormphoto/mindstormphoto1709/mindstormphoto170900178/87479329-orange-gerbera-daisy-with-both-full-flower-and-bud.jpg",
      ],
      size: ["X", "XL", "XX", "L"],
    },

    {
      id: 1,
      img: "/imgs/card2.png",
      title: "Angel Wing Begonia",
      price: "$169.00",
      imgs: [
        "/imgs/card2.png",
        "https://www.michlers.com/cdn/shop/products/Begoniamaculata_AngelWing.jpg?v=1675105495",
        "https://www.dahingplants.com/cdn/shop/products/detailSSP_2412_1.jpg?v=1642095960, https://hometoheather.com/wp-content/uploads/2021/01/mini-angel-wing-3.jpg",
      ],
      size: ["X", "XL"],
    },

    {
      id: 2,
      img: "/imgs/card3.png",
      title: "African Violet",
      price: "$199.00",
      imgs: [
        "/imgs/card3.png",
        "https://africanvioletresourcecenter.com/wp-content/uploads/2020/09/unnamed-111.jpg",
        "https://yardandgarden.extension.iastate.edu/files/inline-images/saintpaulia_bicolor_entire_plant_indoors_1.jpg",
      ],
      size: ["XL", "XX", "L"],
    },

    {
      id: 3,
      img: "/imgs/card4.png",
      title: "Beach Spider Lily",
      price: "$129.00",
      imgs: [
        "/imgs/card4.png",
        "https://observation.org/media/photo/41473277.jpg",
        "https://earthone.io/_next/image?url=https%3A%2F%2Fbs.plantnet.org%2Fimage%2Fo%2F262c2c46f933bf61fe7b5948df056821d2d962fa&w=3840&q=75",
      ],
      size: ["X", "XX", "L"],
    },

    {
      id: 4,
      img: "/imgs/card5.png",
      title: "Blushing Bromeliad",
      price: "$139.00",
      imgs: [
        "/imgs/card5.png",
        "https://i.redd.it/hytewz1bjijd1.jpeg",
        "https://plantquility.com/cdn/shop/files/Blushing_Bromeliad_hero_33425b3d-2893-4c53-8982-0573cb523a26_3024x.jpg?v=1632892533",
      ],
      size: ["X", "XL", "XX", "L"],
    },

    {
      id: 5,
      img: "/imgs/card6.png",
      title: "Aluminum Plant",
      price: "$179.00",
      imgs: [
        "/imgs/card6.png",
        "https://www.thejunglecollective.com.au/wp-content/uploads/2018/04/Aluminium-Plant-deburenvan21-s.jpg.webp",
        "https://theplantboys.au/cdn/shop/products/IMG_6868-956350.jpg?v=1724381716&width=1445",
      ],
      size: ["X", "XL", "XX", "L"],
    },

    {
      id: 6,
      img: "/imgs/card7.png",
      title: "Bird's Nest Fern",
      price: "$99.00",
      imgs: [
        "/imgs/card7.png",
        "https://www.realsimple.com/thmb/6zbmJjSogk_f7fEWbAE0FZUQGmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/birds-nest-fern-GettyImages-892042450-0367a42f96744aa7baf0a1486f8975e9.jpg",
        "https://www.whiteflowerfarm.com/mas_assets/cache/image/8/e/7/e/36478.Jpg",
      ],
      size: ["X", "XL"],
    },

    {
      id: 7,
      img: "/imgs/card8.png",
      title: "Broadleaf Lady Palm",
      price: "$59.00",
      imgs: [
        "/imgs/card8.png",
        "https://dh1muyqdu88ie.cloudfront.net/wp-content/uploads/2017/02/22122638/broadleaf-lady-palm-tree.jpg",
        "https://dukaan.b-cdn.net/1000x1000/webp/730950/570a0a01-8039-4174-b518-9bf54edfe5fb/plants-raphis-palm-lady-palm-plant-in-5-inch-13-cm-grower-round-plastic-black-pot-600x600-15f9c9be-962c-4397-b9db-b923c47a8f5c.jpg",
        "https://treeworldwholesale.com/wp-content/uploads/2020/03/100Gal-Rhapis-excelsaIMG_1620-2.jpg",
      ],
      size: ["X", "XL", "L"],
    },

    {
      id: 8,
      img: "/imgs/card9.png",
      title: "Chinese Evergreen",
      price: "$39.00",
      imgs: [
        "imgs/card9.png",
        "https://asset.bloomnation.com/c_fill,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,h_2000,q_auto,w_2000/v1732043556/vendor/5436/catalog/product/2/0/20210824100542_file_61256d3608218_61256d88b5299..jpg",
        "https://m.media-amazon.com/images/I/81rfTyCDPRL.jpg",
      ],
      size: ["X", "XL", "XX", "L"],
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar homeData={homeData} setShowModal={setShowModal} showModal={showModal} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                homeData={homeData}
                element={<Home />}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route path="/shop/:id" element={<Shop homeData={homeData} />} />
          <Route
            path="/shoppingcard"
            element={<ShoppingCards homeData={homeData} />}
          />{" "}
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer footerData={footerData} />
      </BrowserRouter>
    </>
  );
}

export default App;
