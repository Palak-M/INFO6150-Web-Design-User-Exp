import React, { useState } from 'react';
import '../Css/FAQsStyle.css';
import AccordData from './AccordData';
import Accordion from './Accordion';


const FAQs = () => {

 const [data, setData] = useState(AccordData);

 return (
  <>
   <h1>FAQs</h1>
   <div className="FAQs">
    <div className="accordBlock">
     {AccordData.map((val) => {

      return (
       <>
        <Accordion {...val} />
       </>
      )
     })}

    </div>

   </div>
  </>
 )
}

export default FAQs;