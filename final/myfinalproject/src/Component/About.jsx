import React from 'react';
// import { NavLink } from 'react-router-dom';
import p5 from '../Images/img1.jpg';
import Same from './Same';

const About = () => {
 return (
  <>
   <Same
    title="About Us"
    text="Travel PNW is a open source website established in November 2021. It offers information related to tourist spots and attractions in Pacific Northwest for travel lovers. We at Travel PNW love sharing information and insider tips on destinations in the state of Washington and Oregon. We enjoy being part of people's travel stories."
    imgsrc={p5}
   />
  </>
 )
}

export default About;