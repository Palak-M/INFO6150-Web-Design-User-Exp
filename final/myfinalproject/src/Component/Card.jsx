import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
 return (
  <>
   <div className="card">
    <h2>{props.title1}</h2>
    <img src={props.imgSource} alt="service1" className="attractImg" />
    <p>{props.desc1}</p>
   </div>
  </>
 )
}

export default Card;