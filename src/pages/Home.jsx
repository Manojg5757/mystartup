import React from "react";
import grocery from "../assets/grocery.png";
import fruits from "../assets/fruits.png";
import sprite from "../assets/sprite.png";
import stationary from "../assets/stationary.png";
import rice from "../assets/rice.png";
import { GiShoppingCart } from "react-icons/gi";
import sliderDetails, { soapOffer } from "../details";
import { useSelector } from "react-redux";

const Home = () => {
  const toggle = useSelector((state) => state.product);
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-blue-400 h-[70vh]">
      <div className="h-[100%] relative flex flex-col sm:flex-row items-center max-w-6xl mx-auto p-3">
        <div className=" sm:w-[50%] h-[50%]">
          <img className="h-full" src={grocery} alt="" />
        </div>
        <div className="flex flex-col gap-3 justify-center sm:w-[50%] h-[50%]">
          <h1 className="text-4xl font-bold text-white">
            {" "}
            {toggle ? "Best at One Place" : "விலையும் தரமும்"}
          </h1>
          <p className="indent-4 flex items-center gap-1">
            {toggle ? "Save and Shop with Us" : "வாங்க வாங்குங்க"}
            <GiShoppingCart className="" />
          </p>
        </div>
        <img
          src={fruits}
          className="h-[30%] absolute bottom-0 right-0"
          alt=""
        />
      </div>

      <div className="flex justify-center gap-4 flex-wrap max-w-6xl mx-auto my-3 p-3">
        <div className="bg-green-300 relative rounded-lg w-[350px] h-[200px]">
          <div className="flex flex-col gap-4 justify-center absolute bottom-0 top-0 my-auto left-[20%]">
            <p className="text-xl text-white font-semibold flex flex-col">
              Chill with <span>Drinks</span>
            </p>
            <button className="bg-white rounded-xl px-3 py-1 hover:shadow-lg transition-shadow ease-in-out w-fit text-[10px]">
              Shop Now
            </button>
          </div>
          <img
            className="h-[80%] absolute right-[0] top-0 bottom-0 my-auto"
            src={sprite}
            alt=""
          />
        </div>

        <div className="bg-blue-300 relative rounded-lg w-[350px] h-[200px]">
          <div className="flex flex-col gap-4 justify-center absolute bottom-0 top-0 my-auto left-[20%]">
            <p className="text-xl text-white font-semibold flex flex-col">
              Study and <span>Success</span>
            </p>
            <button className="bg-white rounded-xl px-3 py-1 hover:shadow-lg transition-shadow ease-in-out w-fit text-[10px]">
              Shop Now
            </button>
          </div>
          <img
            className="h-[80%] absolute right-[0] top-0 bottom-0 my-auto"
            src={stationary}
            alt=""
          />
        </div>

        <div className="bg-brown relative rounded-lg w-[350px] h-[200px]">
          <div className="flex flex-col gap-4 justify-center absolute bottom-0 top-0 my-auto left-[20%]">
            <p className="text-xl text-white font-semibold flex flex-col">
              Best Rice<span>Here</span>
            </p>
            <button className="bg-white rounded-xl px-3 py-1 hover:shadow-lg transition-shadow ease-in-out w-fit text-[10px]">
              Shop Now
            </button>
          </div>
          <img
            className="h-[70%] absolute right-[-5%] top-0 bottom-0 overflow-hidden my-auto"
            src={rice}
            alt=""
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-wrap gap-2 justify-between ">
        {
          soapOffer.map((product)=>{
            return(
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img className="h-[140px]" src={product.image} alt="" />
                <div className="flex flex-col gap-2  py-2">
                  <p className="font-semibold">{toggle ? product.title : product.titleTamil}</p>
                  <p>{toggle ? "Weight" : "எடை"}:{product.weight}<sub>{product.weightType === "gram" ? (toggle ? "Gram" : "கிராம்") : ""}</sub> </p>
                  <div >
                  
                  {
                    product.offerPrice ? (
                    <div className="flex gap-2 items-center">
                      <p className="text-[10px]">mrp:<span className=" line-through">₹{product.mrp}</span></p>
                      <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">offer:₹{product.offerPrice}</p>
                    </div>  
                    ) :
                    <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-1 py-2">{product.weight}{toggle ? "gram at just" : "கிராம் வெறும்"} ₹{product.mrp}</p>
                  }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;
