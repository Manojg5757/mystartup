import React from "react";
import grocery from "../assets/grocery.png";
import fruits from "../assets/fruits.png";
import sprite from "../assets/sprite.png";
import stationary from "../assets/stationary.png";
import rice from "../assets/rice.png";
import { GiShoppingCart } from "react-icons/gi";
import sliderDetails, { soapOffer } from "../details";
import { useSelector } from "react-redux";
import videoad from '../assets/videoad.mp4'


const Home = () => {
  const toggle = useSelector((state) => state.product);
  
  return (
    <div>

      {/* video */}
      <div className="h-[180px] sm:hidden mt-2">
        <video className="h-full w-full object-cover" src={videoad} autoPlay muted loop/>
      </div>
      

      <div className="max-w-6xl mx-auto p-3  ">
         <h1 className="text-center mb-4 text-lg font-semibold text-blue-600">{toggle ? "Best Deals for You" : "சிறந்த சலுகைகள்"}</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          {soapOffer.map((product) => {
            return (
              <div key={product.id} className="shadow-lg rounded-lg overflow-hidden sm:p-3">
                <img
                  className="h-[180px] sm:h-[200px] sm:rounded-lg"
                  src={product.image}
                  alt=""
                />
                <div className="flex flex-col gap-2  py-2">
                  <p className="font-semibold">
                    {toggle ? product.title : product.titleTamil}
                  </p>
                  {/* <p>
                    {toggle ? "Weight" : "எடை"}:{product.weight}
                    <sub>
                      {product.weightType === "gram"
                        ? toggle
                          ? "Gram"
                          : "கிராம்"
                        : ""}
                    </sub>{" "}
                  </p> */}
                  <div>
                    {product.offerPrice ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm">
                          mrp:
                          <span className=" line-through">₹{product.mrp}</span>
                        </p>
                        <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                          offer:₹{product.offerPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                        {product.weight}
                        {toggle ? "gram at just" : "கிராம் வெறும்"} ₹
                        {product.mrp}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
