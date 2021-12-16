import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import '../Css/ListStyle.css';
const List = () => {
 return (
  <>
   <a class="skip_nav" href="#main">Skip to navigation</a>

   <header>

    <div className="container container-flex">
     <div className="logoContainer">
      <img src={logo} alt="TravelPNW_Website_logo" className="logo" />
     </div>

     <nav>
      <div className="list">
       <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
       <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
       <NavLink to="/attractions" className="listItem" activeClassName="activeItem">Attractions</NavLink>
       <NavLink to="/gallery" className="listItem" activeClassName="activeItem">Gallery</NavLink>
       <NavLink to="/form" className="listItem" activeClassName="activeItem">Contact</NavLink>

       <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
       <NavLink to="/FAQs" className="listItem" activeClassName="activeItem">FAQs</NavLink>
      </div>
     </nav>
     {/* <div className="icons">
      <img src="../Images/instagram-brands.svg" className="icon" />
      <img src="../Images/linkedin-in-brands.svg" className="icon" />
      <img src="../Images/facebook-f-brands.svg" className="icon" />
      <img src="../Images/twitter-brands.svg" className="icon" />
     </div> */}
    </div>
   </header>
  </>
 )
}

export default List;