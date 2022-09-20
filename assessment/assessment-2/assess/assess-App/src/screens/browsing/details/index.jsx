import React, { useEffect, useState } from "react";
import { Card, ProductDetail } from "../../../components";
import { getBrowsingData } from "../../../api/browsingApi";
import "./style.css";

export default function Detail(props) {
  const { title1 ,addClickActionpart, removeClickActionpart, searching,detailing,handleproduct} = props;

  const [listOfObject, setlistOfObject] = useState([]);
  useEffect(() => {
    setlistOfObject(getBrowsingData());
  }, []);
  return (
    <div className="product-detail">
      <ProductDetail
        title={title1.item2}
        descrip={title1.item3}
        pricing={title1.price}
        parimg={title1.item1}
        addClickAction={addClickActionpart}
        removeClickAction={removeClickActionpart}
      />
      <p>Suggestions</p>
      
    </div>
  );
}