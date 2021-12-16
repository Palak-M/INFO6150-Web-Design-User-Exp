import React, { useState } from 'react';

const Accordion = ({ questions, answers }) => {
 const [text, setText] = useState(false);
 const display = () => {
  setText(!text);
 }
 return (
  <>
   <div className="questions">
    <h3>{questions}</h3>
    <p onClick={display}>{text ? "-" : "+"}</p>
   </div>
   <div className="answers">
    {text && <p>{answers}</p>}
   </div>
  </>
 )
}
export default Accordion;