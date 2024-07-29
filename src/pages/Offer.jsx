import React, { useEffect, useState } from "react";
import { soapOffer } from "../details";
import offerslide from "../assets/offerslide.png";
import drop from "../assets/drop.png"

const Offer = () => {
 
  return (
    <div className="h-[100vh] mt-[150px]">
      <img className="mt-7" src={drop} alt="" />
    <h1 className="text-3xl text-center font-bold">The Drop Is Coming Soon</h1>
     
    </div>
  );
};

export default Offer;
