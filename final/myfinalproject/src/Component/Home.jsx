import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from '../Images/p14.jpg';
import '../Css/HomeAbout.css';
import Same from './Same';

const Home = () => {
 return (
  <>
   <Same
    title="Welcome to Travel PNW"
    text="Travel PNW is your expert for travel ideas for exploring the best parts of Pacific Northwest (Washington and Oregon). Come and explore PNW from a local perspective. You can find conical volcanoes rising from a flat plain, vineyards producing some of the best wines in the country, salmon fishing at the Columbia, hiking through various national parks, and city life of Seattle and Portland. Pacific Northwest is also famous for water-sports, mountains, beaches, waterfalls, and cultural festivals."
    imgsrc={homeimg}
   />
  </>
 )
}

export default Home;
