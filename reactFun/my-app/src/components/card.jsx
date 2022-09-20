import React from 'react';

export default function Card(props) {
    const { pic, title, price, lable} = props;

    return (
    <div className="border-1">
        <img src={pic} className="icon1" alt="" />
        <div className="border-2">
          <p className="mer">{lable}</p>
        </div>
        <p className="font1">$ {price}</p>
        <p className="font2">{title}</p>
    </div>
    );
}