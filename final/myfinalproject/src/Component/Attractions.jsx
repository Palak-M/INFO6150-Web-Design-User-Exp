import React, { useState } from 'react';
import '../Css/AttractionsStyle.css';
import Card from './Card';
import Data from './Data';
import "font-awesome/css/font-awesome.min.css";

function Attractions() {
 const [loader, setSpinner] = useState(true);
 useState(() => {
  setTimeout(() => setSpinner(false), 500);
 }, []);

 if (loader) {
  return (
   <div className="loader">
    {" "}
    <i className="fa fa-spinner fa-spin spinner"></i>
   </div>
  );
 } else {

  return (
   <>

    <h2>Famous Places To Visit</h2>
    <div className="attractions">
     {Data.map((values) => {
      return (
       <Card
        title1={values.Stitle}
        imgSource={values.imgsrc}
        desc1={values.desc1}
        btnService={values.btnService}
       />
      )
     })}

    </div>
   </>
  )
 }
}

export default Attractions;