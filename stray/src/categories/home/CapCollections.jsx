import React from "react";
import { CapItems } from "../../components/AllData";
import { Plus } from "@phosphor-icons/react";
import './capCollections.css'

export const CapCollections = () => {
  return (
    <>
      <div className="container">
        <div className="section-head">
          Cap Collections. &nbsp;
          <span className="text-gray-500">Top it off with style</span>
        </div>

        <div className="cap-collections-container">
          {CapItems.map((item) => (
            <div key={item.id} className="cap-collections-item">
              <img src={item.img} />
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
