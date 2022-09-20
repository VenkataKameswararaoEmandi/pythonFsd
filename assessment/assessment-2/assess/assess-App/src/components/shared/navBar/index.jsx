import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import cart from "../../../assest/images/cart.svg";
import profile from "../../../assest/images/profile.svg";
export default function NavBar(props) {
  let navigate = useNavigate();

  const { onSearchChange, title = "Assessment Store", sizeOfCart = 0 } = props;

  return (
    <div className="NavBar-container">
      <p className="title" onClick={() => navigate("/browsing/")}>
        {title}
      </p>
      <input
        type="text"
        placeholder="   Search Product"
        className="search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <p
        onClick={() => navigate("/browsing/mobilescreen")}
        className="icon1"
      >
        mobile
      </p>
      <p onClick={() => navigate("/browsing/clothscreen")} className="icon1">
        Dresses
      </p>
      <div className="carpro">
        <span className="iconcont">
          <img
            src={cart}
            className="icon2"
            alt="cart"
            onClick={() => navigate("/browsing/cart")}
          />
          {sizeOfCart > 0 && (
            <p className="tooltip">{sizeOfCart}</p>
          )}
        </span>
        <img
          src={profile}
          alt=""
          className="prof1"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}