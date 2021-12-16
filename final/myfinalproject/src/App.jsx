import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Attractions from './Component/Attractions';
import ContactForm from './Component/Form';
import FAQs from './Component/FAQs';
import Error from './Component/Error';
import List from './Component/List';
import Gallery from './Component/Gallery';
import GallerySlider from './Component/GallerySlider';
import Policy from './Component/Policy';
import Footer from './Component/Footer';

const App = () => {

 return (
  <>
   <List />
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/attractions" element={<Attractions />} />
    <Route path="/gallery" element={<GallerySlider />} />
    <Route path="/form" element={<ContactForm />} />
    <Route path="/policy" element={<Policy />} />
    <Route path="/FAQs" element={<FAQs />} />
    <Route element={<Error />} />
   </Routes>

   <Footer />
  </>
 )
}


export default App;
