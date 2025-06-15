import React, { useState } from "react";
import "./Shop.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

function Shop({ homeData }) {
  const [add, setAdd] = useState(0);
  const [modal, setModal] = useState();

  const { id } = useParams();
  console.log(id);

  const filterData = homeData.filter((item) => {
    return item.id == id;
  });
  const [checkImg, setCheckImg] = useState(filterData[0]?.img);

  console.log(filterData[0].imgs);

  return (
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    }),
    (
      <>
        <section className="shopProdact">
          <div className="container">
            <div className="shop-title">
              <span>Home</span>
              <span>/</span>
              <span>Shop</span>
            </div>

            {
              <div className="shops">
                <div className="shop-left">
                  <div className="lover-img">
                    {filterData[0].imgs?.map((item, index) => {
                      return (
                        <span
                          onClick={() => {
                            setCheckImg(item);
                          }}
                        >
                          <img src={item} alt="" />
                        </span>
                      );
                    })}
                  </div>

                  <div className="height-img">
                    <img src={checkImg} alt="" />
                  </div>
                </div>

                <div className="shop-right">
                  <div className="right-title">
                    <h3>{filterData[0].title}</h3>
                    <div className="pirse">
                      <h4>{filterData[0].price}</h4>
                      <div className="gread">
                        <span>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaRegStar />
                        </span>
                        <p>19 Customer Review</p>
                      </div>
                    </div>
                  </div>

                  <div className="short-info">
                    <h5>Short Description:</h5>
                    <p>
                      The ceramic cylinder planters come with a wooden stand to
                      help elevate your plants off the ground. The ceramic
                      cylinder planters come with a wooden stand to help elevate
                      your plants off the ground.{" "}
                    </p>
                  </div>

                  <div className="size">
                    <h5>Size:</h5>
                    <div className="sizes">
                      {filterData[0].size?.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                  </div>

                  <div className="shopCounts">
                    <div className="shopCount">
                      <span
                        className="minus"
                        onClick={() => {
                          if (add > 0) {
                            setAdd(add - 1);
                          }
                        }}
                      >
                        -
                      </span>
                      <h3 className="countProdacts">{add}</h3>
                      <span
                        className="plas"
                        onClick={() => {
                          setAdd(add + 1);
                        }}
                      >
                        +
                      </span>
                    </div>

                    <div className="btns">
                      <button>Buy NOW</button>
                      <button>Add to cart</button>
                      <span>
                        <FaRegHeart />
                      </span>
                    </div>
                  </div>

                  <div className="shopInfos">
                    <p>SKU: 1995751877966</p>
                    <p>Categories: Potter Plants</p>
                    <p>Tags: Home, Garden, Plants</p>
                  </div>

                  <div className="shopShare">
                    <h3>Share this products:</h3>
                    <span>
                      <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />{" "}
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </div>
            }
          </div>
        </section>

        <section>
          <div className="container">
            <div className="descriptions">
              <div className="desc-title">
                <p>Product Description</p>
                <p>Reviews (19)</p>
              </div>

              <div className="longInfo">
                <p>
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam fringilla augue nec est tristique auctor.
                  Donec non est at libero vulputate rutrum. Morbi ornare lectus
                  quis justo gravida semper. Nulla tellus mi, vulputate
                  adipiscing cursus eu, suscipit id nulla.
                </p>

                <p>
                  Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                  feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                  tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                  eget sagittis vulputate, sapien libero hendrerit est, sed
                  commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tempor, lorem et placerat
                  vestibulum, metus nisi posuere nisl, in accumsan elit odio
                  quis mi. Cras neque metus, consequat et blandit et, luctus a
                  nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                  euismod eget. The ceramic cylinder planters come with a wooden
                  stand to help elevate your plants off the ground.{" "}
                </p>
              </div>

              <div className="shortInfos">
                <div className="shortInfo">
                  <h5>Living Room:</h5>
                  <p>
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>

                <div className="shortInfo">
                  <h5>Living Room:</h5>
                  <p>
                    The benefits of houseplants are endless. In addition to
                    cleaning the air of harmful toxins, they can help to improve
                    your mood, reduce stress and provide you with better sleep.
                    Fill every room of your home with houseplants and their
                    restorative qualities will improve your life.
                  </p>
                </div>

                <div className="shortInfo">
                  <h5>Living Room:</h5>
                  <p>
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
}

export default Shop;
