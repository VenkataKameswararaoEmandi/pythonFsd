import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import autodefault from '../../../assest/images/samsungs22u.webp'
import { getBrowsingData } from '../../../api/browsingApi'
export default function Card(props) {
  const [val, setval] = useState(0);
  let navigate = useNavigate()
  const {
    itemImages = autodefault,
    itemNames = 'Nothing',
    itemDesc = '',
    itemquant = '-11',
    addClickAction,
    removeClickAction,
    handleproduct1,
    thatitem,
    detailing,
    handledecrese,
    handleincrese,
  } = props

  return (
    <div className="shop-item-container">
      <img src={itemImages} alt="" className="item-img" />
      <p
        className="item-name"
        onClick={() => {
          navigate('/browsing/detail')
          detailing(thatitem)
        }}
      >
        {itemNames}
      </p>
      <p className="item-description">{itemDesc}</p>
      {val < 1 ? (
        <span
          className="item-in-cart1"
          onClick={() => {
            setval(val + 1)
            addClickAction()
          }}
        ><p className="item-margin">
          Add
          </p></span>
      ) : (
        <span className="item-in-cart">
          <p
            className="item-remove-button"
            onClick={() => {
              if (itemquant > 0) {
                removeClickAction()
                handledecrese(thatitem)
              }
            }}
          >
            -
          </p>
          <p className="item-quantity">{itemquant}</p>
          <p
            className="item-add-button"
            onClick={() => {
              addClickAction()
              handleproduct1(thatitem)
              handleincrese(thatitem)
            }}
          >
            +
          </p>
        </span>
      )}
    </div>
  )
}
