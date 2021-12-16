import React from 'react';
import '../Css/FooterStyle.css';

const Footer = () => {
 return (
  <>
   <footer>
    <div className="container container-flex">
     <div className="icons">
      <img src="../Images/instagram-brands.svg" className="icon" />
      <img src="../Images/linkedin-in-brands.svg" className="icon" />
      <img src="../Images/facebook-f-brands.svg" className="icon" />
      <img src="../Images/twitter-brands.svg" className="icon" />
     </div>
     <div className="line">
      <hr />
      <hr />
     </div>
     <div className="copyright">
      <p>All rights reserved &copy;</p>
      <p>Made by Palak Mattoo</p>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Footer;