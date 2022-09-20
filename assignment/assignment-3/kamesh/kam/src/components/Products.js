import React from "react";
import ProductDetails from "./ProductDetails";
function Products() {
  const data = [
    {
      id: 1,
      pic: "https://www.byrdie.com/thmb/YpFQmV8fiAdobRGJcw4vcvvlrMU=/900x600/filters:fill(auto,1)/BYRDIE-primary-best-conditioners-4584116-final-256b2726f4cc404d89a77d131df15a9a.jpg",
      title: "Dove Conditioner",
      text: "use this conditioner and see the cahanges and fall in love with these product",
      price: "$30",
    },
    {
      id: 2,
      pic: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1630064788_himalaya-damage-repair-protein-conditioner-200-ml-12-10_2_display_1594804533_23aa40ea.png",
      title: "Himalaya Conditioner",
      text: "use this conditioner and see the cahanges and fall in love with these product",
      price: "$33",
    },
    {
      id: 3,
      pic: "https://m.media-amazon.com/images/I/61LmABL6JKL._SL1500_.jpg",
      title: "Nivea Fasewash",
      text: "use this fasewash and see the cahanges and fall in love with these product",
      price: "$27",
    },
    {
      id: 4,
      pic: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_H_8901030773563_1000x1000.jpg?v=1652078098",
      title: "Simple Fasewash",
      text: "use this fasewash and see the cahanges and fall in love with these product",
      price: "$30",
    },
    {
      id: 5,
      pic: "https://cdn.shopify.com/s/files/1/1188/2592/products/1_57ce5504-f85f-48d5-9738-a1bd46d58ed6.jpg?v=1646892415",
      title: "Charcoal Fasewash",
      text: "use this fasewash and see the cahanges and fall in love with these product",
      price: "$30",
    },
    {
      id: 6,
      pic: "https://5.imimg.com/data5/EY/GB/MY-6821770/nivea-men-body-spray-500x500.jpg",
      title: "Nivea Men",
      text: "ue this conditioner and see the cahanges and fall in love with these product",
      price: "$38",
    },
    {
      id: 7,
      pic: "https://www.jiomart.com/images/product/original/491179966/wild-stone-steel-perfume-body-spray-for-men-120-ml-product-images-o491179966-p491179966-0-202203240831.jpg",
      title: "Wild Stone",
      text: "ue this conditioner and see the cahanges and fall in love with these product",
      price: "$33",
    },
    {
      id: 8,
      pic: "https://www.pinkvilla.com/imageresize/unknown_56.jpeg?width=752&format=webp&t=pvorg",
      title: "Beauty Set",
      text: "ue this conditioner and see the cahanges and fall in love with these product",
      price: "$30",
    },
  ];
  return (
    <div>
      <div className="container py-4">
        <div className="row ">
          <div className="col-lg-12 text-center">
            <h3 style={{ color: "blue" }}> Products</h3>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="col-lg-12 justify-content-around d-flex "
          style={{ flexWrap: "wrap", gap: 20 }}
        >
          {/* <div className="col-md-6 "> */}
          {data.map(function (item, index) {
            return (
              <ProductDetails
                key={index}
                pic={item.pic}
                title={item.title}
                // text={item.text}
                price={item.price}
              />
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Products;
