import React from "react";
import "./style.css";
import { Card } from "../../../components";
export default function Cart(props) {

  const { quant,addClickAction, removeClickAction, searching ,detailing,cartItems,handledecrese,handleincrese,handleproduct } = props;


  return (
    <div className="Product-Window">
      {(cartItems.length === 0 ?
        <p className="text-FS"> Your Cart is Empty----</p>
        : cartItems.map((item) => {
          return (
            <Card
              itemImages={item.item1}
              itemNames={item.item2}
              itemDesc={item.item3}
              itemquant={quant.find((it) => it.id === item.id).quantity}
              addClickAction={addClickAction}
              removeClickAction={removeClickAction}
              thatitem={item}
              detailing={detailing}
              handleproduct1={handleproduct}
              handledecrese={handledecrese}
              handleincrese={handleincrese}
            />
          );
        })
          
     
      )}
    </div>
  );
}