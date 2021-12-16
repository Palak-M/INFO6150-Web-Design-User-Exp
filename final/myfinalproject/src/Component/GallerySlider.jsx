import '../App.css';
import Gallery from './Gallery.jsx';


function GallerySlider() {
 const slides = [
  { src: "../Images/pic1.jpg", alt: "Greenwater Lake, Chinook Pass WA", },
  { src: "../Images/p4.jpg", alt: "Hunter Farm, Olympia WA", },
  { src: "../Images/p30.jpg", alt: "Pratt River Trail 1035", },
  { src: "../Images/p44.jpg", alt: " Port Angeles, WA", },
  { src: "../Images/p11.jpg", alt: " Bagley Lake Mount Baker WA", },
  { src: "../Images/p29.jpg", alt: "Mount Baker-Snoqualmie National Forest WA", },
 ];

 return (
  <div className="app">
   <Gallery slides={slides} />
  </div>
 );
}

export default GallerySlider;